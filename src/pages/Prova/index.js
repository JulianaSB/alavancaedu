import React from 'react';
import './style.css';
import { Link } from 'react-router-dom';
//import { FiPower } from 'react-icons/fi';
import logoImg from '../../assests/logo.svg'


export default function Question () {
    return (
        <div className="question-container">
        <header >
        <img src={logoImg} alt="Be the hero"/>
        
        <span> #454545 </span>
        <Link className="button" to="incidents/new">Nome chatbot</Link>
        
        
        </header>
            <section>
                <h1>Questão <span>1</span></h1>
                
                <p id="enunciado">Enunciado da questão</p>
                <form action="">
                <input type="radio" id="alternativa_A" name="alternativa" value="A"/>
                <label for="alternativa_A">Abacate</label><br></br>

                <input type="radio" id="alternativa_B"name="alternativa" value="B"/>
                <label for="alternativa_B">Abacate</label><br></br>

                <input type="radio" id="alternativa_C"name="alternativa" value="C"/>
                <label for="alternativa_C">Abacate</label><br></br>

                <input type="radio" id="alternativa_D" name="alternativa"value="D"/>
                <label for="alternativa_D">Abacate</label><br></br>
                </form>
            </section>
        </div>
        
    );
}