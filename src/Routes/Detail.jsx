import React, { useEffect, useState } from 'react'
import axios from "axios"
import { useParams } from 'react-router-dom'
import { endpoint } from '../Utils/endpoint'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Detail = () => {
 
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
      <h1>Detail Dentist id </h1>
      {/* aqui deberan renderizar la informacion en detalle de un user en especifico */}
      <table>
        <thead>
          <tr>
            <td>Nombre</td>
            <td>Email</td>
            <td>Teléfono</td>
            <td>Sitio web</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{dentist.name}</td>
            <td>{dentist.email}</td>
            <td>{dentist.phone}</td>
            <td>{dentist.website}</td>
          </tr>
        </tbody>
        
      </table>
      {/* Deberan mostrar el name - email - phone - website por cada user en especifico */}
    </>
  )
}

export default Detail