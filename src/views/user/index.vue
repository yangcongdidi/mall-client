<template lang="pug">
.container
  .user
    .user-header
      .text {{ user.nickname }}
      img(:src="user.avatar")
    .user-address
      cell(title='收获地址' )
      .user-content {{ user.address }}
    .user-phone
      cell(title='电话' )
      .user-content {{ user.phoneNumber }}
    .user-name
      cell(title='姓名' )
      .user-content {{ user.name }}
    .user-order
      cell(title='我的订单' )
      .user-order-item(v-for='(item, index) in user.orders' :key='index')
        img(:src='imageCDN + item.product.images[0]')
        .user-order-intro
          .title {{ item.product.title }}
          .content {{ item.product.intro }}
        .user-order-price
          span ¥{{ item.product.price.toFixed(2) }}
</template>

<script>
import cell from '@/components/cell.vue'
import { mapState } from 'vuex'

export default {
  middleware: 'wechat-auth',
  head () {
    return {
      title: '个人中心'
    }
  },
    data(){
      return {

      }
    },
  computed: {
    ...mapState([
      'user',
      'orders',
    ])
  },
  methods: {},
  beforeCreate () {
    this.$store.dispatch('fetchUserAndOrder')
  },
  components: {
    cell
  }
}
</script>

<style lang="sass" scoped src='~/sass/user.sass'></style>
