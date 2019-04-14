<template>
  <div class="aboutme">
    <h1>弁護士ドットコム - ニュース一覧</h1>

    <div class="row">
      <div class="col-md-12 my-card" v-for="(article) in articles" v-bind:key="article.id">
        <strong>{{ truncateTitle(article.title) }}</strong>
        <p>ID: {{ article.id }} Category: {{ article.category }}</p>
        <p>published at: {{ article.pubDate }}</p>
        <p>
          <a class="btn btn-secondary my-btn" :href="article.link" role="button">記事を見る »</a>

          <a :href="'#/bengoshi/comment/' + article.id" class="btn btn-secondary my-btn" role="button">コメント »</a>
        </p>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: 'bengoshi',
  data () {
    return {
      articles: []
    }
  },

  methods: {
    truncateTitle: function (sentence) {
      return sentence.slice(0)
    },
    commentPage: function (id, e) {
      if (e) e.preventDefault()
      console.log(id)
    }
  },
  created () {
    fetch(`http://localhost:3000/data`)
      .then((res) => res.json())
      .then((data) => {
        this.articles = data
      })
      .then((err) => console.log(err))
  }
}
</script>

<style scoped>
  h1{
    color: #5b7e91;
    margin-top: 120px;
    margin-bottom: 70px;
  }
  .row{
    display: inline-block;
    margin: 0px auto;
  }
  .my-card{
    text-align: left;
    margin: 50px auto;
  }
  .my-btn{
    margin-right: 20px;
    cursor: pointer;
    color: white;
  }
  a, a:visited, a:hover{
    color: white;
  }
</style>
