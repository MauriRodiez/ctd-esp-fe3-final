import React from 'react'
import { icons } from '../Utils/icons'

const ErrorMsj = () => {
  
  return (
    <div className="bg-red-100 border-t-4 border-red-500 rounded-b text-red-900 px-4 py-3 shadow-md mt-6">
      <div className="flex">
        <div className="py-1 px-2">
        {icons.warning}
        </div>
        <div>
        <p className="font-bold">¡Atención!</p>
        <p className="font-semibold text-center text-lg">Por favor verifique su información nuevamente.</p>
      </div>
      </div>
    </div>
  )
}

export default ErrorMsj