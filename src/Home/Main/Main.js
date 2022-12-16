import React, { useState } from 'react';
import { Table } from 'react-bootstrap';
import { AiFillWarning } from "react-icons/ai";
import './Main.css'

const Main = () => {
    const [visible, setVisible] = useState(true)



    return (
        <div className='p-3 lg:p-5'>

            <div className='mb-5'>
                <h1 className='primary-text mb-4'>
                    Request testnet LINK
                </h1>
                <p>
                    Get testnet LINK for an account on one of the supported blockchain testnets so you can <br /> create and test your own oracle and Chainlinked smart contract
                </p>
            </div>
            <div className=' main'>
                <p className='warning d-block d-lg-flex'>
                    <span className='primary-text fs-5'>
                        <AiFillWarning></AiFillWarning>
                    </span>
                    Your wallet is connected to <strong>Ethereum Kovan</strong>, so you are requesting <strong>Ethereum Kovan</strong> Link/ETH.
                </p>
                <div className='mb-3'>
                    <label htmlFor="wallet" className='primary-text fw-bold '>Wallet Address</label>
                    <br />
                    <input id='wallet' className='w-100 w-lg-50 border px-2 py-1' placeholder='Wallet address...' type="text" />

                    <p className='primary-text fw-bold mt-3 mb-0'>Request Type</p>
                    <div className='mt-0 w-lg-50 d-flex justify-content-between'>
                        <input style={{ width: "48%" }} className="border px-2 py-1" disabled value="20 Test Link" type="text" />
                        <input style={{ width: "48%" }} className="border px-2 py-1" disabled value="0.5 ETH" type="text" />
                    </div>
                </div>
                <form action="?" method="POST">
                    <div class="g-recaptcha" data-sitekey=""></div>
                    <br />
                    <input className='bg1 border-0 rounded text-white py-1 px-3' type="submit" value="Send Request" />
                </form>
                <div className='mt-3'>
                    <h5 className='fw-bold'>Request History</h5>
                    <div className='my-3'>
                        <button onClick={() => setVisible(true)} className={visible ? 'active me-lg-2' : 'inactive me-lg-2'}>ETH Transaction History</button>
                        <button onClick={() => setVisible(false)} className={visible ? 'inactive ms-lg-2 mt-2 mt-lg-0' : 'active ms-lg-2 mt-2 mt-lg-0'}>TestLink Transaction History</button>
                    </div>
                    <Table size='sm' className={visible ? 'visible' : 'd-none'}>
                        <thead>
                            <tr className='border'>
                                <th className=' fit'>Sr</th>
                                <th className=' fit'>Time </th>
                                <th className=' fit'>Amount</th>
                                <th className=' fit'>Hash</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className='border'>
                                <td className=' fit'>1</td>
                                <td className=' fit'>12:30 AM	</td>
                                <td className=' fit'>487</td>
                                <td className=' fit'>4s8er5s5fe57rjmxnfuewrurks</td>
                            </tr>
                            <tr className='border'>
                                <td className=' fit'>2</td>
                                <td className=' fit'>10:30 AM	</td>
                                <td className=' fit'>875</td>
                                <td className=' fit'>sf7s7ers4e7r7wser</td>
                            </tr>
                            <tr className='border'>
                                <td className='fit'>3</td>
                                <td className='fit'>11:30 AM	</td>
                                <td className='fit'>797</td>
                                <td className='fit'>se4s7er7</td>
                            </tr>
                        </tbody>
                    </Table>
                    <Table size='sm' className={visible ? 'd-none' : 'visible'}>
                        <thead>
                            <tr className='border'>
                                <th className=' fit'>Sr</th>
                                <th className=' fit'>Time </th>
                                <th className=' fit'>Amount</th>
                                <th className=' fit'>Hash</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className='border'>
                                <td className=' fit'>1</td>
                                <td className=' fit'>08:30 AM	</td>
                                <td className=' fit'>748</td>
                                <td className=' fit'>7s7effkeurusue4</td>
                            </tr>
                            <tr className='border'>
                                <td className=' fit'>2</td>
                                <td className=' fit'>10:23 AM	</td>
                                <td className=' fit'>974</td>
                                <td className=' fit'>sfe7r7sr4fer</td>
                            </tr>
                            <tr className='border'>
                                <td className='fit'>3</td>
                                <td className='fit'>11:10 AM</td>
                                <td className='fit'>874</td>
                                <td className='fit'>s4e7s8er</td>
                            </tr>
                        </tbody>
                    </Table>
                </div>
            </div>

        </div>
    );
};

export default Main;