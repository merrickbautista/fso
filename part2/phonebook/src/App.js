import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ]) 
  const [newName, setNewName] = useState('')

  const handleNameChange = (event) => {
    setNewName(event.target.value)
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
        id: persons.length + 1
      }
      setPersons(persons.concat(personObject))
    }
    else {
      alert(`${newName} is already added to phonebook`)
    }
    setNewName('')
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addPerson}>
        <div>
          name: <input 
            value={newName} 
            onChange={handleNameChange}
          />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {persons.map(person => <div key={person.name}>{person.name}</div>)}
    </div>
  )
}

export default App