import React from 'react';
import './style.css';
import { Link } from 'react-router-dom';

export default function Header () {
    return (
        <header>
            <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css" integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk" crossorigin="anonymous"></link>
            <div className="container d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 border-bottom box-shadow">
                <h5 className="my-0 mr-md-auto font-weight-normal"></h5>
                <div className="row div-chat">
                    <nav className="my-2 my-md-0 mr-md-3">
                        <span className="text-white">Está com dúvida?</span>
                    </nav>
                    <Link className="btn btn-outline-light" to="/chat">Conversar no Chat</Link>
                </div>
            </div>
        </header>   
    );
}