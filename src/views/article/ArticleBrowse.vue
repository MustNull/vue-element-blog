<template>
  <div class="article-browse">
    <div class="article-list">
      <ArticleList />
    </div>
  </div>
</template>


<script>
import ArticleList from "@/components/article/ArticleList.vue"
export default {
  components: { ArticleList }
}
</script>

<style>
.article-browse {
  display: flex;
  width: 66%;
  margin-left:auto;
  margin-right:auto; 
  max-width: 1200px;
}
.article-list {
  float: left;
  width: 90%;
}
</style>