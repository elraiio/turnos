function Detalles() {
    const opcionDeHorario = ["mañana", "siesta", "tarde"];
    const serviciosDisponibles = ["semi-permanente", "capping", "softgel", "esculpidas"];
    const iconos = ["💅", "🦶", "✍️"];
    const medioDePago = ["efectivo", "transferencia"];

    return (
        <div>
            <form>
                <labe>
                    Describe tu pedido de servicio
                    <input placeholder="ej. Remocion de servicio/Nuevo servicio" />
                </labe>
                <label>
                    Elige una fecha disponible <span>(15/03/2024)</span>
                    <div>
                        <input type="date" />
                        <select>
                            {opcionDeHorario.map(opcion => <option value={opcion}>{opcion}</option>)}
                        </select>
                    </div>
                </label>
                <label>
                    Elige tu servicio <span>ej. semi-permanente</span>
                    <select>
                        {serviciosDisponibles.map(opcion => <option value={opcion}>{opcion}</option>)}
                    </select>
                </label>
                <label>
                    Elige una fecha alternativa
                    <input type="date" />
                </label>
                <label>
                    Elige manos, pies o ambos <span>manos 💅/ pies 🦶/ ambos ✍️</span>
                    <select>
                        {iconos.map(opcion => <option value={opcion}>{opcion}</option>)}
                    </select>
                </label>
                <label>
                    Seleccione el metodo de pago
                    <select>
                        {medioDePago.map(opcion => <option value={opcion}>{opcion}</option>)}
                    </select>
                </label>
            </form>
            <div>
                <button>Crear</button>
                <button>Cancelar</button>
            </div>
        </div>
    );
}

export default Detalles;