<template>
  <div>
    <button class="button-default" style="margin-right: 5px;" @click="triggerSave()">save</button>  
    <button class="button-default" @click="$router.push('/detail/' + index )">cancel</button>    

    <p>Judul</p> 
    <ckeditor v-model="title" :editor="editor" />  
    
    <p>Description</p> 
    <ckeditor v-model="description" :editor="editor" />   
    
  </div>
</template>

<script>
  import { RouterLink, RouterView } from 'vue-router'  
  import CKEditor from '@ckeditor/ckeditor5-vue';
  import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
  import { mapState, mapMutations  } from 'vuex';
  export default {
    
  components: {
    ckeditor: CKEditor.component
  },
    
    data() {
      return {
        index: null,
        editor: ClassicEditor,
        title: '<p>Default content</p>',
        description: '<p>Default content</p>',
        full: []
      }
    },
     
    created() {
      this.index = this.$route.params.id;
    }, 
    
    mounted() {
      this.full = JSON.parse(JSON.stringify(this.firstNews));
       this.title = this.firstNews.data.posts[this.index].title
      this.description = this.firstNews.data.posts[this.index].description
    },
    
    methods: {
      ...mapMutations(['setFirstNews']),
      triggerSave() {
        this.setFirstNews(this.full) 
        this.$router.push('/detail/' + this.index)
      } 
    },
    
    computed: {
      ...mapState(['firstNews']),   
    },
     
    watch: {
      title(newValue, oldValue) { 
        this.full.data.posts[this.index].title = newValue
      },
      description(newValue, oldValue) { 
        this.full.data.posts[this.index].description = newValue
      },
    },
    
    
    
  };
</script>


 