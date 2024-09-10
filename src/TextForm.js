import { useState } from "react";
import './index.css';

export default function TextForm(props) {

    const [text, setText] = useState("");      //declaration of the text variable as a useState  

    const textUpHandler = () => {
        const newValue = text.toUpperCase();
        setText(newValue);
        props.showAlert("success", "The text has been converted into upper case")
    }

    const textLowHandler = () => {
        const newValue = text.toLowerCase();
        setText(newValue);
        props.showAlert("success", "The text has been converted into lower case")
    }

    const textClearHandler = () => {
        const newValue = "";
        setText(newValue);
        props.showAlert("success", "The text has been cleaned")

    }

    //this is for changing in the textarea (without it we can't change the value of textarea)
    const onChangefun = (event) => {
        setText(event.target.value);    //will change the value of setText
    }

    const textInverseHandler = () => {
        let newText = "";
        for (let i = text.length - 1; i >= 0; i--) {
            newText += text[i];
        }
        setText(newText);
        props.showAlert("success", "The text has been converted into inverse case")

    }
    const speak = () => {
        let msg = new SpeechSynthesisUtterance();
        msg.text = text;
        window.speechSynthesis.speak(msg);
        props.showAlert("success", "The text is goig to speak")

    }
    const handleCopy = () => {
        const text = document.getElementById("myTextArea");    //here inside any function we get the value of text by using getElementbyId and used outside or any arrow function
        text.select();
        navigator.clipboard.writeText(text.value);        //this is used for the copy of textarea on the clipboard
        props.showAlert("success", "The text has been  copied")         //definition of the function..


    }

    // remove extra spaces (here the use of regex) later check regex
    const removeExtraSpaces = () => {
        let newText = text.split(/[ ]+/)    //it will become array of spaces (more than one) and join them.....
        setText(newText.join(" "))
        props.showAlert("success", "Extra spaces has been removed")         //definition of the function..
    }

    return (
        <>
            <div className="container">
                <label for="textarea" className="form-label">
                    <h2>Enter Text Here </h2>
                </label>
                <div className="mb-3">
                    <textarea className="form-control" id="myTextArea" value={text} rows="8" onChange={onChangefun}
                        
                        placeholder="Please Enter the value here! "
                    >
                    </textarea>
                </div>
                {/* there are only two colors in bootstrap property */}
                <button className={`btn btn-${props.mode === 'light' ? 'dark' : 'light'} my-2 `}
                    style={{
                        background: document.body.style.backgroundColor === props.color ? 'white' : '',
                        color: document.body.style.backgroundColor === props.color ? 'black' : ''
                    }}
                    onClick={textUpHandler}>
                    Convert to Uppercase
                </button>
                <button className={`btn btn-${props.mode === 'light' ? 'dark' : 'light'} my-2 mx-2`}

                    style={{
                        background: document.body.style.backgroundColor === props.color ? 'white' : '',
                        color: document.body.style.backgroundColor === props.color ? 'black' : ''
                    }}
                    onClick={textLowHandler}
                >
                    Convert to Lowercase
                </button>

                <button className={`btn btn-${props.mode === 'light' ? 'dark' : 'light'} my-2 mx-2`}
                    style={{
                        background: document.body.style.backgroundColor === props.color ? 'white' : '',
                        color: document.body.style.backgroundColor === props.color ? 'black' : ''
                    }}
                    onClick={textInverseHandler}
                >
                    Inverse Text
                </button>
                <button className={`btn btn-${props.mode === 'light' ? 'dark' : 'light'} my-2 mx-2`}
                    style={{
                        background: document.body.style.backgroundColor === props.color ? 'white' : '',
                        color: document.body.style.backgroundColor === props.color ? 'black' : ''
                    }}
                    onClick={textClearHandler}
                >
                    Clear Text
                </button>

                <button className={`btn btn-${props.mode === 'light' ? 'dark' : 'light'} my-2 mx-2`} style={{
                    background: document.body.style.backgroundColor === props.color ? 'white' : '',
                    color: document.body.style.backgroundColor === props.color ? 'black' : ''
                }}
                    onClick={speak}
                >
                    Speak Text
                </button>

                <button className={`btn btn-${props.mode === 'light' ? 'dark' : 'light'} my-2 mx-2`}
                    style={{
                        background: document.body.style.backgroundColor === props.color ? 'white' : '',
                        color: document.body.style.backgroundColor === props.color ? 'black' : ''
                    }}
                    onClick={handleCopy}
                >
                    Copy Text
                </button>

                <button className={`btn btn-${props.mode === 'light' ? 'dark' : 'light'} my-2 mx-2`}
                    style={{
                        background: document.body.style.backgroundColor === props.color ? 'white' : '',
                        color: document.body.style.backgroundColor === props.color ? 'black' : ''
                    }}
                    onClick={removeExtraSpaces}
                >
                    Remove Extra Spaces
                </button>

                <p>
                    <strong>Data Summary for Preview</strong> <br />

                </p>
                <p>
                    {text.length} Characters and {text.split(" ").length} Words in the Textarea
                </p>
                <p>
                    {text.split(" ").length * 0.008} Minutes to read this Text
                </p>
                <h2>Preview</h2>
                <p className="justify-cont">
                    {text.length > 0 ? text : " Enter something in the textarea to preview it here"}
                </p>
            </div>

        </>
    )
}