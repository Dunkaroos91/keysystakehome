import { parse } from 'csv/sync';
import { readFileSync } from 'fs';
import express from 'express';

// Using express for our webservice 
// It offers simple routing
// Single threaded
const app = express();


// Set Port
const port = 5000;

// Read the CSV file
const input = readFileSync('server/data.csv');


// Turn data into an array of objects
// Use columns as key and only return only categories needed to display
const records = parse(input, {
    columns: true,
}).map(record => {
    return {
        InvoiceTypeCode: record['ns3:InvoiceTypeCode'],
        InvoiceTypeDescription: record['ns3:InvoiceTypeDescription'],
        CategoryId: record['ns3:CategoryID'],
        CategoryDescription: record['ns3:CategoryDescription'],
        SubCategoryId: record['ns3:SubCategoryID'],
        SubCategoryDescription: record['ns3:SubCategoryDescription'],
    }
});


// When data is requested, filter by ID and TYPE
// If only ID exists, return data that matches ID
// If on TYPE exists, return data that matches TYPE
// If ID or TYPE both do not exist, return all data
app.get('/api/invoices', (req, res) => {
    const categoryId = req.query.id
    const typeCode = req.query.type
    const returnedRecords = records.filter((record) => {
        // if we werent supplied with a typecode or ID default to true
        const typeCodeMatches = typeCode === undefined ? true : record.InvoiceTypeCode === typeCode
        const idMatches = categoryId === undefined ? true : record.CategoryId === categoryId
        return typeCodeMatches && idMatches;
    })
    res.send(returnedRecords);
});


// Listening on port
app.listen(port, () => {
    console.log(`app listening on port ${port}`)
});
