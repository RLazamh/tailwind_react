import React from 'react'
import PropTypes from 'prop-types'

const MainContent = props => {
    return (
        <main className='
        flex
        flex-row
        container w-11/12
        mx-auto
        mt-4
        '>
            <aside id='slide' className='
            w-72
            min-h-full
            mt-5
            flex-none
            order-2
            '>
                <h3 className=" aside-header ">Buscar</h3>
                <div className='search
                w-11/12
                h-7
                shadow-inner
                m-2.5
                mx-auto
                border
                border-gray-200
                bg-white
                rounded
                '>
                    <form>
                        <input className= 'w-10/12
                        h-6
                        border-none
                        pl-1.5
                        rounded-md
                        bg-transparent
                        text-gray-500
                        transition
                        duration-300
                        outline-none
                        focus:outline-none
                        ' type ='text'/>
                        <input type = 'button' value='L'
                        className='symbol
                        h-6
                        cursor-pointer
                        text-base
                        bg-transparent
                        border-none
                        text-gray-500
                        pl-2
                        '/>
                    </form>
                </div>
                    <h3 className=" aside-header ">login</h3>
                    <div id ="login" className ="aside-box">
                        <form>
                            <label for='email'
                            className='icon-item'> U </label>
                            <input type='email' id='email'
                            className='input-box'
                            ></input>

                            <label for='password' className='icon-item text-xl mt-6 '> w </label>
                            <input type='password' id='password' className='input-box'></input>

                            <input type='submit' value ='Entrar' 
                            className='button-bg'/>
                            <input type='reset' value ='Limpiar' 
                            className='button-bg ml-1'/>

                            <a href='#' className='login-link'>Registrate aqui</a>
                            <a href='#' className='login-link mt-2'>Has olvidado tu password?</a>
                        </form>
                    </div>
                <h3 className=" aside-header ">Redes Sociales</h3>
                <div id='social-medi' className ="aside-box">
                    <div className='twitter group'>
                        <a href='#' className='
                            social-icon
                        '>t</a>
                        <p className = '
                            social-overlay
                            group-hover:opacity-100
                            group-hover:transform
                            group-hover:translate-x-1
                        '>Twitter</p>
                    </div>

                    <div className='facebook group'>
                        <a href='#' className='social-icon'>f</a>
                        <p className='
                            social-overlay
                            group-hover:opacity-100
                            group-hover:transform
                            group-hover:translate-x-1
                        '>Facebook</p>
                    </div>

                    <div className='youtube group'>
                        <a href='#' className='social-icon'>y</a>
                        <p className='
                            social-overlay
                            group-hover:opacity-100
                            group-hover:transform
                            group-hover:translate-x-1
                        '>Youtube</p>
                    </div>

                    <div className='github group'>
                        <a href='#' className='social-icon'>l</a>
                        <p className='
                            social-overlay
                            group-hover:opacity-100
                            group-hover:transform
                            group-hover:translate-x-1
                        '>Linkedin</p>
                    </div>

                </div>
                <h3 className=" aside-header  ">Patrocinadores</h3>
                <div id='sponsoirs' className="aside-box">

                </div>


            </aside>
            {/* Barra lateral FIn */}

            {/* Inicio de articulos */}
            <section className='
                flex-grow
                order-1
                mr-10
            '>
                <h2 className='articles-header shadow-header3D'> Ultimos Articulos</h2>

                <article className ="article-container">
                    <div className=" article-date">
                        <span className="m-2.5">Fecha 10 marzo</span>
                        <span className="m-2.5">Categoria Pruebas</span>
                    </div>
    
                    <h4 className ="article-title">
                        <a href='#'>Titulo del articulo</a>
                    </h4>

                    <p className="article-paragraph">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent elit turpis, tempor eget enim eu, dignissim sodales mauris. Ut et tempor diam. Vestibulum ac scelerisque mauris 
                    </p>
                </article>

                <article className ="article-container">
                    <div className=" article-date">
                        <span className="m-2.5">Fecha 10 marzo</span>
                        <span className="m-2.5">Categoria Pruebas</span>
                    </div>
    
                    <h4 className ="article-title">
                        <a href='#'>Titulo del articulo</a>
                    </h4>

                    <p className="article-paragraph">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent elit turpis, tempor eget enim eu, dignissim sodales mauris. Ut et tempor diam. Vestibulum ac scelerisque mauris 
                    </p>
                </article>

                <article className ="article-container">
                    <div className=" article-date">
                        <span className="m-2.5">Fecha 10 marzo</span>
                        <span className="m-2.5">Categoria Pruebas</span>
                    </div>
    
                    <h4 className ="article-title">
                        <a href='#'>Titulo del articulo</a>
                    </h4>

                    <p className="article-paragraph">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent elit turpis, tempor eget enim eu, dignissim sodales mauris. Ut et tempor diam. Vestibulum ac scelerisque mauris 
                    </p>
                </article>

                <article className ="article-container">
                    <div className=" article-date">
                        <span className="m-2.5">Fecha 10 marzo</span>
                        <span className="m-2.5">Categoria Pruebas</span>
                    </div>
    
                    <h4 className ="article-title">
                        <a href='#'>Titulo del articulo</a>
                    </h4>

                    <p className="article-paragraph">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent elit turpis, tempor eget enim eu, dignissim sodales mauris. Ut et tempor diam. Vestibulum ac scelerisque mauris 
                    </p>
                </article>

                <article className ="article-container">
                    <div className=" article-date">
                        <span className="m-2.5">Fecha 10 marzo</span>
                        <span className="m-2.5">Categoria Pruebas</span>
                    </div>
    
                    <h4 className ="article-title">
                        <a href='#'>Titulo del articulo</a>
                    </h4>

                    <p className="article-paragraph">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent elit turpis, tempor eget enim eu, dignissim sodales mauris. Ut et tempor diam. Vestibulum ac scelerisque mauris 
                    </p>
                </article>

                <article className ="article-container">
                    <div className=" article-date">
                        <span className="m-2.5">Fecha 10 marzo</span>
                        <span className="m-2.5">Categoria Pruebas</span>
                    </div>
    
                    <h4 className ="article-title">
                        <a href='#'>Titulo del articulo</a>
                    </h4>

                    <p className="article-paragraph">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent elit turpis, tempor eget enim eu, dignissim sodales mauris. Ut et tempor diam. Vestibulum ac scelerisque mauris 
                    </p>
                </article>

            </section>

            
        </main>
    )
}

MainContent.propTypes = {

}

export default MainContent
