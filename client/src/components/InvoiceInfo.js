import React from 'react';

const InvoiceInfo = ({ invoiceTypeCode, invoiceTypeDescription, categoryId, categoryDescription, subCategoryId, subCategoryDescription }) =>
(
    <div className="min-w-[400px] max-w-[400px] m-2 py-8 px-8 max-w-sm bg-white rounded-xl shadow-lg space-y-2 sm:py-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-6">
        <div className="text-center space-y-2 sm:text-left">
            <div className="space-y-0.5">
                <p className="text-base text-black font-semibold">
                    Invoice Type {invoiceTypeCode}:
                </p>
                <p className="text-slate-500 font-medium">
                    {invoiceTypeDescription}
                </p>
                <p className='text-black'>
                    Line Item Code:
                </p>
                <p className="text-slate-500 font-medium">
                    {categoryId}.{subCategoryId}
                </p>
                <p className="text-black font-sm">
                    Line Item Description:
                </p>
                <p className="text-slate-500 font-sm">
                    {categoryDescription}-{subCategoryDescription}
                </p>
            </div>
        </div>
    </div>
);

export default InvoiceInfo;
