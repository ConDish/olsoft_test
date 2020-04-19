import React, { Component } from 'react'
import { Table, Button } from 'reactstrap';
import db from '../firebase'

export default class TableUser extends Component {


    componentDidMount() {
       this.props.context.getUsers()
    }

    render() {
        const { users } = this.props.context.state;

        return (
            <div className="table-responsive">
                <Table>
                    <thead>
                        <tr>
                            <th>Nombres</th>
                            <th>Apellidos</th>
                            <th>Identificación (C.C)</th>
                            <th>Rol asociado</th>
                            <th>Estado</th>
                            <th>Teléfono</th>
                            <th>Correo electrónico</th>
                            <th>Acción</th>

                        </tr>
                    </thead>
                    <tbody>
                        {users && users !== undefined ? users.map((user, key) => (
                            <tr key={key}>
                                <td>{user.data.name}</td>
                                <td>{user.data.last_name}</td>
                                <td>{user.data.identifi}</td>
                                <td>{user.data.rol}</td>
                                <td>{(user.data.status) ? "Activo" : "Inactivo"}</td>
                                <td>{user.data.tel}</td>
                                <td>
                                    {user.data.email}
                                </td>
                                <td className="justify-content-center">
                                    <i className="fas fa-pencil-alt pr-3 text-primary" onClick={() => this.props.context.setState({ modalUpdate: true, selUser: { id: user.id, data: user.data } })} ></i>
                                    <i className="far fa-trash-alt" onClick={() => {
                                        db.collection("usuarios").doc(user.id).delete().then(() => window.location.reload()).catch(() => console.log("Error"))
                                    }} ></i>
                                </td>
                            </tr>
                        )) : null}
                    </tbody>
                </Table>
            </div>
        )
    }
}
