<template>
  <div class="container">
    <h2>The About Component</h2>
    <div class="container">
      <strong>{{ message }}</strong>
    </div>
    <br />
    <input type="text" class="form-control" v-model="id" />
    <br />
    <input
      type="button"
      value="Navigate to Contact"
      class="btn btn-warning"
      @click="navigateToContact()"
    />
  </div>
</template>
<script>
export default {
  name: "AboutComponent",
  data: function() {
    return {
      id: 0,
      message: "The About Component"
    };
  },
  methods: {
    navigateToContact() {
      // explicit Navigation $router is the global object
      // because of Vue.use(VueRouter) statement
      this.$router.push("/contact/" + this.id);
    }
  }
};
</script>
