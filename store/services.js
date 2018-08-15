import axios from 'axios'

const apiUrl = ''

class Services {
    fetchHouses (){
        return axios.get(`${apiUrl}/api/family`)
    }
    fetchCharacters(){
        return axios.get(`${apiUrl}/api/characters`)
    }
    fetchCities (){
        return axios.get(`${apiUrl}/api/cities`)
    }
    fetchHouse (id){
        return axios.get(`${apiUrl}/api/family/id=${id}`)
    }
    fetchCharacter (id){
        return axios.get(`${apiUrl}/api/character/id=${id}`)
    }
    fetchProducts (){
        return axios.get(`${apiUrl}/api/products`)
    }
    fetchProduct (id){
        return axios.get(`${apiUrl}/api/product/id=${id}`)
    }
    fetchUserAndOrder (){
        return axios.get(`${apiUrl}/api/user`)
    }
}


export default new Services()