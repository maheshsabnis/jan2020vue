<template>
  <div class="container">
    <h2>The Home Component</h2>
    <div class="container">
      <strong>{{ message }}</strong>
    </div>
  </div>
</template>
<script>
export default {
  name: "HomeComponent",
  data: function() {
    return {
      message: "The Home Component"
    };
  },
  beforeMount() {
    console.log("Home Before Mount");
  },
  mounted() {
    console.log("Home Mounted");
  },
  beforeDestroy() {
    console.log("Home before Destroy");
  },
  destroyed() {
    console.log("Home Destroyed");
  }
};
</script>
