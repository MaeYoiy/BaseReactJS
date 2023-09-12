import React from 'react'

function MyProfile( { data } ) {
  return (
    <div>
        <p>ฉันมาจาก MyProfile components</p>
        <p>ฉันชื่อ {data.firstName} และนามสกุลเป็น {data.lastName}</p>

    </div>
  )
}

export default MyProfile