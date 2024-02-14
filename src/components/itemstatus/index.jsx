import React, { useState } from "react";
import { DragDropContext } from "react-beautiful-dnd";
import { Droppable } from "react-beautiful-dnd";
import { Draggable } from "react-beautiful-dnd";
import { EllipsisOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import ModalCustom from '../custommodal';
import { Modal } from 'antd';

import { InicialColumns } from "./variables";
import './style.css'

export default function Item(){

    const [columns, setColumns] = useState(InicialColumns);

    const [modal2Open, setModal2Open] = useState(false);

    const onDragEnd = (result) => {

        if(!result.destination){
            return
        }
        // console.log(result);
        // var sourceColumnItems = columns[0].items;
        var sourceColumnItems = [];
        var destinationColumnItems = [];
        var draggedItem = {};

        var sourceColumnId = 0;
        var destinationColumnId = 0;

        for (var i in columns) {
            if (columns[i].id === result.source.droppableId) {
                sourceColumnItems = columns[i].items;
                sourceColumnId = i;
            } else if (columns[i].id === result.destination.droppableId) {
                destinationColumnItems = columns[i].items;
                destinationColumnId = i;
            }
        }
        // console.log(sourceColumnItems)
        // console.log(destinationColumnItems)

        for (var i in sourceColumnItems) {
            if (sourceColumnItems[i].id === result.draggableId) {
                draggedItem = sourceColumnItems[i];
            }
        }
        // Excluí o objeto arrastado.
        var filteredSourceColumnItems = sourceColumnItems.filter((item) => item.id !== result.draggableId);

        // Adicionar o mesmo na nova posição.
        if (result.source.droppableId === result.destination.droppableId) {
            filteredSourceColumnItems.splice(result.destination.index, 0, draggedItem);

            // Mudar o state
            var columnsCopy = JSON.parse(JSON.stringify(columns));
            columnsCopy[sourceColumnId].items = filteredSourceColumnItems;
            setColumns(columnsCopy);
        } else {
            destinationColumnItems.splice(result.destination.index, 0, draggedItem);
            // Mudar o state
            var columnsCopy = JSON.parse(JSON.stringify(columns));
            columnsCopy[sourceColumnId].items = filteredSourceColumnItems;
            columnsCopy[destinationColumnId].items = destinationColumnItems;
            setColumns(columnsCopy);
        }
    };

    return(
        <DragDropContext onDragEnd={onDragEnd}>
            {columns.map((column) => (
                <div style={{ display: "flex", flexDirection: "column", alignItems: "center", marginLeft: 10, marginRight: 10, height: '80vh' }}>
                    <div style={{backgroundColor: column.color, width: '100%', borderTopLeftRadius: 12, borderTopRightRadius: 12}}>
                        <h3 style={{padding: 10, margin: 0}}>{column.name}</h3>
                    </div>
                    <Droppable droppableId={column.id} key={column.id}>
                    {(provided) => (
                        <div ref={provided.innerRef} className="colum" >
                        {column.items.map((item, index) => (
                            <Draggable draggableId={item.id} index={index} key={item.id}>
                                {(provided) => (
                                    <div
                                    className="item"
                                    {...provided.dragHandleProps}
                                    {...provided.draggableProps}
                                    ref={provided.innerRef}
                                    style={{
                                        ...provided.draggableProps.style,
                                    }}
                                    >
                                        <div className="item-itens">
                                            
                                            
                                                {item.file}
                                             
                                            <p className="item-content">{item.tipo}</p>
                                            <p className="item-id">{item.id}</p>
                                            <p className="item-titulo">{item.titulo}</p>
                                            <div className="div-item-responsavel">
                                                <p className="item-responsavel">{item.responsavel}</p>
                                                
                                                <Button className='item-button' type="primary" onClick={() => setModal2Open(true)}>
                                                    <EllipsisOutlined />
                                                </Button>

                                                <Modal
                                                    title="Novo ticket"
                                                    centered
                                                    open={modal2Open}
                                                    onOk={() => setModal2Open(false)}
                                                    onCancel={() => setModal2Open(false)}
                                                >
                                                    <ModalCustom></ModalCustom>
                                                </Modal>

                                            </div>
                                            
                                            
                                            
                                        </div>
                                    </div>
                                )}
                                </Draggable>
                            ))}
                        {provided.placeholder}
                        </div>
                    )}
                    </Droppable>
                </div>
            ))}
        </DragDropContext>
    )
}