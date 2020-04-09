import React, { Component } from 'react'
import { connect } from 'react-redux'

import * as actions from '../../../store/actions/index'
import StudentHeader from '../../../components/Common/Header/StudentHeader/StudentHeader'
import KitInformation from '../../../components/Students/KitInformation/KitInformation'
import Modal from '../../../components/Common/Modal/Modal/Modal'
import PayForKit from '../../../components/Students/KitInformation/PayForKit/PayForKit'

class KitDetail extends Component {
  state = {
    requestKit: false,
    pay_price: 0
  }

  componentDidMount = () => {
    this.props.resetMessages()
    const path = this.props.location.pathname
    const kitId = path.split('/').pop(-1)
    this.props.getKit(kitId)
    this.props.getUserPaymentProfile()
  }

  openModal = (price, quantity) => {
    this.setState({ requestKit: true, pay_price: price * quantity })
  }

  closeModal = () => {
    this.setState({ requestKit: false })
  }

  paymentHandler = () => {
    const path = this.props.location.pathname
    const kitId = path.split('/').pop(-1)
    this.props.buyKit(kitId)
  }

  render() {
    return (
      <>
        <Modal show={this.state.requestKit} modalClosed={this.closeModal}>
          <PayForKit
            image={this.props.kits.kitData.image_url}
            closeModal={this.closeModal}
            cardErrorMessage={this.props.user.cardErrorMessage}
            cardSuccessMessage={this.props.user.cardSuccessMessage}
            paymentProfile={this.props.user.invalidPaymentProfile}
            lastFour={this.props.user.paymentProfile.last4}
            brand={this.props.user.paymentProfile.brand}
            editCard={this.props.invalidPaymentProfile}
            price={this.state.pay_price}
            title={
              this.props.kits.kitData.data &&
              this.props.kits.kitData.data.attributes.name
            }
            paymentHandler={this.paymentHandler}
            paymentError={this.props.user.wrongPurchase}
            paymentSuccess={this.props.user.successPurchase}
            show={this.props.common.loading}
          />
        </Modal>
        <StudentHeader active={'kits'} />
        {this.props.kits.kitData.data && this.props.kits.kitData.included && (
          <KitInformation
            name={this.props.kits.kitData.data.attributes.name}
            image={this.props.kits.kitData.data.attributes.image_url}
            background={this.props.kits.kitData.data.attributes.background}
            age={this.props.kits.kitData.data.attributes.age}
            price={this.props.kits.kitData.data.attributes.price_in_cents}
            industry={this.props.kits.kitData.data.attributes.industry}
            kitDifficulty={this.props.kits.kitData.data.attributes.difficulty}
            description={this.props.kits.kitData.data.attributes.description}
            video_url={this.props.kits.kitData.data.attributes.video_url}
            included={this.props.kits.kitData.included}
            openModal={this.openModal}
          />
        )}
      </>
    )
  }
}

const mapStateToProps = state => {
  return {
    user: state.user,
    kits: state.kits,
    common: state.common
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getKit: kitId => dispatch(actions.getKit(kitId)),
    invalidPaymentProfile: () => dispatch(actions.invalidPaymentProfile()),
    getUserPaymentProfile: () => dispatch(actions.getUserPaymentProfile()),
    resetMessages: () => dispatch(actions.resetMessages()),
    buyKit: kitId => dispatch(actions.buyKit(kitId))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(KitDetail)
