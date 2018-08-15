
export default  {
    async fetchHouse({state}){
        const res = await Services.fetchHouse()
        state.houses = res.data

        return res
    },
    async fetchCharActers({state}){
        const res = await Services.fetchHouse()
        state.characters = res.data

        return res
    }
}