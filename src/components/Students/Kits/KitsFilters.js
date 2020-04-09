import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';

import classes from './KitsFilters.module.scss';

class KitsFilters extends Component {
  state = {
    ageIsOpen: false,
    industryIsOpen: false,
    difficultyIsOpen: false,
    orderByIsOpen: false
  }

  openAge = () => this.setState({ ageIsOpen: !this.state.ageIsOpen });
  openIndustry = () => this.setState({ industryIsOpen: !this.state.industryIsOpen });
  openDifficulty = () => this.setState({ difficultyIsOpen: !this.state.difficultyIsOpen });
  openOrderBy = () => this.setState({ orderByIsOpen: !this.state.orderByIsOpen });
  
  render() {

    const ageClass = `dropdown-menu${this.state.ageIsOpen ? " show" : ""}`;
    const industryClass = `dropdown-menu${this.state.industryIsOpen ? " show" : ""}`;
    const difficultyClass = `dropdown-menu${this.state.difficultyIsOpen ? " show" : ""}`;
    const orderByClass = `dropdown-menu${this.state.orderByIsOpen ? " show" : ""}`;

    const kitsAgesDropdown = this.props.kitsAges
    let renderKitsAgesDropdown = kitsAgesDropdown.map( item =>{  
      return (
        <div
          key={item}
          className={(this.props.activeFilter === item ?  classes.Active : '')}
        >
          <button 
            className={classes.Dropdown}
            type="button"
            onClick={() => this.props.sortByAge(item)}
          >
            + {item}
          </button>
          <div className={classes.Line}></div>
        </div>
    )})

    const kitsIndustriesDropdown = this.props.kitsIndustries
    let renderKitsIndustriesDropdown = kitsIndustriesDropdown.map( item =>{  
      return (
        <div
          key={item}
          className={(this.props.activeFilter === item ?  classes.Active : '')}
        >
          <button className={classes.Dropdown} type="button" onClick={() => this.props.sortByIndustry(item)}>{item}</button>
          <div className={classes.Line}></div>
        </div>
    )})

    return (
      <div className="col-12">
        <div className={`nav nav-filter ${classes.Left}`}>
          <div className="nav-item dropdown">
            <div className='btn-group' onClick={this.openAge}>
              <p className="text-blue-dark nav-link"><FormattedMessage id="app.filters.ages" defaultMessage="ages" />
                <span className="dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"></span>
              </p>
              <div className={ageClass}>
                {renderKitsAgesDropdown}
              </div>
            </div>
          </div>
        </div>
        <div className={`nav nav-filter ${classes.Left}`}>
          <div className="nav-item dropdown">
            <div className='btn-group' onClick={this.openIndustry}>
              <p className="text-blue-dark nav-link"><FormattedMessage id="app.filters.industries" defaultMessage="industries" />
                <span className="dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"></span>
              </p>
              <div className={industryClass}>
                {renderKitsIndustriesDropdown}
              </div>
            </div>
          </div>
        </div>
        <div className={`nav nav-filter ${classes.Left}`}>
          <div className="nav-item dropdown">
            <div className='btn-group' onClick={this.openDifficulty}>
              <p className="text-blue-dark nav-link"><FormattedMessage id="app.filters.difficulty" defaultMessage="difficulty" />
                <span className="dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"></span>
              </p>
              <div className={difficultyClass}>
                <button 
                  className={`${classes.Dropdown}` + (this.props.activeFilter === 1 ? ` ${classes.ActiveDificulty}` : "")} 
                  type="button" 
                  onClick={() => this.props.sortByDifficulty(1)}
                >
                  <FormattedMessage id="app.filters.beginner" defaultMessage="beginner" />
                  <div className={classes.Beginner}>
                    <i className={`fa fa-circle ${classes.Circle}`}></i>
                  </div>
                </button>
                <div className={classes.Line}></div>
                <button className={`${classes.Dropdown}` + (this.props.activeFilter === 2 ? ` ${classes.ActiveDificulty}` : "")} type="button" onClick={() => this.props.sortByDifficulty(2)}><FormattedMessage id="app.filters.Rocky" defaultMessage="Rocky" /></button>
                <div className={classes.Line}></div>
                <button className={`${classes.Dropdown}` + (this.props.activeFilter === 3 ? ` ${classes.ActiveDificulty}` : "")} type="button" onClick={() => this.props.sortByDifficulty(3)}><FormattedMessage id="app.filters.Medium" defaultMessage="Medium" /></button>
                <div className={classes.Line}></div>
                <button className={`${classes.Dropdown}` + (this.props.activeFilter === 4 ? ` ${classes.ActiveDificulty}` : "")} type="button" onClick={() => this.props.sortByDifficulty(4)}><FormattedMessage id="app.filters.Advanced" defaultMessage="Advanced" /></button>
                <div className={classes.Line}></div>
                <button className={`${classes.Dropdown}` + (this.props.activeFilter === 5 ? ` ${classes.ActiveDificulty}` : "")} type="button" onClick={() => this.props.sortByDifficulty(5)}>
                  <FormattedMessage id="app.filters.master" defaultMessage="master" />
                  <div className={classes.Master}>
                    <i className={`fa fa-circle ${classes.Circle} pr-1`}></i>
                    <i className={`fa fa-circle ${classes.Circle} pr-1`}></i>
                    <i className={`fa fa-circle ${classes.Circle} pr-1`}></i>
                    <i className={`fa fa-circle ${classes.Circle} pr-1`}></i>
                    <i className={`fa fa-circle ${classes.Circle}`}></i>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className={`nav nav-filter ${classes.Last}`}>
          <div className="nav-item dropdown">
            <div className='btn-group' onClick={this.openOrderBy}>
              <p className="text-blue-dark nav-link"><FormattedMessage id="app.filters.order_by" defaultMessage="order by" />
                <span className="dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"></span>
              </p>
              <div className={orderByClass}>
                <div className={(this.props.activeFilter === 'abc' ?  classes.Active : '')}>
                  <button 
                    className={classes.Dropdown}
                    type="button"
                    onClick={this.props.sortKits}
                  >
                    <FormattedMessage id="app.filters.name_a_z" defaultMessage="Name(A - Z)" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}


export default KitsFilters;
