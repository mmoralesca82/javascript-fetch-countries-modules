const url = 'https://restcountries.com/v3.1/all?fields=name,flags,region,capital,population,languages,currencies,timezones'

const fetchCountries = async () => {
    try{
        const response = await fetch(url) // promise

        if(!response.ok){
            throw new Error('ERROR', response.status)
        }

        return await response.json()

    }catch(error){
        console.log(error)
    }
}


export default fetchCountries