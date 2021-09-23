import React, {useState, useEffect} from 'react';
import Card from '../Card/Index';
import './Main.css'; 
import Button from '../Button/Button'; 
// require ('../../Config.js');

const Main = () => {
const config = {
        'title': 'Random dad joke:',
        'button_content': 'Get New joke'
    }
   


    const [jokeTriggred, setjokeTrigger] = useState(false);
    const [jokeObject, setJokeObjectSet] = useState({});

    useEffect(() => {
        const jokeApi =  fetch('https://icanhazdadjoke.com/', {
            headers : {
                Accept: 'application/json',    
            }
        }).then(response => {
                            if (response.ok) {
                               return response.json();
                            }
                    throw response;
            }).then(data =>setJokeObjectSet(data)
            );
         
     }, [jokeTriggred]);
    
    return <div className="main-container">

        <h1 className="main-title">{config.title}</h1>

        <Card content={jokeObject.joke}>
            <Button onClick={setjokeTrigger} className="joke-triger">{config.button_content}</Button>
        </Card>
        
    </div>;
}

export default Main;