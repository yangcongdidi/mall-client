import Services from './services'
export default  {
    async fetchHouses({state}){
        const res = await Services.fetchHouses()
        state.houses = res.data.data
        return res
    },
    async fetchCharacters({state}){
        const res = await Services.fetchCharacters()
        state.characters = res.data.data

        return  res
    },

    async fetchCities({state}){
        const res = await Services.fetchCities()
        state.cities = res.data.data

        return res
    },

    async showHouse({state},_id){

        const res = await Services.fetchHouse(_id)
        state.currentHouse = res.data.data
        console.log(state.currentHouse)
        return res
    },

    async showCharacter({state},_id){

        const res = await Services.fetchCharacter(_id)
        state.currentCharacter= res.data.data
        console.log(state.Character)
        return res
    },

    async fetchProducts({state}){
        const res = await Services.fetchProducts()
        state.products = res.data.data

        return res
    },

    async showProduct({state},id){
        const res = await Services.fetchProduct(id)
        state.product = res.data.data
        return res
    },

    async fetchUserAndOrder({state}){
        const res = await Services.fetchUserAndOrder()
        state.user = res.data.data
        return res
    },
}