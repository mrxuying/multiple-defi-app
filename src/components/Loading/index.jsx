import React from 'react'
import { Spin } from 'antd'

export default function Loading() {

  return (
    <Spin tip="Loading" size="large">
      <div style={{
        height: '100%',
        width: '100%',
        background: 'rgba(0, 0, 0, 0.05)',
        borderRadius: 4,
      }} />
    </Spin>
  )
}
