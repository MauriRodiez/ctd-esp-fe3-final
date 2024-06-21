
import Card from '../Components/Card'
import { useGeneralStates } from '../Contexts/Context'
import { themes } from '../Utils/themes';

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Home = () => {

  const { state } = useGeneralStates();

  return (
    <main className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">{/*state.theme === themes.light ? 'light' : 'dark'*/}
      <h1 className='text-4xl font-bold leading-7 text-gray-900 sm:text-3xl sm:tracking-tight'>Home</h1>
      <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
        {/* Aqui deberias renderizar las cards */}
        {state.dentists.map( (dentist) => {
          return(
          <Card user={dentist} key={dentist.id}/>
        )
        })}
      </div>
    </main>
  )
}

export default Home