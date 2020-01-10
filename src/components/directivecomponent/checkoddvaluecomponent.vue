<template>
  <div class="container">
    <input type="text" class="form-control" v-model="value" v-checkoddvalue />
  </div>
</template>
<script>
export default {
  name: "DirectiveComponent",
  data: function() {
    return {
      value: 0
    };
  }
};
</script>
