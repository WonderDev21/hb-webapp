import React, { Component } from 'react'
import axios from 'axios'
import { Redirect } from 'react-router-dom'

import { getCookie } from '../../../utils/Cookies'
import AdminHeader from '../../../components/Common/Header/AdminHeader/AdminHeader'
import EditKitForm from '../../../components/Admin/EditKitForm/EditKitForm'
import Modal from '../../../components/Common/Modal/Modal/Modal'
import VideoDetailModal from '../../../components/Admin/EditKitForm/VideoDetailModal/VideoDetailModal'

class EditKit extends Component {
  state = {
    kitInfo: [],
    alertMessage: '',
    published: false,
    edited: false,
    videoDetail: false
  }

  componentDidMount = () => {
    const token = 'Bearer ' + getCookie('hbtoken_30')
    const id = localStorage.getItem('kit_id')
    axios
      .get('/kits/' + id, {
        headers: {
          Authorization: token
        }
      })
      .then(response => {
        this.setState({ kitInfo: response.data.data.attributes })
        console.log(response.status)
      })
      .catch(function(error) {
        console.log(error)
      })
  }

  editKit = kitData => {
    this.setState({ alertMessage: '' })
    const token = 'Bearer ' + getCookie('hbtoken_30')
    const kitId = localStorage.getItem('kit_id')
    axios
      .patch('/kits/' + kitId, kitData, {
        headers: {
          Authorization: token
        }
      })
      .then(response => {
        console.log(response.status)
        this.setState({ edited: true })
      })
      .catch(error => {
        console.log(error)
        this.setState({
          alertMessage: (
            <p className="text-danger text-uppercase text-center ion-text">
              Something happen, try again later!
            </p>
          )
        })
      })
  }

  handlePublished = () => {
    this.setState({ published: true })
  }

  openModal = () => {
    this.setState({ videoDetail: true })
  }

  closeModal = () => {
    this.setState({ videoDetail: false })
  }

  render() {
    if (this.state.edited) {
      return <Redirect to="/admin/dashboard" />
    }

    return (
      <>
        <AdminHeader />
        <Modal show={this.state.videoDetail} modalClosed={this.closeModal}>
          <VideoDetailModal closeModal={this.closeModal} />
        </Modal>
        <EditKitForm
          name={this.state.kitInfo.name}
          image={this.state.kitInfo.image_url}
          background={this.state.kitInfo.background}
          age={this.state.kitInfo.age}
          industry={this.state.kitInfo.industry}
          difficulty={this.state.kitInfo.difficulty}
          description={this.state.kitInfo.description}
          video_url={this.state.kitInfo.video_url}
          handlePublished={this.handlePublished}
          editKit={this.editKit}
          published={this.state.published}
          openModal={this.openModal}
        />
      </>
    )
  }
}

export default EditKit
