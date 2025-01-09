import React, { useContext, useEffect, useState } from 'react'
import { Card, Select, Input, Button, message } from 'antd'
import { UserOutlined, FontColorsOutlined, HeartOutlined } from '@ant-design/icons'

import UploadFile from '../../../components/UploadFile';
import './index.less'
import defaultCandidate from '../../../assets/images/defaultCandidate.png'
import { genderList, userTypeList } from '../../../assets/constant';
import { VotingContext } from '../../../context/Voter';

export default function Rigister() {
  const { Meta } = Card;
  const { uploadToIPFSCandidate, setCandidate, error, createVoter, getNewCandidate, candidateArray } = useContext(VotingContext)
  console.log(candidateArray)
  const [errors, setErrors] = useState({})
  const [registerData, setRegisterData] = useState({
    avatar: null,
    userType: '',
    address: '',
    name: '',
    age: '',
    gender: ''
  });

  useEffect(() => {
    if (error !== '') {
      console.log(error)
    }
  }, [error])

  useEffect(() => {
    (async () => {
      await getNewCandidate()
    })()
  }, [])//eslint-disable-line

  const validateField = (fieldName, value) => {
    switch (fieldName) {
      case 'avatar':
        setErrors({
          ...errors,
          avatarError: value === null ? 'avatar is required' : '',
        });
        break;
      case 'userType':
        setErrors({
          ...errors,
          userTypeError: value.trim() === '' ? 'Choose a user-type' : '',
        });
        break;
      case 'address':
        setErrors({
          ...errors,
          addressError: value.trim() === '' ? 'Valid address is required' : '',
        });
        break;
      case 'name':
        setErrors({
          ...errors,
          nameError: value.trim() === '' ? 'Valid name is required' : '',
        });
        break;
      case 'age':
        setErrors({
          ...errors,
          ageError: value.trim() === '' ? 'Valid age is required' : '',
        });
        break;
      case 'gender':
        setErrors({
          ...errors,
          genderError: value.trim() === '' ? 'Choose your gender' : '',
        });
        break;
      default:
        break;
    }
  };

  const handleUpload = async (file) => {
    let url = await uploadToIPFSCandidate(file);
    setRegisterData({ ...registerData, avatar: url })
    return url
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setRegisterData({ ...registerData, [name]: value });
  };

  const handlerBlur = (e) => {
    const { name, value } = e.target;
    validateField(name, value);
  }

  const handleRegist = () => {
    console.log(registerData)
    if (registerData.userType === '1') {
      setCandidate(registerData)
      getNewCandidate()
    } else if (registerData.userType === '2') {
      createVoter(registerData)
    } else {
      message.error('Please check your user-type,expected 1 or 2')
    }
  }

  return (
    <div className='register-container'>
      <div className="candidate-card">
        <Card
          title={`CandidateNo ${candidateArray.length > 0 ? candidateArray[0]?.candidateID : '001'}`}
          hoverable
          style={{
            width: 240,
          }}
          cover={<img alt="avatar" src={candidateArray.length > 0 ? candidateArray[0]?.image : defaultCandidate} />}
        >
          <Meta title={`Name: ${candidateArray.length > 0 ? candidateArray[0]?.name : 'CandidateName'}`}
            description={
              <div>
                <p>&nbsp;&nbsp;Gender: {candidateArray.length > 0 ? candidateArray[0]?.gender : ''}</p>
                <p>&nbsp;&nbsp;Age: {candidateArray.length > 0 ? candidateArray[0]?.age : ''}</p>
                <p style={{
                  whiteSpace: 'nowrap',
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                }}>
                  &nbsp;&nbsp;Address: {candidateArray.length > 0 ? candidateArray[0]?.address : '0x000000000000000000000000'}
                </p>
              </div>
            }
          />
        </Card>
      </div>
      <div className="form-main-area">
        <h3 className="register-title">Register Candidate or Voter</h3>
        <UploadFile title='Register' handleUpload={handleUpload} />

        <Select
          onSelect={(value) => {
            setRegisterData({ ...registerData, userType: value });
          }}
          onBlur={(e) => handlerBlur(e)}
          prefix={<label >Regist as </label>}
          allowClear
          showSearch
          placeholder="Candidate or Voter"
          filterOption={(input, option) =>
            (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
          }
          options={userTypeList}
        />
        {errors.userTypeError && <span className='validate-error'>{errors.userTypeError}</span>}
        <Input placeholder="Address"
          status={errors.addressError ? 'error' : 'errors'}
          name='address'
          value={registerData.address}
          onChange={(e) => handleChange(e)}
          onBlur={(e) => handlerBlur(e)}
          prefix={<FontColorsOutlined />} />
        {errors.addressError && <span className='validate-error'>{errors.addressError}</span>}
        <Input placeholder="Name"
          name='name'
          value={registerData.name}
          onChange={(e) => handleChange(e)}
          onBlur={(e) => handlerBlur(e)}
          prefix={<UserOutlined />} />
        {errors.nameError && <span className='validate-error'>{errors.nameError}</span>}
        <Input placeholder="Age"
          name='age'
          value={registerData.age}
          onChange={(e) => handleChange(e)}
          onBlur={(e) => handlerBlur(e)}
          prefix={<HeartOutlined />} />
        {errors.ageError && <span className='validate-error'>{errors.ageError}</span>}
        <Select
          onSelect={(value) => {
            setRegisterData({ ...registerData, gender: value });
            console.log(registerData);
          }}
          onBlur={(e) => handlerBlur(e)}
          prefix={<label >Gender </label>}
          allowClear
          showSearch
          placeholder="Candidate or Voter"
          filterOption={(input, option) =>
            (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
          }
          options={genderList}
        />
        {errors.genderError && <span className='validate-error'>{errors.genderError}</span>}
        <div style={{ padding: '10px' }}>
          <Button color='danger' variant='outlined' >Cancel</Button>
          <Button type='primary' onClick={handleRegist} >Regist</Button>
        </div>
      </div>
    </div>
  )
}
