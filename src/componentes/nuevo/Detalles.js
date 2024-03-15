import { useContext, useEffect, useState } from 'react';
import estilos from './Detalles.module.css';
import { Contexto } from '../servicios/Memoria';
import { useNavigate, useParams } from 'react-router-dom';
import { crearMeta } from '../servicios/Pedidos';



function Detalles() {

    const { id } = useParams();

    const [form, setForm] = useState({
        detalles: '',
        eventos: 1,
        periodo: 'semana',
        icono: '🏃',
        meta: 52,
        plazo: '2030-01-01',
        completado: 0,
    });

    const [estado, dispatch] = useContext(Contexto);


    const { detalles, eventos, periodo, icono, meta, plazo, completado } = form;

    const onChange = (event, prop) => {
        setForm(estado => ({ ...estado, [prop]: event.target.value }));

    };

    const navegar = useNavigate();

    const metaMemoria = estado.objetos[id];

    useEffect(() => {

        if (!id) {
            return;
        }


        if (!metaMemoria) {
            return navegar('/lista');
        }
        setForm(metaMemoria);
    }, [id, metaMemoria, navegar])

    const crear = async () => {
        const nuevaMeta = await crearMeta()
        dispatch({ tipo: 'crear', meta: nuevaMeta });
        navegar('/lista');
    }

    const borrar = () => {
        dispatch({ tipo: 'borrar', id });
        navegar('/lista');
    }

    const actualizar = () => {
        dispatch({ tipo: 'actualizar', meta: form });
        navegar('/lista');
    }

    const cancelar = () => {
        navegar('/lista');
    }





    const opcionesDeFrencuencia = ['dia', 'semana', 'mes', 'año'];

    const emoji = ['✈️', '📚', '🏃', '💰', '🖥️ '];

    return (

        <div
            className="tarjeta text-left">
            <form
                className="p-4">
                <label
                    className="label">
                    Describe tu meta
                    <input
                        className="input"
                        placeholder="ej.52 caminatas"
                        value={detalles}
                        onChange={e => onChange(e, 'detalles')}
                    >
                    </input>
                </label>

                <label
                    className="label">
                    ¿ Con que frecuencia deseas cumplir tu meta ?
                    <span>ej. 1 vez a la semana</span>
                    <div
                        className='flex mb-6'>
                        <input
                            className="input mr-6"
                            type='number'
                            value={eventos}
                            onChange={e => onChange(e, 'eventos')}>

                        </input>
                        <select className="input"
                            value={periodo}
                            onChange={e => onChange(e, 'periodo')}>


                            {opcionesDeFrencuencia.map(opcion => <option key={opcion} value={opcion}>{opcion}</option>)}
                        </select>
                    </div>
                </label>

                <label
                    className="label">
                    ¿Cuantas veces deseas completar esta meta?
                    <input
                        className="input"
                        type='number'
                        placeholder='Insert a number'
                        onChange={e => onChange(e, 'meta')}
                        value={meta}
                    >

                    </input>
                </label>

                <label
                    className="label">
                    ¿Tienes una fecha limite?
                    <input
                        className='input'
                        type='date'
                        value={plazo}
                        onChange={e => onChange(e, 'plazo')}>
                    </input>
                </label>

                <label
                    className='label'>
                    ¿Cuantas veces has completado ya esta meta?
                    <input
                        className='input'
                        type='number'
                        placeholder='Insert a number'
                        value={completado}
                        onChange={e => onChange(e, 'completado')}
                    >
                    </input>
                </label>


                <label
                    className="label">
                    Escoge un icono para la meta
                    <select
                        className="input"
                        value={icono}
                        onChange={e => onChange(e, 'icono')}>
                        {emoji.map(opcionIcono => <option key={opcionIcono} value={opcionIcono}>{opcionIcono}</option>)}
                    </select>
                </label>

            </form>

            <div className={estilos.botones}>
                {!id && <button className="boton boton--negro" onClick={crear}>Crear</button>}
                {id && <button className="boton boton--negro" onClick={actualizar}>Actualizar</button>}
                {id && <button className="boton boton--rojo" onClick={borrar}>Borrar</button>}
                <button className="boton boton--gris"
                    onClick={cancelar}>Cancelar</button>
            </div>

        </div>

    );
}

export default Detalles;