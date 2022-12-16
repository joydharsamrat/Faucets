import React from 'react';
import Modal from 'react-bootstrap/Modal';
import { RxCross2 } from "react-icons/rx";
import './Modal.css'

function MyModal(props) {
    return (
        <Modal
            {...props}
            size="md"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <div className='p-3'>
                <p onClick={props.onHide} className="text-end close fw-bold"><RxCross2></RxCross2></p>
                <h2 className='fs-3'>Connect your wallet</h2>
                <div className='d-flex align-items-center justify-content-around'>
                    <figure className='modal-img'>
                        <img src="/icons/MetaMask.551edf10.svg" alt="" />
                        <caption className='primary-text fs-5 fw-bold'>MetaMusk</caption>
                    </figure>
                    <figure className='modal-img'>
                        <img src="/icons/WalletConnect.d0b10794.svg" alt="" />
                        <caption className='primary-text fs-5 fw-bold'>WalletConnect</caption>
                    </figure>
                </div>
            </div>
        </Modal>
    );
}


export default MyModal