import React, { useEffect, useState } from 'react'
import axios from "axios"
import { useParams } from 'react-router-dom'
import { endpoint } from '../Utils/endpoint'
import { useGeneralStates } from '../Contexts/Context'
import { themes } from '../Utils/themes';

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Detail = () => {

  const { state } = useGeneralStates();
 
  // Consumiendo el parametro dinamico de la URL deberan hacer un fetch a un user en especifico
  const [dentist, setDentist] = useState({})

  const params = useParams()
  const url = `${endpoint.users}/${params.id}`
  
  useEffect( () => {
    axios(url)
      .then( (response) => setDentist(response.data) )
      .catch( (err) => console.log(err) ) 
  }, [])

  return (
    <>
      <div className="h-screen py-10 px-10 flex flex-col w-full md:w-full lg:w-full">{/*state.theme === themes.light ? 'light' : 'dark'*/}
      <h1 className='text-4xl font-bold leading-7 text-gray-900 sm:text-3xl sm:tracking-tight'>Detail Dentist id </h1>
      {/* aqui deberan renderizar la informacion en detalle de un user en especifico */}
      <table className="table-auto py-1 px-1 mt-10 border-separate border-spacing-1 border border-lime-900">
        <thead className="border bg-lime-600 text-center font-semibold tracking-wider h-10">
          <tr>
            <td>Nombre</td>
            <td>Email</td>
            <td>Teléfono</td>
            <td>Sitio web</td>
          </tr>
        </thead>
        <tbody className="border bg-lime-100 text-center font-semibold tracking-wider h-10">
          <tr>
            <td>{dentist.name}</td>
            <td>{dentist.email}</td>
            <td>{dentist.phone}</td>
            <td>{dentist.website}</td>
          </tr>
        </tbody>
        
      </table>
      {/* Deberan mostrar el name - email - phone - website por cada user en especifico */}
      </div>
    </>
  )
}

export default Detail