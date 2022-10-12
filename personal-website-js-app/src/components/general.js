import React from 'react'
import './general.css'
import LeftSide from './left_side.js'
import RightSide from './right_side.js'


export default function MyCard() {
  return (
    <div className="divider">
      <LeftSide />
      <RightSide />
    </div>
  )
}
