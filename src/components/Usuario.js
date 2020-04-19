import React, { Component } from 'react'
import db from '../firebase'
export default class Usuario extends Component {
    componentDidMount(){
        db.collection("usuarios").get().then(snapShots => {
            snapShots.docs.map( doc => {
                console.log(doc.data())
            })
        })

        
    }
    render() {
        return (
            <div>
                <h1>Hello</h1>
            </div>
        )
    }
}
