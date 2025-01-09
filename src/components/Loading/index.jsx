import React from 'react'
import { Spin } from 'antd'
import './index.less'

export default function Loading(props) {

  const { spinning = false } = props

  return (
    <Spin tip="Loading" size="large" spinning={spinning} fullscreen>
      <div style={{
        height: '100%',
        width: '100%',
        background: 'rgba(202, 202, 202, 0.05)',
        borderRadius: 4,
      }} />
    </Spin>
  )
}
