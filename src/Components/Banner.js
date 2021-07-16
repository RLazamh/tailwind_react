import React from 'react'
import PropTypes from 'prop-types'

const Banner = props => {
    return (
        <>
            <section className="container w-11/12 mx-auto">

                <div id="banner" className ="
                h-28
                w-full
                border-8
                border-white
                overflow-hidden
                shadow
                m-5
                bg-banner
                bg-banner-position
                animate-bg-banner

                ">
                    <h3 className ="
                    text-banner
                    block
                    text-white                    
                    
                    text-center
                    mx-auto
                    font-normal
                    tracking-wider
                    animate-text-banner
                    md:text-4xl
                    m-7
                    xs:text-2xl


                    ">DESARROLLO WEB CON TAILWIND POR ROGER LAZA</h3>

                </div>

            </section>

            
        </>
    )
}

Banner.propTypes = {

}

export default Banner

