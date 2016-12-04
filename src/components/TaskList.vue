<template lang="pug">
  section.todoapp
    header.header
      h1 「Liam」
      input.new-task(autofocus='', autocomplete='off', placeholder='タスクを追加する', @keyup.enter='addTask')

    // main section
    .main(v-show='tasks.length')
      input.toggle-all(type='checkbox', :checked='allChecked', @change='TOGGLE_ALL_TASK({ done: !allChecked })')
      ul.task-list
        <task v-for="task in filteredTasks" :task="task"></task>

    // footer
    footer.footer(v-show='tasks.length')
      span.task-count
        strong {{ remaining }}
        |            {{ remaining | pluralize('item') }} left
      ul.filters
        li(v-for='(val, key) in filters')
          a(:href="'#/' + key", :class='{ selected: visibility === key }', @click='visibility = key') {{ key | capitalize }}
      button.clear-completed(v-show='tasks.length > remaining', @click='CLEAR_COMPLETED')
          | Clear completed
</template>

<script>
import { mapMutations } from 'vuex'
import Task from './Task'

const filters = {
  all: tasks => tasks,
  active: tasks => tasks.filter(task => !task.done),
  completed: tasks => tasks.filter(task => task.done)
}

export default {
  name: 'TaskList',
  components: { Task },
  data () {
    return {
      visibility: 'all',
      filters: filters
    }
  },
  computed: {
    tasks () {
      return this.$store.state.tasks
    },
    allChecked () {
      return this.tasks.every(task => task.done)
    },
    filteredTasks () {
      return filters[this.visibility](this.tasks)
    },
    remaining () {
      return this.tasks.filter(task => !task.done).length
    }
  },
  methods: {
    addTask (e) {
      var text = e.target.value
      if (text.trim()) {
        this.$store.commit('ADD_TASK', { text })
      }
      e.target.value = ''
    },
    ...mapMutations([
      'TOGGLE_ALL_TASK',
      'CLEAR_COMPLETED'
    ])
  },
  filters: {
    pluralize: (n, w) => n === 1 ? w : (w + 's'),
    capitalize: s => s.charAt(0).toUpperCase() + s.slice(1)
  }
}
</script>

<style src='../assets/stylesheets/index.css'></style>
