import { initMixin } from "./init";
import { stateMixin } from "./state";
import { renderMixin } from "./render";
import { eventsMixin } from "./events";
import { lifecycleMixin } from "./lifecycle";
import { warn } from "../util/index";

// new Vue的入口
function Vue(options) {
  if (process.env.NODE_ENV !== "production" && !(this instanceof Vue)) {
    warn("Vue is a constructor and should be called with the `new` keyword");
  }
  this._init(options);
}

// 挂在_init方法
initMixin(Vue);
// 和响应式及数据管理有关
// 处理this.$data访问到this._data。$props同理
// 挂载Vue原型的$set/$delete/$watch方法
stateMixin(Vue);
// 事件相关
// 挂载$on/$once/$off/$emit方法
eventsMixin(Vue);
// 生命周期
// 原型上挂载_update/$forceUpdate/$destroy方法
lifecycleMixin(Vue);
// 渲染
// 原型上挂载$nextTick/_render方法
// 同时会给Vue.prototype上挂载许多render相关的方法，_c _m _s等等的渲染辅助函数
renderMixin(Vue);

export default Vue;
