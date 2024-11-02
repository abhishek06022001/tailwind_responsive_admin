import React from 'react';
import { IoBagHandle } from 'react-icons/io5';

function DashboardStatsGrid() {
    return (
        <div className='grid lg:grid-cols-4 md:grid-cols-2  gap-4 sm:grid-cols-1'>
            <div
                className='bg-white shadow-lg h-24 rounded-sm  p-3 w-full col-span-1 flex items-center  gap-3'
            >
                <IoBagHandle size={50} color='red' />
                <div>
                    <h1 className='text-sm font-thin mb-2' >Total Sales</h1>
                    <p>
                        <span className='font-semibold'>$54323</span>
                        <span className='relative bottom-2 text-green-700' >+343</span>
                    </p>
                </div>
            </div>
            <div
                className='bg-white h-24  shadow-lg rounded-sm  p-3 w-full col-span-1 flex items-center  gap-3'
            >
                <IoBagHandle size={50} color='green' />
                <div>
                    <h1 className='text-sm font-thin mb-2' >Total Expense</h1>
                    <p>
                        <span className='font-semibold'>$24323</span>
                        <span className='relative bottom-2 text-green-700' >+843</span>
                    </p>
                </div>
            </div>
            <div
                className='bg-white h-24  shadow-lg rounded-sm  p-3 w-full col-span-1 flex items-center  gap-3'
            >
                <IoBagHandle size={50} color='yellow' />
                <div>
                    <h1 className='text-sm font-thin mb-2' >Total Customers</h1>
                    <p>
                        <span className='font-semibold'>12323</span>
                        <span className='relative bottom-2 text-green-700' >+990</span>
                    </p>
                </div>
            </div>
            <div
                className='bg-white h-24  shadow-lg rounded-sm  p-3 w-full col-span-1 flex items-center  gap-3'
            >
                <IoBagHandle size={50} color='blue' />
                <div>
                    <h1 className='text-sm font-thin mb-2' >Total Orders</h1>
                    <p>
                        <span className='font-semibold'>16432</span>
                        <span className='relative bottom-2 text-green-700' >+189</span>
                    </p>
                </div>
            </div>
        

        </div>

    );
}

export default DashboardStatsGrid;
