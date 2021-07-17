/**
 * Author: TBY on 2021-07-09
 * note 笔记
 * tips 特别注意
 * example 例子
 */
import React, {useEffect, useState} from "react";
import {Modal} from "antd";
import Info from "./component/Info/Info";

const Profile = () => {
  const [isModalVisible,setIsModalVisible] = useState(true)
  const [id,setId] = useState(true)

  useEffect(() => {
    return () => {

    }
  }, [])

  const handleOk = () => {
    setIsModalVisible(false);
    setId(true)
  };

  const handleCancel = () => {
    setIsModalVisible(false);
    setId(false)
  };

  return (
      <div>
        <Modal title="确认身份" visible={isModalVisible}
               cancelText={'何欣'}
               okText={'谭博尹'}
               onOk={handleOk} onCancel={handleCancel}>
          <p>谭博尹</p>
          <p>何欣</p>
        </Modal>
        <Info flag={id}/>
      </div>
  )
}
export default Profile

