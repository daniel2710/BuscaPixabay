import React from 'react';

const Paginacion = props =>{
    return(
        <div className="py-3">
            <div className='d-flex justify-content-evenly'>
                <button onClick={props.paginaAnterior} type="button" className="btn btn-info">Anterior &larr;</button>
                <button onClick={props.paginaSiguiente} type="button" className="btn btn-info">Siguiente &rarr;</button>
            </div>
        </div>
    )
}

export default Paginacion;