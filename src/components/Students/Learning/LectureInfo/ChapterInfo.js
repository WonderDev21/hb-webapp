import React from 'react'

const ChapterInfo = ({ className, data, currentChapter }) => {
  const { attributes, id } = data[currentChapter - 1]

  return (
    <div className={className}>
      <h6>
        Chapter Chapter {id}: {attributes.title}
      </h6>
      <h6>
        {currentChapter}/{data.length}
      </h6>
    </div>
  )
}

export default ChapterInfo
