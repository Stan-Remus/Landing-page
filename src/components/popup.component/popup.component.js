import React from 'react'
import './popup.component.scss'

function PopUp(props) {

    console.log("PopUp trigger:", props.trigger);
    console.log("test:", props.test)

  return (props.trigger) ? (
    <div className='popup'>
        <div className='popup-inner'>
            {props.children}
        </div>
    </div>
  ) : "";
}

export default PopUp