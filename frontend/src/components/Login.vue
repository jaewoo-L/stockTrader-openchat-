<template>
    <div class="scene">
      <div class="full-bg">
        <img src="https://images.unsplash.com/photo-1558588942-930faae5a389?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" alt="">
        <div class="overlay"></div>
      </div>
      <div class="content">
        <h3>Welcome! <p>please choose a username.</p></h3>
        <form class="" @submit.prevent="setUsername">
          <div class="input-group">
            <label for="username">User Name</label>
            <input type="text" id="username" placeholder="User name..." v-model="username">
          </div>
          <div class="input-group">
            <input type="submit" value="Join" :disabled="username=='' || username.length < 5" class="btn btn-warning btn-lg">
          </div>
        </form>
      </div>
    </div>
</template>

<script>
var socket = null;
export default {
  data(){
    return{
      username:''
    }
  },
  methods: {
    setUsername(){
      this.$store.dispatch('setUsername', this.username)
      .then(()=>{
        this.username='';
        setTimeout(()=> this.$router.push({path:'/home'}),500);
      });
    }
  },
  mounted() {
    $(function() {
    	var container = $('.full-bg');

    	$(window).resize(function() {
    		var currentWindow = $(this),
    			windowWidth = currentWindow.width(),
    			windowHeight = currentWindow.height(),
    			browserRatio = windowWidth / windowHeight,
    			imgRatio = 864 / 486;

    		if(imgRatio > browserRatio) {
    			container.css({
    				height:'100%',
    				width: (windowHeight * imgRatio) + 'px',
    				left: (windowWidth - windowHeight*imgRatio)/2 + 'px',
    				top:0

    			})
    		} else {
    			container.css({
    				height: (windowWidth / imgRatio) + 'px',
    				width:'100%',
    				left:0,
    				top: (windowHeight - windowWidth/imgRatio)/2 + 'px'
    			});
    		}
    	});//resize method
    	$(window).trigger('resize');
      $('input#username').click(function(){
  			$(this).attr('placeholder','');
        $('label').addClass('top');
  		})
    });//document ready
  }
}
</script>

<style src="../../public/stylesheets/login.css" scoped>
</style>
