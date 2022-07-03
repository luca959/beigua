var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var stdin_exports = {};
__export(stdin_exports, {
  default: () => BackToTop
});
module.exports = __toCommonJS(stdin_exports);
var import_index_ca1d280d = require("../../chunks/index-ca1d280d.js");
var BackToTop_svelte_svelte_type_style_lang = "";
const css = {
  code: ".mi.svelte-rixjr8{font-size:2.5rem;transform:translate(-50%, -50%);position:absolute;top:58%;left:50%}.back-to-top.svelte-rixjr8{width:50px;height:50px;opacity:1;transition:opacity 1.5s, visibility 0.5s;position:fixed;z-index:99;right:20px;user-select:none;bottom:20px;background-color:aliceblue;border-radius:50%;color:#582f0e }.back-to-top.hidden.svelte-rixjr8{opacity:0;visibility:hidden}.back-to-top.svelte-rixjr8:hover{background:#FFFFFF;box-shadow:0px 4px 4px 2px rgba(0, 0, 0, 0.25);border-radius:13px}",
  map: null
};
const BackToTop = (0, import_index_ca1d280d.c)(($$result, $$props, $$bindings, slots) => {
  let { showOnPx = 150 } = $$props;
  if ($$props.showOnPx === void 0 && $$bindings.showOnPx && showOnPx !== void 0)
    $$bindings.showOnPx(showOnPx);
  $$result.css.add(css);
  return `${$$result.head += `<link rel="${"stylesheet"}" href="${"https://unpkg.com/mono-icons@1.0.5/iconfont/icons.css"}" data-svelte="svelte-1icw08w">`, ""}





<div class="${["back-to-top svelte-rixjr8", "hidden"].join(" ").trim()}"><i class="${"mi mi-circle-arrow-up svelte-rixjr8"}"></i></div>`;
});
