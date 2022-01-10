import ldcPagination from './Pagination/index.js';
import ldcCropper from './cropper/index.js';
const components = [
    ldcPagination,
    ldcCropper
]
const install = function (Vue, opts = {}) {
    components.forEach(component => {
        Vue.component(component.name, component);
    });
}
if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue);
}

export default {
    install,
    ldcPagination,
    ldcCropper
}