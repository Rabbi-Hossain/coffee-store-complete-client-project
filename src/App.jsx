
import { useLoaderData } from 'react-router-dom'
import './App.css'
import CoffeeCard from './Componentes/CoffeeCard'
import { useState } from 'react'

function App() {

  const lodedeCoffees = useLoaderData()
  const [coffees, setCoffees] = useState(lodedeCoffees)

  return (
    <div className='p-20'>

      <h1 className='text-5xl text-purple-500 mb-5'>Coffee length: {coffees.length}</h1>

      <div className='grid md:grid-cols-2 gap-4'>
        {
          coffees.map(coffee => <CoffeeCard key={coffee._id} coffees={coffees}  setCoffees={setCoffees} coffee={coffee}></CoffeeCard>)
        }
      </div>

    </div>
  )
}

export default App
