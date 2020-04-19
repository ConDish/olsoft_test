import React, { Component } from 'react'
import { Modal, ModalHeader, ModalBody, Button, ModalFooter, Col, Row, FormGroup, Label, Input } from "reactstrap"
import db from "../firebase"
export default class Update extends Component {


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


    componentDidMount() {
        const { selUser } = this.props.context.state

        this.setState({
            name: selUser.data.name, last_name: selUser.data.last_name,
            identifi: selUser.data.identifi, rol: selUser.data.rol, status: selUser.data.status, password: selUser.data.password, tel: selUser.data.tel, email: selUser.data.email
        })
    }

    toggle = () => this.props.context.setState({ modalUpdate: !this.props.context.state.modalUpdate })


    onChange = (event) => { this.setState({ [event.target.name]: event.target.value }) }

    onClick = (event) => {
        event.preventDefault();

        const { id } = this.props.context.state.selUser
        const { name, last_name, identifi, rol, status, password, tel, email } = this.state

        console.log(id)
        db.collection("usuarios").doc(id).update({
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
                <Modal isOpen={this.props.context.state.modalUpdate} toggle={this.toggle} >
                    <ModalHeader toggle={this.toggle} >Actualizar nuevo usuario</ModalHeader>
                    <ModalBody>
                        <Row>
                            <Col>
                                <FormGroup className="d-flex justify-content-center" style={{ flexDirection: "column" }}>
                                    <Label>Nombres</Label>
                                    <Input type="text" name="name" onChange={this.onChange} value={this.state.name} />
                                </FormGroup>
                            </Col>
                            <Col>
                                <FormGroup className="d-flex justify-content-center" style={{ flexDirection: "column" }}>
                                    <Label>Apellidos</Label>
                                    <Input type="text" name="last_name" onChange={this.onChange} value={this.state.last_name} />
                                </FormGroup>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <FormGroup className="d-flex justify-content-center" style={{ flexDirection: "column" }}>
                                    <Label>Identificacion (C.C)</Label>
                                    <Input type="text" name="identifi" onChange={this.onChange} value={this.state.identifi} />
                                </FormGroup>
                            </Col>
                            <Col>
                                <FormGroup className="d-flex justify-content-center" style={{ flexDirection: "column" }}>
                                    <Label>Rol asociado</Label>
                                    <Input type="text" name="rol" onChange={this.onChange} value={this.state.rol} />
                                </FormGroup>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <FormGroup className="d-flex justify-content-center" style={{ flexDirection: "column" }}>
                                    <Label>Estado</Label>
                                    <Input type="select" name="status" onChange={this.onChange}>
                                        {
                                            <>
                                                {
                                                    (this.state.status) ?
                                                        <>
                                                            <option value={1} >Activo</option>
                                                            <option value={0}>Inactivo</option>
                                                        </>
                                                        :
                                                        <>
                                                            <option value={0}>Inactivo</option>
                                                            <option value={1} >Activo</option>
                                                        </>
                                                }

                                            </>
                                        }
                                    </Input>
                                </FormGroup>
                            </Col>
                            <Col>
                                <FormGroup className="d-flex justify-content-center" style={{ flexDirection: "column" }}>
                                    <Label>Contraseña</Label>
                                    <Input type="text" name="password" onChange={this.onChange} value={this.state.password} />
                                </FormGroup>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <FormGroup className="d-flex justify-content-center" style={{ flexDirection: "column" }}>
                                    <Label>Telefono</Label>
                                    <Input type="text" name="tel" onChange={this.onChange} value={this.state.tel} />
                                </FormGroup>
                            </Col>
                            <Col>
                                <FormGroup className="d-flex justify-content-center" style={{ flexDirection: "column" }}>
                                    <Label>Correo electronico</Label>
                                    <Input type="email" name="email" onChange={this.onChange} value={this.state.email} />
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
