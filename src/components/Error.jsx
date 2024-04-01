import React from 'react'
import { useRouteError } from 'react-router-dom'

const Error = () => {
    const err = useRouteError();
  return (
    <div>
        <h2>{err.statusText} - {err.status}</h2>
    </div>
  )
}

export default Error