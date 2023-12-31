import React,{
    useEffect,
    useState
} from "react";
import {
    Row,
    Col,
    Card,
    Button
} from 'antd';
import FormIndex from './Form';
import ListsIndex from "./Lists";
import DetailsIndex from "./Details";
import './index.css';

const data = [
    {
        key: '1',
        firstName: 'John',
        lastName:'Brown',
        email:'john@gmail.com',
        tags: ['nice', 'developer'],
    },
    {
        key: '2',
        firstName: 'Jim',
        lastName:'Green',
        email:'green@gmail.com',
        tags: ['loser'],
    },
    {
        key: '3',
        firstName: 'Joe',
        lastName:'Black',
        email:'black@gmail.com',
        tags: ['cool', 'teacher'],
    },
];

const MainIndex=()=>{
    const [isAddNew,setIsAddNew]=useState(true);
    const [isLists,setIsLists]=useState(false);
    const [isDetails,setIsDetails]=useState(false);
    const [detailsData,setDetailsData]=useState({});

    let Component='';

    if(isAddNew && !isLists && !isDetails){
        Component=<FormIndex/>
    }else if(!isAddNew && isLists && !isDetails){
        Component=<ListsIndex 
        data={data} 
        setDetailsData={setDetailsData} 
        setIsAddNew={setIsAddNew}
        setIsLists={setIsLists}
        setIsDetails={setIsDetails}
        />;
    }else if(!isAddNew && !isLists && isDetails){
        Component=<DetailsIndex 
        data={detailsData}
        />;
    }
    return(
        <>
            <Row>
                <Col span={24}>
                    <Card
                    className='top-card'
                    >
                        <Row>
                            <Col 
                            span={24}
                            style={{
                                display:'flex',
                                alignItems:'center',
                                justifyContent:'center',
                            }}
                            >
                                <Button
                                className='add-new'
                                onClick={()=>{
                                    setIsAddNew(true);
                                    setIsLists(false);
                                    setIsDetails(false)
                                }}
                                >
                                    Add New
                                </Button>
                                <Button
                                className='data-lists'
                                onClick={()=>{
                                    setIsAddNew(false);
                                    setIsLists(true);
                                    setIsDetails(false)
                                }}
                                >
                                    Lists
                                </Button>
                            </Col>
                        </Row>
                    </Card>
                </Col>
            </Row>
            <Row>
                <Col 
                span={24}
                style={{
                    display:'flex',
                    alignItems:'center',
                    justifyContent:'center',
                    padding:'40px 100px'
                }}
                >         
                    <Card style={{width:'100%'}}>
                        <Row>
                            <Col span={3}>
                            </Col>
                            <Col span={18}>
                               {Component}
                            </Col>
                            <Col span={3}>
                            </Col>
                        </Row>
                    </Card>
                </Col>
            </Row>
        </>
    )
}
export default MainIndex;