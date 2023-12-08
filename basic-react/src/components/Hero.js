import React from 'react'

export function Hero({heroName}) {
    if(heroName === 'Joker'){
        throw new Error('JOker is villian');
    }
    return (
        <div>
            {heroName}
        </div>
    )
}

// export default Hero
