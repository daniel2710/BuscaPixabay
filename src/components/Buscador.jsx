import React, { Component } from 'react';

class Buscador extends Component {

    busquedaRef = React.createRef();

    obtenerDatos = (e) =>{
        e.preventDefault()
        this.props.datosBusqueda(this.busquedaRef.current.value)
    }


    render() { 
        return(
        <form onSubmit={this.obtenerDatos}>
            <div className="row">
                <div className="col-md-8 mt-2 mb-2">
                    <input ref={this.busquedaRef} className="input form-control form-control-lg" type="text" placeholder="café"/>
                </div>

                <div className="col-md-4 mt-2 mb-2 d-grid gap-2">
                    <input type="submit" className="btn btn-lg btn-block" value="Buscar" />
                </div>
            </div>
        </form>
        )}
}
 
export default Buscador;