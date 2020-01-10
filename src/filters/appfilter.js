 import Vue from 'vue';
 Vue.filter('ucase',function(val){
    if(!val) return;
    return val.toUpperCase();
});
