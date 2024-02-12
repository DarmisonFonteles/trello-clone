import React from "react";
import { Modal } from 'antd';
import { Cascader } from 'antd';
import { Input } from 'antd';
import { InboxOutlined } from '@ant-design/icons';
import { message, Upload } from 'antd';

import { options_one, options_two } from "./variables";

const { Dragger } = Upload;

export default function ModalCustom({title, open, onOK, onCancel}){

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
        <Modal
            title={title}
            centered
            open={open}
            onOk={onOK}
            onCancel={onCancel}
        >
            <p>Descrição*</p>
            <Input placeholder="Descrição" />
            <p>Tipo*</p>
            <Cascader
                style={{ width: '100%' }}
                options={options_one} 
                onChange={onChange} 
                placeholder="Please select" 
            />
            <p>Resposavel*</p>
            <Cascader 
                style={{ width: '100%' }}
                options={options_two} 
                onChange={onChange} 
                placeholder="Please select" 
            />

            <Dragger {...propsFile}>
                <p className="ant-upload-drag-icon">
                <InboxOutlined />
                </p>
                <p className="ant-upload-text">Click or drag file to this area to upload</p>
                <p className="ant-upload-hint">
                Support for a single or bulk upload. Strictly prohibited from uploading company data or other
                banned files.
                </p>
            </Dragger>
        </Modal>
    )
}