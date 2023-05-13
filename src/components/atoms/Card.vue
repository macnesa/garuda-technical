
<script>
export default {
  props: {
    post: {
      type: Object,
      required: true
    },
    index: {
      type: Number,
      required: true
    }
  }
}
</script>
 



<template>
  <div>
    <main class="page-container">
      <div class="flex-container">
        <article class="card">
          <header class="card-header"></header>
          <figure>
            <img :src="post.thumbnail" alt="">
          </figure>
          <h2 v-html="post.title"></h2>
          <p v-html="post.description"></p>
        </article>
        <button @click="$router.push('/edit/' + index)" class="button-default">Edit</button>
      </div>
    </main>
  </div>
</template>
