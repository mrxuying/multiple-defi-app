import React from 'react'
import { Card } from 'antd'

import './index.less'

export default function Voting() {
  const { Meta } = Card;
  console.log(Meta)
  return (
    <div className='voting-container'>
      <div className="candidate-card">
        <Card
          title='Candidator #001'
          hoverable
          style={{
            width: 240,
          }}
          cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
        >
          <Meta header='Candidator #001' title="Europe Street beat" description="www.instagram.com" />
        </Card>
      </div>
      <div className="form-main-area">

      </div>
    </div>
  )
}
