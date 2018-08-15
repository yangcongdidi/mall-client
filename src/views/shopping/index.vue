<template lang="pug">
.container
    .shopping
        .title 权游周边
        .list
            .items(v-for='(item,index) in products' :key='index' @click='showProduct(item)')
                img(:src='item.images[0]')
                .body
                    .title {{item.title}}
                    .content {{item.intro}}

</template>

<script>
    import {mapState} from 'vuex'
    export default {
        head(){
            return{
                title:'家族详情'
            }
        },
        computed:{
            ...mapState({
                products:'products'
            })
        },
        methods:{
            showProduct(item){
                this.$router.push({
                    path:'/deal',
                    query:{
                        id:item.id
                    }
                })
            }
        },
        beforeCreate(){

            this.$store.dispatch('fetchProducts')

        }
    }
</script>

<style scoped lang='sass' src="~/sass/shopping.sass">

</style>