import React, { useState } from "react";


const Form = () => {
  //Aqui deberan implementar el form completo con sus validaciones

  const [client, setClient] = useState({
    fullName: "",
    email: ""
  })

  const [show, setShow] = useState(false)
  const [error, setError] = useState(false)

  const handleNombre = (e) => setClient({
    ...client, fullName: e.target.value
  })

  const handleEmail = (e) => setClient({
    ...client, email: e.target.value
  })

  const handleSubmit = (e) => {
    e.preventDefault();

    if(
      client.fullName.trim().length > 5 &&
      client.email.trim().length > 5
    ){
      setShow(true)
      setError(false)

      setClient({
        fullName: "",
        email: ""
      })
    }else{
      setError(true)
    }

  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" value={client.fullName} onChange={handleNombre} placeholder="Ingresá tu nombre completo" />
        <input type="mail" value={client.email} onChange={handleEmail} placeholder="Ingresá tu correo" />
        <button>Enviar</button>
      </form>
      
      {show && (
        <p>Gracias {client.fullName}, te contactaremos cuanto antes vía mail.</p>
      )}
      {error && (
        <p>Por favor verifique su información</p>
      )}

    </div>
  );
};

export default Form;
