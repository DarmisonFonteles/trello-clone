import './style.css'
import logo from "../../assets/tr-logo.png"
import mais from "../../assets/mais.png"
import { Button, Modal } from 'antd';
import React, { useState } from 'react';
import {PlusOutlined} from '@ant-design/icons';

export default function Header(){

    const [modal2Open, setModal2Open] = useState(false);


    return(
        <header className='header'>
            <div className='container'>
                <div className='header-campo'>
                    <a>
                        <img className='header-campo-logo' src={logo} alt="Logo Trilogo"/>
                    </a>

                    <Button className='header-novo-ticket' type="primary" onClick={() => setModal2Open(true)}>
                        <PlusOutlined />
                        Novo ticket
                    </Button>

                    <Modal
                        title="Vertically centered modal dialog"
                        centered
                        open={modal2Open}
                        onOk={() => setModal2Open(false)}
                        onCancel={() => setModal2Open(false)}
                    >
                        <p>some contents...</p>
                        <p>some contents...</p>
                        <p>some contents...</p>
                    </Modal>
                </div>
            </div>
        </header>
    )
}