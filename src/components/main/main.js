import React, {useState, useEffect} from 'react';
import Card from '../card/';
import './main.css'; 
import Button from '../button/button';
// require ('../../Config.js');

const Main = () => {
const config = {
        'title': 'Random dad joke:',
        'button_content': 'Get New joke'
    }
   


    const [jokeTriggred, jokeTrigger] = useState(false);
    const [jokeObject, JokeObjectSet] = useState({});

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
            }).then(data =>JokeObjectSet(data)
            );
         
     }, [jokeTriggred]);
    
    return <div className="main-container">

        <h1 className="main-title">{config.title}</h1>

        <Card joke={jokeObject.joke}>
            <Button updateState={jokeTrigger} className="joke-triger">{config.button_content}</Button>
        </Card>
        
    </div>;
}

export default Main;