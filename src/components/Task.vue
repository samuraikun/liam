<template lang="pug">
  .task
    form(action='#')
      .mdl-textfield.mdl-js-textfield
        input#sample1.mdl-textfield__input(type='text')
        label.mdl-textfield__label(for='sample1') Create Your Task...

    table.mdl-data-table.mdl-js-data-table.mdl-data-table--selectable
      thead
        tr
          th.mdl-data-table__cell--non-numeric Material
          th Quantity
          th Unit price
      tbody
        tr
          td.mdl-data-table__cell--non-numeric Acrylic (Transparent)
          td 250
          td $2.90
        tr
          td.mdl-data-table__cell--non-numeric Plywood (Birch)
          td 50
          td $1.25
        tr
          td.mdl-data-table__cell--non-numeric Laminate (Gold on Blue)
          td 10
          td $12.35


</template>

<script>
export default {
  name: 'Task'
}
</script>

<style lang="stylus" scoped>
  .task
    height 100%
    // background-image url("../assets/wood_panel.jpg")

    form
      display flex
      justify-content center
</style>