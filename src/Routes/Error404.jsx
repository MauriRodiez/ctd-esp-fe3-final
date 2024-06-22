import React from 'react'
import { useNavigate } from 'react-router-dom'

const Error404 = () => {
    
    const navigate = useNavigate()

    const handleNavigation = () => {
        navigate("/"); 
      };

  return (
    <main className="grid min-h-full place-items-center bg-white px-6 py-24 sm:py-32 lg:px-8 dark:bg-slate-800">
        <div className="text-center">
            <p className="text-6xl font-black text-teal-900 dark:text-white">404</p>
                <h1 className="mt-4 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl dark:text-white">Page not found</h1>
            <p className="mt-6 text-base leading-7 text-gray-600 dark:text-white">Sorry, we couldn’t find the page you’re looking for.</p>
        <div className="mt-10 flex items-center justify-center gap-x-6">
            <button onClick={handleNavigation} className="rounded-md bg-lime-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-lime-400 focus-visible:outline 
             focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lime-600">Volver a home</button>
        </div>
        </div>
    </main>
  )
}

export default Error404