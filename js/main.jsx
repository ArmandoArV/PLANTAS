import React,{useState, useRef} from "react";
import { createRoot } from 'react-dom/client';
import { Container, Button, Alert } from 'react-bootstrap';
import { CSSTransition } from 'react-transition-group';

import './css/style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
    <script type="text/javascript" src="js\main.js"></script>

function App(){
    // create a button that will show a message
    const [show, setShow] = useState(false);
    const [showAlert, setShowAlert] = useState(false);
}
const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App />);