import React from 'react'
// import PropTypes from 'prop-types'

const Card = props => {
    return (
        <div id='cards' className="flex
            flex-nowrap 
            justify-between"
            >
            
            <div className="card">
                <span className="card-icon
                group-hover:text-azul-claro
                group-hover:animate-from-card-icon
                transform
                group-hover:scale-150
                ">H</span> 
                <h2 className="card-category
                group-hover:text-white
                group-hover:animate-from-card-category
                ">
                    Desarrollo WEB 
                </h2>
                <p className="card-description
                group-hover:text-white
                 group-hover:animate-from-card-description
                "> Aprende los principales lenguajes de desarrollo </p> 
            </div>
            
            <div className="card">
                <span className="card-icon
                group-hover:text-azul-claro
                group-hover:animate-from-card-icon
                transform
                group-hover:scale-150
                ">_</span> 
                <h2 className="card-category
                group-hover:text-white
                group-hover:animate-from-card-category

                ">
                    Sistemas Operativos
                </h2>
                <p className="card-description
                group-hover:text-white
                group-hover:animate-from-card-description

                "> Aprende administrar Sistemas Operativos  </p> 
            </div>

            <div className="card">
                <span className="card-icon
                group-hover:text-azul-claro
                group-hover:animate-from-card-icon
                transform
                group-hover:scale-150
                ">S</span> 
                <h2 className="card-category
                group-hover:text-white
                group-hover:animate-from-card-category

                ">
                    Hardware
                </h2>
                <p className="card-description
                group-hover:text-white
                group-hover:animate-from-card-description

                "> Aprende acerca del Hardware  </p> 
            </div>

            <div className="card">
                <span className="card-icon
                group-hover:text-azul-claro
                transform
                group-hover:scale-150
                group-hover:animate-from-card-icon
                ">u</span> 
                <h2 className="card-category
                group-hover:animate-from-card-category

                group-hover:text-white
                ">
                    Redes
                </h2>
                <p className="card-description
                group-hover:text-white
                group-hover:animate-from-card-description

                "> Configura redes y servidores  </p> 
            </div>

            <div className="card">
                <span className="card-icon
                group-hover:text-azul-claro
                transform
                group-hover:scale-150
                group-hover:animate-from-card-icon
                ">A</span> 
                <h2 className="card-category
                group-hover:animate-from-card-category

                group-hover:text-white
                ">
                    Base de Datos 
                </h2>
                <p className="card-description
                group-hover:text-white
                group-hover:animate-from-card-description

                "> Aprende a trabajar con BD  </p> 
            </div>
            
        </div>
    )
}

// Card.propTypes = {

// }

export default Card
