import ldcCropper from './index.vue';
ldcCropper.install = Vue => Vue.component(ldcCropper.name, ldcCropper);//.name就是开始说的vue文件暴露出来的name名，ldcCropper整个组件
export default ldcCropper;