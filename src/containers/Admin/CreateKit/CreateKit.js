import React, { Component } from 'react';
import axios from 'axios';
import { Redirect } from 'react-router-dom';

import { getCookie } from '../../../utils/Cookies'
import AdminHeader from '../../../components/Common/Header/AdminHeader/AdminHeader';
import CreateKitForm from '../../../components/Admin/CreateKitForm/CreateKitForm';

class CreateKit extends Component {
  state = {
    alertMessage: '',
    published: false,
    created: false
  }

  setKit = (kitData) => {
    this.setState({ alertMessage: '' })
    const token = 'Bearer ' + getCookie('hbtoken_30')
    axios.post('/kits', kitData,  {
      headers: {
        Authorization: token
      }}).then((response) => {
      console.log(response.status);
      this.setState({ created: true })
      }).catch( error => {
        console.log(error);
        this.setState({ alertMessage: <p className="text-danger text-uppercase text-center ion-text">Something happen, try again later!</p> })
      })
  }

  handlePublished = () => {
    this.setState({ published: true })
  }

  render() {

    if (this.state.created) {
      return <Redirect to='/admin/dashboard' />
    }

    return (
      <>
        <AdminHeader />
        <CreateKitForm 
          setKit={this.setKit}
          published={this.state.published}
          handlePublished={this.handlePublished}
        />
      </>
    )
  }
}

export default CreateKit;
