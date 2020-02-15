<template>
  <div class="openchat container">
    <h1>Open Chat</h1>
      <ul class="chatbox">
        <li v-for="message in messages">
          <b>{{message.username}}</b> <p>{{message.message}}</p>
        </li>
      </ul>
      <form @submit.prevent="sendMessage" @keyup.enter="sendMessage">
        <textarea cols="40" rows="5" placeholder="Message..." v-model="message" class="textarea"></textarea>
        <input type="submit" value="Send" :disabled="message==''" class="btn btn-default btn-lg">
      </form>
  </div>
</template>

<script>
var socket = null;
export default {
  data () {
    return {
      message:'',
      messages:[],
      username: ''
    }
  },
  methods: {
    sendMessage() {
      this.$store.dispatch('sendMessage', this.message)
      this.message = '';
    },
    setUsername: function () {
          this.$store.dispatch('setUsername')
          this.username='';
    }
  },
  mounted: function() {
    var nowuser = this.$store.getters.user;
    $(function(){
      var box = $('.chatbox');
      setTimeout(function(){
        box.find('li').each(function(idx) {
          if($(this).find('b').text() == nowuser) {
            $(this).addClass('me');
          }
          $(this).addClass('visible');
        })
        box.scrollTop(box.prop('scrollHeight'));
      },1000);
    });
      socket.on('message1', (message) => {
      this.messages.push(message);
      this.$nextTick(function(){
        this.$http.put('/api/chat/save', {name:'open',messages: this.messages})
        .then((response) => {
        })
        var messageBox = document.querySelector('.chatbox');
        var box = $('.chatbox');
        messageBox.scrollTop = messageBox.scrollHeight;
        box.find('li').each(function(idx) {
          if($(this).find('b').text() == nowuser) {
            $(this).addClass('me');
          }
          $(this).addClass('visible');
        })
      })
    });
  },
  created: function() {
    socket = this.$store.getters.getsocket;
    this.$http.get('/api/chat/load')
    .then((response) => {
      this.messages = response.data.messages;
    });
  }
}
</script>
<style src="../../public/stylesheets/chat.css" scoped>
</style>
