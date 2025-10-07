import React from 'react'

function ShowDate() {
    let myName = 'Abu Huraira'
    let currentDate = new Date();
  return (
    <div>
      <h1>Created by {myName}</h1>
      <p>Copyright , {currentDate.getFullYear()}</p>
    </div>
  )
}

export default ShowDate
