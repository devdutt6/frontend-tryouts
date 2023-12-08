import React from 'react'
import ReactDOM from 'react-dom'

export function PortalDemo() {
    return ReactDOM.createPortal(
        <h1>Hello from outside root</h1>
    , document.getElementById('portal-demo'))
}
// export default portalDemo
