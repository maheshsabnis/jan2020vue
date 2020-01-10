import Vue from 'vue';
// exportable for vue-cli
export default Vue.directive("checkvalue", {
    bind(el) {
        el.addEventListener('keyup', function() {
            if (parseInt(el.value) < 0) {
                el.style.color = 'red';
                el.style.background = 'yellow';
            } else {
                el.style.color = null;
                el.style.background = null;
            }
        });
    }
});