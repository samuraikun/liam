<template lang="pug">
  #app
    .mdl-grid
      .mdl-cell.mdl-cell--4-col
        <todoList></todoList>
      .mdl-cell.mdl-cell--4-col
        <task></task>
      .mdl-cell.mdl-cell--4-col
        <dashboard></dashboard>
</template>

<script>
import TodoList from './components/TodoList'
import Task from './components/Task'
import Dashboard from './components/Dashboard'

export default {
  name: 'app',
  components: {
    TodoList, Task, Dashboard
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
</style>
