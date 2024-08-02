import { useState } from 'react'
import {Table} from './components/table/Table'

function App() {
  //5 de agosto 5:20 pm lavado 3 gotas m t y n 

  let table = {
    identificador : "tablaFacturas",
    aCabecera : [
      {id: 1, columna: "ID"},
      {id: 2, columna: "Numero Factura"},
      {id: 3, columna: "Descripcion"},
      {id: 4, columna: "Estado"},
      {id: 5, columna: "Fecha"},
      {id: 6, columna: "Action"}      
    ],
    aFila : [
      { id: 1, numeroFactura: "F001", descripcion: "Compra de muebles de oficina", estado: "pagada", fecha: "12-10-2023"},
      { id: 2, numeroFactura: "F002", descripcion: "Suscripción a servicio de internet", estado: "pendiente", fecha: "05-02-2024" },
      { id: 3, numeroFactura: "F003", descripcion: "Reparación de equipo de cómputo", estado: "pagada", fecha: "18-03-2024" },
      { id: 4, numeroFactura: "F004", descripcion: "Compra de papelería", estado: "pendiente", fecha: "02-04-2024" },
      { id: 5, numeroFactura: "F005", descripcion: "Pago de servicios públicos", estado: "pagada", fecha: "11-04-2024" },
      { id: 6, numeroFactura: "F006", descripcion: "Mantenimiento de software", estado: "pendiente", fecha: "15-04-2024" },
      { id: 7, numeroFactura: "F007", descripcion: "Compra de licencias de software", estado: "pagada", fecha: "23-11-2023" },
      { id: 8, numeroFactura: "F008", descripcion: "Servicios de diseño gráfico", estado: "pendiente", fecha: "10-01-2024" },
      { id: 9, numeroFactura: "F009", descripcion: "Capacitación en seguridad informática", estado: "pagada", fecha: "27-02-2024" },
      { id: 10, numeroFactura: "F010", descripcion: "Compra de equipos de oficina", estado: "pendiente", fecha: "13-03-2024" },
      { id: 11, numeroFactura: "F011", descripcion: "Compra de material de oficina", estado: "pendiente", fecha: "18-04-2024" },
      { id: 12, numeroFactura: "F012", descripcion: "Pago de renta de local comercial", estado: "pagada", fecha: "23-04-2024" },
      { id: 13, numeroFactura: "F013", descripcion: "Servicios de limpieza", estado: "pendiente", fecha: "25-04-2024" },
      { id: 14, numeroFactura: "F014", descripcion: "Mantenimiento de equipos de aire acondicionado", estado: "pagada", fecha: "27-04-2024" },
      { id: 15, numeroFactura: "F015", descripcion: "Compra de insumos médicos", estado: "pendiente", fecha: "30-04-2024" }
    ]
  }

  return (
    <>
    <div className="container">
        <h1>Lista de Facturas</h1>
        <nav className="nav">
            <ul className="nav_list">
                <li id="todos" className="list_item">Todos</li>
                <li id="pendientes" className="list_item">Pendientes</li>
                <li id="pagada" className="list_item">Pagadas</li>
            </ul>
        </nav> 
        <Table table={table}/>
        <button className="addBtn" id="addContactBtn">+</button>
    </div>
    <div id="modal" className="modal">
        <div className="modal-content">
            <span className="close">&times;</span>
            <h2>Agregar Factura</h2>
            <form id="contactForm" action="">
                <label htmlFor="factura">Numero de Factura:</label>
                <input type="text" id="factura" name="factura" required/>
                <label htmlFor="descripcion">Descripción:</label>
                <input type="text" id="descripcion" name="descripcion" required/>
                <label htmlFor="estado">Estado:</label>
                <input type="text" id="estado" name="estado" required/>
                <label htmlFor="fecha">Fecha:</label>
                <input type="date" id="fecha" name="fecha" required/>
                <button type="submit">Agregar</button>
            </form>
        </div>
    </div>
    </>
  )
}

export default App
