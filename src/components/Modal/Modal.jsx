import React from "react";
import "./Modal.css";
import CloseIcon from '@mui/icons-material/Close';
export default function Modal({onClose, isOpen, details}){

    //console.log("onClose, isOpen, details",onClose, isOpen, details)
    return(<div class="modal-section">
        <div class="card-container">
        <CloseIcon style={{fill:'red'}} onClick={onClose}/>
        <h2 style={{color:'black'}}>Overview:</h2>
        <p style={{color:'black'}}>{details[0].overview}</p>
        </div>
    </div>)
}