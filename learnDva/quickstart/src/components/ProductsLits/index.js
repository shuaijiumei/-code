/**
 * Author: TBY on 2021-07-06
 * note 笔记
 * tips 特别注意
 * example 例子
 */

import React from 'react'
import PropTypes from 'prop-types'
import {Table,Popconfirm,Button} from 'antd'

const ProductList = ({onDelete,products}) =>{
  const columns = [{
    title:'Name',
    dataIndex:'name'
  },{
    title: 'Actions',
    render:(text,record) =>{
      return(
        <Popconfirm title={'Delete?'} onConfirm={()=> onDelete(record.id)}>
          <Button>Delete</Button>
        </Popconfirm>
      )
    }
  }]
  return (
    <Table
      dataSource={products}
      columns={columns}
    />
  )
}

ProductList.propTypes = {
  onDelete:PropTypes.func.isRequired,
  products:PropTypes.array.isRequired
}

export default ProductList


