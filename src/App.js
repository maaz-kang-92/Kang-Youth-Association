import { useState } from "react";
import Navbar from "./Navbar";
import TextForm from "./TextForm";
import Alert from "./Alert";
// import { BrowserRouter, Routes, Route } from "react-router-dom"; 

export default function App() {

    // here is place where we can handle all the page of the App and Navbar
    const [mode, setMode] = useState('light')
    const [text, setText] = useState('Enable Dark Mode')
    const [alert, setAlert] = useState(null);
    const [color, setColor] = useState('light')
    const showAlert = (type, message) => {
        setAlert({
            type: type,
            msg: message
        })
        // after the 1.5 second alert dismiss
        setTimeout(() => {
            setAlert(null)
        }, 1000);
    }

    //this is the arrow function that handle the Enable Mode and text color....
    const toggleMode = () => {

        if (mode === 'dark') {
            setMode('light')
            setText('Enable Dark Mode')

            document.body.style.backgroundColor = 'white'
            document.body.style.color = 'black'

            showAlert('success', 'Light mode has been enabled')

        } else {
            setMode('dark')                 //change color vise versa
            setText('Enable Light Mode')
            document.body.style.backgroundColor = '#042743'
            document.body.style.color = 'white'
            showAlert('success', 'Dark mode has been enabled')

            // if change in tilte
            setInterval(() => {
                document.title = 'Dark Mode is Amazing'
            }, 2000);

            setInterval(() => {
                document.title = 'Install our KANG Youth App'
            }, 1500);
        }
    }

    const redMode = () => {

        if (mode === 'light') {
            setColor('red')
            document.body.style.backgroundColor = 'red'
            document.body.style.color = 'white'
            showAlert("success", "Red mode has been enabled")
        }
    }
    const blueMode = () => {
        if (mode === 'light') {

            setColor('blue')
            document.body.style.backgroundColor = 'blue'
            document.body.style.color = 'white'
            showAlert("success", "Blue mode has been enabled")
        }
    }

    const brownMode = () => {
        if (mode === 'light') {

            setColor('brown')
            document.body.style.backgroundColor = 'brown'
            document.body.style.color = 'white'
            showAlert("success", "Brown mode has been enabled")
        }
    }
    const greenMode = () => {
        if (mode === 'light') {

            setColor('green')
            document.body.style.backgroundColor = 'green'
            document.body.style.color = 'white'
            showAlert("success", "Green mode has been enabled")
        }
    }
    const purpleMode = () => {
        if (mode === 'light') {

            setColor('purple')
            document.body.style.backgroundColor = 'purple'
            document.body.style.color = 'white'
            showAlert("success", "Purple mode has been enabled")
        }
    }

    return (
        <>
            {/* <BrowserRouter> */}
            {/* here is how we can pass the arrow function as a props */}
            <Navbar textUtils="KANG Youth Association" mode={mode} text={text} toggleMode={toggleMode} redMode={redMode} blueMode={blueMode} brownMode={brownMode} greenMode={greenMode} purpleMode={purpleMode} />
            <Alert alert={alert} />
            {/* <About /> */}
            <TextForm mode={mode} showAlert={showAlert} color={color} />


            {/* </BrowserRouter> */}

        </>
    )
}

