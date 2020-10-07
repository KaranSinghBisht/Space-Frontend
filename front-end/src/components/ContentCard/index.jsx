import React from 'react'
import './card.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPencilAlt } from '@fortawesome/fontawesome-free-solid'

export default function ContentCard() {
  return (
    <>
      <div className="wrapper-card">
        <div className="container">
          <div className="title_content">This is title</div>
          <div className="parent-card">Hi There, rinolvy here</div>
        </div>
        <FontAwesomeIcon icon={faPencilAlt} cursor={'pointer'} />
      </div>
    </>
  )
}
