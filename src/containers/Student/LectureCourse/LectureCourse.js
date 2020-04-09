import React from 'react'

import LearningVideo from '../../../components/Students/Learning/LearningVideo'
import LectureInfo from '../../../components/Students/Learning/LectureInfo'

const LectureCourse = ({
  onViewChapter,
  data,
  onSelectChapter,
  currentChapter
}) => {
  return (
    <div className="mb-5">
      <LearningVideo
        data={data}
        className="lecture__videosection"
        onSelectChapter={onSelectChapter}
        currentChapter={currentChapter}
      />
      <LectureInfo
        data={data}
        className="lecture__info"
        onViewChapter={onViewChapter}
        currentChapter={currentChapter}
      />
    </div>
  )
}

export default LectureCourse
