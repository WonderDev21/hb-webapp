import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { FormattedMessage } from 'react-intl'

import classes from './TicketForm.module.scss'

class TicketForm extends Component {
  constructor() {
    super()
    this.state = {
      contactLabel: 'Phone'
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(event) {
    this.setState({
      contactLabel: event.target.value === 'phone' ? 'Phone' : 'Email'
    })
  }

  render() {
    return (
      <>
        <div className={`${classes.TicketContainer}`}>
          <div className="row justify-content-center">
            <div className="col-11 col-md-7 border border-white">
              <div className="card card-login mt-5">
                <div className="card-header bg-dark-purple py-3 form-group">
                  <div className="card-header bg-blue-dark py-3">
                    <h4 className="text-white text-center">
                      <strong>Send us Support Ticket</strong>
                    </h4>
                  </div>
                </div>
                <div className={`card-body ${classes.ticket_form_container}`}>
                  <div className="row justify-content-center">
                    <form onSubmit={this.props.handleSubmit} id="ticket_form">
                      <div className="form-group row">
                        <label className="col-sm-6 col-form-label">
                          What's your issue about?
                        </label>
                        <div class="col-sm-6">
                          <select
                            name="ticket[issue_type]"
                            className="browser-default custom-select form-control"
                          >
                            <option>Marker Kits content</option>
                          </select>
                        </div>
                      </div>
                      <div className="form-group row">
                        <label className="col-sm-8 col-form-label">
                          How would you like to be contacted?
                        </label>
                        <div class="col-sm-4">
                          <input
                            type="radio"
                            name="ticket[contact_type]"
                            value="phone"
                            checked={this.state.contactLabel === 'Phone'}
                            onChange={this.handleChange}
                          />
                          <label className={`${classes.radio_text}`}>
                            Phone
                          </label>
                          <input
                            type="radio"
                            name="ticket[contact_type]"
                            className={`${classes.radio_text}`}
                            checked={this.state.contactLabel === 'Email'}
                            onChange={this.handleChange}
                            value="email"
                          />
                          <label className={`${classes.radio_text}`}>
                            Email
                          </label>
                        </div>
                      </div>
                      <div className="form-group row">
                        <label className="col-sm-4 col-form-label">
                          {this.state.contactLabel}
                        </label>
                        <div class="col-sm-8">
                          <input
                            type="text"
                            name="ticket[email]"
                            className="form-control"
                            required
                          />
                        </div>
                      </div>
                      <div className="form-group row">
                        <label className="col-sm-4 col-form-label">
                          Please, add a subject
                        </label>
                        <div class="col-sm-8">
                          <input
                            type="text"
                            name="ticket[subject]"
                            className="form-control"
                            required
                          />
                        </div>
                      </div>
                      <div className="form-group row">
                        <label className="col-sm-4 col-form-label">
                          Describe your problem
                        </label>
                        <div class="col-sm-8">
                          <textarea
                            name="ticket[problem]"
                            rows="4"
                            cols="30"
                            className="form-control"
                            required
                          ></textarea>
                        </div>
                      </div>
                      <div className="form-group row">
                        <label className="col-sm-4 col-form-label">
                          Need to add a screenshot?
                        </label>
                        <div class="col-sm-8">
                          <div className={`${classes.upload_btn_wrapper}`}>
                            <button className={`${classes.btn_custom}`}>
                              Add File
                            </button>
                            <input type="file" name="ticket[file]" />
                          </div>
                        </div>
                      </div>
                      <div class="col text-center">
                        <Link to="/student/tickets">
                          <button
                            className={`btn btn-auth px-4 text-uppercase ${classes.form_button}`}
                          >
                            <FormattedMessage
                              id="app.ticket.cancel"
                              defaultMessage="Cancel"
                            />
                          </button>
                        </Link>
                        <button
                          type="submit"
                          className={`btn btn-auth px-4 text-uppercase ${classes.form_button}`}
                        >
                          <FormattedMessage
                            id="app.ticket.send_ticket"
                            defaultMessage="Send Ticket"
                          />
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    )
  }
}

export default TicketForm
