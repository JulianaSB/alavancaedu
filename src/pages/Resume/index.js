import React, { useState }  from 'react';
import './style.css';
import { Link } from 'react-router-dom';
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

export default function Question (props) {
    const {
        className
    } = props;

    const [modal, setModal] = useState(false);

    const toggle = () => setModal(!modal);
    return (
        <div className="resume-container">
           <div className="card">
                <div className="card-body">
                    <section>                   
                        <h2 className="mt-2 text-center">Resumo da Prova</h2><hr></hr>
                        <h4 id="enunciado" className="ml-6 text-center">
                        Essa prova teve 3 questões ao todo.<br />
                        Das 3 questões, 3 eram de matemática.<br />
                        </h4>
                        <div className="row mt-4 justify-content-center">
                            <ul class="list-group">
                                <li class="list-group-item list-group-item-success">Questões respondidas: <span>3</span></li>
                                <li class="list-group-item list-group-item-danger">Questões não respondidas: <span>0</span></li>
                            </ul>
                        </div>
                        
                    </section>
                    <br />
                    <div className="row justify-content-center">
                        <Link className="btn btn-secondary" to="/question">Voltar às questões</Link>
                        <Link className="btn btn-success ml-2" onClick={toggle}>Terminar a prova</Link>
                    </div>
                </div>
            </div>
            <Modal isOpen={modal} toggle={toggle} className={className}>
                <ModalHeader toggle={toggle}>PARABÉNS!!! Você terminou a prova.</ModalHeader>
                <ModalBody>
                    <p>
                        Agora se tiver alguma dúvida ou precisa de ajuda, só mandar conversar nosso E.T que ele responde.<br />
                        Senão tiver dúvidas, acabou por hoje :)
                    </p>
                </ModalBody>
                <ModalFooter>
                    <Link className="btn btn-secondary" to="/">Cancelar</Link>
                    <Link className="btn btn-success" to="/chat">Conversar</Link>
                </ModalFooter>
            </Modal>
        </div>
        
    );
}