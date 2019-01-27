import React from 'react'
import Navbar from "../components/Navbar"
import Tour from "../components/Tour"

export default function map() {
  return (
    <>
    <div className="container-fluid bg-secondary">
      <div className="container">
        <Navbar />
      </div>
    </div>
    <div className="container pt-5">
      <Tour />
    </div>
    </>
  )
}
