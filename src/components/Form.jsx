import React from 'react'
import { Input, Space, Button } from 'antd'
import { UserOutlined } from '@ant-design/icons';


const Form = ({ value, onChange, onClick }) => {
    return (
        <>
            <Input size="large" placeholder="large size" prefix={<UserOutlined />}  
                value={value}
                onChange={onChange}

            />
            <div className='button-holder'>
                <Button 
                    type="primary"
                    onClick={onClick}
                >
                    Reset
                </Button>
            </div>
        </>
    )
}

export default Form