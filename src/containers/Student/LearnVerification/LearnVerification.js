import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { Jumbotron, Button, Row, Col } from 'reactstrap'
import VerificationInput from 'react-verification-input'
import { FaFacebookSquare, FaTwitter } from 'react-icons/fa'
import LearningBreadcrumbs from '../../../components/Students/Learning/LearningBreadcrumbs'
import {
  fetchJoinSchoolCode,
  joinSchoolCodeReset
} from '../../../store/reducers/learning'

import { hasSucceeded, hasFailed } from '../../../lib/state'

import CustomModal from '../../../components/Common/CustomModal'
import companylogo from '../../../assets/img/companylogo.png'
import './LearnVerification.scss'
const LearnVerification = () => {
  const [visible, setVisible] = useState(false)
  const [inputRef, setInfputRef] = useState(null)

  const userId = useSelector(state => state.user.userId)
  const join_school_state = useSelector(
    state => state.learningReducer.join_school_state
  )

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(joinSchoolCodeReset())
  }, [])

  const handleChangeCodeVerify = ref => {
    setInfputRef(ref)
  }

  const onClickJoinClass = () => {
    dispatch(fetchJoinSchoolCode(userId, { school_code: inputRef.value }))
  }
  return (
    <>
      <LearningBreadcrumbs
        className="learntab__breadcrumbs"
        pageName="Redeem school code"
        link="/student/learn/dashboard"
        showSchoolCode={false}
      />
      <div className="learnverification mt-5">
        <Row className="justify-content-center">
          <Col lg={8}>
            <Jumbotron>
              <h2 className="font-weight-bold text-center">
                Join your classmates
              </h2>
              <h4 className="text-center">
                Enter the code shared by your teacher to access premium learning
                content.
              </h4>
              <VerificationInput
                removeDefaultStyles
                length={6}
                container={{
                  className: 'container'
                }}
                characters={{
                  className: 'characters'
                }}
                character={{
                  className: 'character',
                  classNameInactive: 'character--inactive',
                  classNameSelected: 'character--selected'
                }}
                placeholder=""
                getInputRef={handleChangeCodeVerify}
              />
              <div className="d-flex justify-content-center mt-5">
                <CustomModal
                  button={
                    <Button color="danger" onClick={onClickJoinClass}>
                      JOIN CLASS
                    </Button>
                  }
                  visible={hasSucceeded(join_school_state)}
                  toggle={() => setVisible(false)}
                  className="learnverification__modal"
                >
                  <div className="text-center">
                    <img src={companylogo} alt="companylogo" />
                    <h4>Access granted to school content! Well done!</h4>
                    <Row className="mt-4">
                      <Col>
                        <Button className="btn-facebook float-right" size="sm">
                          <FaFacebookSquare color="white" className="mr-2" />{' '}
                          Share the love
                        </Button>
                      </Col>
                      <Col>
                        <Button className="btn-twitter float-left" size="sm">
                          <FaTwitter color="white" className="mr-2" /> Share the
                          love
                        </Button>
                      </Col>
                    </Row>
                    <Link to="/student/learn/dashboard">
                      {' '}
                      <h6 className="mt-5">Continue</h6>
                    </Link>
                  </div>
                </CustomModal>
              </div>
              {hasFailed(join_school_state) && (
                <div className="mt-3">
                  <h6 className="text-center text-danger">
                    Incorrect School Code
                  </h6>
                </div>
              )}
            </Jumbotron>
          </Col>
        </Row>
      </div>
    </>
  )
}

export default LearnVerification
