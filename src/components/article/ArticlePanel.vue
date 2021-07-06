<template>
  <article class="article-tab">
    <view class="onlineMark"></view>
    <h1>{{ article.title }}</h1>
    <p class="digest">{{ article.digest }}</p>
    <p class="article-meta">
      <i class="el-icon-reading">{{ article.label }}</i>
      <i class="el-icon-s-custom">{{ article.author }}</i>
      <i class="el-icon-date">{{ article.created_at }}</i>
    </p>
  </article>
</template>

<script>
export default {
  props: {
    article: Object,
  },
};
</script>

<style>
article.onlineMark {
  position: absolute;
  top: 0px;
  left: 0px;
  width: 50px;
  height: 20px;
  background-color: #00a9e2;
  transform: rotate(-45deg);

  text-align: center;
  padding: 5rpx;
  margin-left: -40rpx;
  margin-top: -25rpx;
}
.digest {
  color: #999;
}
i {
  margin-left: 4px;
}
.article-meta {
  font-size: 0.5rem;
  line-height: 1.5;
  color: #999;
}
.article-tab {
  border-top-style: ridge;
}
.article-tab:last-child {
  border-bottom-style: ridge;
}
</style>