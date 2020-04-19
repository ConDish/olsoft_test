import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import { Nav, Table, Filter, Create, Update } from '../components'
import { Col, Row, Container, Button } from 'reactstrap'
import imgUser from "../assets/user.png"
import db from "../firebase"

export default class Home extends Component {
    state = {
        toggleNav: true,
        user: {},
        users: [],
        selUser: {},
        modalCreate: false,
        modalUpdate: false,
    }

    componentDidMount() {
        let user = localStorage.getItem("user")
        this.setState({ user: JSON.parse(user) })
    }

    getUsers() {
        db.collection("usuarios").get().then(snapShots => {
            this.setState({
                users: snapShots.docs.map(doc => {
                    return { id: doc.id, data: doc.data() }
                })
            })
        })
    }
    render() {

        let user = localStorage.getItem("user")

        if (!user) {
            return <Redirect to="/" />
        }

        return (
            <div className="container-fluid bg-light">
                <Row className="flex-xl-nowrap">
                    <Nav context={this} />
                    <Col className="m-0 p-0">
                        <nav className="navbar bg-white m-0" style={{ height: 59 }}>
                            <i class="fas fa-bars text-primary" style={{ fontSize: 20 }} onClick={() => this.setState({ toggleNav: !this.state.toggleNav })}></i>
                            <Col xl="5" className="d-none d-sm-block">
                                <h4 className="text-primary">Prueba Front-end</h4>
                            </Col>
                            <Col xl="4" className={"row"} style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                                <img src={imgUser} style={{ height: 30, width: 30 }} className="mr-3" />
                                <p className="m-0 pr-4">{this.state.user.name} {this.state.user.last_name}</p>
                                <i onClick={() => {
                                    localStorage.removeItem("user")
                                    this.props.history.push("/")
                                }} class="fas fa-sign-out-alt text-primary" style={{ fontSize: 20 }}></i>
                            </Col>
                        </nav>
                        <Row className="m-0 p-xl-3 p-sm-0">
                            <Col xl="7" className="bg-white m-xl-0 mt-3 pt-3" style={{ position: "sticky", overflow: "auto", height: "90vh" }}>
                                <Col className="row justify-content-between">
                                    <Col className={"row"} style={{ display: "flex", alignItems: "center" }}>
                                        <i class="fas fa-users pr-2 text-primary" style={{ fontSize: 20 }}></i>
                                        <p className="m-0" style={{ fontSize: 20 }}>Usuarios existentes</p>
                                    </Col>
                                    <Button size="xl" color="primary" onClick={() => this.setState({ modalCreate: true })}>Crear</Button>
                                </Col>
                                <Col className="mt-5">
                                    <Table context={this} />
                                </Col>
                            </Col>
                            <Col xl="4" className="bg-white ml-xl-3 mt-3 m-xl-0 pt-3" style={{ position: "sticky", overflow: "auto", height: "90vh" }}>
                                <Filter context={this} />
                            </Col>
                        </Row>
                        <Col className="mt-2 d-flex justify-content-end bg-white align-items-center p-2">
                            <p className="m-0 p-0" style={{ fontSize: 15 }}>OLSoftware - 2018</p>
                        </Col>
                    </Col>
                </Row>
                {this.state.modalCreate && <Create context={this} />}
                {this.state.modalUpdate && <Update context={this} />}
            </div>
        )
    }
}
