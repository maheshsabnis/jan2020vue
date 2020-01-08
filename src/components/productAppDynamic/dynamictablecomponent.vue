<template>
  <div class="container">
    <table class="table table-bordered table-striped">
      <thead>
        <tr v-if="colHeaders.length > 0">
          <th v-for="c in colHeaders" :key="c">{{ c }}</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(r, i) in datasource" :key="i" @click="onRowClicked(r)">
          <td v-for="c in colHeaders" :key="c">{{ r[c] }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
export default {
  name: "DynamicTableComponent",
  props: {
    datasource: Array
  },
  data: function() {
    let headers = [];
    // logic to read all properties of received datasource
    for (let p in this.datasource[0]) {
      headers.push(p);
    }
    return {
      colHeaders: headers
    };
  },
  methods: {
    onRowClicked: function(r) {
      this.$emit("clicked", r); // emit the custom event and payload
    }
  }
};
</script>
