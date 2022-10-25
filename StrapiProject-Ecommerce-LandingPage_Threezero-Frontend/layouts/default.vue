<template>
  <div>
    <jheader></jheader>
    <nuxt />
    <jfooter></jfooter>
  </div>
</template>

<script>
import jheader from '~/components/jheader'
import jfooter from '~/components/jfooter'
export default {

  transition: "default",
  components:{
    jheader, jfooter
  }

}
</script>