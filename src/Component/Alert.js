import React from 'react'

function Alert(props) {
    
  return (
    props.alrt && <div>
    <div className="alert alert-warning alert-dismissible fade show" role="alert" >
  <strong>{props.alrt.type}</strong>:{props.alrt.msg}
</div>
    </div>
  )
}

export default Alert