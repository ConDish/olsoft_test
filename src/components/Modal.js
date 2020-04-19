import React, { Component } from 'react'
import Lottie from 'react-lottie'
import animationData from '../assets/loading.json'

export default class Modal extends Component {

    render() {
        const defaultOptions = {
            loop: true,
            autoplay: true,
            animationData: animationData,
            rendererSettings: {
                preserveAspectRatio: 'xMidYMid slice'
            }
        };
        return (
            <div style={{ zIndex: 1, position: "fixed", left: 0, top: 0, width: "100%", height: "100%", overflow: "auto", background: "rgba(0,0,0,.7)" }}>
                <div style={{ display: "flex", margin: "20% auto", padding: "20px", width: "50%", justifyContent: 'center', flexDirection: "column" }}>
                    <h3 className="text-white text-center">Estamos preparando todo para tí</h3>
                    <Lottie options={defaultOptions}
                        height={50}
                        width={400} />
                </div>
            </div>
        )
    }
}
