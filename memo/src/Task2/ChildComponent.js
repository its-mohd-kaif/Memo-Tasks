import React, { memo } from 'react'

function ChildComponent() {
    console.log("Child Component")
  return (
    <div>ChildComponent</div>
  )
}

export default memo(ChildComponent) 