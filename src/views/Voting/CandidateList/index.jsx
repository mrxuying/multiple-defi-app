import React from 'react'
import { Link, Outlet } from 'react-router-dom'

export default function CandidateList() {
  return (
    <div>CandidateList
      <Link to='/voting/register'>register</Link>
      <Outlet />
    </div>
  )
}
