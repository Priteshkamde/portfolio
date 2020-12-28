import React from 'react'
import { useSpring, animated } from 'react-spring'

function CardInfo(props) {

    const Cardstyle = useSpring(
        {
            opacity :1, from : {opacity : 0}
        }
    )

    return (
        <animated.div className="art-card-info" style={Cardstyle}>
            <p className="art-card-title">{props.title}</p>
            <p className="art-card-sub-title">{props.subTitle}</p>
        </animated.div>
    )
}

export default CardInfo
