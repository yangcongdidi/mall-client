<template lang="pug">
.container
    .character-header
        img( class='character-header-bg' v-if='character.images' :src='character.images[0]')
        .media
            img(v-if='character.profile' :src='character.profile')
            .desc
                .names
                    p.cname {{character.cname}}
                    p.name {{character.name}}
    .character-body
        .intro
            p(v-for='item in character.intro') {{item}}

        .stills
            img(v-for='item in character.images' :src='item' :key='index')

        .items(v-for='item in character.sections')
            .title {{ item.title}}
            .body(v-for='text in item.content') {{text}}



</template>

<script>
    import {mapState} from 'vuex'

    export default {
        head(){
            return{
                title:'家族成员详情'
            }
        },
        computed:{
            ...mapState({
                character:'currentCharacter'
            })
        },
        beforeCreate(){
            let id = this.$route.query.id

            this.$store.dispatch('showCharacter',id)

        }
    }
</script>

<style scoped lang='sass' src="~/sass/characters.sass">

</style>