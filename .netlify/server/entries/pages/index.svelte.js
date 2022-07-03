var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
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
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target, mod));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var stdin_exports = {};
__export(stdin_exports, {
  default: () => Routes
});
module.exports = __toCommonJS(stdin_exports);
var import_index_ca1d280d = require("../../chunks/index-ca1d280d.js");
var import_navbar_svelte = __toESM(require("./navbar.svelte.js"));
var import_BackToTop_svelte = __toESM(require("./BackToTop.svelte.js"));
var import_tslib = require("tslib");
var index_svelte_svelte_type_style_lang = "";
const css = {
  code: "@media(min-width: 375px){.montagne.svelte-vilomx.svelte-vilomx.svelte-vilomx{height:100% !important;top:80% !important}}@media(min-width: 390px){.zaino.svelte-vilomx.svelte-vilomx.svelte-vilomx{height:70% !important}.end.svelte-vilomx.svelte-vilomx.svelte-vilomx{top:102% !important}}@media(min-width: 414px){.sole.svelte-vilomx.svelte-vilomx.svelte-vilomx{height:60% !important}.zaino.svelte-vilomx.svelte-vilomx.svelte-vilomx{height:80% !important}.s1.svelte-vilomx.svelte-vilomx.svelte-vilomx{height:13% !important;top:20% !important}.s2.svelte-vilomx.svelte-vilomx.svelte-vilomx{height:13% !important;top:55% !important}}@media(min-width: 700px){h1.svelte-vilomx.svelte-vilomx.svelte-vilomx{margin-top:20% !important}.sfondo.svelte-vilomx.svelte-vilomx.svelte-vilomx{top:78%  !important}.titolo.svelte-vilomx.svelte-vilomx.svelte-vilomx{font-size:1em !important}.text.svelte-vilomx.svelte-vilomx.svelte-vilomx{padding-right:0% !important;font-size:x-large !important;margin-top:30% !important;padding-bottom:30% !important}.montagne.svelte-vilomx.svelte-vilomx.svelte-vilomx{background:url('src/routes/img/montagne.svg') !important;background-repeat:no-repeat ;height:50% !important;top:70% !important \n\n	}.colline.svelte-vilomx.svelte-vilomx.svelte-vilomx{background:url('src/routes/img/colline.svg') !important;background-repeat:no-repeat !important;top:105% !important \n		}.fiori.svelte-vilomx.svelte-vilomx.svelte-vilomx{background:url('src/routes/img/fiori.svg') !important;background-repeat:no-repeat !important;top:118% !important ;height:100% !important}.bosco.svelte-vilomx.svelte-vilomx.svelte-vilomx{background:url('src/routes/img/ondinaverde.svg') !important;background-repeat:no-repeat !important;top:110% !important}.ambient.svelte-vilomx.svelte-vilomx.svelte-vilomx{font-size:3em !important;top:0% !important}.sfondo2.svelte-vilomx.svelte-vilomx.svelte-vilomx{background-color:#499153 !important}.text-bici.svelte-vilomx.svelte-vilomx.svelte-vilomx{margin-top:10% !important;padding-top:4% !important;margin-bottom:60% !important ;padding-bottom:0% !important;padding-left:30% !important;color:#ffca75;font-size:1 em !important}.bici.svelte-vilomx.svelte-vilomx.svelte-vilomx{width:70% !important;height:100% !important;top:40% !important;left:15% !important;z-index:3 !important}.nuvole.svelte-vilomx.svelte-vilomx.svelte-vilomx{background:url('src/routes/img/nuvolegabbiano.svg') !important;background-repeat:no-repeat !important;height:50% !important}.text4.svelte-vilomx.svelte-vilomx.svelte-vilomx{margin-top:30% !important;margin-bottom:10% !important ;padding-bottom:0% !important;padding-right:0% !important;font-size:x-large !important}.zaino.svelte-vilomx.svelte-vilomx.svelte-vilomx{background:url('src/routes/img/alpinista.svg') !important;background-repeat:no-repeat !important;height:130% !important;top:150% !important}.sole.svelte-vilomx.svelte-vilomx.svelte-vilomx{width:50% !important;height:90% !important;top:215% !important;left:50% !important}.collina-strada.svelte-vilomx.svelte-vilomx.svelte-vilomx{background:url('src/routes/img/ondagiallarosa.svg') !important;background-repeat:no-repeat !important;height:130% !important;top:120% !important}.sfondo4.svelte-vilomx.svelte-vilomx.svelte-vilomx{top:106% !important}.text7.svelte-vilomx.svelte-vilomx.svelte-vilomx{margin-top:40% !important;margin-bottom:15% !important ;padding-bottom:0% !important;padding-right:10% !important;margin-left:10% !important;font-size:1em !important}.onda.svelte-vilomx.svelte-vilomx.svelte-vilomx{background:url('src/routes/img/onda_arancione.svg') !important;background-repeat:no-repeat !important;height:110% !important;top:140% !important}.sfondo5.svelte-vilomx.svelte-vilomx.svelte-vilomx{top:105% !important}.text5.svelte-vilomx.svelte-vilomx.svelte-vilomx{margin-top:-3% !important;margin-bottom:20% !important ;padding-bottom:0% !important;font-size:x-large !important }.text3.svelte-vilomx.svelte-vilomx.svelte-vilomx{margin-top:20% !important;margin-bottom:20% !important ;padding-bottom:0% !important;padding-right:0% !important;font-size:x-large !important}.territorio.svelte-vilomx.svelte-vilomx.svelte-vilomx{font-size:3em !important}.s1.svelte-vilomx.svelte-vilomx.svelte-vilomx{width:60% !important;height:15% !important;top:23% !important;left:50% !important}.s2.svelte-vilomx.svelte-vilomx.svelte-vilomx{width:60% !important;height:15% !important;top:58% !important}.community.svelte-vilomx.svelte-vilomx.svelte-vilomx{width:50% !important;height:40% !important;top:87% !important;left:30% !important}.onda2.svelte-vilomx.svelte-vilomx.svelte-vilomx{background:url('src/routes/img/ondina.svg') !important;background-repeat:no-repeat !important;background-size:cover !important;height:10% !important;width:100% !important;left:50% !important;top:100% !important}.yoga.svelte-vilomx.svelte-vilomx.svelte-vilomx{height:60% !important}.salut.svelte-vilomx.svelte-vilomx.svelte-vilomx{font-size:5em !important;color:#BFE6EE}.sfondo9.svelte-vilomx.svelte-vilomx.svelte-vilomx{top:45% !important}.text6.svelte-vilomx.svelte-vilomx.svelte-vilomx{padding-right:0% !important;font-size:x-large !important;margin-bottom:30% !important}.sfondo10.svelte-vilomx.svelte-vilomx.svelte-vilomx{top:75% !important;height:60% !important}.text8.svelte-vilomx.svelte-vilomx.svelte-vilomx{margin-top:10% !important;padding-right:0% !important;font-size:x-large !important;color:#dfe6ee}.ondanuvole2.svelte-vilomx.svelte-vilomx.svelte-vilomx{width:100% !important;height:20% !important;top:70% !important}.erbetta.svelte-vilomx.svelte-vilomx.svelte-vilomx{top:39% !important;height:45% !important;width:100% !important}.end.svelte-vilomx.svelte-vilomx.svelte-vilomx{top:100% !important;height:55% !important}.sfondo11.svelte-vilomx.svelte-vilomx.svelte-vilomx{top:40% !important}.text9.svelte-vilomx.svelte-vilomx.svelte-vilomx{margin-top:0% !important}.icon.svelte-vilomx>div.svelte-vilomx>img.svelte-vilomx{width:70% !important;height:70% !important}.icon.svelte-vilomx.svelte-vilomx.svelte-vilomx{top:60% !important;z-index:5 !important}.social.svelte-vilomx.svelte-vilomx.svelte-vilomx{top:40% !important;z-index:5 !important;font-size:2em !important;left:27.5% !important}}@media(min-width: 768px){.erbetta.svelte-vilomx.svelte-vilomx.svelte-vilomx{top:41% !important}}@media(min-width: 800px){h1.svelte-vilomx.svelte-vilomx.svelte-vilomx{margin-top:10% !important}.montagne.svelte-vilomx.svelte-vilomx.svelte-vilomx{top:50% !important}.colline.svelte-vilomx.svelte-vilomx.svelte-vilomx{top:95% !important}.fiori.svelte-vilomx.svelte-vilomx.svelte-vilomx{top:120% !important}.sole.svelte-vilomx.svelte-vilomx.svelte-vilomx{top:200% !important}}@media(min-width: 820px){h1.svelte-vilomx.svelte-vilomx.svelte-vilomx{margin-top:30% !important}.montagne.svelte-vilomx.svelte-vilomx.svelte-vilomx{top:75% !important}.colline.svelte-vilomx.svelte-vilomx.svelte-vilomx{top:110% !important}.fiori.svelte-vilomx.svelte-vilomx.svelte-vilomx{top:120% !important}.sole.svelte-vilomx.svelte-vilomx.svelte-vilomx{top:215% !important}}@media(min-width: 1580px){.sfondo.svelte-vilomx.svelte-vilomx.svelte-vilomx{top:78%  !important}.titolo.svelte-vilomx.svelte-vilomx.svelte-vilomx{font-size:2em !important}.text.svelte-vilomx.svelte-vilomx.svelte-vilomx{padding-right:0% !important;font-size:xx-large !important;margin-top:40% !important;padding-bottom:30% !important}.montagne.svelte-vilomx.svelte-vilomx.svelte-vilomx{background:url('src/routes/img/montagne.svg') !important;top:51% !important \n\n		}h1.svelte-vilomx.svelte-vilomx.svelte-vilomx{font-size:6em !important;position:fixed !important;top:-40% !important;color:#582f0e !important;text-align:center !important;margin-left:23% !important}.colline.svelte-vilomx.svelte-vilomx.svelte-vilomx{background:url('src/routes/img/colline.svg') !important;background-repeat:no-repeat !important;top:90% !important \n		}.fiori.svelte-vilomx.svelte-vilomx.svelte-vilomx{background:url('src/routes/img/fiori.svg') !important;background-repeat:no-repeat !important;top:130% !important ;height:100% !important}.bosco.svelte-vilomx.svelte-vilomx.svelte-vilomx{background:url('src/routes/img/ondinaverde.svg') !important;background-repeat:no-repeat !important;top:99% !important}.ambient.svelte-vilomx.svelte-vilomx.svelte-vilomx{font-size:5em !important;top:0% !important}.sfondo2.svelte-vilomx.svelte-vilomx.svelte-vilomx{background-color:#499153 !important}.text-bici.svelte-vilomx.svelte-vilomx.svelte-vilomx{margin-top:10% !important;padding-top:4% !important;margin-bottom:60% !important ;padding-bottom:0% !important;padding-left:30% !important;color:#ffca75;font-size:1.5em !important}.bici.svelte-vilomx.svelte-vilomx.svelte-vilomx{width:70% !important;height:100% !important;top:44% !important;left:15% !important;z-index:3 !important}.nuvole.svelte-vilomx.svelte-vilomx.svelte-vilomx{background:url('src/routes/img/nuvolegabbiano.svg') !important;background-repeat:no-repeat !important;height:50% !important}.text4.svelte-vilomx.svelte-vilomx.svelte-vilomx{margin-top:30% !important;margin-bottom:10% !important ;padding-bottom:0% !important;padding-right:0% !important;font-size:xx-large !important}.zaino.svelte-vilomx.svelte-vilomx.svelte-vilomx{background:url('src/routes/img/alpinista.svg') !important;background-repeat:no-repeat !important;height:130% !important;top:150% !important}.sole.svelte-vilomx.svelte-vilomx.svelte-vilomx{width:50% !important;height:90% !important;top:230% !important;left:50% !important}.text7.svelte-vilomx.svelte-vilomx.svelte-vilomx{margin-right:15% !important}.collina-strada.svelte-vilomx.svelte-vilomx.svelte-vilomx{background:url('src/routes/img/ondagiallarosa.svg') !important;background-repeat:no-repeat !important;height:130% !important;top:120% !important}.sfondo4.svelte-vilomx.svelte-vilomx.svelte-vilomx{top:160% !important}.text7.svelte-vilomx.svelte-vilomx.svelte-vilomx{margin-top:0% !important;margin-bottom:15% !important ;padding-bottom:20% !important;padding-right:0% !important;margin-left:20% !important;font-size:1.5em !important}.onda.svelte-vilomx.svelte-vilomx.svelte-vilomx{background:url('src/routes/img/onda_arancione.svg') !important;background-repeat:no-repeat !important;height:110% !important;top:140% !important}.sfondo5.svelte-vilomx.svelte-vilomx.svelte-vilomx{top:120% !important}.text5.svelte-vilomx.svelte-vilomx.svelte-vilomx{margin-top:-3% !important;margin-bottom:20% !important ;padding-bottom:0% !important;font-size:xx-large !important }.text3.svelte-vilomx.svelte-vilomx.svelte-vilomx{margin-top:20% !important;margin-bottom:20% !important ;padding-bottom:0% !important;padding-right:0% !important;font-size:xx-large !important}.territorio.svelte-vilomx.svelte-vilomx.svelte-vilomx{font-size:5em !important}.s1.svelte-vilomx.svelte-vilomx.svelte-vilomx{width:55% !important;height:20% !important;top:25% !important;left:70% !important}.s2.svelte-vilomx.svelte-vilomx.svelte-vilomx{width:50% !important;height:20% !important;top:60% !important}.community.svelte-vilomx.svelte-vilomx.svelte-vilomx{width:40% !important;height:30% !important;top:86% !important;left:30% !important}.onda2.svelte-vilomx.svelte-vilomx.svelte-vilomx{background:url('src/routes/img/ondina.svg') !important;background-repeat:no-repeat !important;background-size:cover !important;height:10% !important;width:100% !important;left:50% !important;top:100% !important}.salut.svelte-vilomx.svelte-vilomx.svelte-vilomx{font-size:10em !important;color:#BFE6EE}.sfondo9.svelte-vilomx.svelte-vilomx.svelte-vilomx{top:45% !important}.text6.svelte-vilomx.svelte-vilomx.svelte-vilomx{padding-right:0% !important;font-size:xx-large !important}.sfondo10.svelte-vilomx.svelte-vilomx.svelte-vilomx{top:75% !important}.text8.svelte-vilomx.svelte-vilomx.svelte-vilomx{margin-top:10% !important;padding-right:0% !important;font-size:xx-large !important;color:#dfe6ee}.ondanuvole2.svelte-vilomx.svelte-vilomx.svelte-vilomx{width:100% !important;height:20% !important;top:70% !important}.erbetta.svelte-vilomx.svelte-vilomx.svelte-vilomx{top:39% !important;height:50% !important;width:100% !important}.end.svelte-vilomx.svelte-vilomx.svelte-vilomx{top:100% !important;height:55% !important}.sfondo11.svelte-vilomx.svelte-vilomx.svelte-vilomx{top:40% !important}.text9.svelte-vilomx.svelte-vilomx.svelte-vilomx{margin-top:0% !important}.icon.svelte-vilomx>div.svelte-vilomx>img.svelte-vilomx{width:70% !important;height:70% !important}.icon.svelte-vilomx.svelte-vilomx.svelte-vilomx{top:70% !important;z-index:5 !important}.social.svelte-vilomx.svelte-vilomx.svelte-vilomx{top:50% !important;z-index:5 !important;font-size:3em !important;left:33% !important}}.top-app-bar-container.svelte-vilomx.svelte-vilomx.svelte-vilomx{max-width:480px;width:100%;margin:0 18px 18px 0;overflow:auto;display:inline-block}.flexy.svelte-vilomx.svelte-vilomx.svelte-vilomx{display:flex;flex-wrap:wrap}.flexor.svelte-vilomx.svelte-vilomx.svelte-vilomx{display:inline-flex;flex-direction:column}.flexor-content.svelte-vilomx.svelte-vilomx.svelte-vilomx{flex-basis:0;height:0;flex-grow:1;overflow:auto}.sfondo.svelte-vilomx.svelte-vilomx.svelte-vilomx{background-color:#fbca79;width:100%;height:full;position:absolute;top:89%;z-index:-1}.sfondo2.svelte-vilomx.svelte-vilomx.svelte-vilomx{background-color:#659157;width:100%;height:full;position:absolute;top:89%;z-index:-1}.sfondo3.svelte-vilomx.svelte-vilomx.svelte-vilomx{background-color:#f9a620;width:100%;height:full;position:absolute;top:89%;z-index:-1}.sfondo4.svelte-vilomx.svelte-vilomx.svelte-vilomx{background-color:#fab84d;width:100%;height:full;position:absolute;top:89%;z-index:-1}.sfondo5.svelte-vilomx.svelte-vilomx.svelte-vilomx{background-color:#f9a620;width:100%;height:full;position:absolute;top:89%;z-index:2}.sfondo6.svelte-vilomx.svelte-vilomx.svelte-vilomx{background-color:#ffbac2;width:100%;height:full;position:absolute;top:89%;z-index:2}.sfondo8.svelte-vilomx.svelte-vilomx.svelte-vilomx{background-color:#ff7683;width:100%;height:full;position:absolute;top:100%;z-index:3}.sfondo9.svelte-vilomx.svelte-vilomx.svelte-vilomx{background-color:#BFE6EE;width:100%;height:full;position:absolute;top:75%;z-index:2}.sfondo11.svelte-vilomx.svelte-vilomx.svelte-vilomx{background-color:#BFE6EE;width:100%;position:absolute;top:75%;z-index:2}.sfondo10.svelte-vilomx.svelte-vilomx.svelte-vilomx{background-color:#578089;width:100%;height:full;position:absolute;top:100%;z-index:2}.colline.svelte-vilomx.svelte-vilomx.svelte-vilomx{background-image:url('src/routes/img/1.svg');width:100%;height:100%;position:absolute;top:75%;left:50%;background-repeat:no-repeat;background-size:cover;transform:translate(-50%, -50%);z-index:1}.fiori.svelte-vilomx.svelte-vilomx.svelte-vilomx{background-image:url('src/routes/img/3.svg');width:100%;height:38%;position:absolute;top:119%;left:50%;background-repeat:no-repeat;background-size:cover;transform:translate(-50%, -50%);z-index:1}.montagne.svelte-vilomx.svelte-vilomx.svelte-vilomx{background-image:url('src/routes/img/2.svg');width:100%;height:50%;position:absolute;top:53%;left:50%;background-repeat:no-repeat;background-size:cover;transform:translate(-50%, -50%);z-index:-2}.onda.svelte-vilomx.svelte-vilomx.svelte-vilomx{background-image:url('src/routes/img/9.svg');width:100%;height:50%;position:absolute;left:50%;top:82%;background-repeat:no-repeat;background-size:cover;transform:translate(-50%, -50%);z-index:1}.onda2.svelte-vilomx.svelte-vilomx.svelte-vilomx{background-image:url('src/routes/img/ondina.svg');width:200%;height:5%;position:absolute;top:98%;background-repeat:no-repeat;background-size:cover;transform:translate(-50%, -50%);z-index:1}.bosco.svelte-vilomx.svelte-vilomx.svelte-vilomx{background-image:url('src/routes/img/4.svg');width:100%;height:50%;position:absolute;left:50%;top:90%;background-repeat:no-repeat;background-size:cover;transform:translate(-50%, -50%);z-index:1}.nuvole.svelte-vilomx.svelte-vilomx.svelte-vilomx{background-image:url('src/routes/img/nuvolegabbiano.svg');width:100%;height:10%;position:absolute;left:50%;top:90%;background-repeat:no-repeat;background-size:cover;transform:translate(-50%, -50%);z-index:1}.bici.svelte-vilomx.svelte-vilomx.svelte-vilomx{background-image:url('src/routes/img/51.svg');width:100%;height:55%;position:absolute;left:50%;top:65%;background-repeat:no-repeat;background-size:cover;transform:translate(-50%, -50%);z-index:2}.zaino.svelte-vilomx.svelte-vilomx.svelte-vilomx{background-image:url('src/routes/img/7.svg');width:100%;height:65%;position:absolute;left:50%;top:90%;background-repeat:no-repeat;background-size:cover;transform:translate(-50%, -50%);z-index:1}.sole.svelte-vilomx.svelte-vilomx.svelte-vilomx{background-image:url('src/routes/img/8.svg');width:90%;height:50%;position:absolute;left:47%;top:120%;background-repeat:no-repeat;background-size:cover;transform:translate(-50%, -50%);z-index:1}.collina-strada.svelte-vilomx.svelte-vilomx.svelte-vilomx{background-image:url('src/routes/img/collina14.svg');width:100%;height:100%;position:absolute;left:50%;top:90%;background-repeat:no-repeat;background-size:cover;transform:translate(-50%, -50%);z-index:4}.s1.svelte-vilomx.svelte-vilomx.svelte-vilomx{background-image:url('src/routes/img/s1.svg');width:100%;height:12%;position:absolute;left:50%;top:19%;background-repeat:no-repeat;background-size:cover;transform:translate(-50%, -50%);z-index:3}.s2.svelte-vilomx.svelte-vilomx.svelte-vilomx{background-image:url('src/routes/img/s2.svg');width:100%;height:11%;position:absolute;left:47%;top:55%;background-repeat:no-repeat;background-size:cover;transform:translate(-50%, -50%);z-index:3}.community.svelte-vilomx.svelte-vilomx.svelte-vilomx{background-image:url('src/routes/img/community.svg');width:100%;height:100%;position:absolute;top:90%;background-repeat:no-repeat;z-index:1}.yoga.svelte-vilomx.svelte-vilomx.svelte-vilomx{background-image:url('src/routes/img/yoga.svg');width:100%;height:72%;position:absolute;left:50%;top:40%;background-repeat:no-repeat;background-size:cover;transform:translate(-50%, -50%);z-index:3}.ondanuvole2.svelte-vilomx.svelte-vilomx.svelte-vilomx{background-image:url('src/routes/img/nuvole2.svg');background-repeat:no-repeat;background-size:cover;z-index:3;width:100%;height:12%;position:absolute;left:50%;top:100%;background-repeat:no-repeat;background-size:cover;transform:translate(-50%, -50%)}.erbetta.svelte-vilomx.svelte-vilomx.svelte-vilomx{background-image:url('src/routes/img/erbette.svg');width:100%;height:35%;position:absolute;left:50%;top:80%;background-repeat:no-repeat;background-size:cover;transform:translate(-50%, -50%);z-index:3}.end.svelte-vilomx.svelte-vilomx.svelte-vilomx{background-image:url('src/routes/img/end.svg');width:100%;height:35%;position:absolute;left:50%;top:100%;background-repeat:no-repeat;background-size:cover;transform:translate(-50%, -50%);z-index:3}.icon.svelte-vilomx.svelte-vilomx.svelte-vilomx{display:flex;flex-direction:row;justify-content:center;position:absolute;left:50%;top:65%;transform:translateX(-50%);z-index:5}.icon.svelte-vilomx>div.svelte-vilomx>img.svelte-vilomx{width:200%;height:200%}.icon.svelte-vilomx>div.svelte-vilomx.svelte-vilomx{display:flex;justify-content:center;align-items:center}h1.svelte-vilomx.svelte-vilomx.svelte-vilomx{position:fixed;z-index:-1;color:#582f0e;font-size:300%;margin-top:40%;margin-left:20%;margin-right:15%}.text.svelte-vilomx.svelte-vilomx.svelte-vilomx{font-size:large;margin-top:110%;margin-left:10%;margin-right:15%;padding-bottom:62%;text-align:left}.text7.svelte-vilomx.svelte-vilomx.svelte-vilomx{font-size:small;margin-top:140%;padding-bottom:62%;text-align:left}.text4.svelte-vilomx.svelte-vilomx.svelte-vilomx{font-size:large;margin-top:50%;margin-left:15%;margin-right:15%;padding-bottom:62%;text-align:left}.text-bici.svelte-vilomx.svelte-vilomx.svelte-vilomx{font-size:x-small;margin-top:90%;margin-bottom:55% ;padding-bottom:62%;margin-left:15%;margin-right:15%;color:#ffca75}.text6.svelte-vilomx.svelte-vilomx.svelte-vilomx{font-size:large;margin-top:40%;margin-left:10%;margin-right:15%;padding-bottom:50%;text-align:left}.text5.svelte-vilomx.svelte-vilomx.svelte-vilomx{font-size:large;margin-top:20%;margin-left:10%;margin-right:15%;padding-bottom:62%;text-align:left}.text3.svelte-vilomx.svelte-vilomx.svelte-vilomx{font-size:large;margin-top:50%;margin-left:10%;margin-right:15%;padding-bottom:62%;text-align:left}.salut.svelte-vilomx.svelte-vilomx.svelte-vilomx{z-index:99999;margin-left:10%;font-size:xx-large;color:#BFE6EE;position:absolute;top:10%}.text8.svelte-vilomx.svelte-vilomx.svelte-vilomx{font-size:large;margin-top:50%;margin-left:10%;margin-right:15%;padding-bottom:62%;text-align:left;color:#dfe6ee\n	}.text9.svelte-vilomx.svelte-vilomx.svelte-vilomx{font-size:large;margin-top:50%;margin-left:10%;margin-right:15%;padding-bottom:62%;text-align:left}.ambient.svelte-vilomx.svelte-vilomx.svelte-vilomx{z-index:5;color:#582f0e;text-align:center;font-size:3em;position:absolute;top:4%}.territorio.svelte-vilomx.svelte-vilomx.svelte-vilomx{font-size:3em}.social.svelte-vilomx.svelte-vilomx.svelte-vilomx{position:absolute;left:24%}",
  map: null
};
const Routes = (0, import_index_ca1d280d.c)(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<div class="${"flexy svelte-vilomx"}"><div class="${"top-app-bar-container flexor svelte-vilomx"}">${(0, import_index_ca1d280d.v)(import_navbar_svelte.default, "Nav").$$render($$result, {}, {}, {})}
		<div class="${"flexor-content svelte-vilomx"}"><h1 class="${"svelte-vilomx"}"><strong>No alla miniera <br>
				nel parco del Beigua</strong></h1>

			<div class="${"colline svelte-vilomx"}"></div>

			<div class="${"montagne svelte-vilomx"}"></div>


			<div class="${"fiori svelte-vilomx"}"></div>
			<div class="${"sfondo svelte-vilomx"}"><div class="${"text svelte-vilomx"}"><p class="${"titolo svelte-vilomx"}"><strong>Il Parco del Beigua Patrimonio Unesco 
						</strong>
					</p><p></p><p>Il comprensorio del Parco Naturale Regionale del Beigua, la piu\u0300 vasta area naturale protetta della Liguria, custodisce gelosamente la storia geologica della regione, raccontata attraverso affioramenti rocciosi, mineralizzazioni, giacimenti fossiliferi e spettacolari forme modellate senza sosta per effetto degli agenti esogeni. Per l&#39;eccezionale patrimonio geologico presente, nel novembre 2015, lo stesso territorio e\u0300 stato riconosciuto come sito UNESCO ed inserito nella prestigiosa lista dei Geoparchi Globali.</p>

					<br>
					<br></div>
				<div class="${"bosco svelte-vilomx"}"></div>
				<div class="${"sfondo2 svelte-vilomx"}"><div class="${"text-bici svelte-vilomx"}"><p style="${"text-align:center ;font-size:5em;"}">Ma quali <br>sono i <strong>rischi</strong> <br> di una <br> miniera nel <br>Parco del <br>Beigua?
							</p>
						<br>
						<br></div>
					
					<div class="${"bici svelte-vilomx"}"></div>

					<div class="${"nuvole svelte-vilomx"}"></div>

					<div class="${"sfondo3 svelte-vilomx"}" id="${"ambiente"}"><div class="${"text4 svelte-vilomx"}"><p class="${"ambient svelte-vilomx"}"><strong>Ambiente
							</strong></p>
							<p class="${"titolo svelte-vilomx"}"><strong>Impatto ambientale dell&#39;estrazione del titanio
							</strong></p>
							<p>L&#39;attivit\xE0 mineraria comporta la produzione di
materiali sono di norma deposti nell&#39;area mineraria in
dimensioni considerevoli o entro bacini naturali e artificiali.
Nel caso delle miniere di titanio la
concentrazione di TiO2
coltivati varia tra il 5 e il 20%, implicando che oltre l&#39;80% del materiale estratto \xE8
dei giacimenti attualmente
sterile ed \xE8 destinato a discarica.
							</p>
					
						
							<br>
							<br></div>
						<div class="${"zaino svelte-vilomx"}"></div>
						<div class="${"sole svelte-vilomx"}"></div>

						<div class="${"sfondo4 svelte-vilomx"}"><div class="${"text7 svelte-vilomx"}"><p style="${"text-align:center ;font-size:5em"}">Dal 2015 il Parco \xE8 <br> <strong>patrimonio <br>Unesco</strong></p>

								<br>
								<br></div>
							<div class="${"onda svelte-vilomx"}"></div>

							<div class="${"sfondo5 svelte-vilomx"}"><div class="${"text5 svelte-vilomx"}"><p class="${"titolo svelte-vilomx"}"><strong>Estrazione del rutilio
									</strong></p>
									<p>Nonostante le considerevoli potenzialit\xE0 economiche dei giacimenti di rutilo ad oggi
										esiste
									  soltanto una miniera attiva di queste rocce;
									   di estrazione delle rocce, sia alle costose procedure di estrazione del minerale utile
									  A questi costi si aggiungono quelli correlati alla mitigazione del rischio ambientale e
									   sanitario aggravati dalla presenza rilevante di elementi tossici come amianto.
									   
									</p>
									<br>
									<br></div>
								<div class="${"collina-strada svelte-vilomx"}"></div>
								<div class="${"sfondo6 svelte-vilomx"}" id="${"territorio"}"><div class="${"text3 svelte-vilomx"}"><p class="${"territorio svelte-vilomx"}"><strong>Territorio
										</strong></p>

										<br><br>
										<br><br>
										<br><br>
										<br><br>
										<br><br>
										<div class="${"s1 svelte-vilomx"}"></div>

										<p class="${"titolo svelte-vilomx"}"><strong>Utilizzi del titanio
										</strong></p>

										<p>Il titanio \xE8 un elemento utilizzato in molteplici settori: dall\u2019industria dei pigmenti a
quella di vernici e ceramiche le sue peculiari propriet\xE0 ottiche lo rendono una risorsa
di grande rilevanza, complice il fatto di non aver composti sostitutivi conosciuti.
Larga parte del materiale estratto \xE8 impiegata nell\u2019industria aerospaziale e nella produzione di protesi, per via della sua eccellente compatibilit\xE0 biologica, mente \xE8
sempre pi\xF9 frequente il suo utilizzo nell\u2019industria cosmetica e alimentare.

										</p>

										<br><br>
										<br><br>
										<br><br>
										<br><br>
										<br><br>
										<br><br>
										<br><br>
										<div class="${"s2 svelte-vilomx"}"></div>
										<p class="${"titolo svelte-vilomx"}"><strong>Il giacimento di Piampaludo e il rutilio
										</strong></p>

										<p>Il giacimento di titanio di Piampaludo \xE8 conosciuto e studiato dagli anni &#39;70 e
consiste in masse mineralizzate a rutilo concentrate all&#39;interno di rocce
denominate eclogiti che affiorano soprattutto in corrispondenza dei Monti Antenna
e Tarin\xE9. Secondo valutazioni di esperti si tratterebbe di uno dei pi\xF9 grandi
giacimenti europei di questo minerale.
										</p>
										<br><br></div>

									<br><br>
							
									<br><br>
							
										<div class="${"community svelte-vilomx"}"></div>
										<div class="${"onda2 svelte-vilomx"}"></div>
										<div class="${"sfondo8 svelte-vilomx"}"><div class="${"text6 svelte-vilomx"}"></div>
											<p class="${"salut svelte-vilomx"}" id="${"salute"}"><strong>Salute</strong></p>
											<div class="${"yoga svelte-vilomx"}"></div>
											<div class="${"sfondo9 svelte-vilomx"}"><div class="${"text6 svelte-vilomx"}"><p class="${"titolo svelte-vilomx"}"><strong>Rischi amianto</strong>
														</p><p></p><p>Sebbene il titanio non abbia un impatto significativo per la salute, esistono rischi
																correlati alla presenza di metalli potenzialmente ecotossici e di amianto. La
																presenza delle fibre di amianto nell\u2019ambiente comporta infatti danni a carico della
																salute, anche in presenza di pochi elementi. I rischi maggiori sono legati alla
																presenza delle fibre nell\u2019aria, che una volta inalate si depositano nelle nelle cellule
																polmonari, dove possono rimanere per diversi anni, facendo insorgere forme
																tumorali.
															</p>
												
													
														<br>
														<br></div>
												<div class="${"ondanuvole2 svelte-vilomx"}"></div>
												<div class="${"sfondo10 svelte-vilomx"}"><div class="${"text8 svelte-vilomx"}"><p class="${"titolo svelte-vilomx"}"><strong>Rischi titanio</strong>
														</p><p>La polvere di titanio \xE8 altamente infiammabile e allo stato gassoso risulta tossico se
															inalato; quindi, un&#39;esposizione eccessiva alle sue polveri pu\xF2 provocare variazioni nei
															polmoni e difficolt\xE0 respiratorie. Un ulteriore danno per la salute potrebbe essere il
															rischio di inquinamento delle falde acquifere.													</p></div>
													 <div class="${"erbetta svelte-vilomx"}"></div>
													 <div class="${"sfondo11 svelte-vilomx"}"><div class="${"text9 svelte-vilomx"}"><p class="${"social svelte-vilomx"}">Vieni a trovarci sui <strong>social</strong>!</p>
															<div class="${"icon svelte-vilomx"}" id="${"contatti"}"><div class="${"f svelte-vilomx"}"><img src="${"src/routes/img/f.svg"}" width="${"50%"}" height="${"50%"}" alt="${"facebook"}" class="${"svelte-vilomx"}"></div>
																<div class="${"s svelte-vilomx"}"><img src="${"src/routes/img/s.svg"}" width="${"50%"}" height="${"50%"}" alt="${"youtube"}" class="${"svelte-vilomx"}"></div>
																<div class="${"t svelte-vilomx"}"><img src="${"src/routes/img/t.svg"}" width="${"50%"}" height="${"50%"}" alt="${"instagram"}" class="${"svelte-vilomx"}"></div></div></div>
														<div class="${"end svelte-vilomx"}"></div></div></div></div></div></div></div></div></div></div></div></div></div></div>
	${(0, import_index_ca1d280d.v)(import_BackToTop_svelte.default, "BackToTop").$$render($$result, {}, {}, {})}`;
});
