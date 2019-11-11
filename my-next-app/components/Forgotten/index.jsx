import * as React from 'react'

function Forgotten() {
  const [value] = React.useState('useless')

  return (
    <div>
      <h2>Useless component</h2>
      <p>Tree shaking test</p>
      <button type="button">{value}</button>
    </div>
  )
}

export default Forgotten
