<template lang="pug">
  #app
    .mdl-grid
      .mdl-cell.mdl-cell--4-col
        <taskNameList></taskNameList>
      .mdl-cell.mdl-cell--4-col
        <taskList></taskList>
      .mdl-cell.mdl-cell--4-col
        <dashboard></dashboard>
</template>

<script>
import TaskNameList from './components/TaskNameList'
import TaskList from './components/TaskList'
import Dashboard from './components/Dashboard'

export default {
  name: 'app',
  components: {
    TaskNameList, TaskList, Dashboard
  }
}
</script>

<style lang="stylus">
#app
  font-family 'Avenir', Helvetica, Arial, sans-serif
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale
  color #2c3e50
</style>
