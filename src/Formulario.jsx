import React from 'react';
import { useState } from 'react';

const axios = require('axios');

export const Formulario = () => {

  const [cambioValor, setCambioValor] = useState({
    //id: new Date().getTime(),
    name: "",
    lastName: "",
    dni: "",
    email: "",
    phone: "",
    relation: "",
  });



  const handleInputChange = (e) => {
    //console.log(e.target.value)
    setCambioValor({
      ...cambioValor,
      [e.target.name]: e.target.value
    })
  }

  const conseguirDatosForm = e => {
    e.preventDefault();

    // let persona = {
    //   id: new Date().getTime(),
    //   name: e.target.nombre.value,
    //   lastName: e.target.apellidos.value,
    //   dni: e.target.dni.value,
    //   email: e.target.email.value,
    //   phone: e.target.telefono.value,
    //   relation: e.target.relacion_con_institucion.value,
    // }
    // console.log(persona);

    //   fetch('http://192.168.68.106:8000/api/contact', {
    //     method: 'POST',
    //     body: JSON.stringify(persona)
    //   })
    //     .then(res => res.json())
    //     .then(persona => {
    //       console.log(persona);
    //     })
    // }
    axios({
      method: 'POST',
      url: 'http://192.168.68.106:8000/api/contact',
      data: cambioValor
    }).then(res => console.log(res.cambioValor))
      .catch(err => console.log(err))
  }


  return (
    <div>

      <h3>¿Te gustaría probar Nodos?</h3>

      <h4>Dejanos tus datos de contacto y un representante se comunicará a la brevedad.</h4>

      <form action="https://web.e-nodos.com/envio" method="POST" onSubmit={conseguirDatosForm}>

        <div className="form-nombre">
          <label htmlFor="nombre">Nombre</label><br />
          <input type="text" name="name" id="nombre" placeholder="Ingrese su nombre" onChange={handleInputChange} required /><br />
        </div>

        <div className="form-apellido">
          <label htmlFor="apellidos">Apellido</label><br />
          <input type="text" name="lastName" id="apellidos" placeholder="Ingrese su apellido" onChange={handleInputChange} required /><br />
        </div>

        <div className="form-dni">
          <label htmlFor="dni">DNI</label><br />
          <input type="number" name="dni" id="dni" placeholder="Ingresar sin puntos ó guiones" onChange={handleInputChange} /><br />
        </div>

        <div className="form-mail">
          <label htmlFor="email">Correo electrónico</label><br />
          <input type="email" name="email" id="email" placeholder="example@mail.com" onChange={handleInputChange} required /><br />
        </div>

        <div className="form-telefono">
          <label htmlFor="telefono">Teléfono de contacto</label><br />
          <input type="number" name="phone" id="telefono" onChange={handleInputChange} /><br />
        </div>

        <div className="form-relacion">
          <label htmlFor="relacion">Relación con la institución</label><br />
          <select name="relation" id="relation" defaultValue={'default'} onChange={handleInputChange} required>
            <option value="default" disabled>Despliga para elegir opción</option>
            <option>Alumno</option>
            <option>Tutor</option>
            <option>Docente</option>
            <option>Directivo</option>
          </select><br />
        </div>

        <div className="g-recaptcha" data-sitekey="6LcLr2EhAAAAAH0hrF8_TMWXhBJ2W-17Yeewcend"></div>


        <input type="submit" value="Quiero probar Nodos" id="submit" /><br />
      </form>
    </div>
  )
}


// const expresiones = {
// 	usuario: /^[a-zA-Z0-9\_\-]{4,16}$/, // Letras, numeros, guion y guion_bajo
// 	nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
// 	password: /^.{4,12}$/, // 4 a 12 digitos.
// 	correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
// 	telefono: /^\d{7,14}$/ // 7 a 14 numeros.
// }