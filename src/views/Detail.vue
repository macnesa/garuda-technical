<template> 
  <Card :post="firstNews?.data.posts[index]" :index="index" />
</template>

<script> 
import { mapState } from 'vuex';
import Card from '../components/atoms/Card.vue'
export default {
  
 components : { 
    Card 
 },
  
  data() {
    return {
      index: null
    }
  }, 
    
  created() {
    this.index = this.$route.params.id;
  }, 
  computed: {
    ...mapState(['firstNews']),  
  },
  
};
</script>
