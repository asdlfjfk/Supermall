<template>
    <div class="addtoast">
      <vue-toast ref="addtocarttoast"></vue-toast>
    </div>
</template>

<script>
  import VueToast from 'vue-toast'
  import 'vue-toast/dist/vue-toast.min.css'
    export default {
        name: "AddToCartToast",
        components:{
          VueToast
        }
    }
</script>

<style scoped>

</style>
