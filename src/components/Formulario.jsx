import React from 'react'

export const Formulario = () => {

  const conseguirDatosForm = e => {
    e.preventDefault();

    let persona = {
      id: new Date().getTime(),
      name: e.target.nombre.value,
      lastName: e.target.apellidos.value,
      dni: e.target.dni.value,
      email: e.target.email.value,
      phone: e.target.telefono.value,
      relacion: e.target.relacion_con_institucion.value,
      
    }

    console.log(persona);
  }

  return (
    <div>

      <h3>¿Te gustaría probar Nodos?</h3>

      <h4>Dejanos tus datos de contacto y un representante se comunicará a la brevedad.</h4>

      <form action="https://web.e-nodos.com/envio" method="POST" onSubmit={conseguirDatosForm}>

        <div className="form-nombre">
          <label htmlFor="nombre">Nombre</label><br />
          <input type="text" name="nombre" id="nombre" placeholder="Ingrese su nombre" required /><br />
        </div>

        <div className="form-apellido">
          <label htmlFor="apellidos">Apellido</label><br />
          <input type="text" name="apellidos" id="apellidos" placeholder="Ingrese su apellido" required /><br />
        </div>

        <div className="form-dni">
          <label htmlFor="dni">DNI</label><br />
          <input type="number" name="dni" id="dni" placeholder="Ingresar sin puntos ó guiones" /><br />
        </div>

        <div className="form-mail">
          <label htmlFor="email">Correo electrónico</label><br />
          <input type="email" name="email" id="email" placeholder="example@mail.com" required /><br />
        </div>

        <div className="form-telefono">
          <label htmlFor="telefono">Teléfono de contacto</label><br />
          <input type="number" name="telefono" id="telefono" /><br />
        </div>

        <div className="form-relacion">
          <label htmlFor="relacion">Relación con la institución</label><br />
          <select name="relacion_con_institucion" id="relacion" defaultValue={'default'} required>
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
