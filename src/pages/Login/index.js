import React, { useState } from 'react';
import './style.css';
import { useHistory } from 'react-router-dom';
import api from '../../services/api';
import logoImg from '../../assests/alavanca_logo.png'


export default function Login() {
    const [id, setId] = useState([]);
    const history = useHistory();

    async function handleLogin(e) {
        e.preventDefault();
        try {
            const response = await api.get(`students/${id}.json`);
            localStorage.setItem('name', response.data.student.name);
            localStorage.setItem('id', id);
            localStorage.setItem('idSchool', response.data.student.classroom.school_id);
            history.push('/profile');

        } catch (error) {
            alert('erro');
        }
    }
    return (
        <div className="login-container container">
            <section className="form col-md-6">
                <div className="card">
                    <div className="card-body">
                        <form align="center" onSubmit={handleLogin}>
                            <img src={logoImg} alt="Heroes"/>
                            <input 
                                type="text" 
                                placeholder="Digite sua matricula" 
                                value={id} 
                                onChange={e => setId(e.target.value)}
                            />
                            <button className="button" type="submit">Entrar</button>
                        </form>
                    </div>
                </div>
            </section>
        </div>
    );
}