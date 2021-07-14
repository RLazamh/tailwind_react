import React from 'react'
// import PropTypes from 'prop-types'

const App = props => {
  return (
    <>
      <header id='header' 
      className="
        h-20
        font-serif
        text-white
        bg-black
      ">
        {/* El flex crea un bloque con los espacios definidos por 
        el contenedro padre y los coloca uno debajo de otro y con row en una linea  */}
        <div className="container mx-auto flex flex-row"> 
          <div id="logo" className="flex-1">
            <div className="
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
              {/* Hover sirve cuando pasas el raton por ensima  */}
               <span className="
                symbol
                block
                float-left
                text-3xl
                mt-1
                ml-11
               ">S</span>
               <h3 className="
                block
                float-right
                text-4xl
                mt-1.5
                mr-16
                duration-100
                bebas
               "> TAILWIND </h3>
            </div>
            
          </div>
          <nav className = "flex 1">
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

    </>
  )
}

// App.propTypes = {

// }

export default App
