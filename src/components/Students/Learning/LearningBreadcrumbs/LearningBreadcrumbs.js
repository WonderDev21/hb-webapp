import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from 'reactstrap'

import goBack from '../../../../assets/img/go-back.png'

const LearningBreadcrumbs = ({ className, pageName, link, showSchoolCode }) => {
  return (
    <div className={`${className} d-flex justify-content-between mt-3`}>
      <div className="d-flex align-items-center">
        {link ? (
          <>
            <Link to={link} className="d-flex align-items-center">
              <img src={goBack} alt="goBack" />
              <h4 className="ml-2">Learning tracks</h4>
            </Link>
          </>
        ) : (
          <h4>Learning tracks</h4>
        )}

        <h6 className="ml-3 mt-2">{pageName}</h6>
      </div>
      {showSchoolCode && (
        <Link to="/student/learn/verification">
          <Button color="primary" size="sm">
            School Code
          </Button>
        </Link>
      )}
    </div>
  )
}

export default LearningBreadcrumbs
