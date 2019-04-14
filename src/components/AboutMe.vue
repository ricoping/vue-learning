<template>
  <div class="aboutme">
    <h1>About me</h1>
    <br><br><br>
    <div class="profile">
    Name: ricoping<br>
    Skills: Python, PHP, Javascript<br><br>
    I want to be a web app programmer. <br>
    Let's work together with me!<br>Thank you for watching.
    </div>
  </div>
</template>
<script>
export default {
  name: 'home',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style scoped>
  h1{
    color: #5b7e91;
    margin-top: 70px;
    margin-bottom: 0px;
  }
  .profile{
    font-size: 1.5em;
    width: 80%;
    margin: 0px auto;
  }
</style>
