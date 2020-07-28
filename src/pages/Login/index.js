import React from 'react';
import './style.css';
import logoImg from '../../assests/logo.svg'
import heroesImg from '../../assests/heroes.png'

export default function Login() {
    return (
        <div className="login-container">
            <section className="form">
                <img src={logoImg} alt="Be the hero"/>

                <form>
                    <h1>Faça seu login!</h1>
                    <input type="text" placeholder="Sua matricula"/>
                    <button type="submit" className="button">Entrar</button>
                </form>
            </section>
            
            <img src={heroesImg} alt="Heroes"/>
        </div>
    );
}