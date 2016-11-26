<template lang="pug">
  .taskNameList
    .task-bar
      button#demo-menu-lower-left.mdl-button.mdl-js-button.mdl-button--icon
        i.material-icons more_vert
      ul.mdl-menu.mdl-menu--bottom-left.mdl-js-menu.mdl-js-ripple-effect(for='demo-menu-lower-left')
        li.mdl-menu__item Some Action
        li.mdl-menu__item.mdl-menu__item--full-bleed-divider Another Action
        li.mdl-menu__item(disabled='') Disabled Action
        li.mdl-menu__item Yet Another Action
</template>

<script>
export default {
  name: 'TaskNameList',
  data: {
    msg: 'Test'
  },
  computed: {
    addMsg: function () {
      // `this` は vm インスタンスを指します
      return this.msg + 'hoge'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" scoped>
  .taskNameList
      .task-bar
        background-color #00FFFF
        height 50px

        button
          color white
          margin-top 10px
          margin-left 10px
</style>
