<template>
  <div class="article-list">
    <ArticlePanel
      v-for="(article, index) in articles"
      :article="article"
      :key="index"
    />
  </div>
</template>

<script>
import ArticlePanel from "./ArticlePanel.vue";
export default {
  components: { ArticlePanel },
  data() {
    return {
      // 暂时使用伪造数据
      articles: [
        {
          title: "demo article",
          digest: "fklasjflkjalkfjlkajlkfsjlakjslfkjalsjflkajsflkjal",
          label: "label",
          author: "author",
          created_at: "2021-07-06",
        },
        {
          title: "demo2 article",
          digest: "fklasjflkjalkfjlkajlkfsjlakjslfkjalsjflkajsflkjal",
          label: "label",
          author: "author",
          created_at: "2021-07-06",
        },
        {
          title: "demo2 article",
          digest: "fklasjflkjalkfjlkajlkfsjlakjslfkjalsjflkajsflkjal",
          label: "label",
          author: "author",
          created_at: "2021-07-06",
        },
        {
          title: "demo2 article",
          digest: "fklasjflkjalkfjlkajlkfsjlakjslfkjalsjflkajsflkjal",
          label: "label",
          author: "author",
          created_at: "2021-07-06",
        },
        {
          title: "demo2 article",
          digest: "fklasjflkjalkfjlkajlkfsjlakjslfkjalsjflkajsflkjal",
          label: "label",
          author: "author",
          created_at: "2021-07-06",
        },
        {
          title: "demo2 article",
          digest: "fklasjflkjalkfjlkajlkfsjlakjslfkjalsjflkajsflkjal",
          label: "label",
          author: "author",
          created_at: "2021-07-06",
        },
        {
          title: "demo2 article",
          digest: "fklasjflkjalkfjlkajlkfsjlakjslfkjalsjflkajsflkjal",
          label: "label",
          author: "author",
          created_at: "2021-07-06",
        },
        {
          title: "demo2 article",
          digest: "fklasjflkjalkfjlkajlkfsjlakjslfkjalsjflkajsflkjal",
          label: "label",
          author: "author",
          created_at: "2021-07-06",
        },
      ],
    };
  },
};
</script>

<style>
</style>