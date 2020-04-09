import React from 'react'
import { FormattedMessage } from 'react-intl'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'
import classes from './PlanSummaryCard.module.scss'

const HeaderPlan = ({ logo, title, subtitle }) => (
  <div className={classes.plan_summary_card_header}>
    <img
      className={`d-block mx-auto ${classes.logo}`}
      src={logo}
      alt="hearthbit logo"
    />
    <p className={classes.title}>
      {title}
    </p>
    <p className={classes.subtitle}>
      {subtitle}
    </p>
  </div>
)

const BodyPlan = ({ characteristicsList }) => (
  <div className={classes.plan_summary_card_body}>
    {
      characteristicsList.map(({ text, translateid, isChecked }, index) => {
        const typeOfElement = isChecked ? classes.normal : classes.gray

        return (
          <p key={index} className={typeOfElement}> {/* eslint-disable-line no-unused-expressions */}
            {
              isChecked && <FontAwesomeIcon color="#7ed321" icon={faCheck} />
            }
            <FormattedMessage
              defaultMessage={text}
              id={translateid}
            />
          </p>
        )
      })
    }
  </div>
)

export const PlanSummaryCard = ({
  logo,
  title,
  subtitle,
  characteristicsList = [],
  footer
}) => (
  <div className={classes.plan_summary_card}>
    <HeaderPlan logo={logo} title={title} subtitle={subtitle} />
    <BodyPlan characteristicsList={characteristicsList} />
    <div className={`mt-4`}>
      {footer}
    </div>
  </div>
)
