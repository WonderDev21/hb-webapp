import React, { useState } from 'react'

import { Card, CardHeader, CardBody, Row, Col, Button } from 'reactstrap'
import LearningChapterItem from '../../../components/Students/Learning/LeaningChapterItem'
import mapTemplate from '../../../assets/img/maptemplate.png'

const chapterList = [
  {
    name: 'Variables & Functions',
    time: '1:57',
    status: 'complete'
  },
  {
    name: 'CSS3 Syntax',
    time: '1:57',
    status: 'active'
  },
  {
    name: 'Conditionals',
    time: '1:57',
    status: 'default'
  },
  {
    name: 'CSS3 Animations',
    time: '1:57',
    status: 'default'
  },
  {
    name: 'CSS3 Animations',
    time: '1:57',
    status: 'default'
  },
  {
    name: 'CSS3 Animations',
    time: '1:57',
    status: 'default'
  },
  {
    name: 'A strong recap',
    time: '1:57',
    status: 'default'
  },
  {
    name: 'How to be a maker',
    time: 'test',
    status: 'default'
  }
]

const LectureChapter = ({ onViewTest, data, currentChapter }) => {
  const [viewMode, setViewMode] = useState(true)

  const { attributes, id } = data[currentChapter - 1]

  return (
    <div className="lecture__chapter mt-5">
      <Row className="justify-content-center">
        <Col lg={8}>
          <Card>
            <CardHeader className="d-flex justify-content-between align-items-center">
              <h4>
                Chapter {id}: {attributes.title}
              </h4>
              <Button
                color="primary"
                size="sm"
                onClick={() => setViewMode(!viewMode)}
              >
                {viewMode ? 'View as map' : 'View as list'}
              </Button>
            </CardHeader>
            <CardBody>
              {viewMode ? (
                data.map((item, index) => {
                  return (
                    <LearningChapterItem
                      data={item}
                      className="lecture__chapter__item"
                      key={index}
                      chapterIndex={index + 1}
                      onViewTest={onViewTest}
                      currentChapter={currentChapter}
                    />
                  )
                })
              ) : (
                <div className="text-center">
                  <img src={mapTemplate} alt="maptemplate" />
                  <Row className="mt-4 align-items-center">
                    <Col xs="auto">
                      <h5>Test first chpater</h5>
                    </Col>
                    <Col>
                      <Button
                        color="secondary"
                        className="float-right"
                        size="sm"
                        onClick={onViewTest}
                      >
                        Take test
                      </Button>
                    </Col>
                  </Row>
                </div>
              )}
            </CardBody>
          </Card>
        </Col>
      </Row>
    </div>
  )
}

export default LectureChapter
