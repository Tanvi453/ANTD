import React from 'react';
import { Table } from 'antd';

export function TableData({ recordsData, deletedata, editdata }) {

    const columns = [
        {
            title: 'Full Name:',
            dataIndex: 'fname',
            key: 'fname',
        },

        {
            title: 'Age:',
            dataIndex: 'age',
            key: 'age',
        },

        {
            title: 'Address:',
            dataIndex: 'address',
            key: 'address',
        },

        {
            title: 'Delete:',
            dataIndex: 'delete',
            key: 'delete',
            render: (_, item, index) => {
                return (
                    <>
                        <button type='delete' onClick={() => deletedata(index)} className='bg-transparent rounded-md border-[#c7aca7] text-[#27420f] font-bold'>Delete</button>
                    </>
                )
            }
        },

        {
            title: 'Edit:',
            dataIndex: 'edit',
            key: 'edit',
            render: (_, item, index) => {
                return (
                    <>
                        <button type='edit' onClick={() => editdata(index)} className='bg-transparent rounded-md border-[#c7aca7] text-[#27420f] font-bold'>Edit</button>
                    </>
                )
            }
        }

    ];


    return (

        <>
            <div className='mt-[5%]'>
                <Table columns={columns} dataSource={recordsData} />
            </div>
        </>
    )
}

export default TableData;



