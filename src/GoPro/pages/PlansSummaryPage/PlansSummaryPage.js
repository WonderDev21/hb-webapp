import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { FormattedMessage } from 'react-intl'
import { Row, Col } from 'react-bootstrap'
import PropTypes from 'prop-types'
import TeacherHeader from '../../../components/Common/Header/TeacherHeader/TeacherHeader'
import { PlanSummaryCard } from '../../components/PlanSummaryCard'
import {
    getFreeCharacteristicsList,
    getProCharacteristicsList
} from '../../services/plans'
import whiteLogo from '../../../assets/img/logo_white.svg'
import orangeLogo from '../../../assets/img/logo-ico.svg'

import './PlansSummaryPage.scss'

const PlansSummaryPage = ({ history }) => {
    const [freeCharacteristicsList, setFreeCharacteristicsList] = useState([])
    const [proCharacteristicsList, setProCharacteristicsList] = useState([])

    useEffect(() => {
        setFreeCharacteristicsList(getFreeCharacteristicsList())
        setProCharacteristicsList(getProCharacteristicsList())
    }, [])

    return (
        <>
            <TeacherHeader type="pro" />
            <div className="PlansSummaryPage">
                <Row>
                    <Col>
                        <Link
                            to="/teacher/dashboard"
                            className="PlansSummaryPage__backToBtn"
                        >
                            <FormattedMessage
                                id="app.plans.link.back"
                                defaultMessage="Back to dashboard"
                            />
                        </Link>
                    </Col>
                </Row>

                <Row className="justify-content-center mt-5">
                    <Col lg={6} md={6} xl={4}>
                        <PlanSummaryCard
                            logo={whiteLogo}
                            title={
                                <FormattedMessage id="common.free" defaultMessage="FREE" />
                            }
                            subtitle={
                                <FormattedMessage
                                    id="app.plans.free.title"
                                    defaultMessage="1 teachers, unlimited students"
                                />
                            }
                            characteristicsList={freeCharacteristicsList}
                            footer={
                                <button className={`d-block mx-auto btnGray`}>
                                    <FormattedMessage
                                        id="app.plans.btn.current.name"
                                        defaultMessage="Your current plan"
                                    />
                                </button>
                            }
                        />
                    </Col>
                    <Col lg={6} md={6} xl={4} className="PlansSummaryPage__card">
                        <PlanSummaryCard
                            logo={orangeLogo}
                            title={
                                <FormattedMessage
                                    id="common.teachers.pro"
                                    defaultMessage="Teachers PRO"
                                />
                            }
                            subtitle={
                                <FormattedMessage
                                    id="app.plans.free.title"
                                    defaultMessage="1 teachers, unlimited students"
                                />
                            }
                            characteristicsList={proCharacteristicsList}
                            footer={
                                <button
                                    className={`d-block mx-auto btnOrange`}
                                    onClick={() => history.push('/checkout')}
                                >
                                    <FormattedMessage
                                        id="app.plans.btn.pro.name"
                                        defaultMessage="Pay $9.99/MO"
                                    />
                                </button>
                            }
                        />
                    </Col>
                </Row>
            </div>
        </>
    )
}

PlansSummaryPage.propTypes = {
    history: PropTypes.shape({
        push: PropTypes.func.isRequired
    })
}

export default PlansSummaryPage
