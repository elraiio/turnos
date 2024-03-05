import './App.css';
import Encabezamiento from './componentes/compartidos/Encabezamientos';
import Principal from './componentes/compartidos/Principal';
import Pie from './componentes/compartidos/Pie';
import Lista from './componentes/lista/Lista';
import Detalles from './componentes/nuevo/Detalles';

function App() {
  return (
    <div className="App">
      <Encabezamiento></Encabezamiento>
      <Principal>
        {/*<Lista></Lista>*/}
        <Detalles></Detalles>
      </Principal>
      <Pie></Pie>

    </div>
  );
}

export default App;
