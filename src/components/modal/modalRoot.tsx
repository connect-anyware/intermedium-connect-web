import React, { EventHandler } from "react";
import { ReactNode } from "react";
interface modalRootProps {
    children: ReactNode,
    closeModal: ()  => void,
    className: string,
}

export default function ModalRoot({ children, closeModal, className }: modalRootProps) {
    return (
        <div className={className} onClick={(e) => {
            if(e.target.type === "submit")closeModal();   
        }}>
            {children}
        </div>
    )
}