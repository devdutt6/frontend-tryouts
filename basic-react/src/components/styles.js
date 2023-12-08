import React from 'react';
import './appStyles.css'
import styles from './appStyles.module.css'
const inline ={
    color:'yellow',
    backgroundColor:'black'
}
export const Stylesss = () => {
// const inline ={
//     color:'yellow',
//     backgroundColor:'black'
// }
    return (
        <div>
            <h2 className='primary'>Devdutt</h2>
            <h2 className={styles.error}>Chirayu</h2>
            <h2 style={inline}>Badrik</h2>
        </div>
    )
}