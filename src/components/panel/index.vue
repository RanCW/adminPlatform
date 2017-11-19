<template>
  <div class="panel">
    <div class="panel-header">
      <slot name="header">
       </slot>
    </div>
    <div class="panel-body">
      <slot name="body">
      </slot>
    </div>
    <div class="panel-footer">
      <slot name="footer">
      </slot>
    </div>
  </div>
</template>

<script>
</script>

<style scoped>
@import "index.scss";
</style>
