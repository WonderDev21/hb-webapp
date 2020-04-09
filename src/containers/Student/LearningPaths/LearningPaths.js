import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';

import * as actions from '../../../store/actions/index';
import GoBack from '../../../assets/img/go-back.png';
import StudentHeader from '../../../components/Common/Header/StudentHeader/StudentHeader';
import LearningPathsMarket from '../../../components/Students/Learning/LearningPathsMarket/LearningPathsMarket';
import Modal from '../../../components/Common/Modal/Modal/Modal';
import PayForLearningPath from '../../../components/Students/Learning/PayForLearningPath/PayForLearningPath';
import classes from './LearningPaths.module.scss';

class LearningPaths extends Component {
  state = {
    requestLearningPath: false,
    image: '',
    price: '',
    title: '',
    id: ''
  }

  componentDidMount() {
    this.props.resetMessages();
    this.props.getLearningPaths();
    this.props.getUserPaymentProfile();
    this.props.getUserLearningPaths();
  }

  openModal = (imageUrl, priceValue, titleValue, learningPathId) => {
    this.setState({ image: imageUrl, requestLearningPath : true, price: priceValue, title: titleValue, id: learningPathId})
  }

  closeModal = () => {
    this.setState({requestLearningPath : false})
  }

  paymentHandler = () => {
    this.props.buyLearningPath(this.state.id);
  }
  
  render() {
    const userPaths = this.props.learningPaths.userLearningPaths
    const pathsIds = userPaths.map( x => x.id );
    const apiLearningPaths = this.props.learningPaths.learningPaths
    let renderApiLearningPaths = apiLearningPaths.map( item =>{
      const checked = pathsIds.includes(item.id);
      return (
        <LearningPathsMarket 
          key={item.id}
          imageUrl={item.attributes.image_url}
          title={item.attributes.title}
          learningPathId={item.id}
          price={item.attributes.price_in_cents}
          openModal={this.openModal}
          checked={checked}
          pathId={item.id}
        />
    )})
    return (
      <>
        <Modal
          show={this.state.requestLearningPath}
          modalClosed={this.closeModal}
        >
          <PayForLearningPath
            image={this.state.image}
            closeModal={this.closeModal}
            cardErrorMessage={this.props.user.cardErrorMessage}
            cardSuccessMessage={this.props.user.cardSuccessMessage}
            paymentProfile={this.props.user.invalidPaymentProfile}
            lastFour={this.props.user.paymentProfile.last4}
            brand={this.props.user.paymentProfile.brand}
            editCard={this.props.invalidPaymentProfile}
            price={this.state.price}
            title={this.state.title}
            paymentHandler={this.paymentHandler}
            paymentError={this.props.user.wrongPurchase}
            paymentSuccess={this.props.user.successPurchase}
            show={this.props.common.loading}
          />
        </Modal>
        <StudentHeader 
          active={'learn'}
        />
        <div className={`container ${classes.Container}`}>
          <div className="row">
            <div className={`col-12 ${classes.Breadcrumb}`}>
              <Link to='/student/learn'>
                <img className={classes.GoBack} src={GoBack} alt="<" />
              </Link>
              <p className={classes.Title}>
                <FormattedMessage id="app.learning_paths.learning_paths" defaultMessage="Learning paths" />
              </p>
            </div>
            {renderApiLearningPaths}
          </div>
        </div>
      </>
    )
  }
}

const mapStateToProps = state => {
  return {
    learningPaths: state.learningPaths,
    user: state.user,
    kits: state.kits,
    common: state.common
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getLearningPaths: () => dispatch(actions.getLearningPaths()),
    invalidPaymentProfile: () => dispatch(actions.invalidPaymentProfile()),
    getUserPaymentProfile: () => dispatch(actions.getUserPaymentProfile()),
    buyLearningPath: (learningPathId) => dispatch(actions.buyLearningPath(learningPathId)),
    resetMessages: () => dispatch(actions.resetMessages()),
    getUserLearningPaths: () => dispatch(actions.getUserLearningPaths())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LearningPaths);
