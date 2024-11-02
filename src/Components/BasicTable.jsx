import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const info = [
    {
        name: "ABHISHEK",
        role: 1,
        key: crypto.randomUUID()
    },
    {
        name: "ROHIT",
        role: 0,
        key: crypto.randomUUID()
    },
    {
        name: "SUMANTH",
        role: 1,
        key: crypto.randomUUID()
    },
    {
        name: "ROHIT",
        role: 0,
        key: crypto.randomUUID()
    },
    {
        name: "SUMANTH",
        role: 1,
        key: crypto.randomUUID()
    },
    {
        name: "ROHIT",
        role: 0,
        key: crypto.randomUUID()
    },
    {
        name: "SUMANTH",
        role: 1,
        key: crypto.randomUUID()
    },
]

export default function BasicTable() {
    return (
        <div className='w-full p-1  h-60 max-w-full overflow-auto'>
            <div className="header grid   grid-cols-4  bg-gray-100">
                <div className="p-2 border  border-black">Sr.no</div>
                <div className="p-2 border  border-black">Name</div>
                <div className="p-2 border  border-black">Roles</div>
                <div className="p-2 border  border-black">Action</div>
            </div>
            <div>
                {info.map((member, index) => {
                    return <div className="header grid  grid-cols-4   bg-gray-100">
                        <div className="p-2 border border-black">{index}</div>
                        <div className="p-2 border border-black">{member.name}</div>
                        <div className="p-2 border border-black">{(member.role == 1) ? "Admin":"User"}</div>
                        <div className="p-2 border border-black">
                            <button className='text-blue-900' >Edit</button>
                        </div>

                    </div>
                })}
            </div>
        </div>

    );
}
