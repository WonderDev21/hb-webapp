import React from 'react'
import { Button } from 'reactstrap'

const LearningCard = ({ className, data, onEnterLecture }) => {
  return (
    <div className={`${className} text-center`}>
      <div
        className={`${className}__img d-inline-flex justify-content-center align-items-center`}
      >
        <img src={data.attributes.image_url} alt="category" />
      </div>
      <h5
        className={`${className}__title ${className}__title-${data.status} mt-2`}
      >
        {data.attributes.title}
      </h5>
      <h6
        className={`${className}__subtitle ${className}__subtitle-${data.status} mt-1`}
      >
        0 / {data.relationships.chapters.data.length} chapters
      </h6>
      <Button
        className="btn-primary mt-5"
        block
        color="primary"
        disabled={data.status === 'disable'}
        size="sm"
        onClick={() => onEnterLecture(data.id, data.status)}
      >
        {data.status === 'disable' ? 'Explore Track' : 'Enter'}
      </Button>
    </div>
  )
}

export default LearningCard
