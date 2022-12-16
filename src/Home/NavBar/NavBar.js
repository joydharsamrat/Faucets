import { Form } from 'react-bootstrap';
import Navbar from 'react-bootstrap/Navbar';
import './NavBar.css'
import { IoWalletSharp } from "react-icons/io5";
import { BiUserCircle } from "react-icons/bi";

function NavBar({ setModalShow }) {
    return (
        <div>
            <div className='d-flex align-items-center justify-content-between py-3 px-2 px-lg-5'>
                <h1 className='fs-2 fw-bold primary-text'>Faucets</h1>
                <div className='d-flex align-items-center justify-content-end gap-2'> { /*style={{ width: '' }}> */}
                    <Form.Select className='w-50' aria-label="Default select example">
                        <option selected hidden>Ethereum Kovan</option>
                        <option value="1">Arbitrum Rinkeby</option>
                        <option value="2">Avalanche Fuji</option>
                        <option value="3">BNB Chain Testnet</option>
                        <option value="3">Ethereum Rinkeby</option>
                        <option value="3">Fantom Testnet</option>
                        <option value="3">Harmony Testnet</option>
                        <option value="3">OA Network Sokol</option>
                        <option value="3">Polygon Mumbai</option>
                    </Form.Select>
                    <button className='modalButton d-none d-md-block' onClick={() => setModalShow(true)}>
                        <IoWalletSharp></IoWalletSharp><span className=''> Connect Wallet</span>
                    </button>
                    <p className='modalButton2 d-block border-0 d-md-none' onClick={() => setModalShow(true)}>
                        <IoWalletSharp></IoWalletSharp>
                    </p>
                    <div className='user border'>
                        <BiUserCircle></BiUserCircle>
                    </div>
                </div>
            </div>
            <div className='bg1 notice d-flex align-items-center justify-content-center text-white pt-3'>
                <p>Notice here</p>
            </div>
        </div>
    );
}

export default NavBar;