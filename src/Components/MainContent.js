import React from 'react'
import PropTypes from 'prop-types'

const MainContent = props => {
    return (
        <main className='
        flex
        flex-row
        container w-11/12
        mx-auto
        '>
            <aside id='slide' className='
            w-72
            min-h-full
            mt-5
            flex-none
            order-2
            '>
                <h3>Buscar</h3>
                <div className='search
                '>
                    <form>
                        <input type ='text'/>
                        <input type = 'button' value='Buscar'/>
                    </form>
                    <h3>login</h3>
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
                <h3>Redes Sociales</h3>
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
                <h3>Patrocinadores</h3>
                <div id='sponsoirs'>

                </div>


            </aside>
            {/* Barra lateral FIn */}

            {/* Inicio de articulos */}
            <section className='
            mt-5
            flex-grow
            order-1
            mr-10
            '>

                <article>
                    <div>
                        <span>Fecha 10 marzo</span>
                        <span>Categoria Pruebas</span>
                    </div>

                </article>

                <h4>
                    <a href='#'>Titulo del articulo</a>
                </h4>

                <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent elit turpis, tempor eget enim eu, dignissim sodales mauris. Ut et tempor diam. Vestibulum ac scelerisque mauris 
                </p>

            </section>

            
        </main>
    )
}

MainContent.propTypes = {

}

export default MainContent
