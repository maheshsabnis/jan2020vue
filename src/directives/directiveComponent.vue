<template>
  <div class="container">
    <input type="text" class="form-control" v-model="value" v-checkvalue />
  </div>
</template>
<script>
// import checkvalue from "./changeDirective";
export default {
  name: "TestDirectiveComponent",
  data: function() {
    return {
      value: 0
    };
  }
};
</script>
