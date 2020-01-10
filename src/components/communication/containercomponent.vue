<template>
  <div class="container">
    <SenderComponent></SenderComponent>
    <hr />
    <ReceiverComponent></ReceiverComponent>
  </div>
</template>

<script>
import SenderComponent from "./sendercomponent.vue";
import ReceiverComponent from "./receivercomponent.vue";
export default {
  name: "ContainerComponent",
  components: {
    SenderComponent,
    ReceiverComponent
  }
};
</script>
