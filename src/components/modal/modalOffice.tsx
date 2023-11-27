import React from "react";

export default function ModalOffice() {
    return (
        <div>
            <label htmlFor="office" className="block mb-2 my-3 text-sm font-medium text-gray-900 dark:text-white">
                Selecione um Novo Cargo
            </label>
            <select id="office" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg my-2 focus:ring-blue-500 focus:border-blue-500 block w-60 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                <option hidden value="Selecione uma opção">Selecione uma opção</option>
                <option value="active">Administrador</option>
                <option value="disabled">Zelador</option>
            </select>
        </div>
    )
}