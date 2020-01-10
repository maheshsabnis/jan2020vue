/* eslint-disable no-irregular-whitespace */
import Vue from 'vue'

export default Vue.directive('checkoddvalue',{
    bind(el) {
                el.addEventListener('keyup', function() {
                    if (parseInt(el.value) < 0) {
                        el.style.color = 'red';
                        el.style.background = 'yellow';
                    } else {
                        el.style.color = null;
                        el.style.background = null;
                    }
                });
    }
});