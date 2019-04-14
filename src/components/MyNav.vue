<template>

  <nav class="navbar navbar-expand-lg navbar-dark">
    <a class="navbar-brand" href="#">My Test Site</a>

    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav">
        <router-link to="/">トップページ</router-link>
        <router-link to="/aboutme">About me</router-link>
        <router-link to="/bengoshi">弁護士ドットコム</router-link>
      </div>
    </div>
  </nav>

</template>

<script>
</script>

<style scoped>

nav{
  background: #7b9ad0;
}

a, a:visited, a:hover{
  color: #fcfcfc;
  margin: 0px 0.5em;
  padding: 0em;
}

</style>
