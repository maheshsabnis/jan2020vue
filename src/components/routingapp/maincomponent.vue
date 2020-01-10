<template>
  <div class="container">
    <table class="table table-bordered table-striped">
      <tr>
        <td>
          <router-link to="/">Home</router-link>
        </td>
        <td>
          <router-link to="/about">About</router-link>
        </td>
        <td>
          <router-link to="/contact">Contact</router-link>
        </td>
      </tr>
    </table>

    <hr />
    <router-view></router-view>
  </div>
</template>
<script>
export default {
  name: "MainComponent"
};
</script>
