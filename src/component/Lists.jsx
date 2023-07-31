import React from 'react';
import { 
    Space, 
    Table, 
    Tag 
} from 'antd';



const ListsIndex = ({data,setDetailsData,setIsAddNew,setIsLists,setIsDetails}) =>{
    const columns = [
        {
            title: "Serial",
            key: "sl",
            render: (text, record) => data.indexOf(record) + 1,
        },
        {
            title: 'First Name',
            dataIndex: 'firstName',
            key: 'firstName',
            render: (text) => <a>{text}</a>,
        },
        {
            title: 'Last Name',
            dataIndex: 'lastName',
            key: 'lastName',
        },
        {
            title: 'Email',
            dataIndex: 'email',
            key: 'email',
        },
        {
            title: 'Action',
            key: 'action',
            render: (_, record) => (
            <Space size="middle">
                <a>Edit</a>
                <a onClick={()=>{
                    setDetailsData(record);
                    setIsAddNew(false);
                    setIsLists(false);
                    setIsDetails(true);
                }}>Details</a>
                <a>Delete</a>
            </Space>
            ),
        },
    ];

    return(
        <>
            <Table columns={columns} dataSource={data} />
        </>
    )
};
export default ListsIndex;