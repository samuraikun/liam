<template lang="pug">
  .dashBoard
    h3 {{ msg }}
    p Simple Reactive Todo application
    p Ecosystem
    ul
      li
        a(href='http://router.vuejs.org/', target='_blank') vue-router
      li
        a(href='http://vuex.vuejs.org/', target='_blank') vuex
      li
        a(href='http://vue-loader.vuejs.org/', target='_blank') vue-loader
      li
        a(href='https://github.com/vuejs/awesome-vue', target='_blank') awesome-vue
</template>

<script>
export default {
  name: 'Dashboard',
  data () {
    return {
      msg: 'DashBoard'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" scoped>
.dashBoard
  h1, h2
    font-weight normal

  ul
    list-style-type none
    padding 0

  li
    display inline-block
    margin 0 10px

  a
    color #FF00FF
</style>
