import React from 'react'

export default function Icon({ icon, onClick, clickable }) {
  return (
    <>
      <img src={icon} alt="" onClick={clickable ? handleIconClick : null} />
    </>
  )

  function handleIconClick() {
    onClick()
    console.log('Icon clicked')
  }
}
