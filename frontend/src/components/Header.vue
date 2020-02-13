<template id="">
  <div class="header">
    <nav class="navbar navbar-default">
      <div class="container-fluid">
        <div class="navbar-header">
          <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
            <span class="sr-only">Toggle navigation</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
          <router-link to="/home" class="navbar-brand">Stock Trader</router-link>
        </div>
        <div class="collapse navbar-collapse">
          <ul class="nav navbar-nav">
            <router-link to="/portfolio" activeClass="active" tag="li"><a>Portfolio</a></router-link>
            <router-link to="/stocks" activeClass="active" tag="li"><a>Stocks</a></router-link>
            <router-link to="/chat" activeClass="active" tag="li"><a>OpenChat</a></router-link>
          </ul>
          <strong class="navbar-text navbar-right">Funds: {{funds | currency}}</strong>
          <ul class="nav navbar-nav navbar-right">
            <li><a href="#" @click="endDay">End Day</a></li>
          </ul>
        </div><!-- /.navbar-collapse -->
      </div><!-- /.container-fluid -->
    </nav>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        dropDownOpen: false,
        username:''
      }
    },
    computed: {
      funds() {
        return this.$store.getters.funds;
      }
    },
    methods: {
      endDay() {
        this.$store.dispatch('randomizeStocks');
        this.$router.push('/home');
      }
    },
    mounted() {
      $(function() {
        var mobileHeader = $('.navbar-header');
        mobileHeader.find('button').click(function(){
          mobileHeader.siblings().toggleClass('in')
        })
        mobileHeader.siblings().find('li').click(function(){
          mobileHeader.siblings().removeClass('in');
        });
      })
    },
    created: function() {
      this.username = localStorage.getItem('username')
    }
  }
</script>
<style>
  .header {
    overflow:hidden;
  }
  .navbar-default {
    background-color: #dddddd;
    margin:0 30px 30px 30px;
    position: fixed;
    right:0;
    left:0;
    z-index:20;
  }
</style>
