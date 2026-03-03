import React from 'react'

const Card = (props) => {
  return (
    <div className='card-container'>
        <div className="top">
            <img src={props.userPfp} alt="" className='user-pfp'/>
            <h1>{props.userName}</h1>
            <h3>{props.role}</h3>
        </div>
        <div className="center">
            <p className='user-bio'>{props.bio}</p>
        </div>
        <div className="bottom">
            <button>Message</button>
            <button>Connect</button>
        </div>
    </div>
  )
}

export default Card