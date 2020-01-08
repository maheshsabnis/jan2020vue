<template>
  <div class="container">
    <h2>The Dynamic Table</h2>
    <div class="form-group">
      <label>Product Row Id</label>
      <input type="text" class="form-control" v-model="prd.ProductRowId" />
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
export default {
  name: "ProductAppDynamicComponent",
  components: {
    DynamicTableComponent
  },
  data: function() {
    return {
      prd: product,
      products: [
        {
          ProductRowId: 1,
          ProductId: "Prd0001",
          ProductName: "Laptop",
          CategoryName: "Electronics",
          Manufacturer: "HP",
          Description: "Gaming",
          BasePrice: 100000
        },
        {
          ProductRowId: 2,
          ProductId: "Prd0002",
          ProductName: "Iron",
          CategoryName: "Electrical",
          Manufacturer: "Bajaj",
          Description: "Cloth-Press",
          BasePrice: 1000
        },
        {
          ProductRowId: 3,
          ProductId: "Prd0003",
          ProductName: "Biscuts",
          CategoryName: "Food",
          Manufacturer: "Parle",
          Description: "Energy",
          BasePrice: 100
        }
      ],
      Categories: ["Electronics", "Electrical", "Food"],
      Manufacturers: ["HP", "IBM", "Bajaj", "Godrej", "Parle"]
    };
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
      this.products.push(p);
    },
    getSelectedProduct: function(p) {
      let selProduct = Object.assign({}, p);
      this.prd = selProduct;
    }
  }
};
</script>
