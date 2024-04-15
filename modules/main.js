
/* import miFuncion  from './services.js'

miFuncion()
.then(console.log) // equivale a .then(countries => consoles.log(countries))
*/

import fetchCountries  from './services.js'
import { renderCountries } from './utils.js'

let countryData = []

const searchInput =  document.querySelector('.app__input')

searchInput.addEventListener('input', (event) => {

    const value = event.target.value
    const loweredValue = value.toLowerCase()

    const filteredCountries = countryData.filter(country =>{
        const loweredName = country.name.common.toLowerCase()
        
         // TODO: RETO 01 - Adicionalmente necesitamos filter los paises por su capital
         const loweredCapital = country.capital.join().toLowerCase() // Utilizamos join para pasar los arrays a  string para usar el inludes.


        return loweredName.includes(loweredValue) || loweredCapital.includes(loweredValue)

        //return (loweredName.includes(loweredValue) || loweredCapital.includes(loweredValue))
    })

    renderCountries(filteredCountries)

    // console.log(value)
})

//TODO: RETO 02 - Filtrar los paises por su region usando el select. Usen el evento input tambien

const searchSelect = document.querySelector('.app__filter')

searchSelect.addEventListener('input' , (event) =>{

    const value = event.target.value
    
    const searchedCountries = countryData.filter(country =>{
        const loweredRegion = country.region.toLowerCase()

        return loweredRegion.includes(value)
    })
    renderCountries(searchedCountries)
})

fetchCountries()
//.then(console.log) // equivale a .then(countries => consoles.log(countries))
.then(countries => {
    countryData = countries
  
    renderCountries(countries)
})

