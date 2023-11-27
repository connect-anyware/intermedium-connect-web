import React from "react"

interface ModalContentProps {
    text: string
}


export default function ModalContent({ text }: ModalContentProps) {
    return (
        <div>
            <p className="block mb-2 my-1 text-sm font-medium text-gray-900 dark:text-emerald-500 bg-white shadow-lg shadow-green-500/50 rounded-lg ">
                {text}
            </p>
            <label htmlFor="name" className="block mb-2 my-3 text-sm font-medium text-gray-900 dark:text-white">Alterar Nome</label>
            <input 
                type="text" 
                name="name" 
                id="name" 
                placeholder="Alterar Nome"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  focus:ring-blue-500 focus:border-blue-500 block w-60 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
        </div>
    )
}