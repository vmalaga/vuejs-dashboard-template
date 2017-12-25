<template>
  <div class="container">
    <div class="col-md-8">
      <div v-for="user in users" class="card mb-20">
        <div class="media card-body">
          <avatar :username="user.name"></avatar>
          <div class="media-body">
            <div class="mb-2">
              <span>{{ user.name }}</span>
            </div>
            <span class="fs-16 fw-300 ls-1">{{ user.role }}</span>
          </div>
          <div class="media-right text-right d-none d-md-block">
            <span >Last login: {{ user.lastLogin }} <i class="fa fa-calendar-times-o"></i></span>
          </div>
        </div>
        <footer class="card-footer flexbox align-items-right">
            <div class="text-right">
                <a class="btn btn-xs fs-10 btn-bold btn-primary" href="#" data-toggle="modal" data-target="#modal-contact">Edit</a>
                <a class="btn btn-xs fs-10 btn-bold btn-warning" href="#">Delete</a>
            </div>
        </footer>
      </div>
    </div>
  </div>
</template>

<script>
import Avatar from 'vue-avatar'

export default {
  name: 'Users_view',
  data () {
    return {
      msg: 'Users',
      users: [
        {name: 'Jon Doe', role: 'Administrator', lastLogin: '25/12/2017'},
        {name: 'Patrick Unmol', role: 'User', lastLogin: '12/05/2016'},
        {name: 'Markib Hasmik', role: 'Reader', lastLogin: '22/12/2017'},
        {name: 'Jostin Besmash', role: 'Administrator', lastLogin: '24/12/2017'}
      ]
    }
  },
  components: { Avatar }
}
</script>

<style lang="css" scoped>
.container {
  background-color: #ffffff;
  max-width: -webkit-fill-available;
}
span {
  padding-left: 10px;
}
.pr-12 {
    padding-right: 12px !important;
}

.mb-20 {
    margin-bottom: 20px !important;
}

.b-1 {
    border: 1px solid #ebebeb !important;
}

.card {
    border: 1;
    border-radius: 30;
    margin-bottom: 30px;
    -webkit-transition: .5s;
    transition: .5s;
    position: relative;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-direction: column;
    flex-direction: column;
    min-width: 0;
    word-wrap: break-word;
    background-color: rgb(197, 192, 192);
    background-clip: border-box;
    border: 1px solid rgba(0,0,0,.125);
    border-radius: .25rem;
}
</style>
