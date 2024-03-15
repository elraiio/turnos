import { Routes, Route } from 'react-router';
import './App.css';
import Layout from './componentes/compartidos/Layout';
import NoEncontrado from './componentes/compartidos/NoEncontrado';
import Lista from './componentes/lista/Lista';
import Detalles from './componentes/nuevo/Detalles';
import Modal from './componentes/compartidos/Modal';
import { useContext, useEffect } from 'react';
import { pedirMetas } from './servicios/Pedidos';
import { Contexto } from './servicios/Memoria';

function App() {
  
  const [, enviar] = useContext(Contexto);

  useEffect(() => {
    pedirMetas()
      .then((metas) => {
        enviar({ tipo: 'colocar', metas });
      })
      .catch((error) => {
        console.error('Error al obtener las metas:', error);
      });
  }, [enviar]);

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Lista />} />
        <Route path="/lista" element={<Lista />}>
          <Route path="/lista/:id" element={
            <Modal>
              <Detalles />
            </Modal>} />
        </Route>
        <Route path="/nuevo" element={<Detalles />} />
      </Route>
      <Route path="*" element={<NoEncontrado />} />
    </Routes>
  );
}

export default App;
