import React , {Component} from 'react';

export class Click extends Component {

    handleClick(){
        return console.log('clicked class')
    }

    render(){
        return(
        <div>
            <button onClick={this.handleClick}>Click class</button>
        </div>)
    }
}

// export const Click = () => {
//     const handleClick = () => {
//         console.log('clicked class')
//     }

//     return (
//         <div>
//             <button onClick={handleClick}>Click Function</button>
//         </div>
//     )
// }