<template lang="pug">
  #app
    <taskList></taskList>
    <!-- .mdl-grid
      .mdl-cell.mdl-cell-4-col
        <taskNameList></taskNameList>
      .mdl-cell.mdl-cell-4-col
        <taskList></taskList>
      .mdl-cell.mdl-cell-8-col
        <dashboard></dashboard> -->
</template>

<script>
// import TaskNameList from './components/TaskNameList'
import TaskList from './components/TaskList'
// import Dashboard from './components/Dashboard'

export default {
  name: 'app',
  components: {
    TaskList
  }
}
</script>

<style lang="stylus"></style>
