import React from "react";
import { Cascader } from 'antd';
import { Input } from 'antd';
import { InboxOutlined } from '@ant-design/icons';
import { message, Upload } from 'antd';
import { Form } from 'antd';

import { options_one, options_two } from "./variables";

const { Dragger } = Upload;

export default function ModalCustom({propsForms}){

    const onChange = (value) => {
        console.log(value);
    };

    const propsFile = {
        name: 'file',
        multiple: true,
        action: 'https://run.mocky.io/v3/435e224c-44fb-4773-9faf-380c5e6a2188',
        onChange(info) {
          const { status } = info.file;
          if (status !== 'uploading') {
            console.log(info.file, info.fileList);
          }
          if (status === 'done') {
            message.success(`${info.file.name} file uploaded successfully.`);
          } else if (status === 'error') {
            message.error(`${info.file.name} file upload failed.`);
          }
        },
        onDrop(e) {
          console.log('Dropped files', e.dataTransfer.files);
        },
    };

    return(
          <Form form={propsForms} >
            <p>Descrição*</p>
              <Form.Item name="Descricao">
                <Input placeholder="Descrição" />
              </Form.Item>
            <p>Tipo*</p>
              <Form.Item name="Tipo">
                <Cascader
                    style={{ width: '100%' }}
                    options={options_one} 
                    onChange={onChange} 
                    placeholder="Please select" 
                />
              </Form.Item>
            <p>Resposavel*</p>
              <Form.Item name="Resposavel">
                <Cascader 
                    style={{ width: '100%' }}
                    options={options_two} 
                    onChange={onChange} 
                    placeholder="Please select" 
                />
              </Form.Item>
            <Dragger {...propsFile}>
                <p className="ant-upload-drag-icon">
                  <Form.Item name="File">
                    <InboxOutlined />
                  </Form.Item>
                </p>
                <p className="ant-upload-text">Click or drag file to this area to upload</p>
                <p className="ant-upload-hint">
                Support for a single or bulk upload. Strictly prohibited from uploading company data or other
                banned files.
                </p>
            </Dragger>
          </Form>
    )
}