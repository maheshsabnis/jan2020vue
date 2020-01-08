<template>
  <div>
    <h2>{{ message }}</h2>
    <p>Data Received from Parent {{ info }}</p>
  </div>
</template>

<script>
export default {
  name: "ChildComponent",
  data: function() {
    return {
      message: "I am Child Component"
    };
  },
  props: {
    info: String // the string data is expected
  }
};
</script>
