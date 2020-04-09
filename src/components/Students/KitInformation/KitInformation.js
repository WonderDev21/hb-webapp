import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { FormattedMessage } from 'react-intl'
import health1 from '../../../assets/svg/Health_1.svg'
import health2 from '../../../assets/svg/Health_2.svg'
import health3 from '../../../assets/svg/Health_3.svg'
import health4 from '../../../assets/svg/Health_4.svg'
import health5 from '../../../assets/svg/Health_5.svg'

function CircleLock() {
  return (
    <div
      style={{
        width: '40px',
        height: '40px',
        position: 'relative',
        marginLeft: 20
      }}
    >
      <svg
        viewBox="0 0 40.00 40.00"
        style={{
          top: 0,
          left: 0,
          width: 40,
          height: 40,
          position: 'absolute'
        }}
      >
        <ellipse
          strokeWidth={1}
          fill="rgba(34,7,113,1)"
          stroke="rgba(34,7,113,1)"
          cx={20}
          cy={20}
          rx={20}
          ry={20}
        ></ellipse>
      </svg>
      <i
        className="fa fa-lock"
        style={{
          top: 9,
          left: 13,
          position: 'absolute',
          color: 'rgba(255,255,255,1)',
          fontSize: 22
        }}
      ></i>
      <div
        style={{
          top: '39px',
          left: '16px',
          width: '7px',
          height: '25px',
          backgroundColor: 'rgba(34,7,113,1)',
          position: 'absolute'
        }}
      ></div>
    </div>
  )
}
function CircleStart() {
  return (
    <div
      style={{
        width: '40px',
        height: '40px',
        position: 'relative',
        marginLeft: 20
      }}
    >
      <svg
        viewBox="0 0 40.00 40.00"
        style={{
          top: 0,
          left: 0,
          width: 40,
          height: 40,
          position: 'absolute'
        }}
      >
        <ellipse
          strokeWidth={1}
          fill="rgba(126,211,33,1)"
          stroke="rgba(126,211,33,1)"
          cx={20}
          cy={20}
          rx={20}
          ry={20}
        ></ellipse>
      </svg>
      <i
        className="fa fa-star"
        style={{
          top: 9,
          left: 10,
          position: 'absolute',
          color: 'rgba(255,255,255,1)',
          fontSize: 22
        }}
      ></i>
      <div
        style={{
          top: '39px',
          left: '16px',
          width: '7px',
          height: '25px',
          backgroundColor: 'rgba(34,7,113,1)',
          position: 'absolute'
        }}
      ></div>
    </div>
  )
}
function CirclePlay() {
  return (
    <div
      style={{
        width: '40px',
        height: '40px',
        position: 'relative',
        marginLeft: 20
      }}
    >
      <svg
        viewBox="0 0 40.00 40.00"
        style={{
          top: 0,
          left: 0,
          width: 40,
          height: 40,
          position: 'absolute'
        }}
      >
        <ellipse
          strokeWidth={1}
          fill="rgba(126,211,33,1)"
          stroke="rgba(126,211,33,1)"
          cx={20}
          cy={20}
          rx={20}
          ry={20}
        ></ellipse>
      </svg>
      <i
        className="fa fa-play"
        style={{
          top: 9,
          left: 13,
          position: 'absolute',
          color: 'rgba(255,255,255,1)',
          fontSize: 22
        }}
      ></i>
      <div
        style={{
          top: '39px',
          left: '16px',
          width: '7px',
          height: '25px',
          backgroundColor: 'rgba(34,7,113,1)',
          position: 'absolute'
        }}
      ></div>
    </div>
  )
}
function CircleNumber({ number }) {
  return (
    <div
      style={{
        width: '40px',
        height: '40px',
        position: 'relative',
        marginLeft: 20
      }}
    >
      <svg
        viewBox="0 0 40.00 40.00"
        style={{
          top: 0,
          left: 0,
          width: 40,
          height: 40,
          position: 'absolute'
        }}
      >
        <ellipse
          strokeWidth={1}
          fill="rgba(34,7,113,1)"
          stroke="rgba(34,7,113,1)"
          cx={20}
          cy={20}
          rx={20}
          ry={20}
        ></ellipse>
      </svg>
      <div
        style={{
          top: '5px',
          left: '15px',
          color: 'rgba(255, 255, 255, 1)',
          position: 'absolute',
          fontSize: '20px',
          fontWeight: 700,
          fontStyle: 'normal'
        }}
      >
        {number}
      </div>
      <div
        style={{
          top: '39px',
          left: '16px',
          width: '7px',
          height: '25px',
          backgroundColor: 'rgba(34,7,113,1)',
          position: 'absolute'
        }}
      ></div>
    </div>
  )
}

class KitInformation extends Component {
  state = {
    listVideos: [
      {
        title: 'Intro video',
        time: '3:00',
        icon: 1
      },
      {
        title: 'CSS3 Syntax',
        time: '3:00',
        icon: 3
      },
      {
        title: 'HTML 5',
        time: '3:00',
        icon: 3
      },
      {
        title: 'CS3 Animations',
        time: '3:00',
        icon: 3
      }
    ],
    listProperties: [
      { title: 'Being present', icon: health1 },
      { title: 'Self-awareness', icon: health2 },
      { title: 'Conscious breathin', icon: health3 },
      { title: 'Open mindness', icon: health4 },
      { title: 'Brave gratitude', icon: health5 }
    ],
    indexVideo: 1,
    quantity: 1,
    currentItem: {}
  }

  componentDidMount = () => {
    this.setState({
      currentItem: this.props.included[0]
    })
  }

  setDifficulty() {
    const { kitDifficulty } = this.props
    let times = parseInt(kitDifficulty)
    let difficulty = []
    for (let i = 0; i < times; i++) {
      difficulty.push(<i className="fa fa-circle mr-1" key={i}></i>)
    }
    return difficulty
  }

  cleanIcons = (index, label) => {
    var list = this.state.listVideos
    list.map(item => item.icon === 1 && (item.icon = 4))
    label.icon = 1
    list[index] = label
    this.setState({ listVideos: list, indexVideo: index + 1 })
  }

  onPlayVideo = item => {
    this.setState({ currentItem: item })
  }

  _renderVideoList(item, index) {
    if (item.type === 'kit_video')
      return (
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            margin: '20px 0',
            cursor: 'pointer'
          }}
          onClick={() => this.onPlayVideo(item)}
          key={index}
        >
          <p
            className="text-blue-dark fw-700 float-left"
            style={{ alignItems: 'center', display: 'flex', margin: 0 }}
          >
            {item.attributes.title}
          </p>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            {item.id === this.state.currentItem.id
              ? CirclePlay()
              : CircleStart()}
          </div>
        </div>
      )
  }

  _renderOutcomes = (item, index) => {
    if (item.type === 'outcome')
      return (
        <div
          className="col-lg-2 col-md-2 m-2"
          style={{
            backgroundColor: 'rgba(242, 240, 246, 1)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column'
          }}
          key={index}
        >
          <img
            src={item.attributes.icon_url}
            alt="Propiedad"
            style={{ width: 80, height: 80, marginTop: 20, marginBottom: 20 }}
          />

          <p
            className="text-blue-dark fw-700"
            style={{
              margin: 0,
              textAlign: 'center'
            }}
          >
            {item.attributes.title}
          </p>
        </div>
      )
  }

  render() {
    const {
      background,
      image,
      age,
      name,
      industry,
      description,
      openModal,
      included
    } = this.props

    return (
      <>
        <div
          className="hero-kit pb-5"
          style={{ backgroundColor: '#' + background }}
        >
          <div className="container">
            <div className="row">
              <div className="col-12">
                <Link to="/student/kits" className="simple">
                  <h3 className="d-flex text-white fw-700 mt-3 mt-sm-5 mb-5">
                    <i className="fa fa-chevron-left btn-circle bg-white mr-2"></i>{' '}
                    <FormattedMessage
                      id="app.kit.back_to_maker_kits"
                      defaultMessage="Back to Maker kits"
                    />
                  </h3>
                </Link>
                <div className="row">
                  <div className="col-md-6">
                    <img
                      className="img-fluid hero-kit-image"
                      src={image}
                      alt=""
                    />
                  </div>
                  <div className="col-md-6">
                    <h4 className="text-white fw-600">
                      <FormattedMessage
                        id="app.kit.ages"
                        defaultMessage="Ages"
                      />
                      : +{age}
                    </h4>
                    <h1 className="text-white">{name}</h1>
                    <div className="d-flex justify-content-between">
                      <p className="text-white">
                        <FormattedMessage
                          id="app.kit.industry"
                          defaultMessage="Industry"
                        />
                        : {industry}
                      </p>
                      <p className="text-white">
                        <FormattedMessage
                          id="app.kit.difficulty"
                          defaultMessage="Difficulty"
                        />
                        : {this.setDifficulty()}
                      </p>
                    </div>
                    <h4 className="text-white fw-400">{description}</h4>
                    <div className="d-flex mt-5">
                      <h3 className="text-white fw-600">
                        <FormattedMessage
                          id="app.kit.quantity"
                          defaultMessage="Quantity"
                        />
                        : {this.state.quantity}
                      </h3>
                      <button
                        className="btn-quantity ml-5"
                        onClick={() =>
                          this.setState({ quantity: this.state.quantity + 1 })
                        }
                      >
                        <i className="fa fa-plus text-white"></i>
                      </button>
                      <button
                        className="btn-quantity ml-3"
                        onClick={() =>
                          this.state.quantity > 1 &&
                          this.setState({ quantity: this.state.quantity - 1 })
                        }
                      >
                        <i className="fa fa-minus text-white"></i>
                      </button>
                    </div>
                    <div className="d-flex mt-5">
                      <button
                        className="btn bg-blue-dark text-white fw-600 ml-3"
                        type="button"
                        onClick={() =>
                          openModal(this.props.price, this.state.quantity)
                        }
                      >
                        <FormattedMessage
                          id="app.kit.request_now"
                          defaultMessage="Request now"
                        />
                        !
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container mt-5">
          <div className="row justify-content-center">
            <div className="col-md-12 p-0">
              <h4 className=" text-blue-dark fw-600 my-3">
                <FormattedMessage
                  id="app.kit.what_you_will_learn"
                  defaultMessage="What you will learn"
                />
                &nbsp;
                <small>
                  &nbsp;
                  <FormattedMessage
                    id="app.kit.maker_kit_learning_outcomes"
                    defaultMessage="Maker kit learning outcomes"
                  />
                  &nbsp;
                  <i
                    className="fa fa-question-circle"
                    data-toggle="tooltip"
                    data-placement="bottom"
                    title="Tooltip on bottom"
                  ></i>
                </small>
              </h4>
            </div>
            <div className="col-md-6 pl-0 pt-0">
              <div
                style={{
                  padding: 20,
                  backgroundColor: 'rgba(242, 240, 246, 1)',
                  borderRadius: 10
                }}
              >
                <div className="embed-responsive embed-responsive-16by9">
                  {this.state.currentItem.attributes && (
                    <video
                      className="embed-responsive-item"
                      src={this.state.currentItem.attributes.video_url}
                      controls
                      controlsList="nodownload"
                      onContextMenu={e => {
                        e.preventDefault()
                        return false
                      }}
                    ></video>
                  )}
                </div>

                <div
                  className="w-100 mt-2"
                  style={{ display: 'flex', justifyContent: 'space-between' }}
                >
                  <p className="text-blue-dark fw-700 m-0">
                    Video{' '}
                    {this.state.currentItem.attributes &&
                      this.state.currentItem.attributes.sort_number}
                    :{' '}
                    {this.state.currentItem.attributes &&
                      this.state.currentItem.attributes.title}
                  </p>
                  <p className="text-danger fw-700 m-0">
                    <span>
                      {this.state.currentItem.attributes &&
                        parseInt(
                          this.state.currentItem.attributes.video_length / 60
                        )}
                      :
                      {this.state.currentItem.attributes &&
                        parseInt(
                          this.state.currentItem.attributes.video_length % 60
                        )}
                    </span>
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 pl-0 pr-0 pt-0">
              <div
                style={{
                  paddingTop: 10,
                  paddingBottom: 10,
                  paddingLeft: 30,
                  paddingRight: 30,
                  borderRadius: 10,
                  boxShadow: '0px 6px 22px 0px rgba(0,0,0,0.25)',
                  maxHeight: 360,
                  overflowY: 'auto'
                }}
              >
                {included.map((item, index) => {
                  return this._renderVideoList(item, index)
                })}
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-md-12  mt-7 mb-4">
              <h4 className=" text-blue-dark fw-600 my-3">
                <FormattedMessage
                  id="app.kit.what_you_will_learn"
                  defaultMessage="What you will learn"
                />
                &nbsp;
                <small>
                  &nbsp;
                  <FormattedMessage
                    id="app.kit.maker_kit_learning_outcomes"
                    defaultMessage="Maker kit learning outcomes"
                  />
                  &nbsp;
                  <i
                    className="fa fa-question-circle"
                    data-toggle="tooltip"
                    data-placement="bottom"
                    title="Tooltip on bottom"
                  ></i>
                </small>
              </h4>
            </div>
            <div className="col-md-12 px-3">
              <div className="row justify-content-center">
                {included.map((item, index) => {
                  return this._renderOutcomes(item, index)
                })}
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <div className="d-flex justify-content-center my-5">
                {/* <button
                  className="btn btn-sm btn-danger text-white fw-600 ml-4"
                  type="button"
                  onClick={openModal}
                >
                  <FormattedMessage
                    id="app.kit.try_it"
                    defaultMessage="Try it!"
                  />
                </button> */}
              </div>
            </div>
          </div>
        </div>
      </>
    )
  }
}

export default KitInformation
