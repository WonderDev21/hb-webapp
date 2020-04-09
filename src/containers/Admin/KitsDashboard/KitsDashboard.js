import React, { Component } from 'react'
import axios from 'axios'
import { Link, Redirect } from 'react-router-dom'

import { getCookie } from '../../../utils/Cookies'
import AdminHeader from '../../../components/Common/Header/AdminHeader/AdminHeader'
import AdminKits from '../../../components/Admin/Kits/AdminKits'
import DeleteKitModal from '../../../components/Admin/DeleteKitModal/DeleteKitModal'
import Modal from '../../../components/Common/Modal/Modal/Modal'
import KitsFilters from '../../../components/Students/Kits/KitsFilters'

class KitsDashboard extends Component {
  state = {
    kits: [],
    sortedKits: [],
    kitsAges: [],
    kitsIndustries: [],
    deleteKit: false,
    editKit: false,
    imageUrl: ''
  }

  componentDidMount = () => {
    const token = 'Bearer ' + getCookie('hbtoken_30')
    axios
      .get('/kits', {
        headers: {
          Authorization: token
        }
      })
      .then(response => {
        console.log(response.status)
        const kitsData = response.data.data
        const ages = kitsData.map(x => x.attributes.age).sort((a, b) => a - b)
        const uniqueAges = Array.from(new Set(ages))
        const industries = kitsData.map(x => x.attributes.industry).sort()
        const uniqueIndustries = Array.from(new Set(industries))
        this.setState({
          kitsAges: uniqueAges,
          kitsIndustries: uniqueIndustries,
          kits: kitsData,
          sortedKits: kitsData
        })
      })
      .catch(function(error) {
        console.log(error)
      })
  }

  openModal = image => {
    this.setState({ imageUrl: image, deleteKit: true })
  }

  closeModal = () => {
    this.setState({ deleteKit: false })
  }

  deleteKit = () => {
    const token = 'Bearer ' + getCookie('hbtoken_30')
    const kitId = localStorage.getItem('kit_id')
    axios
      .delete('/kits/' + kitId, {
        headers: {
          Authorization: token
        }
      })
      .then(response => {
        console.log(response.status)
      })
      .catch(error => {
        console.log(error)
      })
  }

  editKit = id => {
    localStorage.setItem('kit_id', id)
    this.setState({ editKit: true })
  }

  sortKits = () => {
    const sortByName = this.state.kits.sort((a, b) =>
      a.attributes.name > b.attributes.name
        ? 1
        : b.attributes.name > a.attributes.name
        ? -1
        : 0
    )
    this.setState({ sortedKits: sortByName })
  }

  sortByDifficulty = num => {
    if (num === 5) {
      const sortByDifficulty = this.state.kits.filter(
        kit => kit.attributes.difficulty >= num
      )
      this.setState({ sortedKits: sortByDifficulty })
    } else {
      const sortByDifficulty = this.state.kits.filter(
        kit => kit.attributes.difficulty === num
      )
      this.setState({ sortedKits: sortByDifficulty })
    }
  }

  sortByAge = num => {
    const sortByAge = this.state.kits.filter(kit => kit.attributes.age === num)
    this.setState({ sortedKits: sortByAge })
  }

  sortByIndustry = name => {
    const sortByIndustry = this.state.kits.filter(
      kit => kit.attributes.industry === name
    )
    this.setState({ sortedKits: sortByIndustry })
  }

  render() {
    if (this.state.exploreKit) {
      return <Redirect to="/student/kit-detail" />
    }

    if (this.state.editKit) {
      return <Redirect to="/admin/edit-kit" />
    }

    const apiKits = this.state.sortedKits
    let renderApiKits = apiKits.map(item => {
      return (
        <AdminKits
          key={item.attributes.name}
          imageUrl={item.attributes.image_url}
          name={item.attributes.name}
          age={item.attributes.age}
          industry={item.attributes.industry}
          background={item.attributes.background}
          difficulty={item.attributes.difficulty}
          published={item.attributes.published}
          id={item.id}
          editKit={this.editKit}
          openModal={this.openModal}
        />
      )
    })

    return (
      <>
        <AdminHeader active={'kits'} />
        <Modal show={this.state.deleteKit} modalClosed={this.closeModal}>
          <DeleteKitModal
            closeModal={this.closeModal}
            imageUrl={this.state.imageUrl}
            deleteKit={this.deleteKit}
          />
        </Modal>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h3 className="text-uppercase text-blue-dark fw-600 mt-3 mt-sm-5">
                Admin portal
              </h3>
              <Link to="/admin/create-kit">
                <button className="btn btn-success fw-700">+ Create Kit</button>
              </Link>
            </div>
            <div className="mt-6">
              <KitsFilters
                sortKits={this.sortKits}
                sortByDifficulty={this.sortByDifficulty}
                kitsAges={this.state.kitsAges}
                kitsIndustries={this.state.kitsIndustries}
                sortByAge={this.sortByAge}
                sortByIndustry={this.sortByIndustry}
              />
            </div>
            <div className="w-100"></div>
            <div className="col-12">
              <h2 className="text-center text-gunmetal fw-600 mt-6">
                TOP-RATED COLLECTION
              </h2>
            </div>
            <section className="kits mt-5">
              <div className="row">{renderApiKits}</div>
            </section>
          </div>
        </div>
      </>
    )
  }
}

export default KitsDashboard
