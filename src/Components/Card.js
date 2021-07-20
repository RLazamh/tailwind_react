import React from 'react'
// import PropTypes from 'prop-types'

const Card = props => {
    return (
        <div id='cards' className="flex
            flex-nowrap 
            justify-between"
            >
            
            <div className="card">
                <span className="card-icon">H</span> 
                <h2 className="card-category">
                    Desarrollo WEB 
                </h2>
                <span className="card-description"> Aprende los principales lenguajes de desarrollo </span> 
            </div>
            
            <div className="card">
                <span className="card-icon">_</span> 
                <h2 className="card-category">
                    Sistemas Operativos
                </h2>
                <span className="card-description"> Aprende administrar Sistemas Operativos  </span> 
            </div>

            <div className="card">
                <span className="card-icon">S</span> 
                <h2 className="card-category">
                    Hardware
                </h2>
                <span className="card-description"> Aprende acerca del Hardware  </span> 
            </div>

            <div className="card">
                <span className="card-icon">u</span> 
                <h2 className="card-category">
                    Redes
                </h2>
                <span className="card-description"> Configura redes y servidores  </span> 
            </div>

            <div className="card">
                <span className="card-icon">A</span> 
                <h2 className="card-category">
                    Base de Datos 
                </h2>
                <span className="card-description"> Aprende a trabajar con BD  </span> 
            </div>
            
        </div>
    )
}

// Card.propTypes = {

// }

export default Card
