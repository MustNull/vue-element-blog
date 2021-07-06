<template>
  <div class="home-body">
    <div class="home-center">
      <h1 id="home-title">{{ homeTitle }}</h1>
      <p class="sub-title">{{ subTitle }}</p>
      <div class="nav-list">
        <ul>
          <li v-for="nav in navList" :key="nav.href">
            <router-link :to="nav.to">{{ nav.title }}</router-link>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      homeTitle: "MustNull",
      subTitle: "人到中年不得已,保温杯里泡枸杞",
      navList: [
        {
          title: "文章",
          to: "/article",
        },
        {
          title: "关于",
          to: "/",
        },
      ],
    };
  },
};
</script>

<style scoped>
.home-body {
  display: flex;
  height: 80vh;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 93%;
  margin: auto;
  font-size: 1.5rem;
}
#home-title {
  margin: 0;
}
.sub-title {
  font-style: italic;
  font-size: 0.7em;
}
.home-center {
  text-align: center;
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  justify-content: center;
}
</style>