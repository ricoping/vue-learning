<template>
  <div class="comment">
    <h2>弁護士ドットコム - コメント</h2>

    <div class="row">
      <div class="col-md-12 my-card">
        <strong>{{ article.title }}</strong>
        <p>ID: {{ article.id }} Category: {{ article.category }}</p>
        <p>published at: {{ article.pubDate }}</p>

      </div>
    </div>

    <hr>

    <div class="row">
      <div class="col-md-12 my-comment" v-for="(cmt) in comments" v-bind:key="cmt.id">
        <p>Comment ID: {{cmt.id}}____{{ cmt.comment }}</p>
      </div>
    </div>

    <hr>

    <div class="row">
      <div class="col-md-12 my-form">
        <form>
          <div class="form-group">
            <label for="comment">コメントを投稿する</label>
            <textarea v-model="new_comment" name="comment" class="form-control" id="exampleFormControlTextarea1" rows="5" cols="80"></textarea>

            <small id="comment" class="form-text text-muted">特定の個人や団体を誹謗中傷するようなコメントはお控えください。</small>
          </div>
        </form>

        <button v-on:click="postComment(article.id)" class="btn btn-primary">Submit</button>
      </div>
    </div>
    <br><br><br>
  </div>
</template>

<script>
export default {

  name: 'bengoshi_comment',

  data () {
    return {
      article: '',
      article_id: -1,
      comments: [],
      new_comment: ''
    }
  },

  methods: {
    postComment: function (articleId) {
      var commentInfo = {
        'comment': this.new_comment,
        'article_id': Number(this.article_id)
      }

      fetch(`http://localhost:3000/comments`, {
        method: 'POST',
        headers: {
          'Content-type': 'application/json'
        },
        body: JSON.stringify(commentInfo)
      })
        .then((res) => res.json())
        .then((data) => {})
        .then((err) => console.log(err))

      const last_id = this.comments.length
      commentInfo['id'] = last_id + 2
      this.comments.push(commentInfo)
      this.new_comment = ''
    }
  },

  created () {
    const id = this.$route.params.articleId
    this.article_id = id

    fetch(`http://localhost:3000/data/${id}`)
      .then((res) => res.json())
      .then((data) => {
        this.article = data
      })
      .then((err) => console.log(err))

    fetch(`http://localhost:3000/comments`)
      .then((res) => res.json())
      .then((data) => {
        this.comments = data.filter((d) => d.article_id === Number(this.article_id))
      })
      .then((err) => console.log(err))
  }
}
</script>

<style scoped>
  h2{
    color: #5b7e91;
    margin-top: 70px;
    margin-bottom: 20px;
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
  .my-form{
    text-align: left;
  }
  .my-comment{
    text-align: left;
    margin: 20px auto;
  }
</style>
