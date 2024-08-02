import { useState } from 'react'

function App() {
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
        <table id="tablaFacturas">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Número Factura</th>
                    <th>Descripción</th>
                    <th>Estado</th>
                    <th>Fecha</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>1</td>
                    <td>F001</td>
                    <td>Compra de muebles de oficina</td>
                    <td style="color: #00ce00;">pagada</td>
                    <td>12-10-2023</td>
                    <td><button className="action">Del</button></td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>F002</td>
                    <td>Suscripción a servicio de internet</td>
                    <td style="color: #ff0000;">pendiente</td>
                    <td>05-02-2024</td>
                    <td><button>Del</button></td>
                </tr>
            </tbody>
        </table>
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
