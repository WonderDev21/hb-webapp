import React from 'react';

import classes from './DeleteKitModal.module.scss';

const DeleteKitModal = (props) => {

  const handleDeleteKit = () => {
    props.deleteKit(props.kitId)
    props.closeModal()
  }

  return (
    <div className={classes.ModalBg}>
      <div className="container-fluid">
        <div className="row justify-content-center">
          <div className="col-sm-7">
            <img className={`d-block mx-auto img-fluid ${classes.KitPicture}`} src={props.imageUrl} alt="" />
            <h4 className="text-gunmetal text-center">Are you sure you want <br />
              to delete this kit?
            </h4>
          </div>
        </div>
      </div>
      <div className="w-100 d-flex justify-content-center mt-5">
        <button type="button" className="btn btn-secondary float-right mx-2" data-dismiss="modal" onClick={props.closeModal}>Cancel</button>
        <button type="button" className="btn btn-primary mx-2" data-dismiss="modal" onClick={handleDeleteKit}>Delete maker kit</button>
      </div>
    </div>
  );
}

export default DeleteKitModal;
