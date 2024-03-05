import estilos from "./Detalles.module.css";

function Detalles() {
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
                    placeholder="ej. Remocion de servicio/Nuevo servicio" />
                </label>
                <label className="label">
                    Elige una fecha disponible <span>(ej. 15/03/2024)</span>
                    <div className="flex mb-6">
                        <input 
                        className="input mr-6"
                        type="date" />
                        <select className="select">
                            {opcionDeHorario.map(opcion => <option value={opcion}>{opcion}</option>)}
                        </select>
                    </div>
                </label>
                <label className="label">
                    Elige tu servicio <span>ej. semi-permanente</span>
                    <div>
                    <select className="select">
                        {serviciosDisponibles.map(opcion => <option value={opcion}>{opcion}</option>)}
                    </select>
                    </div>
                </label>
                <label className="label">
                    Elige una fecha alternativa
                    <input 
                    className="input"
                    type="date" />
                </label>
                <label className="label">
                    Elige manos, pies o ambos <span>manos 💅/ pies 🦶/ ambos ✍️ </span>
                    <div>
                    <select className="select">
                        {iconos.map(opcion => <option value={opcion}>{opcion}</option>)}
                    </select>
                    </div>
                </label>
                <label className="label">
                    Seleccione el metodo de pago
                    <div>
                    <select className="select">
                        {medioDePago.map(opcion => <option value={opcion}>{opcion}</option>)}
                    </select>
                    </div>
                </label>
            </form>
            <div className={estilos.botones}>
                <button className="boton boton--negro">Crear</button>
                <button className="boton boton--gris">Cancelar</button>
            </div>
        </div>
    );
}

export default Detalles;