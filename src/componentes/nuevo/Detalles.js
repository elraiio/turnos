import { useState, useEffect } from "react";
import estilos from "./Detalles.module.css";


function Detalles() {
    const [form, setForm] = useState({
        detalles: '',
        fechaDisponible: '2024-05-04',
        horario: 'mañana',
        servicios: 'softgel',
        fechaAlternativa: '2024-05-10',
        icono: "💅",
        pago: "transferencia",

    });
    const { detalles, fechaDisponible, horario, servicios, fechaAlternativa, icono, pago } = form;

    const onChange = (event, prop) => {
        setForm(estado => ({ ...estado, [prop]: event.target.value }));
    }

    useEffect(() => {
        //console.log(form);
    }, [form]);

    const crear = async () => {
        console.log(form);
    }

    const opcionDeHorario = ["mañana", "siesta", "tarde"];
    const serviciosDisponibles = ["semi-permanente", "capping", "softgel", "esculpidas"];
    const iconos = ["💅", "🦶", "✍️"];
    const medioDePago = ["efectivo", "transferencia"];

    return (
        <div className="tarjeta">
            <form className="p-4">
                <label className="label">
                    Describe tu pedido de servicio
                    <input
                        className="input"
                        placeholder="ej. Remocion de servicio/Nuevo servicio"
                        value={detalles}
                        onChange={e => onChange(e, 'detalles')} />
                </label>
                <label className="label">
                    Elige una fecha disponible <span>(ej. 15/03/2024)</span>
                    <div className="flex mb-6">
                        <input
                            className="input mr-6"
                            type="date"
                            value={fechaDisponible}
                            onChange={e => onChange(e, 'fechaDisponible')} />
                        <select
                            className="select"
                            value={horario}
                            onChange={e => onChange(e, 'horario')}>
                            {opcionDeHorario.map(opcion => <option value={opcion}>{opcion}</option>)}
                        </select>
                    </div>
                </label>
                <label className="label">
                    Elige tu servicio <span>ej. semi-permanente</span>
                    <div>
                        <select
                            className="select"
                            value={servicios}
                            onChange={e => onChange(e, 'servicios')}>
                            {serviciosDisponibles.map(opcion => <option value={opcion}>{opcion}</option>)}
                        </select>
                    </div>
                </label>
                <label className="label">
                    Elige una fecha alternativa
                    <input
                        className="input"
                        type="date"
                        value={fechaAlternativa}
                        onChange={e => onChange(e, 'fechaAlternativa')} />
                </label>
                <label className="label">
                    Elige manos, pies o ambos <span>manos 💅/ pies 🦶/ ambos ✍️ </span>
                    <div>
                        <select
                            className="select"
                            value={icono}
                            onChange={e => onChange(e, 'icono')}>
                            {iconos.map(opcion => <option value={opcion}>{opcion}</option>)}
                        </select>
                    </div>
                </label>
                <label className="label">
                    Seleccione el metodo de pago
                    <div>
                        <select
                            className="select"
                            value={pago}
                            onChange={e => onChange(e, 'pago')}>
                            {medioDePago.map(opcion => <option value={opcion}>{opcion}</option>)}
                        </select>
                    </div>
                </label>
            </form>
            <div className={estilos.botones}>
                <button
                    className="boton boton--negro"
                    onClick={crear}
                >Crear</button>
                <button className="boton boton--gris">Cancelar</button>
            </div>
        </div>
    );
}

export default Detalles;