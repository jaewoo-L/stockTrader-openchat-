<template id="">
  <div class="home">
    <h1>Trade or View your Portfolio</h1>
    <ul>
      <li><h4>It is automatically stored at the time of purchase and sale.</h4></li>
      <li><h4>Click on 'End Day' to begin a New Day!</h4></li>
      <li><h4>Information can be exchanged with users using open chat.</h4></li>
    </ul>
    <hr>
    <h5>Your Funds {{funds | currency}}</h5>
  </div>
</template>
<script>
  export default {
    computed: {
      funds() {
        return this.$store.getters.funds;
      }
    },
    created: function() {
      this.$store.dispatch('initStocks');
    }
  }
</script>
<style src="../../public/stylesheets/stock.css" scoped>

</style>
