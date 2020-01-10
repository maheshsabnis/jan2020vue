<template>
  <div class="container">
    <table class="table table-bordered table-striped">
      <thead>
        <tr>
          <th>Cat Id</th>
          <th>Cat Name</th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="c in categories"
          :key="c.CatId"
          @click="onRowClicked(c.CatId)"
        >
          <td>{{ c.CatId }}</td>
          <td>{{ c.CatName }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
import { Categories } from "./../../models/appmodels.js";
// importing the event bus
import { EventBus } from "./../../main.js";
export default {
  name: "SenderComponent",
  data: function() {
    return {
      categories: Categories
    };
  },
  methods: {
    onRowClicked: function(CatId) {
      // emit an event using the EventBus
      EventBus.$emit("notify", CatId);
    }
  }
};
</script>
