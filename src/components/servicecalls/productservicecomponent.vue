<template>
  <div class="container">
    <h2>HTTP Calls from Component</h2>

    <div class="form-group">
      <label>Product Row Id</label>
      <input
        type="text"
        class="form-control"
        disabled
        v-model="prd.ProductRowId"
      />
    </div>
    <div class="form-group">
      <label>Product Id</label>
      <input type="text" class="form-control" v-model="prd.ProductId" />
    </div>
    <div class="form-group">
      <label>Product Name</label>
      <input type="text" class="form-control" v-model="prd.ProductName" />
    </div>
    <div class="form-group">
      <label>Category Name</label>
      <select class="form-control" v-model="prd.CategoryName">
        <option v-for="c in Categories" :key="c">{{ c }}</option>
      </select>
    </div>
    <div class="form-group">
      <label>Manufacturer</label>
      <select class="form-control" v-model="prd.Manufacturer">
        <option v-for="m in Manufacturers" :key="m">{{ m }}</option>
      </select>
    </div>
    <div class="form-group">
      <label>Description</label>
      <input type="text" class="form-control" v-model="prd.Description" />
    </div>
    <div class="form-group">
      <label>Base Price</label>
      <input type="text" class="form-control" v-model="prd.BasePrice" />
    </div>
    <div class="form-group">
      <input
        type="button"
        value="Clear"
        @click="clear()"
        class="btn btn-warning"
      />
      <input
        type="button"
        value="Save"
        @click="save()"
        class="btn btn-success"
      />
    </div>
    <div v-if="products.length > 0">
      <DynamicTableComponent
        v-bind:datasource="products"
        @clicked="getSelectedProduct"
      ></DynamicTableComponent>
    </div>
  </div>
</template>
<script>
import DynamicTableComponent from "./dynamictablecomponent.vue";
import { HttpService } from "./../../services/httpservice";
// entity class
var product = {
  ProductRowId: 0,
  ProductId: "",
  ProductName: "",
  CategoryName: "",
  Manufacturer: "",
  Description: "",
  BasePrice: 0
};
// define an instance of the service class
const variable = {
  serve: new HttpService()
};
export default {
  name: "ProductServiceComponent",
  components: {
    DynamicTableComponent
  },
  data: function() {
    return {
      prd: product,
      message: "The Filter",
      products: [],
      Categories: ["Electronics", "Electrical", "Food"],
      Manufacturers: ["HP", "IBM", "Bajaj", "Godrej", "Parle"]
    };
  },
  mounted() {
    // subscribe to the promise
    variable.serve
      .getData()
      .then(resp => {
        console.log(JSON.stringify(resp.data));

        this.products = resp.data; // success
      })
      .catch(err => {
        console.log(`Error Occured ${err}`); // failure
      });
  },
  methods: {
    // clearing the object
    clear: function() {
      this.prd.ProductRowId = 0;
      this.prd.ProductId = "";
      this.prd.ProductName = "";
      this.prd.CategoryName = "";
      this.prd.Manufacturer = "";
      this.prd.Description = "";
      this.prd.BasePrice = 0;
    },
    save: function() {
      let p = Object.assign({}, this.prd);
      variable.serve
        .postData(p)
        .then(resp => {
          console.log(JSON.stringify(resp.data));
          this.prd.ProductRowId = resp.data.ProductRowId;
          this.products.push(resp.data); // success
        })
        .catch(err => {
          console.log(`Error Occured ${err}`); // failure
        });
    },
    getSelectedProduct: function(p) {
      let selProduct = Object.assign({}, p);
      this.prd = selProduct;
    }
  }
};
</script>
