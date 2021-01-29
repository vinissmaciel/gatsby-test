import React from 'react'

import cardStyles from './card.module.scss'

const Card = () => {
    return(
        <div className={cardStyles.card}>
            <h1>Title Card</h1>
            <h1 className={cardStyles.h1}>Title Card 2</h1>
            <p>Lorem ipsum dolor</p>
            <button>Button Card</button>
        </div>
    )
}

export default Card