import React from 'react';
import { Button } from "react-bootstrap"

export default function Item(props) {


    return (
        <li className="border d-flex justify-content-between align-items-center p-2 m-2">
            <div className="p-3">{props.txt}</div>
            <Button className="p-2 h-50" 
                    variant="danger"
                    onClick={() => props.delFunc(props.id)}>
                    Supprimer
            </Button>
        </li>
    )
}

