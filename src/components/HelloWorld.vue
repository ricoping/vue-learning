<template>
  <div class="home">
    <h1>Welcome To My Portfolio</h1>
    <br>
    <div class="qa">
    Q. How does this work?<br>
    A. This works on Vue.js and as SPA by using router. JSON server is also used for CRUD, especially create for adding new comment in this application.
    <br>
    <br>
    The steps for this app working are as follows:<br>
    1. Download XML file from yahoo news RSS.<br>
    2. Clean and modify data and save as JSON format.<br>
    3. Run JSON server.<br>
    4. Run vue app server and get data from JSON server through fetchAPI.
    </div>
  </div>
</template>
<script>

export default {
  data () {
    return {
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
    margin-top: 70px;
    margin-bottom: 0px;
  }
  .qa{
    font-size: 1.5em;
    text-align: left;
    width: 80%;
    margin: 0px auto;
  }
</style>
