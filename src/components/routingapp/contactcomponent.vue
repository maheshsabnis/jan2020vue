<template>
  <div class="container">
    <h2>The Contact Component</h2>
    <div class="container">
      <strong>{{ message }}{{ value }}</strong>
    </div>
  </div>
</template>
<script>
export default {
  name: "ContactComponent",
  props: ["id"], // the props type as 'id' because this is in route parameter
  data: function() {
    return {
      value: 0,
      message: `The Contact Component`
    };
  },
  mounted() {
    // read the data received for props
    this.value = this.$props.id;
    console.log(`The Data Received from Route is ${this.$props.id}`);
  }
};
</script>
