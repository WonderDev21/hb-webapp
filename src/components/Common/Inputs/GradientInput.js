import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Select from 'react-select'
import chroma from 'chroma-js'
import makeAnimated from 'react-select/animated'

import classes from './GradientInput.module.scss'
const tagsOptions = [
  { value: 'html', label: '#HTML', color: '#ff5198' },
  { value: 'css', label: '#CSS', color: '#ff5198' },
  { value: 'js', label: '#JavaScript', color: '#ff5198' },
  { value: 'ruby', label: '#Ruby on Rails', color: '#ff5198' },
  { value: 'rwd', label: '#RWD', color: '#ff5198' },
  { value: 'datad3', label: '#data D3', color: '#ff5198' },
  { value: 'design', label: '#Design', color: '#ff5198' },
  { value: 'r', label: '#R', color: '#f76b1c' },
  { value: 'mysql', label: '#MySQL', color: '#f76b1c' },
  { value: 'python', label: '#Python', color: '#429321' },
  { value: 'scala', label: '#Scala', color: '#429321' },
  { value: 'spark', label: '#Spark', color: '#429321' },
  { value: 'storytelling', label: '#storytelling', color: '#212693' }
]

class GradientInput extends Component {
  static propTypes = {
    inputType: PropTypes.string.isRequired,
    label: PropTypes.any.isRequired,
    name: PropTypes.string.isRequired,
    type: PropTypes.string,
    value: PropTypes.string,
    defaultValue: PropTypes.any,
    selectOptions: PropTypes.array,
    onChange: PropTypes.func,
    id: PropTypes.string
  }

  render() {
    const {
      props: {
        inputType,
        label,
        name,
        type,
        value,
        defaultValue,
        selectOptions,
        onChange,
        id
      }
    } = this
    let inputElement = null

    const animatedComponents = makeAnimated()
    const regularStyles = {
      control: styles => ({
        ...styles,
        backgroundColor: 'transparent',
        height: '52px',
        borderRight: '1px solid #3023ae',
        borderTop: '1px solid transparent',
        borderLeft: '1px solid #c86dd7',
        borderBottom: '1px solid transparent',
        borderImage: 'linear-gradient(to right, #c86dd7 0%, #3023ae 100%)',
        borderImageSlice: '1'
      }),
      option: () => ({
        color: 'white',
        backgroundColor: '#111529',
        padding: 12,
        borderBottom: 'solid 1px rgba(255, 255, 255, 0.1)'
      }),
      menu: base => ({
        ...base,
        borderRadius: 0,
        marginTop: 0
      }),
      menuList: () => ({
        padding: 0
      }),
      singleValue: base => ({
        ...base,
        color: 'white'
      })
    }
    const colourStyles = {
      control: styles => ({
        ...styles,
        backgroundColor: 'transparent',
        height: '52px',
        borderRight: '1px solid #3023ae',
        borderTop: '1px solid transparent',
        borderLeft: '1px solid #c86dd7',
        borderBottom: '1px solid transparent',
        borderImage: 'linear-gradient(to right, #c86dd7 0%, #3023ae 100%)',
        borderImageSlice: '1'
      }),
      menu: base => ({
        ...base,
        borderRadius: 0,
        marginTop: 0
      }),
      menuList: base => ({
        ...base,
        padding: 0
      }),
      option: (styles, { data, isFocused, isSelected }) => {
        const color = chroma(data.color)
        return {
          ...styles,
          backgroundColor: isSelected
            ? data.color
            : isFocused
            ? color.alpha(0.1).css()
            : '#111529',
          color: isSelected ? 'white' : data.color,
          cursor: 'default',

          ':active': {
            ...styles[':active'],
            backgroundColor: isSelected ? data.color : color.alpha(0.3).css()
          }
        }
      },
      multiValue: (styles, { data }) => {
        const color = chroma(data.color)
        return {
          ...styles,
          backgroundColor: color.alpha(0.9).css(),
          borderRadius: '10px'
        }
      },
      multiValueLabel: styles => ({
        ...styles,
        color: 'white'
      }),
      multiValueRemove: (styles, { data }) => ({
        ...styles,
        color: data.color,
        ':hover': {
          backgroundColor: data.color,
          color: 'white'
        }
      })
    }

    switch (inputType) {
      case 'input':
        inputElement = (
          <input
            className={classes.inputRainbow}
            placeholder={label}
            type={type}
            defaultValue={defaultValue}
            onChange={onChange}
            name={name}
          />
        )
        break
      case 'textarea':
        inputElement = (
          <textarea
            className={`${classes.inputRainbow} ${classes.textareaModifier}`}
            placeholder={label}
            name={name}
            onChange={onChange}
            defaultValue={defaultValue}
          />
        )
        break
      case 'select':
        inputElement = <Select options={selectOptions} styles={regularStyles} />
        break
      case 'select-with-icons':
        inputElement = <Select options={selectOptions} styles={regularStyles} />
        break
      case 'multiple':
        let baseTags = tagsOptions
        const values =
          defaultValue &&
          defaultValue
            .replace(/ /gi, '')
            .split(',')
            .map(x => baseTags.filter(tag => tag.value === x)[0])
        inputElement = (
          <Select
            name={name}
            closeMenuOnSelect={false}
            components={animatedComponents}
            isMulti
            options={selectOptions}
            defaultValue={values}
            styles={colourStyles}
          />
        )
        break
      case 'number':
        inputElement = (
          <input
            className={classes.inputRainbow}
            placeholder={label}
            type={type}
            name={name}
            defaultValue={defaultValue}
            value={value}
            onChange={onChange}
            step={0.01}
            id={id}
          />
        )
        break
      default:
        inputElement = (
          <input
            className={classes.inputRainbow}
            placeholder={label}
            type={type}
            name={name}
            defaultValue={defaultValue}
            value={value}
            onChange={onChange}
          />
        )
    }

    return <>{inputElement}</>
  }
}

export default GradientInput
