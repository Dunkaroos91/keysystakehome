import React, { useCallback, useEffect, useState } from 'react';
import InvoiceInfo from './components/InvoiceInfo';
import './index.css';
import Nav from './components/Nav';



function App() {

  const [invoices, setInvoices] = useState([]);
  const [categoryId, setCategoryId] = useState('');
  const [typeCode, setTypeCode] = useState('');

  const onFilter = useCallback((e) => {
    e?.preventDefault();
    const url = new URL('/api/invoices', document.location.origin)
    if (categoryId) {
      url.searchParams.append('id', categoryId)
    }
    if (typeCode) {
      url.searchParams.append('type', typeCode)
    }

    fetch(url.toString())
      .then(res => res.json())
      .then(data => {
        setInvoices(data);
      });
  }, [typeCode, categoryId]);

  useEffect(() => {
    onFilter();
  }, []);


  return (
    <div className='md:mx-auto font-poppins'>
      <Nav />
      <form onSubmit={onFilter} className='md:max-w-2xl md:mx-auto px-10 grid gap-6 py-10 mb-2 md:grid-cols-3'>
        <input
          className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
          required
          onChange={e => setTypeCode(e.target.value)}
          placeholder="Invoice Type Code"
          type='text' />
        <input
          className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
          required
          placeholder="Category Id"
          onChange={e => setCategoryId(e.target.value)}
          type='text' />
        <button onClick={onFilter} className='bg-slate-800 hover:bg-slate-600 text-white font-bold py-1 px-2 rounded'>Filter</button>
      </form>
      <div className='flex flex-wrap justify-center'>
        {invoices.map((invoice, i) => {
          return (
            <InvoiceInfo
              key={i}
              invoiceTypeCode={invoice.InvoiceTypeCode}
              invoiceTypeDescription={invoice.InvoiceTypeDescription}
              categoryId={invoice.CategoryId}
              categoryDescription={invoice.CategoryDescription}
              subCategoryId={invoice.SubCategoryId}
              subCategoryDescription={invoice.SubCategoryDescription}
            />
          )
        })};
      </div>
    </div>
  );
};

export default App;
