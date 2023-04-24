import { Table } from 'antd';
import React, { useRef, useState } from 'react';
interface IQuery {
    data: object
}
const TableList = (props: IQuery) => {
    const { data } = props;
    const getColumn = () => [
        {
            title: "用户名",
            dataIndex: 'username',
            align: 'center'
        }, {
            title: "任务创建时间",
            dataIndex: 'create_time',
            align: 'center'
        }, {
            title: "产品线",
            dataIndex: 'product_id',
            align: 'center'
        }, {
            title: "行业",
            dataIndex: 'industry',
            align: 'center'
        },
    ]
    const dataSoru =()=>{
        let res = []
        for(let i = 0; i<100;i++){
           res.push(
            {
                username: "张三"+i,
                create_time: "创建时间"+i,
                product_id: "2",
                industry: "行业"
            }
        )
        }
        return res
    }
       
        
    return (
        <div className="basicInfo list-table">
            <Table
                columns={getColumn() as any}
                dataSource={dataSoru()}
            />

        </div>
    )
}
export default TableList