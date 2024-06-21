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
    <div classname=" w-auto">
      <form onSubmit={handleSubmit} className="border py-10 px-20 border-gray-900/10 pb-12 flex flex-col">
        <input className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6" type="text" value={client.fullName} onChange={handleNombre} placeholder="Ingresá tu nombre completo" />
        <input className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6" type="mail" value={client.email} onChange={handleEmail} placeholder="Ingresá tu correo" />
        <button className="rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">Enviar</button>
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
