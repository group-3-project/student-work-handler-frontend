import React from 'react'

// function Greet() {
//     return <h1>Hello Ali Asgar!</h1>
// }

//export default Greet

export const Greet = (props) => {
    return <h1>Hello {props.name}</h1>
}

export const Cya = () => <h1>Bye Ali Asgar</h1>