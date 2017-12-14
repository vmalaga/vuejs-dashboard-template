<template>
  <div id="app">
    <nav class="navbar navbar-expand-md navbar-dark bg-dark" style="">
      <div class="container-fluid">
        <a class="navbar-brand" href="/overview">
          <i class="fa d-inline fa-lg fa-cloud"></i>
          <b>{{ this.$brand }}</b>
        </a>
        <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbar2SupportedContent" aria-controls="navbar2SupportedContent" aria-expanded="false" aria-label="Toggle navigation"> <span class="navbar-toggler-icon"></span> </button>
        <div class="collapse navbar-collapse text-center justify-content-end" id="navbar2SupportedContent">
          <a class="btn navbar-btn ml-2 text-white btn-primary">
            <i class="fa d-inline fa-lg fa fa-plug" aria-hidden="true"></i>
            Connected http://server
          </a>
        </div>
      </div>
    </nav>
    <div class="p-1" style="padding: 0rem !important;">
      <div class="container-fluid">
        <div class="row p-0 h-100">
          <div class="col-md-2 m-0 w-100 p-0 bg-dark" style="height: 800px;">
            <ul class="list-group w-100 p-0 bg-dark" style="">
              <li class="list-group-item bg-dark text-light">
                <i class="fa fa-fw fa-home"></i>
                <router-link to="/home">Home</router-link>
              </li>
              <li class="list-group-item bg-dark text-light">
                <i class="fa fa-fw fa-user-o"></i>
                <router-link to="/users">Users</router-link>
              </li>
              <li class="list-group-item bg-dark text-light">
                <i class="fa fa-fw fa-database"></i>
                <router-link to="/tables">Tables</router-link>
              </li>
              <li class="list-group-item bg-dark text-light">
                <i class="fa fa-fw fa-cog"></i>
                <router-link to="/tools">Tools</router-link>
              </li>
              <li class="list-group-item bg-dark text-light">
                <i class="fa fa-fw fa-compass"></i>
                <router-link to="/about">About</router-link>
              </li>
            </ul>
          </div>
          <div class="col-md-10" style="padding: 0.5rem;">
            <router-view></router-view>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'app',
  data: function () {
    return {
      Brand: this.$brand
    }
  },
  created: function () {
    console.log('App component created')
  }
}
</script>

<style>
.navbar {
  position: relative;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  padding: 0.5rem 1rem; }
  .navbar > .container,
  .navbar > .container-fluid {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between; 
    }

.navbar-brand {
  display: inline-block;
  padding-top: 0.3125rem;
  padding-bottom: 0.3125rem;
  margin-right: 1rem;
  font-size: 1.25rem;
  line-height: inherit;
  white-space: nowrap; }
  .navbar-brand:focus, .navbar-brand:hover {
    text-decoration: none; }

.navbar-nav {
  display: flex;
  flex-direction: column;
  padding-left: 0;
  margin-bottom: 0;
  list-style: none; }
  .navbar-nav .nav-link {
    padding-right: 0;
    padding-left: 0; }
  .navbar-nav .dropdown-menu {
    position: static;
    float: none; }

.navbar-text {
  display: inline-block;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem; }

.navbar-collapse {
  flex-basis: 100%;
  align-items: right; }

.navbar-toggler {
  padding: 0.25rem 0.75rem;
  font-size: 1.25rem;
  line-height: 1;
  background: transparent;
  border: 1px solid transparent;
  border-radius: 0.25rem; }
  .navbar-toggler:focus, .navbar-toggler:hover {
    text-decoration: none; }

.navbar-toggler-icon {
  display: inline-block;
  width: 1.5em;
  height: 1.5em;
  vertical-align: middle;
  content: "";
  background: no-repeat center center;
  background-size: 100% 100%; }

</style>
