import { createContext, useReducer } from "react"

/* const listaMock = [
    {
        "id": "1",
        "detalles": "Esculpidas",
        "periodo": "mañana",
        "eventos": "04-04-2024",
        "icono": "💅",
        "disponible": 8,
        "plazo": "2030-01-01",
        "completado": 1
    },
    {
        "id": "2",
        "detalles": "Pedicura",
        "periodo": "pies",
        "eventos": 8,
        "icono": "🦶",
        "disponible": 4,
        "plazo": "2030-01-01",
        "completado": 0
    },
    {
        "id": "3",
        "detalles": "Manos y pies semi-permanente",
        "periodo": "manos/pies",
        "eventos": 8,
        "icono": "✍️",
        "disponible": 4,
        "plazo": "2030-01-01",
        "completado": 4
    },
]; */

/* const estadoInicial = {
    orden: [],
    objetos: {}
}; */

const memoria = localStorage.getItem('metas');
const estadoInicial = memoria
? JSON.parse(memoria)
:{
orden:[],
objetos: {}
};

function reductor(estado, accion) {
    switch (accion.tipo) {
        case 'colocar': {
            const metas = accion.metas;
            const nuevoEstado = {
                orden: metas.map(meta => meta.id),
                objetos: metas.reduce((objeto, meta) => ({ ...objeto, [meta.id]: meta }), {})
            };
            localStorage.setItem('metas', JSON.stringify(nuevoEstado))
            return nuevoEstado;
        };
        case 'crear': {
            const id = String(Math.random());//accion.metas.id;
            const nuevoEstado = {
                orden: [...estado.orden, id],
                objetos: {
                    ...estado.objetos,
                    [id]: accion.meta
                }
            };
            localStorage.setItem('metas', JSON.stringify(nuevoEstado))
            return nuevoEstado;
        };
        case 'actualizar': {
            const id = accion.meta.id;
            estado.objetos[id] = {
                ...estado.objetos[id],
                ...accion.meta
            };
            const nuevoEstado = { ...estado };
            localStorage.setItem('metas', JSON.stringify(nuevoEstado))
            return nuevoEstado;
        };
        case 'borrar': {
            const id = accion.id;
            const nuevoOrden = estado.orden.filter(item => item !== id);
            delete estado.objetos[id];
            const nuevoEstado = {
            orden: nuevoOrden,
            objetos: estado.objetos
            };
            localStorage.setItem('metas', JSON.stringify(nuevoEstado))
            return nuevoEstado;
            };
    }
}


export const Contexto = createContext(null);

function Memoria({ children }) {
    const [estado, enviar] = useReducer(reductor, estadoInicial);
    // enviar es igual a dispatch
    return (
        <Contexto.Provider value={[estado, enviar]}>
            {children}
        </Contexto.Provider >
    );
}

export default Memoria;