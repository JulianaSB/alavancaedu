import React from 'react';
import './style.css';
import api from '../../services/api';
import iconImg from '../../assests/estrangeiro.png';


export default function Profile() {
    const studentName = localStorage.getItem('name');
    return (
       <div className="chat-container container">
            <h1 className="mb-4">Oi, {studentName}</h1>
           <div className="card">
                <div className="card-body">
                    <div className="row">
                        <div className="col-md-2 mb-2">
                            <img src={iconImg} alt="Icon"/>
                        </div>
                        <div className="col-md-10">
                        <iframe scrolling="no" src='https://web-chat.global.assistant.watson.cloud.ibm.com/preview.html?region=us-south&integrationID=b22ec634-6838-4045-8de6-29f8be1ce8b1&serviceInstanceID=b6c6f9dd-dc1f-4b47-8c87-1fee2a4518da'></iframe>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}