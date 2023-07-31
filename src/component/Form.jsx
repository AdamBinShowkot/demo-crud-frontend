import React,{
    useEffect,
    useState
} from "react";
import {
    Row,
    Col,
    Form,
    Input,
    Button
} from 'antd';


const FormIndex=()=>{
    return(
        <>
            <Form>
                <Row>
                    <Col span={12}>
                        <Form.Item
                        colon={false}
                        tooltip={{
                            placement:"bottom",
                            title:"First Name"
                        }}
                        rules={[
                            {
                                required:true,
                                message:"First Name Is Required"
                            }
                        ]}
                        name="firstName"
                        label="First Name"
                        wrapperCol={{
                          span:16  
                        }}
                        labelCol={{
                            span:8
                        }}
                        >
                            <Input/>
                        </Form.Item>
                    </Col>
                    <Col span={12}>
                        <Form.Item
                        colon={false}
                        tooltip={{
                            placement:"bottom",
                            title:"Last Name"
                        }}
                        rules={[
                            {
                                required:true,
                                message:"Last Name Is Required"
                            }
                        ]}
                        name="lastName"
                        label="Last Name"
                        wrapperCol={{
                          span:16  
                        }}
                        labelCol={{
                            span:8
                        }}
                        >
                            <Input/>
                        </Form.Item>
                    </Col>
                </Row>
                <Row>
                    <Col span={12}>
                        <Form.Item
                        colon={false}
                        tooltip={{
                            placement:"bottom",
                            title:"Email"
                        }}
                        rules={[
                            {
                                required:true,
                                message:"Email Is Required"
                            }
                        ]}
                        name="email"
                        label="Email"
                        wrapperCol={{
                          span:16  
                        }}
                        labelCol={{
                            span:8
                        }}
                        >
                            <Input/>
                        </Form.Item>
                    </Col>
                    <Col span={12}>
                        <Form.Item
                        colon={false}
                        tooltip={{
                            placement:"bottom",
                            title:"Password"
                        }}
                        rules={[
                            {
                                required:true,
                                message:"Password Is Required"
                            }
                        ]}
                        name="password"
                        label="Password"
                        wrapperCol={{
                          span:16  
                        }}
                        labelCol={{
                            span:8
                        }}
                        >
                            <Input.Password/>
                        </Form.Item>
                    </Col>
                </Row>
                <Row>
                    <Col span={12}>
                        <Form.Item
                        colon={false}
                        tooltip={{
                            placement:"bottom",
                            title:"Confirm Password"
                        }}
                        rules={[
                            {
                                required:true,
                                message:"COnfirm Password Is Required"
                            }
                        ]}
                        name="confirmPassword"
                        label="Confirm Password"
                        wrapperCol={{
                          span:16  
                        }}
                        labelCol={{
                            span:8
                        }}
                        >
                            <Input.Password/>
                        </Form.Item>
                    </Col>
                    <Col 
                    span={12}
                    style={{
                        textAlign:'right'
                    }}
                    >
                        <Button
                        htmlType="submit"
                        type="primary"
                        >
                            Submit
                        </Button>
                    </Col>
                </Row>
            </Form>
        </>
    )
}
export default FormIndex;
