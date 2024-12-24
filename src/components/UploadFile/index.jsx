import React, { useState } from 'react'
import { message, Upload } from 'antd';
import { FileImageFilled } from '@ant-design/icons';
import './index.less'


export default function UploadFile() {
  const { Dragger } = Upload;
  const fileProperties = {
    name: 'file',
    multiple: false,
    accept: 'image/png, image/jpeg, image/gif, image/webm',
    action: '/mock/api/upload',
  }

  const [fileList, setFileList] = useState([]);

  const onChange = (info) => {
    const { status } = info.file;
    if (status !== 'uploading') {
      console.log(info.file, info.fileList);
    }
    if (status === 'done') {
      setFileList([info.file.url])
      message.success(`${info.file.name} uploaded successfully.`);
    } else if (status === 'error') {
      message.error(`${info.file.name} upload failed.`);
    }
  }

  const onDrop = (e) => {
    message.success(`${e.name}droped successfully.`);
  }

  return (
    <>{fileList.length === 1 ? <img src={fileList[0]} alt="" /> :

      <Dragger onChange={onChange} onDrop={onDrop} {...fileProperties}>
        <p className="ant-upload-drag-icon">
          <FileImageFilled style={{ color: '#8c00a2' }} />
        </p>
        <p className="ant-upload-text">Click or drag file to this area to upload</p>
        <p className="ant-upload-hint">
          Upload File: JPG, PNG, GIF, WEBM MAX 100MB
        </p>
      </Dragger>
    }
    </>

  )
}
