import React from 'react';
import {
    Row,
    Col,
    Card,
    Button
} from 'antd';
import './index.css';

const MainIndex=()=>{
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
                                >
                                    Add New
                                </Button>
                                <Button
                                className='data-lists'
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
                    <Card>
                        fgfhgffhh
                    </Card>
                </Col>
            </Row>
        </>
    )
}
export default MainIndex;