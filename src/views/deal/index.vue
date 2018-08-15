<template lang="pug">
.container
  .product
    .product-swiper
        swiper(:options="swiperOption")
            swiper-slide(v-for='item in product.images')
              img(:src="item")

        .swiper-pagination
    
    .product-content
      
      .product-price
        span.main-price {{ product.price }}
        span.other-price {{ product.price.toFixed(2).substr(-3) }}
      
      .name {{ product.title }}

      .intro {{ product.intro }}

      .info
        cell(v-for='(item, index) in product.parameters' :key='index' :title='item.key' :content='item.value')

      .attentions
        .title 购买提示
        ol
          li(v-for='item in attentions') {{ item }}

  .product-footer
    span(@click='buyProduct') 购买


</template>

<script>
    import cell from '../../components/cell.vue'
    import {mapState} from 'vuex'
    import {swiper, swiperSlide} from 'vue-awesome-swiper'

    export default {
        middleware: 'wechat-auth',
        head() {
            return {
                title: '手办详情'
            }
        },
        components: {
            swiper,
            swiperSlide
        },
        data() {
            return {
                swiperOption: {
                    //是一个组件自有属性，如果notNextTick设置为true，组件则不会通过NextTick来实例化swiper，也就意味着你可以在第一时间获取到swiper对象，假如你需要刚加载遍使用获取swiper对象来做什么事，那么这个属性一定要是true
                    notNextTick: true,
                    pagination: {
                        el: '.swiper-pagination',
                    },
                    slidesPerView: 'auto',
                    centeredSlides: true,
                    paginationClickable: true,
                },

                attentions: [
                    '商品和服务差异',
                    '物流配送'
                ],
            }
        },
        computed: {
            ...mapState({
                imageCDN: 'imageCDN',
                product: 'product'
            })
        },
        methods: {
            buyProduct(item) {
                console.log(item)
            }
        },
        beforeCreate() {
            const id = this.$route.query.id
            this.$store.dispatch('showProduct', id)
        },
        components: {
            cell
        }
    }
</script>

<style scoped lang="sass" src="~/sass/deal.sass"></style>
