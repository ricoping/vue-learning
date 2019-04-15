<template>
  <div class="aboutme">
    <h1>弁護士ドットコム - ニュース一覧</h1>


    <div class="row">
        <input v-model="searchText" v-on:change="searchNews" type="text" id="search" placeholder="Search..."/>

      <div class="col-md-12 my-card" v-for="(article) in articles" v-bind:key="article.id">
        <strong v-html="article.title" class="title">{{ truncateTitle(article.title) }}</strong>
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
      articles: [],
      searchText: '',
    }
  },

  methods: {
    truncateTitle: function (sentence) {
      return sentence.slice(0)
    },
    commentPage: function (id, e) {
      if (e) e.preventDefault()
      console.log(id)
    },
    searchNews: function () {

      fetch(`http://localhost:3000/data`)
      .then((res) => res.json())
      .then((data) => {
        this.articles = data.filter((d) => String(d.title).indexOf(this.searchText) != -1)
        for(var i = 0; i < this.articles.length; i++){
          var d = this.articles[i]
          var new_title = d['title'].replace(this.searchText, "<span style='background: yellow;'>" + this.searchText + "</span>")
          this.articles[i]['title'] = new_title
        }

      })
      .then((err) => console.log(err))

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
  .light{
    backbround: yellow;
  }
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
