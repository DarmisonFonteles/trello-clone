import './style.css'
import logo from "../../assets/tr-logo.png"
import { Button } from 'antd';
import React, { useState } from 'react';
import {PlusOutlined} from '@ant-design/icons';
import ModalCustom from '../custommodal';
import { Form } from 'antd';
import { Modal } from 'antd';
import addTicket from '../../redux/tickets/ticketSlice';
import { useDispatch } from 'react-redux';

export default function Header(){

    const [modal2Open, setModal2Open] = useState(false);

    const [form] = Form.useForm();

    const dispatch = useDispatch();
    
    const onOK = () => {
        form
        .validateFields()
        .then((values) => {
            // values.id = gerarNumerosAleatorios();
            dispatch(addTicket.addTicket(values))
            // console.log(values)
        })
        .catch((errorInfo) => {
            console.log('Erro na validação do formulário:', errorInfo);
        });
    }



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
                        onOk={onOK}
                        onCancel={() => setModal2Open(false)}
                        
                    >
                        <ModalCustom propsForms={form}></ModalCustom>
                    </Modal>

                </div>
            </div>
        </header>
    )
}