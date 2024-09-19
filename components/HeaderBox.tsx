import React from 'react'
import TotalbalanceBox from './TotalbalanceBox'

const HeaderBox = ({ type="title", title, subtext, user}: HeaderBoxProps    ) => {
  return (
    <div className='header-box'>
        <h1 className='header-box-title'>
            {title}
            {type === 'greeting' && (
                <span className='text-bankGradient'>
                    &nbsp;{user}</span>
            )}
        </h1>
        <p className='header-box-subtext'>{subtext}</p>
        <TotalbalanceBox
            accounts={[]}
            totalBanks={1}
            totalCurrentBalance={11000.27}
        />
    </div>
  )
}

export default HeaderBox