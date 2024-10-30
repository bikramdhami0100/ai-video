import React from 'react'
import SelectTopic from './_components/SelectTopic'

function CreateNew() {
  return (
    <div>
    <h2 className='  text-center  text-blue-600  font-bold text-2xl p-2'>Create New </h2>
    <div>
         {/* Select Topic */}
         <SelectTopic/>
         {/* select style */}
         {/* Duration */}
         {/* Create Button */}
    </div>
    </div>
  )
}

export default CreateNew