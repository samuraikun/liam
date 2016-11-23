<template lang="pug">
  #app
    img(src='./assets/liam.jpg')
    <todoList></todoList>
</template>

<script>
import TodoList from './components/TodoList'

export default {
  name: 'app',
  components: {
    TodoList
  }
}
</script>

<style lang="stylus">
#app
  font-family 'Avenir', Helvetica, Arial, sans-serif
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale
  text-align center
  color #2c3e50
  margin-top 60px

  header
    background-color #3B3B3B
    position fixed
    margin-bottom 30px
    z-index 999
    height 55px
    top 0
    left 0
    right 0
</style>
