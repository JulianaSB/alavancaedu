import React from 'react';
import './style.css';
import { Link } from 'react-router-dom';
import iconImg from '../../assests/estrangeiro.png';
import icon01Img from '../../assests/monstros.png';
import icon02Img from '../../assests/monstros-02.png';

export default function Profile() {
    return (
        <div className="profile-container">
            <h1 className="mb-4">Oi, Joãozinho</h1>
            <div className="card">
                <div className="card-body">
                    <h2 className="mb-4">Instruções para a Prova</h2>
                    <p> 
                        Instructions: 
                        This test consists of 8 multiple choice questions, 1 algorithm implementation and 1 nontechnical question. The algorithm is worth 60% of the total score. The non-technical question must be answered in Portuguese. 
                        You may use any blank space on this test as a draft. 
                        Use the table below to record your answers. 
                        Good luck! 
                    </p>
                    <p><strong>Nós estaremos com você!! </strong></p>
                    <div className="row">
                        <div className="col-4 img-profile">
                            <img src={iconImg} alt="Icon"/>
                        </div>
                        <div className="col-4 img-profile">
                            <img src={icon01Img} alt="Icon"/>
                        </div>
                        <div className="col-4 img-profile">
                            <img src={icon02Img} alt="Icon"/>
                        </div>
                    </div>
                    <br />
                    <Link className="button" to="/question">Iniciar Prova</Link>
            </div>
            </div>
        </div>
    );
}