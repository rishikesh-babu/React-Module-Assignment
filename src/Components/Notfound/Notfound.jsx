import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

function Notfound() {

  const navigate = useNavigate()

  useEffect(() => {
    goback()
  })

  function goback() {
    setTimeout(() => {
      navigate(-1)
    }, 1500);
  }
  return (
    <div>
      <h1 className='text-danger'>
        404 Error Page not found
      </h1>
    </div>
  )
}

export default Notfound
