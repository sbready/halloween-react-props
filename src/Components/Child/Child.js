import React from 'react'

export default function Child(props) {
    // console.log(child);
    // props = {
    //     name: asdfklj
    //     costume: a;lsdkfj
    //     ima: asldkfj
    // }
        // candy: []
    return (
        <div className="child">
            <h1>{props.child.name}</h1>
            <img src={props.child.img} alt={props.child.name}></img>
            <h3>{props.child.costume}</h3>
            <ul>{
                props.candy.map(e => {
                    return <li key={e}>{e}</li>
                })
            }
            </ul>
        </div>
    )
}
