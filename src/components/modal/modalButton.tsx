import React from "react";

interface ModalButtonProps {
    editValue: () => void
}

export default function ModalButton({ editValue }: ModalButtonProps) {
    return (
        <div>
            <button type="submit" onClick={editValue} className="text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:focus:ring-blue-800 my-7">Salvar</button>
        </div>
    )
}