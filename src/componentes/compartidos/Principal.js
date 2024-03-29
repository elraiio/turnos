import estilos from './Principal.module.css';
import Vinculo from './Vinculo';
import { ReactComponent as ListaSVG } from './img/lista.svg'
import { ReactComponent as NuevoSVG } from './img/nuevo.svg'

function Principal({ children }) {
  return (
    <div className={estilos.principal}>
      <aside className={estilos.aside}>
        <Vinculo
          to="/lista"
          texto="Lista Turnos"
          Icono={ListaSVG} />
        <Vinculo
          to="/nuevo"
          texto="Nuevo Turno"
          Icono={NuevoSVG} />
      </aside>
      <main className={estilos.main}>
        {children}
      </main>
    </div >
  );
}

export default Principal;