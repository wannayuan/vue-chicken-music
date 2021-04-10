<template>
  <div class="m-header">
    <div class="icon"></div>
    <h1 class="text">vue chicken music</h1>
  </div>
</template>

<script type="text/ecmascript-6">
export default {}
</script>

<style lang="stylus" scoped rel="stylesheet/stylus">
@import '~common/stylus/variable'
@import '~common/stylus/mixin'
.m-header
  position: relative
  height: 44px
  line-height: 44px
  text-align: center
  color: #ffcd32
  .icon
    display: inline-block
    width: 30px
    height: 32px
    vertical-align: middle
    background-size: 30px 32px
    margin-right: 9px
    bg-image('logo')
  .text
    display: inline-block
    font-size: 18px
</style>
