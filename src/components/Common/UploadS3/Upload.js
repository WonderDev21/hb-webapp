import React, { Component } from 'react'
import { connect } from 'react-redux'
import S3PostUploader from '@utrustdev/react-s3-post-uploader'
import axios from 'axios'

import classes from './Upload.module.scss'
import { getCookie } from '../../../utils/Cookies'

class Upload extends Component {
  setInputRef = input => {
    this.uploadInput = input
  }

  onClick = event => {
    event.preventDefault()
    this.uploadInput.click()
  }

  onUploadStart = () => {
    console.log('starting updload...')
  }
  onUploadProgress = progressEvent => {
    console.log('upload on progress...')
  }
  onUploadFinish = (uploadResult, file) => {
    console.log('upload finished')
  }
  onUploadError = error => {
    console.log('there was an error uploading')
    console.log(error)
  }

  getCredentials = (file, callback) => {
    const data = {
      data: {
        type: 'upload',
        attributes: {
          filename: `user-${this.props.user.userId}-avatar.jpg`,
          purpose: 'avatar'
        },
        relationships: {
          uploadable: {
            data: { type: 'user', id: this.props.user.userId }
          }
        }
      }
    }

    axios
      .post('/uploads', data, {
        headers: {
          Authorization: `Bearer ${getCookie('bo-token-f7e5b0')}`
        }
      })
      .then(response => {
        return response.data.data.attributes.s3_upload
      })
      .then(fields => {
        callback(file, {
          uploadUrl: fields.url,
          params: {
            acl: fields.acl,
            key: fields.key,
            policy: fields.encoded_policy,
            'content-type': fields.content_type,
            'x-amz-signature': fields.signature,
            'x-amz-algorithm': fields.algorithm,
            'x-amz-date': fields.date,
            'x-amz-credential': fields.credential
          }
        })
      })
  }

  render() {
    return (
      <div className={classes.Upload}>
        <S3PostUploader
          onStart={this.onUploadStart}
          onProgress={this.onUploadProgress}
          onFinish={this.onUploadFinish}
          onError={this.onUploadError}
          getCredentials={this.getCredentials}
          inputRef={this.setInputRef}
        />
        <div onClick={this.onClick}>{this.props.children}</div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    user: state.user
  }
}

export default connect(mapStateToProps)(Upload)
