import React, { Component } from 'react';
import './Languages.scss'

class Languages extends Component {
  state = {
    clicked: false
  }

  handleStyle = () => {
    const clickedTrue = true
    this.setState({ clicked: clickedTrue })
  }

  render() {
    const ApiLanguages = this.props.languages
    
    let LanguageFalse = ApiLanguages.map( item =>{
      return(
        <div className="col-2" key={item.id}>
          <input
            type='radio'
            name='optradio'
            id={item.attributes.name}
            value={item.id}
            onClick={this.handleStyle}
            onChange={this.props.handleValue}
          />
          <label style={{ opacity: 1 }} htmlFor={item.attributes.name} className='check-label'>
            <img src={item.attributes.image_url} alt={item.attributes.name} />
          </label>
        </div>
      )
    })

    let LanguageTrue = ApiLanguages.map( item =>{
      return(
        <div className="col-2" key={item.id}>
          <input
            type='radio'
            name='optradio'
            id={item.attributes.name}
            value={item.id}
            onClick={this.handleStyle}
            onChange={this.props.handleValue}
          />
          <label htmlFor={item.attributes.name} className='check-label'>
            <img src={item.attributes.image_url} alt={item.attributes.name} />
          </label>
          <p className="selected-name">{item.attributes.name}</p>
        </div>
      )
    })

    if (!this.state.clicked) {
      return (
        <>
          {LanguageFalse}
        </>
      );
    } else {
      return (
        <>
          {LanguageTrue}
        </>
      );
    }
  }
}

export default Languages;
