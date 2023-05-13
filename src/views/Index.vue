 <template>
    
  <div>    
       
   <div style="display:flex;flex-wrap:wrap;gap:10px;margin-left:auto;">
       <div class="card" v-for="(each, index) in firstNews?.data.posts" :key="index">
        <a href="#">
          <img class="card-img-top" :src="each.thumbnail"  alt="" />
        </a>
        <div class="card-body">
          <router-link :to="'/detail/' + index">
            <h5 class="card-title">{{ each.title }}</h5>
          </router-link>  
          <!-- <p class="card-text">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p> -->
          <router-link :to="'/detail/' + index">
            <p class="btn btn-primary">Read more</p>
          </router-link>  
        </div>
      </div>
    </div>  
 
  </div>
</template>

<script>

import { mapActions, mapState } from 'vuex';

export default {
  name: 'IndexPage',

  data() {
    return { 
      
    };
  },
 
  computed: {
    ...mapState(['stations','firstNews']),  
  },
   
  async mounted() {
    await this.$store.dispatch('firstFetch'); 
  },
   
};


</script>
