import React, { useState } from "react";
import { icons } from "../Utils/icons";
import ErrorMsj from "./ErrorMsj";
import SuccessMsj from "./SuccessMsj";


const Form = () => {
  //Aqui deberan implementar el form completo con sus validaciones

  const [client, setClient] = useState({
    fullName: "",
    email: ""
  })

  const [ show, setShow ] = useState(false)
  const [ error, setError ] = useState({
    validName: false,
    validMail: false

  })
  const [ submitted, setSubmitted ] = useState("")

  const handleNombre = (e) => setClient({
    ...client, fullName: e.target.value
  })

  const handleEmail = (e) => setClient({
    ...client, email: e.target.value
  })

  const emailValidate = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();

    const isFullNameValid = client.fullName.trim().length > 5;
    const isEmailValid = emailValidate(client.email.trim());

    if(isFullNameValid && isEmailValid){
      setShow(true)
      setError({ validName: false, validMail: false})
      setSubmitted(client.fullName)

      setClient({
        fullName: "",
        email: ""
      })
    }else{
      setError({
        validName: !isFullNameValid,
        validMail: !isEmailValid
      })
      setShow(false)
    }
  }

  return (
    <div>
      <form onSubmit={handleSubmit} className="bg-white shadow-md rounded py-10 px-20 pb-12 flex flex-col gap-2 w-full">
        <label className="block text-green-900 text-sm font-bold mb-2" htmlFor="username">
          Nombre y Apellido:
        </label>
        <input className={`appearance-none block w-full bg-gray-100 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white ${error.validName ? 'border-red-500' : 'border-lime-500'}`}
          type="text" value={client.fullName} onChange={handleNombre} placeholder="Nombre completo" />
        <label className="block text-green-900 text-sm font-bold mb-2" htmlFor="mail">
          Mail:
        </label>
        <input className={`appearance-none block w-full bg-gray-100 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white ${error.validMail ? 'border-red-500' : 'border-lime-500'}`} 
        id="mail" type="mail" value={client.email} onChange={handleEmail} placeholder="Email" />
        <button className="mt-5 shadow bg-lime-500 hover:bg-lime-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded flex items-center justify-center gap-1">
          Enviar{icons.send}
        </button>
      </form>
      
      {show && (
        <SuccessMsj nombre = { submitted } />
      )}
      {(error.validName || error.validMail) && (
        <ErrorMsj />
      )}

    </div>
  );
};

export default Form;
