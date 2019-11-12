import * as React from 'react'
import { fake } from 'faker'

function Useless() {
  return (
    <div>
      <h2>Useless component</h2>
      <p>
        My name is:
        <span>{fake('{{name.lastName}}')}</span>
      </p>
    </div>
  )
}

export default Useless
