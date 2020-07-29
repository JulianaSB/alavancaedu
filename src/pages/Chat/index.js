import React from 'react';
import './style.css';
import iconImg from '../../assests/estrangeiro.png';


export default function Profile() {
    return (
        <div className="chat-container">
            <h1 className="mb-4">Oi, Joãozinho</h1>
            <div className="card">
                <div className="card-body">
                    <h2 className="mb-4">PARABÉNS!!! Você terminou a prova.</h2>
                    <p> 
                        Agora se tiver alguma dúvida ou precisa de ajuda, só mandar aqui embaixo que nosso E.T responde.<br />
                        Senão tiver dúvidas, acabou por hoje :)
                    </p>
                    <img src={iconImg} alt="Icon"/>
                </div>
            </div>
        </div>
    );
}