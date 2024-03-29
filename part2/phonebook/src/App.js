import { useState, useEffect } from 'react'
import axios from 'axios'

const Filter = ({handleFilterChange}) => {
  return (
    <div>
      filter shown with
      <input onChange={handleFilterChange} />
    </div>
  )
} 

const Persons = ({filtered}) => (
  <div>
    {filtered.map(person => <div key={person.name}>{person.name} {person.number}</div>)}
  </div>
)

const PersonForm = ({persons, setPersons, setFiltered}) => {
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  const checkExisting = (name) => {
    for (let i = 0; i < persons.length; i++) {
      if (JSON.stringify(persons[i].name) === JSON.stringify(name)) {
        return true
      }
    }
    return false
  }

  const addPerson = (event) => {
    event.preventDefault()
    if (!checkExisting(newName)) {
      const personObject = {
        name: newName,
        number: newNumber,
        id: persons.length + 1
      }
      setPersons(persons.concat(personObject))
      setFiltered(persons.concat(personObject))
    }
    else {
      alert(`${newName} is already added to phonebook`)
    }
    setNewName('')
    setNewNumber('')
    console.log(persons)
  }

 
  return (
    <form onSubmit={addPerson}>
      <div>
        name: <input 
          value={newName} 
          onChange={handleNameChange}
        />
      </div>
      <div>
        number: <input
          value={newNumber}
          onChange={handleNumberChange}
        />
      </div>
      <div>
        <button type="submit">add</button>
      </div>
    </form>
  )
}

const App = () => {
  const [persons, setPersons] = useState([]) 
  const [filtered, setFiltered] = useState(persons)

  const handleFilterChange = (event) => {
    setFiltered(persons.filter(person => person.name.includes(event.target.value)))
  }

  useEffect(() => {
    console.log('effect')
    axios
      .get('http://localhost:3001/persons')
      .then(response => {
        console.log('promise fulfilled')
        setPersons(response.data)
      })
  }, [])
  

  return (
    <div>
      <h2>Phonebook</h2>
      
      <Filter handleFilterChange={handleFilterChange}/>
      
      <h2>add a new</h2>
      
      <PersonForm persons={persons} setPersons={setPersons} setFiltered={setFiltered}/>

      <h2>Numbers</h2>

      <Persons filtered={filtered} />
    </div>
  )
}

export default App