import React from 'react'
import { icons } from '../Utils/icons'

const SuccessMsj = ({ nombre }) => {
  
  return (
    <div className="bg-teal-100 border-t-4 border-teal-500 rounded-b text-teal-900 px-4 py-3 shadow-md mt-6" role="alert">
      <div className="flex">
        <div className="py-1 px-2">
          {icons.info}
        </div>
        <div>
          <p className="font-bold">Gracias {nombre}</p>
          <p className="font-semibold text-center text-lg">Tu mensaje se envio correctamente, te contactaremos cuanto antes vía email.</p>
        </div>
      </div>
    </div>
  )
}

export default SuccessMsj