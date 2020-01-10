<template>
  <div class="container">
    <table class="table table-bordered table-striped">
      <thead>
        <tr>
          <th>Prod Id</th>
          <th>Prod Name</th>
          <th>Price</th>
          <th>Cat Id</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="p in filterProducts" :key="p.ProdId">
          <td>{{ p.ProdId }}</td>
          <td>{{ p.PrdName }}</td>
          <td>{{ p.Price }}</td>
          <td>{{ p.CatId }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
import { Products } from "./../../models/appmodels.js";
// import EventBus
import { EventBus } from "./../../main.js";
export default {
  name: "ReceiverComponent",
  data: function() {
    return {
      products: Products,
      filterProducts: []
    };
  },
  beforeCreate() {
    console.log("beforeCreate Called");
  },
  created() {
    console.log("Created Called");
  },
  beforeUpdate() {
    console.log("beforeUpdate Called");
  },
  updated() {
    console.log("Updated Called");
  },
  beforeMount() {
    console.log("beforeMount Called");
  },
  beforeDestroy() {
    console.log("beforeDestroy Called");
  },
  destroyed() {
    console.log("Destoryed Called");
  },
  // use the 'mounted' for the receiver to receive data
  mounted() {
    console.log("Mounted Called");
    // subscribe to the event from EventBus
    EventBus.$on("notify", CatId => {
      console.log(CatId);
      if (CatId > 0) {
        this.filterProducts = this.products.filter((p, i) => {
          console.log(i + JSON.stringify(p));
          return p.CatId == CatId;
        });
        console.log(JSON.stringify(this.filterProducts));
      } else {
        this.filterProducts = this.products;
      }
    });
  }
};
</script>
