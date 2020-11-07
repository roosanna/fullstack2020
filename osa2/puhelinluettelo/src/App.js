import React, { useState } from 'react'

const Persons = ({filter, persons}) => {
  const filteredPersons = persons.filter(person => person.name.toLowerCase().includes(filter.toLowerCase()))
  return (
    <div>
      {filteredPersons.map((person) => {
        return (
          <p key={person.name}>
            {person.name}{' '}{person.number}
          </p>
        )
      })}
    </div>
  )
}

const Filter = ({filter, handleFilter}) => {
  return (
    <div>
      <p>filter shown with<input value={filter} onChange={handleFilter}/></p>
    </div>
  )
}

const PersonForm = ({addNote, newName, newNumber, handleNameChange, handleNumberChange}) => {
  return (
    <form onSubmit={addNote}>
        <div>
          name: <input value={newName} onChange={handleNameChange} />
        </div>
        <div>
          number: <input value={newNumber} onChange={handleNumberChange}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
    </form>
  )
}

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456' },
    { name: 'Ada Lovelace', number: '39-44-5323523' },
    { name: 'Dan Abramov', number: '12-43-234345' },
    { name: 'Mary Poppendieck', number: '39-23-6423122' }
  ])
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  const [filter, setFilter] = useState('')

  const addNote = (event) => {
    event.preventDefault()
    if (persons.some(e => e.name === newName)) {
      window.alert(`${newName} is already on the list`)
    } else {
      const obj_person = {
        name: newName,
        number: newNumber
      }
    setPersons(persons.concat(obj_person))
    setNewName('')
    setNewNumber('')
    }
  }

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  const handleFilter = (e) => {
    setFilter(e.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter filter={filter} handleFilter={handleFilter}/>
      <h3>add a new</h3>
      <PersonForm addNote={addNote} newName={newName} newNumber={newNumber} handleNameChange={handleNameChange} handleNumberChange={handleNumberChange}/>
      <h3>Numbers</h3>
      <Persons filter={filter} persons={persons}/>
    </div>
  )

}

export default App