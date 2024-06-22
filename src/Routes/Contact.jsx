import React from 'react'
import Form from '../Components/Form'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Contact = () => {
  return (
    <div className="h-screen flex w-full md:w-full lg:w-full flex-col">
      <h2 className="text-4xl font-bold leading-7 text-gray-900 sm:text-3xl sm:tracking-tight text-center py-20 dark:text-white">Want to know more?</h2>
      <p className="text-xl underline underline-offset-8 text-center pb-20 dark:text-white">Send us your questions and we will contact you</p>
      <div className="px-20 py-10 border-t border-b border-gray-600 mx-auto dark:border-lime-200">
        <Form/>
      </div>      
    </div>
  )
}

export default Contact