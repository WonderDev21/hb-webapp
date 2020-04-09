import React from 'react'
import { Link } from 'react-router-dom'
import { FormattedMessage } from 'react-intl'
import classes from './EditKitForm.module.scss'
import KitVideo from './KitVideo'
import KitOutcome from './KitOutcome'
import KitAddVideo from './KitAddVideo'
import health1 from '../../../assets/svg/Health_1.svg'
import health2 from '../../../assets/svg/Health_2.svg'
import health3 from '../../../assets/svg/Health_3.svg'
import health4 from '../../../assets/svg/Health_4.svg'
import health5 from '../../../assets/svg/Health_5.svg'
import DefaultIcon from '../../../assets/img/logo-ico.svg'

const EditKitForm = props => {
  const handleSubmit = event => {
    event.preventDefault()

    let title = event.target[2].value.trim()
      ? event.target[2].value.trim()
      : props.title
    let kitDescription = event.target[3].value.trim()
      ? event.target[3].value.trim()
      : props.description
    let kitIndustry = event.target[4].value.trim()
      ? event.target[4].value.trim()
      : props.industry
    let kitAge = event.target[5].value.trim()
      ? event.target[5].value.trim()
      : props.age
    let kitDifficulty = event.target[6].value.trim()
      ? event.target[6].value.trim()
      : props.difficulty
    // let kitPrice =  event.target[7].value.trim() ? event.target[7].value.trim() : props.price
    let kitBackground = event.target[8].value.trim()
      ? event.target[8].value.trim()
      : props.background
    let videoUrl = event.target[9].value.trim()
      ? event.target[9].value.trim()
      : props.video
    let imageUrl = event.target[10].value.trim()
      ? event.target[10].value.trim()
      : props.image

    const kitData = {
      data: {
        type: 'kit',
        attributes: {
          name: title,
          description: kitDescription,
          age: kitAge,
          difficulty: kitDifficulty,
          industry: kitIndustry,
          image_url: imageUrl,
          video_url: videoUrl,
          published: props.published,
          background: kitBackground
        }
      }
    }

    props.editKit(kitData)
  }

  const handleOpenModal = event => {
    this.props.openModal()
  }

  return (
    <>
      <div className="bg-blue-dark bg"></div>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12">
            <Link to="/admin/dashboard">
              <h3 className="text-white fw-600 mt-3 mt-sm-5 mb-5">
                <i className="fa fa-chevron-circle-left"></i> Back to main
                dashboard
              </h3>
            </Link>
          </div>
          <div className="w-100"></div>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="row justify-content-center">
            <div className="col-xl-4 col-lg-5 col-md-6">
              <div
                className="change-image py-4 mt-4"
                style={{ backgroundColor: '#' + props.background }}
              >
                <div className="row justify-content-center">
                  <div className="col-10">
                    <img
                      className={classes.KitPicture}
                      src={props.image}
                      alt="kit"
                    />
                    <input
                      className="d-block mx-auto img-fluid mt-4 text-white"
                      type="file"
                      alt="Upload or drop your image here"
                      name="image"
                      id="kit-image"
                    />
                    <button className="btn btn-block btn-danger mt-4">
                      <i className="fa fa-upload"></i> Upload kit image
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-7 col-lg-7 col-md-6">
              <div className="row">
                <div className="col-sm-12">
                  <div className="form-group">
                    <label className="text-white">Title</label>
                    <input
                      type="text"
                      className="form-control"
                      name="title"
                      defaultValue={props.name}
                    />
                  </div>
                  <div className="form-group">
                    <label className="text-white">
                      Kit’s description (140 characters max):
                    </label>
                    <textarea
                      className="form-control"
                      name="kitDescription"
                      value={props.description}
                    />
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="form-group">
                    <label className="text-white">Kit’s industry</label>
                    <input
                      type="text"
                      className="form-control"
                      name="kitIndustry"
                      placeholder="eg.  Emotion tech"
                      defaultValue={props.industry}
                    />
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="form-group">
                    <label className="text-white">Age level (minimum)</label>
                    <input
                      type="text"
                      className="form-control"
                      name="kitAge"
                      placeholder="eg. 5"
                      defaultValue={props.age}
                    />
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="form-group">
                    <label className="text-white">Difficulty</label>
                    <input
                      type="text"
                      className="form-control"
                      name="kitDifficulty"
                      placeholder="eg. 4"
                      defaultValue={props.difficulty}
                    />
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="form-group">
                    <label className="text-white">Price in USD</label>
                    <input
                      type="text"
                      className="form-control"
                      name="kitPrice"
                      placeholder="eg. 20.50"
                      defaultValue={props.price}
                    />
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="form-group">
                    <label className="text-white">Background color</label>
                    <input
                      type="text"
                      className="form-control"
                      name="kitBackground"
                      placeholder="eg. #00FF00"
                      defaultValue={props.background}
                    />
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="form-group">
                    <label className="text-white">Video Url</label>
                    <input
                      type="text"
                      className="form-control"
                      id="videoUrl"
                      placeholder="eg. https://www.youtube.com/myvideo"
                      defaultValue={props.video}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-md-12">
              <h4 className="text-white fw-600 my-3">
                <FormattedMessage
                  id="app.kit.learning_videos"
                  defaultMessage="Learning videos"
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
                    style={{
                      color: 'rgba(47,49,59,1)'
                    }}
                  ></i>
                </small>
              </h4>
            </div>
            <div className="col-md-12">
              <div className="row justify-content-start mb-5">
                <KitVideo
                  key="video1"
                  title="Getting started"
                  fileUrl=""
                  time="5"
                />
                <KitVideo key="video2" title="Intro" fileUrl="" time="3" />
                <KitVideo key="video3" title="Basics" fileUrl="" time="9" />
                <KitAddVideo />
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-md-12">
              <h4 className="text-white fw-600 my-3">
                <FormattedMessage
                  id="app.kit.learning_outcomes"
                  defaultMessage="Learning outcomes"
                />
                &nbsp;
                <small>
                  &nbsp;
                  <FormattedMessage
                    id="app.kit.write_top_5_from_maker_kit"
                    defaultMessage="Write top 5 from maker kit"
                  />
                  &nbsp;
                  <span>
                    <i
                      className="fa fa-question-circle"
                      data-toggle="tooltip"
                      data-placement="bottom"
                      title="Tooltip on bottom"
                      style={{
                        color: 'rgba(47,49,59,1)'
                      }}
                    ></i>
                  </span>
                </small>
              </h4>
            </div>
            <div className="col-md-12">
              <div className="row justify-content-center mb-5">
                <KitOutcome title="Being present" imageUrl={health1} />
                <KitOutcome title="Self-awareness" imageUrl={DefaultIcon} />
                <KitOutcome title="Breathing" imageUrl={DefaultIcon} />
                <KitOutcome title="Open mindness" imageUrl={health4} />
                <KitOutcome title="Brave gratitude" imageUrl={health5} />
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-md-12 p-0">
              <div className="w-100 d-flex justify-content-center mb-5 mt-5">
                <button
                  type="submit"
                  className="btn btn-secondary float-right mx-2"
                >
                  Save for later
                </button>
                <button
                  type="submit"
                  className="btn btn-light mx-2 px-5"
                  onClick={props.handlePublished}
                >
                  Publish
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  )
}

export default EditKitForm
