import React from 'react'
// import PropTypes from 'prop-types'

const Aplication = props => {
    return (
        <>
            <header className="
                h-20
                bg-indigo-700
                text-white
                "
            >
                <div className= 'container flex flex-1 flex-row'>
                    <div id='logo' className="flex-1">
                        <div className="
                            group
                            w-64
                            pt-0.5
                            pb-0.5
                            ml-4
                            mt-5
                            bg-purple-100
                            cursor-pointer
                            hover:bg-pink-900
                            
                            "
                            >
                                <h3 className="
                                    group-hover:text-gray-200
                                    text-2xl
                                    text-center
                                    text-black ">
                                        Roger
                                </h3>
                        </div>
                    </div>
                    <nav className="flex-1">
                        <ul className="
                        flex
                        justify-end
                        mt-5
                        ml-11
                        items-center
                        text-2xl
                        bebas
                        ">
                            <li className=" flex flex-none  mr-5 ml-5 tracking-wider ">
                                Home
                            </li>
                            <li className=" flex flex-none mr-5 ml-5 tracking-wider ">
                                Formacion
                            </li>
                            <li className=" flex flex-none mr-5 ml-5  tracking-wider ">
                                Blog
                            </li>
                            <li className=" flex flex-none mr-5 ml-5 tracking-wider ">
                                Contacto
                            </li>
                        </ul>
                    </nav>

                </div>


            </header>
            
        </>
    )
}

// Aplication.propTypes = {

// }

export default Aplication
