import React, { Component } from 'react'
import db from "../firebase"
import { Form, FormGroup, Label, Input, Button, Col } from 'reactstrap'
export default class Filter extends Component {

    state = {
        tel: "",
        identifi: "",
        rol: "",
        password: "",
        last_name: "",
        status: "1",
        email: "",
        name: "",
    }

    onChange = (event) => this.setState({ [event.target.name]: event.target.value })


  onClick = async (event) => {
    event.preventDefault()
    let users = []
    await db.collection("usuarios").get().then(snapShots => {
        users = snapShots.docs.map(doc => {
            return { id: doc.id, data: doc.data() }
        })
    })

    const { 
        tel, 
        identifi, 
        rol,
        password,
        last_name,
        status,
        email,
        name, 
    } = this.state

    let response = []

    response = users.map(user => user)
        .filter(user => user.data.name.includes(name))
        .filter(user => user.data.tel.includes(tel))
        .filter(user => user.data.identifi.includes(identifi))
        .filter(user => user.data.rol.includes(rol))
        .filter(user => user.data.password.includes(password))
        .filter(user => user.data.last_name.includes(last_name))
        .filter(user => user.data.email.includes(email))
        .filter(user => user.data.status == status)

    this.props.context.setState({ users: response })
}

    onClear = (event) => {
        event.preventDefault()
        this.setState({
            tel: "",
            identifi: "",
            rol: "",
            password: "",
            last_name: "",
            status: "1",
            email: "",
            name: "",
        })

        this.props.context.getUsers()

    }

    render() {
        return (
            <>
                <Col className={"row"} style={{ display: "flex", alignItems: "center" }}>
                    <i class="fas fa-user-plus pr-2 text-primary" style={{ fontSize: 20 }}></i>
                    <p className="m-0" style={{ fontSize: 20 }}>Filtrar busqueda</p>
                </Col>
                <Form className="mt-3">
                    <FormGroup>
                        <Label>Nombres</Label>
                        <Input type="text" name="name" onChange={this.onChange} value={this.state.name} />
                    </FormGroup>
                    <FormGroup>
                        <Label>Apellidos</Label>
                        <Input type="text" name="last_name" onChange={this.onChange} value={this.state.last_name} />
                    </FormGroup>
                    <FormGroup>
                        <Label>Identificación (C.C)</Label>
                        <Input type="text" name="identifi" onChange={this.onChange} value={this.state.identifi} />
                    </FormGroup>
                    <FormGroup>
                        <Label>Rol asociado</Label>
                        <Input type="text" name="rol" onChange={this.onChange} value={this.state.rol} />
                    </FormGroup>
                    <FormGroup>
                        <Label>Estado</Label>
                        <Input type="select" name="status" onChange={this.onChange}>
                            <option value={1} >Activo</option>
                            <option value={0}>Inactivo</option>
                        </Input>
                    </FormGroup>
                    <FormGroup>
                        <Label>Contraseña</Label>
                        <Input type="text" name="password" onChange={this.onChange} value={this.state.password} />
                    </FormGroup>
                    <FormGroup>
                        <Label>Teléfono</Label>
                        <Input type="text" name="tel" onChange={this.onChange} value={this.state.tel} />
                    </FormGroup>
                    <FormGroup>
                        <Label>Correo electrónico</Label>
                        <Input type="text" name="email" onChange={this.onChange} value={this.state.email} />
                    </FormGroup>
                    <Col className="row justify-content-between">
                        <Button color="success" onClick={this.onClick} >Filtrar</Button>
                        <Button color="success" outline onClick={this.onClear}>Limpiar</Button>
                    </Col>
                </Form>
            </>
        )
    }
}
