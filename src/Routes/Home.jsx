
import Card from '../Components/Card'
import { useGeneralStates } from '../Contexts/Context'
import { themes } from '../Utils/themes';

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Home = () => {

  const { state } = useGeneralStates();

  return (
    <main className={state.theme === themes.light ? 'light' : 'dark'} >
      <h1>Home</h1>
      <div className='card-grid'>
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