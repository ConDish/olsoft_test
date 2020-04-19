import React, { Component } from 'react'
import { Nav, NavItem, NavLink } from 'reactstrap'
export default class Navbar extends Component {
    render() {
        const { toggleNav } = this.props.context.state
        const widthToggle = toggleNav ? "col-sm-12 col-xl-2 " : "d-xl-flex justify-content-center d-none"
        return (

            <div class={`navbar_background ${widthToggle}`} id="navbar" style={{ zIndex: 1000, position: "sticky", width: !toggleNav ? 70 : "100%" }}>
                <div className="pt-2">
                    <div className="d-flex">
                        <div className="mr-2" style={{ height: 30, width: 30, background: "white", borderRadius: 30 }} />
                        <h4 className={`${!toggleNav && "d-xl-none"} text-white`}>OLSoftware</h4>
                    </div>
                    <hr className="bg-white"></hr>
                    <div className={`d-flex align-items-center my-3 ${!toggleNav && "justify-content-center"}`}>
                        <i class="fas fa-book text-white mr-3" style={{ fontSize: 25 }}></i>
                        <p className={`${!toggleNav && "d-xl-none"} m-0 p-0 text-white`}>Programación</p>

                    </div>
                    <div className={`d-flex align-items-center my-3 ${!toggleNav && "justify-content-center"}`}>
                        <i class="fas fa-list text-white mr-3" style={{ fontSize: 25 }}></i>
                        <p className={`${!toggleNav && "d-xl-none"} m-0 p-0 text-white`}>Gestión de operaciones</p>

                    </div>
                    <div className={`d-flex align-items-center my-3 ${!toggleNav && "justify-content-center"}`}>
                        <i class="fas fa-sliders-h text-white mr-3" style={{ fontSize: 25 }}></i>
                        <p className={`${!toggleNav && "d-xl-none"} m-0 p-0 text-white`}>Perfiles</p>


                    </div>
                    <div className={`d-flex align-items-center my-3 ${!toggleNav && "justify-content-center"}`}>
                        <p className="m-0 p-0 text-white mr-3" style={{ fontSize: 25, fontWeight: "bold" }}>R</p>
                        <p className={`${!toggleNav && "d-xl-none"} m-0 p-0 text-white`}>Roles</p>

                    </div>
                    <div className={`d-flex align-items-center my-3 ${!toggleNav && "justify-content-center"}`} style={{ background: "rgba(255,255,255,0.3)", borderRadius: "5px", cursor: "pointer"}}>
                        <p className="m-0 p-0 text-white mr-3" style={{ fontSize: 25, fontWeight: "bold" }}>U</p>
                        <p className={`${!toggleNav && "d-xl-none"} m-0 p-0 text-white`}>Usuario</p>
                    </div>

                    <div className={`d-flex align-items-center my-3 ${!toggleNav && "justify-content-center"}`}>
                        <i class="fas fa-file text-white mr-3" style={{ fontSize: 25 }}></i>
                        <p className={`${!toggleNav && "d-xl-none"} m-0 p-0 text-white`}>Reportes</p>


                    </div>

                </div>
            </div>
        )
    }
}
