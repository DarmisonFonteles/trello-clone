import './style.css'
import logo from "../../assets/tr-logo.png"
import mais from "../../assets/mais.png"
import { Button, Modal } from 'antd';
import React, { useState } from 'react';
import {PlusOutlined} from '@ant-design/icons';

import { Cascader } from 'antd';
import { Input } from 'antd';

export default function Header(){

    const [modal2Open, setModal2Open] = useState(false);


    const options_one = [
        {
            value: 'Abertos',
            label: 'Abertos',
        },
        {
            value: 'Executados',
            label: 'Executados',
        },
        {
            value: 'Vistoriados',
            label: 'Vistoriados',
        },
        {
            value: 'Arquivados',
            label: 'Arquivados',
        },
          
    ];

    const options_two = [
        {
            value: 'Abertos',
            label: 'Abertos',
        },
        {
            value: 'Executados',
            label: 'Executados',
        },
        {
            value: 'Vistoriados',
            label: 'Vistoriados',
        },
        {
            value: 'Arquivados',
            label: 'Arquivados',
        },
          
    ];

    const onChange = (value) => {
        console.log(value);
    };

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
                        title="Novo ticket"
                        centered
                        open={modal2Open}
                        onOk={() => setModal2Open(false)}
                        onCancel={() => setModal2Open(false)}
                    >
                        <p>Descrição*</p>
                        <Input placeholder="Descrição" />
                        <p>Tipo*</p>
                        <Cascader options={options_one} onChange={onChange} placeholder="Please select" />
                        <p>Resposavel*</p>
                        <Cascader options={options_two} onChange={onChange} placeholder="Please select" />
                    </Modal>
                </div>
            </div>
        </header>
    )
}