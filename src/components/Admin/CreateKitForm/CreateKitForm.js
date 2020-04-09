import React from 'react';
import { Link } from 'react-router-dom';

const CreateKitForm = (props) => {

  const handleSubmit = (event) => {
    event.preventDefault();

    let title =  event.target[2].value.trim()
    let kitDescription =  event.target[3].value.trim()
    let kitIndustry =  event.target[4].value.trim()
    let kitAge =  event.target[5].value.trim()
    let kitDifficulty =  event.target[6].value.trim()
    // let kitPrice =  event.target[7].value.trim()
    let kitBackground =  event.target[8].value.trim()
    let videoUrl =  event.target[9].value.trim()
    let imageUrl =  event.target[10].value.trim()
    
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

    props.setKit(kitData)
  }

  return (
    <>
      <div className="bg-blue-dark bg"></div>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12">
            <Link to='/admin/dashboard'>
              <h3 className="text-white fw-600 mt-3 mt-sm-5 mb-5">
                <i className="fa fa-chevron-circle-left" /> Back to main dashboard
              </h3>
            </Link>
          </div>
          <div className="w-100"></div>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="row justify-content-center">
            <div className="col-xl-4 col-lg-5 col-md-6">
              <div className="change-image py-4 mt-4">
                <div className="row justify-content-center">
                  <div className="col-10">
                    <input className="d-block mx-auto img-fluid mt-4 text-white" type="file" alt="Upload or drop your image here" name="image" />
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
                    <input type="text" className="form-control" name="title" />
                  </div>
                  <div className="form-group">
                    <label className="text-white">Kit’s description (140 characters max):</label>
                    <textarea className="form-control" name="kitDescription" rows="3" placeholder="Write here…" />
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="form-group">
                    <label className="text-white">Kit’s industry</label>
                    <input type="text" className="form-control" name="kitIndustry" placeholder="eg.  Emotion tech" />
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="form-group">
                    <label className="text-white">Age level (minimum)</label>
                    <input type="text" className="form-control" name="kitAge" placeholder="eg. 5" />
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="form-group">
                    <label className="text-white">Difficulty</label>
                    <input type="text" className="form-control" name="kitDifficulty" placeholder="eg. 4" />
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="form-group">
                    <label className="text-white">Price in USD</label>
                    <input type="text" className="form-control" name="kitPrice" placeholder="eg. 20.50" />
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="form-group">
                    <label className="text-white">Background color</label>
                    <input type="text" className="form-control" name="kitBackground" placeholder="eg. #00FF00" />
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="form-group">
                    <label className="text-white">Video Url</label>
                    <input type="text" className="form-control" name="videoUrl" placeholder="eg. https://www.youtube.com/myvideo" />
                  </div>
                </div>
                <div className="col-sm-12">
                  <div className="form-group">
                    <label className="text-white">Image Url</label>
                    <input type="text" className="form-control" name="imageUrl" placeholder="eg. https://www.s3.com/image" />
                  </div>
                </div>
              </div>
              <div className="w-100 d-flex justify-content-center mb-5 mt-5">
                <button type="submit" className="btn btn-secondary float-right mx-2" >Save for later</button>
                <button type="submit"className="btn btn-light mx-2 px-5" onClick={props.handlePublished}>Publish</button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}

export default CreateKitForm;
