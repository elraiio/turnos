import estilos from './Encabezamiento.module.css';
import { ReactComponent as PerfilSVG } from './img/perfil.svg'
import { ReactComponent as LogoSVG } from './img/logo.svg'
import Vinculo from './Vinculo';



function Encabezamiento() {
  return (
    <header className={estilos.encabezamiento}>
      <div className={estilos.contenedor}>
        <LogoSVG className={estilos.logo} />
        <a className={estilos.titulo} href="/">Turnos Mimos</a>
      </div>
      <div>
        <nav>
          <Vinculo
            to="/perfil"
            Icono={PerfilSVG} />
        </nav>
      </div>
    </header>
  );
}

export default Encabezamiento;
