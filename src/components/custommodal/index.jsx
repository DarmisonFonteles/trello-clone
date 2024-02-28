import React from 'react';
import { Form, Input, Cascader, Upload, Button } from 'antd';
import { InboxOutlined } from '@ant-design/icons';
import { useFormContext } from '../../context/formcontext';
import { options_one, options_two } from './variables'

const { Dragger } = Upload;

export default function ModalCustom({propsForms}){

  const { formData, updateFormData } = useFormContext();

  const handleChange = (fieldName, value) => {
    // updateFormData(fieldName, value);
  };

  const handleFileChange = (info) => {
    const { file } = info;
    // updateFormData('File', file);
  };

  const onFinish = (values) => {
    console.log('Received values:', values);
    
    const testesav = {
      id: '',
      Descricao: '',
      Tipo: '',
      Responsavel: '',
      File: null,
    }
    
    updateFormData(values);

    console.log(formData);
  };

  function gerarID() {
    let id = '';
    const caracteres = '0123456789';
    const comprimentoID = 5;
    
    for (let i = 0; i < comprimentoID; i++) {
      const indiceAleatorio = Math.floor(Math.random() * caracteres.length);
      id += caracteres.charAt(indiceAleatorio);
    }
    
    return id;
  }

  return (
    <Form onFinish={onFinish}>
      <Form.Item name="Descricao" label="Descrição" rules={[{ required: true }]}>
        <Input value={formData.Descricao} onChange={(e) => handleChange('Descricao', e.target.value)} />
      </Form.Item>
      <Form.Item name="Tipo" label="Tipo" rules={[{ required: true }]}>
        <Cascader
          options={options_one}
          onChange={(value) => handleChange('Tipo', value)}
          placeholder="Please select"
        />
      </Form.Item>
      <Form.Item name="Responsavel" label="Responsável" rules={[{ required: true }]}>
        <Cascader
          options={options_two}
          onChange={(value) => handleChange('Responsavel', value)}
          placeholder="Please select"
        />
      </Form.Item>
      <Form.Item name="File" label="Arquivo">
        <Dragger onChange={handleFileChange}>
          <p className="ant-upload-drag-icon">
            <InboxOutlined />
          </p>
          <p className="ant-upload-text">Click or drag file to this area to upload</p>
          <p className="ant-upload-hint">Support for a single or bulk upload.</p>
        </Dragger>
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
}