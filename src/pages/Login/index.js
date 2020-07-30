import React from 'react';
import './style.css';
import { Link } from 'react-router-dom';
import logoImg from '../../assests/alavanca_logo.png'


export default function Login() {
    return (
        <div className="login-container container">
            <section className="form col-md-6">
                <div className="card">
                    <div className="card-body">
                        <form align="center">
                            <img src={logoImg} alt="Heroes"/>
                            <input type="text" placeholder="Sua matricula" required/>
                            <input type="text" placeholder="Seu Código" required/>
                            <Link className="button" to="/profile">Entrar</Link>
                        </form>
                    </div>
                </div>
            </section>
        </div>
    );
}