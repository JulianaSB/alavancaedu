import React, { useState, useEffect } from 'react';
import './style.css';
import api from '../../services/api';
import { Link } from 'react-router-dom';

export default function Question () {
    // useEffect(() => {
    //     async function fetchData() {
    //         const response = await api.get(`http://alavancaedu.online/items/1.json`);
    //         setdescriptionTest(response)
    //         console.log(response.data.item.id);
    //     }
    //     fetchData();
    //   }, []);

    const [titleTest, settitleTest] = useState('');
    const [option1Question1, setoption1Question1] = useState('');
    const [option2Question1, setoption2Question1] = useState('');
    const [option3Question1, setoption3Question1] = useState('');
    const [option4Question1, setoption4Question1] = useState('');

    const [option1Question2, setoption1Question2] = useState('');
    const [option2Question2, setoption2Question2] = useState('');
    const [option3Question2, setoption3Question2] = useState('');
    const [option4Question2, setoption4Question2] = useState('');

    const [option1Question3, setoption1Question3] = useState('');
    const [option2Question3, setoption2Question3] = useState('');
    const [option3Question3, setoption3Question3] = useState('');
    const [option4Question3, setoption4Question3] = useState('');
    const idTest = localStorage.getItem('idTest');

    useEffect(() => {
        api.get(`http://alavancaedu.online/items/1.json`, {
            headers: {}
        }).then(response => {
                settitleTest(response.data.item.statement);
                setoption1Question1(response.data.item.option_1);
                setoption2Question1(response.data.item.option_2);
                setoption3Question1(response.data.item.option_3);
                setoption4Question1(response.data.item.option_4);
            }
        )
    }, []);

    useEffect(() => {
        api.get(`http://alavancaedu.online/items/2.json`, {
            headers: {}
        }).then(response => {
                settitleTest(response.data.item.statement);
                setoption1Question2(response.data.item.option_1);
                setoption2Question2(response.data.item.option_2);
                setoption3Question2(response.data.item.option_3);
                setoption4Question2(response.data.item.option_4);
            }
        )
    }, []);

    useEffect(() => {
        api.get(`http://alavancaedu.online/items/3.json`, {
            headers: {}
        }).then(response => {
                settitleTest(response.data.item.statement);
                setoption1Question3(response.data.item.option_1);
                setoption2Question3(response.data.item.option_2);
                setoption3Question3(response.data.item.option_3);
                setoption4Question3(response.data.item.option_4);
            }
        )
    }, []);

    // useEffect(async () => {
        
    //     setdescriptionTest(response.data);
    // }, []);
    return (
        <div className="question-container">
            <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js"></script>
            <div className="card">
                <div className="card-body">
                    <section className="mt-4">
                    <h2 className="mt-2">Questão <span>1</span></h2>
                    <h4 id="enunciado" className="ml-6">
                    {titleTest}
                    </h4>
                    <input type="radio" className="mr-2" id="optionQuestion1" name="optionQuestion1" value="A"/>
                    <label for="alternativa_A">{option1Question1}</label><br></br>

                    <input type="radio" className="mr-2" id="optionQuestion1"name="optionQuestion1" value="B"/>
                    <label for="alternativa_B">{option2Question1}</label><br></br>

                    <input type="radio" className="mr-2" id="optionQuestion1"name="optionQuestion1" value="C"/>
                    <label for="alternativa_C">{option3Question1}</label><br></br>

                    <input type="radio" className="mr-2" id="optionQuestion1" name="optionQuestion1"value="D"/>
                    <label for="alternativa_D">{option4Question1}</label><br></br>
                    </section>

                    <section className="mt-4">
                    <h2 className="mt-2">Questão <span>2</span></h2>
                    <h4 id="enunciado" className="ml-6">
                    {titleTest}
                    </h4>
                    <input type="radio" className="mr-2" id="optionQuestion2" name="optionQuestion2" value="A"/>
                    <label for="alternativa_A">{option1Question2}</label><br></br>

                    <input type="radio" className="mr-2" id="optionQuestion2"name="optionQuestion2" value="B"/>
                    <label for="alternativa_B">{option2Question2}</label><br></br>

                    <input type="radio" className="mr-2" id="optionQuestion2"name="optionQuestion2" value="C"/>
                    <label for="alternativa_C">{option3Question2}</label><br></br>

                    <input type="radio" className="mr-2" id="optionQuestion2" name="optionQuestion2"value="D"/>
                    <label for="alternativa_D">{option4Question2}</label><br></br>
                    </section>

                    <section className="mt-4">
                    <h2 className="mt-2">Questão <span>3</span></h2>
                    <h4 id="enunciado" className="ml-6">
                    {titleTest}
                    </h4>
                    <input type="radio" className="mr-2" id="optionQuestion3" name="optionQuestion3" value="A"/>
                    <label for="alternativa_A">{option1Question3}</label><br></br>

                    <input type="radio" className="mr-2" id="optionQuestion3"name="optionQuestion3" value="B"/>
                    <label for="alternativa_B">{option2Question3}</label><br></br>

                    <input type="radio" className="mr-2" id="optionQuestion3"name="optionQuestion3" value="C"/>
                    <label for="alternativa_C">{option3Question3}</label><br></br>

                    <input type="radio" className="mr-2" id="optionQuestion3" name="optionQuestion3"value="D"/>
                    <label for="alternativa_D">{option4Question3}</label><br></br>
                    </section>                               
                    <div className="row justify-content-center">
                        <Link className="btn btn-success ml-2" to="/resume">Finalizar   </Link>
                    </div>
                </div>
            </div> 
        </div>
        
    );
}