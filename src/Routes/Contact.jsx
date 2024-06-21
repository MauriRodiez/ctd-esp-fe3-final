import React from 'react'
import Form from '../Components/Form'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Contact = () => {
  return (
    <div className="h-screen flex w-full md:w-full lg:w-full flex-col py-10 px-10">
      <h2 className="text-4xl font-bold leading-7 text-gray-900 sm:text-3xl sm:tracking-tight py-10">Want to know more?</h2>
      <p className="text-xl underline underline-offset-8 pb-20">Send us your questions and we will contact you</p>
      <div className="mx-auto">
        <Form/>
      </div>      
    </div>
  )
}

export default Contact