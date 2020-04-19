import React, { Component } from 'react'
import { Form, FormGroup, Input, Container, Col, Row, Card, Button, Toast, ToastBody, ToastHeader } from 'reactstrap'
import background from "../assets/FOTO.jpg"
import db from '../firebase'
import { Modal } from '../components'
import { Redirect } from 'react-router-dom'
import animationData from '../assets/loading.json'
export default class Login extends Component {

    state = {
        user: "",
        pass: "",
        loading: false,
        error: false
    }

    onChange = (event) => {
        this.setState({ [event.target.name]: event.target.value })
    }

    onSubmit = async (event) => {

        event.preventDefault();
        this.setState({ loading: true, error: false })
        let user = db.collection("usuarios").where("email", "==", this.state.user).where("password", "==", this.state.pass)
        let data = await user.get()
        setTimeout(() => {
            this.setState({ loading: false })

            if (data.docs.length > 0) {
                data.forEach(doc => {
                    localStorage.setItem("user", JSON.stringify(doc.data()))
                    this.props.history.push("/home", { user: doc.data() })
                })
            } else {
                this.setState({ error: true })
            }

        }, 3000)

    }

    render() {
        const defaultOptions = {
            loop: true,
            autoplay: true,
            animationData: animationData,
            rendererSettings: {
                preserveAspectRatio: 'xMidYMid slice'
            }
        };

        let user = localStorage.getItem("user")

        if (user) {
            return <Redirect to="/home" />
        }
        
        return (
            <div
                style={{ position: "fixed", left: 0, top: 0, width: "100%", height: "100%", overflow: "auto", backgroundRepeat: "no-repeat", backgroundSize: "cover", backgroundImage: `url(${background})`, backgroundPosition: "center" }}>
                <Container style={{ marginTop: "15%" }}>
                    <Row>
                        <Col>
                            <h2 className="text-white">Aplicación</h2>
                            <h2 className="text-white">OLSoftware</h2>
                            <p className="mt-3 text-white">Prueba práctica Front-end senior</p>
                        </Col>

                        <Col sm={5}>
                            <Card className="p-4 d-flex justify-content-center" style={{ boxShadow: "5px 5px 5px 5px rgba(0,0,0,.1)" }}>
                                <h2 className="text-center">Inicio de sesión</h2>
                                <Form className="mt-5 p-3">
                                    <FormGroup>
                                        <Row style={{ alignItems: "center", border: "1px solid rgba(0,0,0,.2)" }}>
                                            <Input name="user" type="text" placeholder={"Usuario"} style={{ height: 50, border: "none", width: "80%" }} onChange={this.onChange} />
                                            <i className="fas fa-user" style={{ fontSize: 20, paddingLeft: 20 }}></i>
                                        </Row>
                                        <Row style={{ alignItems: "center", border: "1px solid rgba(0,0,0,.2)" }}>
                                            <Input name="pass" type="password" placeholder={"Contraseña"} style={{ height: 50, border: "none", width: "80%" }} onChange={this.onChange} />
                                            <i className="fas fa-lock" style={{ fontSize: 20, paddingLeft: 20 }}></i>
                                        </Row>

                                    </FormGroup>
                                    <FormGroup className="mt-5">
                                        <Button color="primary" className="w-100" style={{ height: 50 }} onClick={this.onSubmit}>Iniciar sesión</Button>
                                    </FormGroup>
                                </Form>
                            </Card>
                        </Col>
                    </Row>

                </Container>
                {
                    this.state.error &&
                    <Toast>
                        <ToastHeader icon="danger">
                            Error
                        </ToastHeader>
                        <ToastBody>
                            No se encontro al usuario
                        </ToastBody>
                    </Toast>
                }

                <Col className="mt-5">
                    <p className="text-center">OLSoftware - 2018</p>
                </Col>
                {this.state.loading && <Modal />}
            </div>
        )

    }
}
