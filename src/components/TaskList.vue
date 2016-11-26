<template lang="pug">
  .taskList
    .name-bar
    h4 {{ tabtitle }}
    <task></task>
</template>

<script>
import Task from './Task'

export default {
  name: 'TaskList',
  data () {
    return {
      tabtitle: 'My Task'
    }
  },
  components: {
    Task
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" scoped>
  .taskList
    h1, h2, h4, h5
      font-weight normal
      text-align center
</style>
