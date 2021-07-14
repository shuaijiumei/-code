/**
 * Author: TBY on 2021-07-08
 * note 笔记
 * tips 特别注意
 * example 例子
 */
import React from "react";
import AppStyle from "../../App.module.css";
import {Button, Checkbox, Form, Input} from "antd";

const App = () => {


  const onFinish = (values)=>{
    console.log('Success',values)
  }

  const onFinishFailed = (errorInfo)=>{
    console.log('Failed:',errorInfo)
  }
  const {Item} = Form


  return (
      <div className={AppStyle.page}>
        <Form
            name={'basic'}
            labelCol={{span: 8}}
            wrapperCol={{span:16}}
            initialValues={{remember:true}}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
        >
          <Item
              label={'UserName'}
              name={'username'}
              rules={[
                {
                  required:true,
                  message:'Please enter your name'
                }
              ]}
          >
            <Input/>
          </Item>


          <Item
              label={'PassWord'}
              name={'password'}
              rules={[
                {
                  required:true,
                  message:'Please enter your password'
                }
              ]}
          >
            <Input.Password/>
          </Item>


          <Item
              name={'remember'}
              valuePropName={'checked'}
              wrapperCol={{
                offset:8,
                span:16
              }}
          >
            <Checkbox>Remember me</Checkbox>
          </Item>


          <Item
              wrapperCol={{
                offset:8,
                span:16
              }}
          >
            <Button
                type={'primary'}
                htmlType={'submit'}
            >
              Submit
            </Button>
          </Item>


        </Form>
      </div>
  )
}
export default App

