import React from 'react';
import './style.css';
import { Link } from 'react-router-dom';

export default function Question () {
    return (
        <div className="question-container">
            <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js"></script>
            <div className="card">
                <div className="card-body">
                    <section>
                    <div class="progress">
                        <div class="progress-bar bg-info progress-bar-striped progress-bar-animated">40%</div>
                    </div>
                    <h2 className="mt-2">Questão <span>1</span></h2>
                    <h4 id="enunciado" className="ml-6">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                    </h4>
                    <input type="radio" className="mr-2" id="alternativa_A" name="alternativa" value="A"/>
                    <label for="alternativa_A">Abacate</label><br></br>

                    <input type="radio" className="mr-2" id="alternativa_B"name="alternativa" value="B"/>
                    <label for="alternativa_B">Abacate</label><br></br>

                    <input type="radio" className="mr-2" id="alternativa_C"name="alternativa" value="C"/>
                    <label for="alternativa_C">Abacate</label><br></br>

                    <input type="radio" className="mr-2" id="alternativa_D" name="alternativa"value="D"/>
                    <label for="alternativa_D">Abacate</label><br></br>
                    </section>
                    <div className="row justify-content-center">
                        <Link className="btn btn-secondary" to="/profile">Anterior</Link>
                        <Link className="btn btn-success ml-2" to="/resume">Próxima</Link>
                    </div>
                </div>
            </div>
        </div>
        
    );
}