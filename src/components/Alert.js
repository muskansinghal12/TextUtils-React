import React from 'react'

export default function Alert(props) {
    const Capitalize = (text) =>{
        return text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();
    }
  return (
      props.alert && <div>
      <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
            <strong>{Capitalize(props.alert.type)}: </strong> {props.alert.message}
            
        </div>
    </div>
  )
}
