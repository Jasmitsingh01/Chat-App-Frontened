import React from 'react'
import Css from '../STYLE/message.module.css'
function Message({user,message}) {
    if(user==='info' ){
        return (
            <div   className={Css.info}>
              {message}
            </div>
          )
    }

    else if(user==='you' ){
        return (
            <div   className={Css.right}>
              {message}
            </div>
          )
    }
    else{
        return (
            <div   className={Css.left}>
              {user}:{message}
            </div>
          )
    }
 
}

export default Message