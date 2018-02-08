import React from 'react'

const Resource = ({showData}) => {
  debugger
  if (!showData[0]) {
    return null
  }
  showData = showData[0]
  let title = 'asd'
  const keys = Object.keys(showData)
  const detailedList = keys.map((key) => {
    <div>
    <h3>{key}</h3>:<h3>{showData[key]}</h3>
    </div>
  })

  return (
    <div className=''>
      <ul className="pagination justify-content-center">
        <h3>{title}</h3>
        {detailedList}
      </ul>
    </div>
  )
}


export default Resource
