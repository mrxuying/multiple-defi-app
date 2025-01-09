import React from 'react'
import { Card } from 'antd'
// import { UserOutlined, FontColorsOutlined, HeartOutlined } from '@ant-design/icons'

import './index.less'
import organizer from '../../assets/images/organizer.png'
import { Outlet } from 'react-router-dom'


export default function Voting() {
  const { Meta } = Card;
  return (
    <>
      <div className='voting-container'>
        <Outlet />
      </div>
      <div className="organizer-info">
        <Card
          title='Organizer 0xf6688hhj799098j'
          hoverable
          style={{
            width: 240,
            height: 240,
            background: '#b452c3',
          }}
          cover={<img alt="avatar" src={organizer} />}
        >
          <Meta title="Notice" description="Only organizer of the voting contract can create voter and candidate for voting election" />
        </Card>
      </div>
    </>
  )
}
