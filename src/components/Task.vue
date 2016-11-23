<template lang="pug">
  .task
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
  name: 'Task',
  data () {
    return {
      msg: 'Task'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" scoped>
.task
  h1, h2
    font-weight normal

  ul
    list-style-type none
    padding 0

  li
    display inline-block
    margin 0 10px

  a
    color #42b983
</style>
