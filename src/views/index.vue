<template lang="pug">
    .container
     .house(ref='house')
       .items(v-for='(item,index) in houses' :key='index'
        @click='showHouse(item)')
          .desc
            .words {{item.words}}
            .cname {{item.cname}}
            .name  {{item.name}}
     .characters
        .title 主要人物
        .section
            .items(v-for='(item,index) in characters' :key='index'
            @click='showCharacter(item)' )
                img(:src='item.profile')
                .desc
                    .cname {{item.cname}}
                    .name {{item.name}}
                    .playedBy {{item.playedBy}}

     .cities
        .title 维斯特洛
        .cities-intro  维斯特洛位于已知世界的极西之地。它的范围是从北境的极地向南延伸约3000里绵延300里的巨大堡垒——长城，将塞外和七大王国分离开来，而除了塞外维斯特洛是个统一国家七大王国被划分为九个行政区域。
        .items(v-for='(item,index) in cities' :key='index' @click='showcities(item)')
            .title {{item.title}}
            .body {{item.body}}

</template>

<script>
    import {mapState} from 'vuex'
    export default {
        head(){
            return {
                title:'冰火脸谱'
            }
        },
        computed:{
            // ...mapState([
            //     'houses',
            //     'characters',
            //     'cities'
            // ]),
            ...mapState({
                houses:'houses',
                characters:'characters',
                cities:'cities'
            })

        },

        methods:{
            showHouse(item){
                this.$router.push({
                    path:'/house',
                    query:{
                        id:item._id
                    }
                })
            },
            showCharacter(item){
                this.$router.push({
                    path:'/character',
                    query:{
                        id:item._id
                    }
                })
            },
        },
        beforeCreate(){
            this.$store.dispatch('fetchHouses')
            this.$store.dispatch('fetchCharacters')
            this.$store.dispatch('fetchCities')

        }
    }
</script>

<style scoped lang='sass' src="../../static/sass/index.sass">

</style>