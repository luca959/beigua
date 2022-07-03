const { init } = require('../serverless.js');

exports.handler = init({
	appDir: "_app",
	assets: new Set(["favicon.png","smui-dark.css","smui.css"]),
	mimeTypes: {".png":"image/png",".css":"text/css"},
	_: {
		entry: {"file":"start-5864f2ef.js","js":["start-5864f2ef.js","chunks/index-7137b6b6.js","chunks/index-4cd65769.js"],"css":[]},
		nodes: [
			() => Promise.resolve().then(() => require('../server/nodes/0.js')),
			() => Promise.resolve().then(() => require('../server/nodes/1.js')),
			() => Promise.resolve().then(() => require('../server/nodes/3.js')),
			() => Promise.resolve().then(() => require('../server/nodes/2.js')),
			() => Promise.resolve().then(() => require('../server/nodes/4.js'))
		],
		routes: [
			{
				type: 'page',
				id: "",
				pattern: /^\/$/,
				names: [],
				types: [],
				path: "/",
				shadow: null,
				a: [0,2],
				b: [1]
			},
			{
				type: 'page',
				id: "BackToTop",
				pattern: /^\/BackToTop\/?$/,
				names: [],
				types: [],
				path: "/BackToTop",
				shadow: null,
				a: [0,3],
				b: [1]
			},
			{
				type: 'page',
				id: "navbar",
				pattern: /^\/navbar\/?$/,
				names: [],
				types: [],
				path: "/navbar",
				shadow: null,
				a: [0,4],
				b: [1]
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
});
