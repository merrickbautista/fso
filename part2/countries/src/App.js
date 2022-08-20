import {useState, useEffect} from 'react'
import axios from 'axios'
import matchers from '@testing-library/jest-dom/matchers'

const Languages = ({languages}) => {
  return (
    <ul>
      {Object.values(languages).map(language => <li key={language}>{language}</li>)}
    </ul>
  )
}

const Countries = ({filtered}) => {
  if (filtered.length > 10) {
    return (
      <div>
        Too many matches, specify another filter
      </div>
    )
  }
  else if (filtered.length == 1) {
    let country = filtered[0]
    return (
      <div>
        <h1>{country.name.common}</h1>
        <p>
          capital {country.capital}
          <br />
          area {country.area}
        </p>
        <h3>languages: </h3>
        <Languages languages={country.languages} />
        <img src={country.flags.png} />
      </div>
    )
  }
  return (
    <div>
      {filtered.map(country => <div key={country.name.common}>{country.name.common}</div>)}
    </div>
  )
}

const App = () => {
  const [countries, setCountries] = useState([])
  const [filtered, setFiltered] = useState([])

  const handleFilterChange = (event) => {
    if (event.target.value.length == 0) {
      setFiltered([])
    }
    else {
      setFiltered(countries.filter(country => country.name.common.toLowerCase().includes(event.target.value.toLowerCase())))
    }
  }

useEffect(() => {
  axios
    .get('https://restcountries.com/v3.1/all')
    .then(response => {
      setCountries(response.data)
    })
}, [])

  return (
    <div>
      find countries <input onChange={handleFilterChange} />
      <Countries filtered={filtered} />
    </div>
  )
}

export default App
