import React, { useCallback, useState, useContext } from 'react'
import { useDropzone } from 'react-dropzone'
import { Image } from "antd"
import './index.less'
import { VotingContext } from '../../context/Voter'
import upload from '../../assets/images/upload.png'
import Loading from '../Loading'


export default function UploadFile(props) {
  //-------------VOTERS
  const { loader } = useContext(VotingContext);
  const { handleUpload } = props
  const [fileUrl, setFileUrl] = useState(null)

  const onDrop = useCallback(async (acceptedFile) => {
    const url = await handleUpload(acceptedFile[0]);
    setFileUrl(url);
  }, []);//eslint-disable-line

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: "image/*",
    maxSize: 5000000,
  });

  return (
    <>
      {loader && <Loading spinning={loader} />}
      <div {...getRootProps()}>
        <input {...getInputProps()} />
        <div className='upload-area'>
          <p className='upload-content-limit'>Upload File: JPG, PNG, GIF, WEBM MAX 100MB</p>
          <div className='upload-img'>
            <Image
              preview={false}
              src={fileUrl ? fileUrl : upload}
              width={100}
              alt="file upload"
            />
          </div>
          <p className='upload-content-tips'>Drag & Drop File or Browse media on your device</p>
        </div>
      </div>
    </>


  )
}
