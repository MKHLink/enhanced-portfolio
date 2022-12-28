import React,{useState} from "react";
import {validateEmail} from "../../utils/helpers";

//the function handleChange makes use of the declared states to validate data in the form and trigger when the user takes curson off the input fields
//multiple br in the bottom to keep footer adjusted at the bottom of the page
function Contact(){
    
    const [errorMessage, setErrorMessage] = useState('');
    const [formState, setFormState] = useState({name: '',email: '', message: ''});
    const {name, email, message} = formState;

    function handleChange(e){
        if (e.target.name === 'email') {
            const isValid = validateEmail(e.target.value);
            console.log(isValid);
            if (!isValid) {
                setErrorMessage('Your email is invalid.');
              } else {
                setErrorMessage('');
              }
            } else {
                if (!e.target.value.length) {
                  setErrorMessage(`${e.target.name} is required.`);
                } else {
                  setErrorMessage('');
                }
          }  
          if (!errorMessage) {
            setFormState({ ...formState, [e.target.name]: e.target.value });
          }
    }

    
    return(
        <section>
            <h1>Contact Me</h1>
            <form id="contact-form">
                <div>
                    <label htmlFor="name">Name: </label>
                    <input type="text" name="name" defaultValue={name} onBlur={handleChange}/>
                </div>
                <div>
                    <label htmlFor="email">Email: </label>
                    <input type="text" name="email" defaultValue={email} onBlur={handleChange}/>
                </div>
                <div>
                    <label htmlFor="message">Message: </label>
                    <textarea name="message" rows="5" defaultValue={message} onBlur={handleChange}/>
                </div>
                {errorMessage && (
                <div>
                    <p className="error-text">{errorMessage}</p>
                </div>
                )}

                <button type="submit">Submit</button>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
            </form>
        </section>
    );
}

export default Contact;