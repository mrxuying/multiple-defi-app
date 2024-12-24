import React, { useState } from 'react'
import { Card, Select, Input, Button } from 'antd'
import { UserOutlined, FontColorsOutlined, HeartOutlined } from '@ant-design/icons'

import UploadFile from '../../../components/UploadFile';
import './index.less'
import defaultCandidate from '../../../assets/images/defaultCandidate.png'

export default function Rigister() {
  const { Meta } = Card;
  const [candidate, setCandidate] = useState({})
  return (
    <>
      <div className="candidate-card">
        <Card
          title={`CandidateNo ${candidate?.id ? candidate?.id : ''}`}
          hoverable
          style={{
            width: 240,
          }}
          cover={<img alt="avatar" src={candidate?.img ? candidate?.img : defaultCandidate} />}
        >
          <Meta title={`Name: ${candidate?.name ? candidate?.name : ''}`}
            description={
              <div>
                <p>&nbsp;&nbsp;Gender: {candidate?.gender ? candidate?.gender : ''}</p>
                <p>&nbsp;&nbsp;Age: {candidate?.age ? candidate?.age : ''}</p>
                <p style={{
                  whiteSpace: 'nowrap',
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                }}>
                  &nbsp;&nbsp;Address: {candidate?.address ? candidate?.address : '0x000000000000000000000000'}
                </p>
              </div>
            }
          />
        </Card>
      </div>
      <div className="form-main-area">
        <h3 className="register-title">Register Candidate or Voter</h3>
        <UploadFile title='Register' />

        <Select
          prefix={<label >Regist as </label>}
          allowClear
          showSearch
          placeholder="Candidate or Voter"
          filterOption={(input, option) =>
            (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
          }
          options={[
            {
              value: '1',
              label: 'Candidate',
            },
            {
              value: '2',
              label: 'Voter',
            },
          ]}
        />
        <Input placeholder="Address" prefix={<FontColorsOutlined />} />
        <Input placeholder="Name" prefix={<UserOutlined />} />
        <Input placeholder="Age" prefix={<HeartOutlined />} />
        <Select
          prefix={<label >Gender </label>}
          allowClear
          showSearch
          placeholder="Candidate or Voter"
          filterOption={(input, option) =>
            (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
          }
          options={[
            {
              value: '1',
              label: 'Female',
            },
            {
              value: '2',
              label: 'Male',
            },
          ]}
        />
        <div style={{ padding: '20px' }}>
          <Button color='danger' variant='outlined' >Cancel</Button>
          <Button type='primary' >Regist</Button>
        </div>


      </div>
    </>
  )
}
