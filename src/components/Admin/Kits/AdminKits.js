import React, {Component} from 'react';

import classes from './AdminKits.module.scss'

class AdminKits extends Component {
  setDifficulty = () => {
    let times = parseInt(this.props.difficulty);
    let difficulty = [];
    for(let i=0; i < times ; i++){
      difficulty.push(<i className="fa fa-circle" key={i}></i>)
    }
    return difficulty
  }

  handleEditKit = () => {
    this.props.editKit(this.props.id)
  }

  handleOpenModal = () => {
    localStorage.setItem('kit_id', this.props.id)
    this.props.openModal(this.props.imageUrl)
  }

  render() {
    return (
      <>
        <div className="col-md-4">
          <div className="card card-kit">
            <div className="card-header draft" style={{backgroundColor: '#' + this.props.background}}>
              <p className={classes.Published} style={{color: this.props.published ? 'red' : 'white' }}><i className="fa fa-circle"></i>{this.props.published ? 'Active' : 'Draft'}</p>
              <img className={`img-fluid mx-auto d-block ${classes.ImageSize}`} src={this.props.imageUrl} alt="" />
            </div>
            <div className="card-body">
              <div className="w-100">
                <p className="text-blue-dark fw-700 float-left">{this.props.name}</p>
                <p className="text-danger fw-700 float-right">Ages: +{this.props.age}</p>
              </div>
              <div className="clearfix"></div>
              <div className="w-100">
                <p className=" fw-700 float-left">Industry: {this.props.industry}</p>
                <p className="text-danger fw-700 float-right" data-toggle="tooltip" data-placement="bottom" title="Rocky difficulty level">
                  {this.setDifficulty()}
                </p>
              </div>
              <div className="clearfix"></div>
              <button  className="btn btn-block btn-link fw-700 text-gunmetal" onClick={this.handleEditKit}><i className="fa fa-cog"></i> Edit kit</button>
            </div>
            <div className={`card-footer ${classes.FooterColor}`}>
              <button type="button" className="btn btn-block btn-link fw-700 text-white p-0" onClick={this.handleOpenModal}><i className="fa fa-trash"></i> Delete kit</button>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default AdminKits;
