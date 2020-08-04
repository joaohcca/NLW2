import React from 'react'

import whatsappIcon from '../../assets/images/icons/whatsapp.svg'

import './styles.css'
import TeacherForm from '../../pages/TeacherForm'

function TeacherItem() {
    return(
        <article className="teacher-item">
                    <header>
                        <img src="https://avatars1.githubusercontent.com/u/22637452?s=460&v=4" alt="JHCC"/>
                        <div>
                            <strong>JHCC</strong>
                            <span>Física</span>
                        </div>
                        <div>
                        <p>
                          Aqui temos um excelente professor com didática empolgante. </p>
                          <br/>
                        <p>  
                          Aqui mais uma linha de texto que serve pra absolumente nada
                        </p>
                        </div>
                    </header>
                    <footer>
                        <p>
                            Preço/Aula
                            <strong>R$30,00</strong>
                        </p>
                    <button>
                        <img src={whatsappIcon} alt="Whatsapp"/>
                        Contactar
                    </button>
                    </footer>
                </article>
    )
}

export default TeacherItem