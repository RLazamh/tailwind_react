import React from 'react'
import Banner from './Components/Banner'
import Card from './Components/Card'
import Footer from './Components/Footer'
import MainContent from './Components/MainContent'
// import PropTypes from 'prop-types'

const App = props => {
  return (
    <>
      <header id='header' 
      className="
        md:h-20
        font-serif
        text-white
        bg-black 
        xs:h-36     
      ">
        {/*  Ejemplo de responsive
            border-8
            
            md:border-red-500
            sm:border-blue-500
            lg:border-yellow-500
            xl:border-green-400
            2xl:border-pink-500
            xs:border-gray-500
        */}
        {/* El flex crea un bloque con los espacios definidos por 
        el contenedro padre y los coloca uno debajo de otro y con row en una linea  */}
        <div className="container w-11/12 mx-auto flex md:flex-row xs:flex-col"> 
          <div id="logo" className="md:flex-1 xs:mx-auto">
            <div className="
              group
              w-64
              pt-0.5
              pb-0.5
              ml-4
              mt-4
              text-center
              tracking-wider
              cursor-pointer
              overflow-hidden
              transition
              duration-300
              roundend-sm
              bg-azul-claro
              hover:text-black 
              hover:bg-red-700
            ">
              {/*` Hover sirve cuando pasas el raton por ensima  */}
               <span className="
                symbol
                block
                float-left
                text-3xl
                mt-1
                ml-11
                animate-spin-low
                group-hover:animate-none
                group-hover:animate-from-bellow

               ">S</span>
               <h3 className="
                block
                float-right
                text-4xl
                mt-1.5
                mr-16
                duration-100
                bebas
                group-hover:animate-none
                group-hover:animate-from-rigth
               "> TAILWIND </h3>
            </div>
            </div>
          <nav className = "flex-1">
            <ul className="menu-item">
              <li className ="menu-item__li">
                <a href="#" className=" menu-item__li__a"> 
                  INICIO
                </a>
              </li>
              <li className ="menu-item__li">
                <a href="#" className= "menu-item__li__a"> 
                  BLOG
                </a>
              </li>
              <li className ="menu-item__li">
                <a href="#" className= "menu-item__li__a"> 
                  FORMACION
                </a>
              </li>
              <li className ="menu-item__li">
                <a href="#" className= "menu-item__li__a"> 
                  CONTACTO
                </a>
              </li>
            </ul>
          </nav>

        </div>

      </header>

      {/* <h1 className="text-4xl bg-black text-white m-20 p-5 border-4 border-gray-300 rounded-full text-center">Hola Soy Goku</h1> */}
      <Banner />

      {/* Inicio de Tarjetas  */}

      <Card />

      {/* FIn de Tarjetas  */}

      {/* Main */}
      <MainContent />

      {/* Pie de Pagina */}
      <Footer />

      


    </>
  )
}


// App.propTypes = {

// }

export default App
