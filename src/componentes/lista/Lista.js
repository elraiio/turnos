import React from 'react';
import Meta from './Meta';
import { Outlet } from 'react-router-dom';
import { useContext } from 'react';
import { Contexto } from '../servicios/Memoria';


function Lista() {
    const [estado] = useContext(Contexto);
  
    return (
      <>
        {estado.orden.map((id) => (
          <Meta key={id} {...estado.objetos[id]}></Meta>
        ))}
        <Outlet />
      </>
    );
  }
  
  export default Lista;