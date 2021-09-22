import React, {useRef} from 'react';
import './card.css'; 


const Card = (props) => {

    const { joke } = props;

    const inputRef = useRef(null);
    // console.log(props);

    function copyTrigger() {
        console.log(inputRef.current.innerHTML);
    }


    return <div className="card-container">       
        <div className="card">
            <div className="card-svg">
                <svg xmlns="http://www.w3.org/2000/svg" width="54" height="14" viewBox="0 0 54 14"><g fill="none" fill-rule="evenodd" transform="translate(1 1)"><circle cx="6" cy="6" r="6" fill="#FF5F56" stroke="#E0443E" stroke-width=".5"></circle><circle cx="26" cy="6" r="6" fill="#FFBD2E" stroke="#DEA123" stroke-width=".5"></circle><circle cx="46" cy="6" r="6" fill="#27C93F" stroke="#1AAB29" stroke-width=".5"></circle></g></svg>
            </div>

            <div className="card-content">
                <p className="sub-jokes" ref={inputRef} onClick={() => {copyTrigger()}}>{joke}</p>
            </div>    
            {props.children}
        </div>

    </div>;
}
export default Card;