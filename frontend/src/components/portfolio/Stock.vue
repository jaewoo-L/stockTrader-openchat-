<template id="">
  <div class="col-sm-6 col-md-4">
    <div class="panel panel-info">
      <div class="panel-heading">
        <h3 class="panel-title">{{stock.name}}<small>  [Price:{{stock.price}} | Quantity:{{stock.quantity}}]</small></h3>
      </div>
      <div class="panel-body">
        <div class="pull-left">
          <input type="number" class="form-control" name="" value="" v-model.number="quantity">
        </div>
        <div class="pull-right">
          <button
                type="button"
                name="button"
                class="btn btn-success"
                @click="asellStock"
                :disabled="quantity <= 0 || !isInteger(quantity) || quantity > stock.quantity">Sell</button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    props:['stock'],
    data() {
      return {
        quantity:0
      }
    },
    methods: {
      asellStock(){
        const order = {
          stockId:this.stock.id,
          stockPrice:this.stock.price,
          quantity:this.quantity
        };
        this.$store.dispatch('sellStock', order);
        this.quantity = 0;
      },
      isInteger(num) {
        return (num ^ 0) === num;
      }
    }
  }
</script>
<style>
  small {
    padding-left:5px
  }
</style>
