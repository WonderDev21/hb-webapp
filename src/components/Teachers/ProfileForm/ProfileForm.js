import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FormattedMessage } from 'react-intl'
import InputText from '../../Common/Inputs/InputText'
import profileDefault from '../../../assets/img/profileDefault.svg'

import classes from './ProfileForm.module.scss'
import Upload from '../../Common/UploadS3/Upload'

const ProfileForm = ({ editUserProfile, user }) => {
  const handleSubmit = event => {
    event.preventDefault()

    let first_name = event.target.firstName.value.trim()
    let last_name = event.target.lastName.value.trim()
    let institution = event.target.institution.value.trim()
    let country = event.target.country.value.trim()
    let city = event.target.city.value.trim()
    let industry = event.target.industry.value.trim()
    let url = event.target.url.value.trim()
    let email = event.target.email.value.trim()

    const data = {
      first_name,
      last_name,
      institution,
      country,
      city,
      industry,
      url,
      email
    }

    for (let propName in data) {
      if (data[propName] === '') {
        delete data[propName]
      }
    }

    editUserProfile(data)
  }

  return (
    <div className={classes.profile__container}>
      <div>
        <div className={classes.form__photo}>
          <img
            src={user.imageUrl ? user.imageUrl : profileDefault}
            alt="User profile"
          />
          <div className="w-100">
            <Upload>
              <button className={`mx-auto mt-4 ${classes.ChangePhoto}`}>
                <FormattedMessage
                  id="app.edit-profile-information.change-photo"
                  defaultMessage="Change photo"
                />
              </button>
            </Upload>
          </div>
        </div>
      </div>
      <div className={classes.form__container}>
        <form onSubmit={handleSubmit}>
          <div className={classes.form__row}>
            <div className={classes.form__group} style={{ width: '50%' }}>
              <label htmlFor="firstName">First name</label>
              <InputText name="firstName" value={user.firstName} />
            </div>
            <div className={classes.form__group} style={{ width: '50%' }}>
              <label htmlFor="lastName">Last name</label>
              <InputText name="lastName" value={user.lastName} />
            </div>
          </div>
          <br />
          <div className={classes.form__row}>
            <div className={classes.form__group} style={{ width: '100%' }}>
              <label htmlFor="email">Email</label>
              <InputText type={'email'} name="email" value={user.email} />
            </div>
          </div>
          <br />
          <div className={classes.form__row}>
            <div className={classes.form__group} style={{ width: '100%' }}>
              <label htmlFor="institution">Institution</label>
              <InputText name="institution" value={user.institution} />
            </div>
          </div>
          <br />
          <div className={classes.form__row}>
            <div className={classes.form__group} style={{ width: '50%' }}>
              <label htmlFor="country">Country</label>
              <InputText name="country" value={user.country} />
            </div>
            <div className={classes.form__group} style={{ width: '50%' }}>
              <label htmlFor="city">City</label>
              <InputText name="city" value={user.city} />
            </div>
          </div>
          <br />
          <div className={classes.form__row}>
            <div className={classes.form__group} style={{ width: '50%' }}>
              <label htmlFor="industry">Industry</label>
              <InputText name="industry" value={user.industry} />
            </div>
            <div className={classes.form__group} style={{ width: '50%' }}>
              <label htmlFor="url">Url</label>
              <InputText name="url" value={user.url} />
            </div>
          </div>
          <br />
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <Link to="/teacher/dashboard">
              <button class="btn btn-sm fw-600 bg-gunmetal text-white my-4">
                <span>Back to dashboard</span>
              </button>
            </Link>
            <button
              class="btn btn-sm fw-600 bg-blue-dark text-white my-4"
              style={{ marginLeft: '20px' }}
              type="submit"
            >
              <span>Save changes</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default ProfileForm
