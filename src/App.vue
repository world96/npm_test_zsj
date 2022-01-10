<template>
  <div id="app">
    <pagination></pagination>
    <cropper></cropper>
  </div>
</template>
 
<script>
import cropper from './myPlugin/cropper/index.vue'
import pagination from './myPlugin/Pagination/index.vue'
export default {
  name: 'app',
  data() {
    return {}
  },
  methods: {
    tap(s) {
      console.log(s, '出来了哈哈哈')
    }
  },
  components: {
    pagination,
    cropper
  }
}
</script>
 
<style>
</style>