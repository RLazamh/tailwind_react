import React from 'react'
import android from "../assets/img/android.png";
import firefox from "../assets/img/firefox-icon.png";
import chrome from "../assets/img/chrome.png";
import opera from "../assets/img/Opera_256x256.png";
import safari from "../assets/img/safari.png";
import ios from "../assets/img/ios.png";
import html5 from "../assets/img/html5-badge-h-css3-graphics-multimedia-performance-semantics.png"
// import PropTypes from 'prop-types'

function Footer(props) {
    return (
        <>
            <footer id='footer'
                className='
                w-full
                h-auto
                bg-black
                text-white
                overflow-hidden
                '>
                <div className='container
                    flex
                    w-11/12
                    mx-auto
                    xs:flex-col
                    md:flex-col
                    lg:flex-row

                    
                '>
                    <div id='menu-footer' className='footer-box mt-10'>
                        <h5 className='footer-header'> Menu </h5>
                        <ul className='footer-menu'>
                            <li> <a href="#"> INICIO </a> </li>
                            <li> <a href="#"> BLOG </a> </li>
                            <li> <a href="#"> FORMACION </a> </li>
                            <li> <a href="#"> CONTACTO </a> </li>
                        </ul>
                    </div>
                    <div id="location" className='footer-box'>
                        <h5 className='footer-header'> Donde nos ubicamos? </h5>
                        <iframe className='
                        w-full 
                        h-80 
                        mt-3 
                        border-4 
                        border-gray-400 
                        rounded-md
                        shadow-md
                        ' 
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.7916578012137!2d-78.49172798635192!3d-0.2094652998471704!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91d59a105f4057bb%3A0xb6bddff80696982b!2sFacultad%20de%20Ingenier%C3%ADa%20El%C3%A9ctrica%20y%20Electr%C3%B3nica%20EPN!5e0!3m2!1ses-419!2sec!4v1628879102623!5m2!1ses-419!2sec" width="600" height="450" style={{border:"0;"}} allowfullscreen="" loading="lazy"></iframe>

                    </div>

                    <div id='info' className='footer-box'> 
                        <h5 className='footer-header'> Desarrollado con </h5>
                        <p className='mb-5 text-center'> <img className='block mx-auto' alt='Desarrollado' src={html5}/> </p>

                        <h5 className='footer-header'> Optimizado para </h5>
                        <div className='browsers flex flex-row space-x-5 mb-5' >
                            <a href='#'>
                               <img alt='Firefox' src={firefox}/>
                            </a>

                            <a href='#'>
                               <img alt='Chrome' src={chrome}/>
                            </a>

                            <a href='#'>
                               <img alt='Opera' src={opera}/>
                            </a>

                            <a href='#'>
                               <img alt='Safari' src={safari}/>
                            </a> 

                            <a href='#'>
                               <img alt='Android' src={android}/>
                            </a> 

                            <a href='#'>
                               <img alt='IOS' src={ios}/>
                            </a> 
                        </div>

                        <h5 className='footer-header'>AUTOR</h5>
                        <p>&copy; Roger Laza </p>

                       
                    </div>
                </div>
            </footer>
            
        </>
    )
}

// Footer.propTypes = {

// }

export default Footer

