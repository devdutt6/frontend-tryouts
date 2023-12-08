import React from 'react'
import { Fragment } from './Fragment'

export function ParentFragment() {
    return (
        <div>
            <table>
                <tr>
                    <Fragment />
                </tr>
            </table>
        </div>
    )
}

// export default ParentFragment
