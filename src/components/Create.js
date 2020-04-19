import React, { Component } from 'react'
import { Modal, ModalHeader, ModalBody, Button, ModalFooter, Col, Row, FormGroup, Label, Input } from "reactstrap"
import db from "../firebase"
export default class Create extends Component {


    state = {
        name: "",
        last_name: "",
        identifi: "",
        rol: "",
        status: "1",
        password: "",
        tel: "",
        email: ""
    }

    toggle = () => this.props.context.setState({ modalCreate: !this.props.context.state.modalCreate })


    onChange = (event) => { this.setState({ [event.target.name]: event.target.value }) }

    onClick = (event) => {
        event.preventDefault();
        const { name, last_name, identifi, rol, status, password, tel, email } = this.state


        db.collection("usuarios").add({
            name,
            last_name,
            identifi,
            rol,
            status: status === "1" ? true : false,
            password,
            tel,
            email
        }).then(() => {
            window.location.reload()
        }).catch(() => {
            console.log("Error")
        })

    }

    render() {
        return (
            <div>
                <Modal isOpen={this.props.context.state.modalCreate} toggle={this.toggle} >
                    <ModalHeader toggle={this.toggle} >Agregar nuevo usuario</ModalHeader>
                    <ModalBody>
                        <Row>
                            <Col>
                                <FormGroup className="d-flex justify-content-center" style={{ flexDirection: "column" }}>
                                    <Label>Nombres</Label>
                                    <Input type="text" name="name" onChange={this.onChange} />
                                </FormGroup>
                            </Col>
                            <Col>
                                <FormGroup className="d-flex justify-content-center" style={{ flexDirection: "column" }}>
                                    <Label>Apellidos</Label>
                                    <Input type="text" name="last_name" onChange={this.onChange} />
                                </FormGroup>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <FormGroup className="d-flex justify-content-center" style={{ flexDirection: "column" }}>
                                    <Label>Identificacion (C.C)</Label>
                                    <Input type="text" name="identifi" onChange={this.onChange} />
                                </FormGroup>
                            </Col>
                            <Col>
                                <FormGroup className="d-flex justify-content-center" style={{ flexDirection: "column" }}>
                                    <Label>Rol asociado</Label>
                                    <Input type="text" name="rol" onChange={this.onChange} />
                                </FormGroup>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <FormGroup className="d-flex justify-content-center" style={{ flexDirection: "column" }}>
                                    <Label>Estado</Label>
                                    <Input type="select" name="status" onChange={this.onChange}>
                                        <option value={1} >Activo</option>
                                        <option value={0}>Inactivo</option>
                                    </Input>
                                </FormGroup>
                            </Col>
                            <Col>
                                <FormGroup className="d-flex justify-content-center" style={{ flexDirection: "column" }}>
                                    <Label>Contraseña</Label>
                                    <Input type="password" name="password" onChange={this.onChange} />
                                </FormGroup>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <FormGroup className="d-flex justify-content-center" style={{ flexDirection: "column" }}>
                                    <Label>Telefono</Label>
                                    <Input type="text" name="tel" onChange={this.onChange} />
                                </FormGroup>
                            </Col>
                            <Col>
                                <FormGroup className="d-flex justify-content-center" style={{ flexDirection: "column" }}>
                                    <Label>Correo electronico</Label>
                                    <Input type="email" name="email" onChange={this.onChange} />
                                </FormGroup>
                            </Col>
                        </Row>
                        <Row>
                            <Col className="d-flex justify-content-end">
                                <Button color="success" onClick={this.onClick}>Aceptar</Button>
                            </Col>
                            <Col className="d-flex justify-content-start">
                                <Button color="success" outline onClick={this.toggle}>Cancelar</Button>
                            </Col>
                        </Row>
                    </ModalBody>
                </Modal>
            </div>
        )
    }
}
