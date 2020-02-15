<template id="">
  <div class="home container">
    <h1>Trade or View your Portfolio</h1>
    <hr>
    <h4>Your Funds {{funds | currency}}</h4><br>
    <div class="row">
      <div class="col-sm-6 col-md-4">
        <div class="thumbnail">
          <img src="../../public/images/trade.png" alt="trade">
          <div class="caption">
            <hr>
            <h4>A. It is automatically stored at the time of purchase and sale.</h4>
          </div>
        </div>
      </div>
      <div class="col-sm-6 col-md-4">
        <div class="thumbnail">
          <img src="../../public/images/sun.png" alt="newday">
          <div class="caption">
            <hr>
            <h4>B. Click on 'End Day' to begin a New Day!</h4>
          </div>
        </div>
      </div>
      <div class="col-sm-6 col-md-4">
        <div class="thumbnail">
          <img src="../../public/images/phone.png" alt="openchat">
          <div class="caption">
            <hr>
            <h4>C. Information can be exchanged with users using open chat.</h4>
          </div>
        </div>
      </div>
    </div>
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
