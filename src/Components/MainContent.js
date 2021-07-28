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
                '>
                    <form>
                        <input type ='text'/>
                        <input type = 'button' value='Buscar'/>
                    </form>
                    <h3 className=" aside-header ">login</h3>
                    <form>
                        <label for='email'> Usuario </label>
                        <input type='email' id='email'></input>

                        <label for='password'> Password </label>
                        <input type='password' id='password'></input>

                        <input type='submit' value ='Entrar' />
                        <input type='reset' value ='Limpiar' />

                        <a href='#'>Registrate aqui</a>
                        <a href='#'>Has olvidado tu password?</a>
                        
                    </form>
                </div>
                <h3 className=" aside-header ">Redes Sociales</h3>
                <div id='social-medi'>
                    <div className='twitter'>
                        <a href='#'>Twitter</a>
                        <p>Twitter</p>
                    </div>

                    <div className='facebook'>
                        <a href='#'>Facebook</a>
                        <p>Facebook</p>
                    </div>

                    <div className='youtube'>
                        <a href='#'>Youtube</a>
                        <p>Youtube</p>
                    </div>
                </div>
                <h3 className=" aside-header ">Patrocinadores</h3>
                <div id='sponsoirs'>

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
