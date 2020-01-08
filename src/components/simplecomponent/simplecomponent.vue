<template>
  <div>
    <h2>{{ message }}</h2>
    <ChildComponent v-bind:info="str"></ChildComponent>
  </div>
</template>
<script>
import ChildComponent from "./reusablecomponent.vue";
export default {
  name: "SimpleComponent",
  components: {
    ChildComponent
  },
  data: function() {
    // all properties inside return{} will be
    // used for binding
    return {
      message: "The Simple Component",
      str: "Data from Parent"
    };
  }
};
</script>
