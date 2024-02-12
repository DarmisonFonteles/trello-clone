import './style.css'
import logo from "../../assets/tr-logo.png"
import { Button } from 'antd';
import React, { useState } from 'react';
import {PlusOutlined} from '@ant-design/icons';
import ModalCustom from '../custommodal';

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

                    <ModalCustom
                        title="Novo ticket"
                        centered
                        open={modal2Open}
                        onOk={() => setModal2Open(false)}
                        onCancel={() => setModal2Open(false)}
                    >

                    </ModalCustom>

                </div>
            </div>
        </header>
    )
}