import React from 'react';
import './components/stylepixabay.css'
import Buscador from './components/Buscador';
import Resultado from './components/Resultado';

class App extends React.Component {

  state = {
    termino: '',
    imagenes : [],
    pagina: ''
  }

  scroll=()=>{
    const elemento = document.querySelector('.jumbotron');
    elemento.scrollIntoView('smooth', 'start')
  }

  paginaAnterior = () =>{
    // Leer el state de la pagina actual
    let pagina = this.state.pagina;

    // Si la pagina es 1 ya no ir hacia atras
    if(pagina === 1)return null;

    // restar uno a la pagina actual
    pagina -= 1

    // Cambiar el state

    this.setState({
      pagina
    }, ()=>{
      this.consultarApi()
      this.scroll()
    })
    // console.log(pagina);
  }

  paginaSiguiente = () =>{
    // Leer el state de la pagina actual
    let pagina = this.state.pagina;

    // Sumar uno a la pagina actual
    pagina += 1

    // Cambiar el state

    this.setState({
      pagina
    }, ()=>{
      this.consultarApi()
      this.scroll()
    })
    // console.log(pagina);
  }

  consultarApi = () =>{
    const pagina = this.state.pagina
    const url = `https://pixabay.com/api/?key=23873758-d6b516584801d05a2d1c45834&q=${this.state.termino}&per_page=30&page=${pagina}`
    // console.log(url)

    fetch(url)
      .then(respuesta => respuesta.json())
      .then(resultado => this.setState({ imagenes: resultado.hits }))
  }


  datosBusqueda = (termino)=>{
    this.setState({
      termino: termino,
      pagina: 1
    }, ()=>{
      this.consultarApi();
    })

  }


  render() { 
    return(
      <div className="container">
        <div className="jumbotron mt-4">
          <h1 className="text-light text-center">Buscador de imágenes</h1>
          <p className='text-center text-secondary'>Ingrese solo la palabra clave</p>
          <Buscador datosBusqueda={this.datosBusqueda}/> 
        </div>
          <div className="row justify-content-center">
          <Resultado  
            imagenes={ this.state.imagenes}
            paginaAnterior={this.paginaAnterior}
            paginaSiguiente={this.paginaSiguiente}
          />

          </div>
      </div>
    )
  }
}

export default App;