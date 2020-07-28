import React from 'react';
import './style.css';
import { Link } from 'react-router-dom';
//import { FiPower } from 'react-icons/fi';
import logoImg from '../../assests/logo.svg'

export default function Test() {
    return (
        <div className="test-container">
            <header>
                <img src={logoImg} alt="Be the hero"/>
                
                <span> #454545 </span>
                <Link className="button" to="incidents/new">Nome chatbot</Link>
                
                
            </header>
            <section>
                <h1>Instruções para a Prova</h1>
                <p> 
                                Instructions: 
                This test consists of 8 multiple choice questions, 1 algorithm implementation and 1 nontechnical question. The algorithm is worth 60% of the total score. The non-technical question must be answered in Portuguese. 
                You may use any blank space on this test as a draft. 
                Use the table below to record your answers. 
                Good luck! 

                </p>
                <Link className="button" to="incidents/new">Iniciar Prova</Link>
            </section>

        </div>
    );
}