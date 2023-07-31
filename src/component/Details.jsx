import React from 'react';
import { 
    Row,
    Col,
    Divider 
} from 'antd';

const DetailsIndex=({data})=>{
    const {firstName,lastName,email}=data;
    return(
        <>
            <p>
                {firstName?firstName:''}{' '}{lastName?lastName:''}
            </p>
            <Divider/>
            <p>
                {email?email:''}
            </p>
        </>
    )
}
export default DetailsIndex;