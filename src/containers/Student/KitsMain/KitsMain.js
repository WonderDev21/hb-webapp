import React, { Component } from 'react'
import { FormattedMessage } from 'react-intl'
import { connect } from 'react-redux'

import * as actions from '../../../store/actions/index'
import StudentHeader from '../../../components/Common/Header/StudentHeader/StudentHeader'
import Kits from '../../../components/Students/Kits/Kits'
import KitsFilters from '../../../components/Students/Kits/KitsFilters'

class KitsMain extends Component {
  componentDidMount = () => {
    this.props.getKits()
    this.props.resetFilters()
  }

  render() {
    const apiKits = this.props.kits.sortedKits.filter(
      kit => kit.attributes.published === true
    )
    let renderApiKits = apiKits.map(item => {
      return (
        <Kits
          key={item.attributes.name}
          imageUrl={item.attributes.image_url}
          name={item.attributes.name}
          age={item.attributes.age}
          industry={item.attributes.industry}
          background={item.attributes.background}
          kitDifficulty={item.attributes.difficulty}
          kitId={item.id}
        />
      )
    })

    return (
      <div style={{ backgroundColor: '#ffffff' }}>
        <StudentHeader active={'kits'} />
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h4 className=" text-blue-dark fw-700 mt-5 mb-4">
                <FormattedMessage
                  id="app.kits.our_kits"
                  defaultMessage="Our kits!"
                />{' '}
                <small>
                  {' '}
                  <FormattedMessage
                    id="app.kits.education_as_a_lifestyle"
                    defaultMessage="Education as a lifestyle"
                  />{' '}
                  <i className="fa fa-question-circle"></i>
                </small>
              </h4>
            </div>
            <KitsFilters
              sortKits={this.props.sortKits}
              sortByDifficulty={this.props.sortByDifficulty}
              kitsAges={this.props.kits.kitAges}
              kitsIndustries={this.props.kits.kitIndustries}
              sortByAge={this.props.sortByAge}
              sortByIndustry={this.props.sortByIndustry}
              activeFilter={this.props.kits.activeFilter}
            />
            <div className="w-100"></div>
            <div className="col-12">
              <h2 className="text-center text-gunmetal fw-600 mt-6">
                <FormattedMessage
                  id="app.kits.top_rated_collection"
                  defaultMessage="TOP-RATED COLLECTION"
                />
              </h2>
            </div>
            <section className="kits mt-5">
              <div className="row">{renderApiKits}</div>
            </section>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    kits: state.kits
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getKits: () => dispatch(actions.getKits()),
    sortKits: () => dispatch(actions.sortKits()),
    sortByDifficulty: num => dispatch(actions.sortByDifficulty(num)),
    sortByAge: num => dispatch(actions.sortByAge(num)),
    sortByIndustry: name => dispatch(actions.sortByIndustry(name)),
    resetFilters: () => dispatch(actions.resetFilters())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(KitsMain)
