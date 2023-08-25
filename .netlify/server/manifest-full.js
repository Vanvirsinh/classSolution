export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["css/bootstrap.min.css","css/font-awesome.min.css","css/owl.carousel.css","css/owl.theme.default.min.css","css/templatemo-style.css","fonts/fontawesome-webfont.eot","fonts/fontawesome-webfont.svg","fonts/fontawesome-webfont.ttf","fonts/fontawesome-webfont.woff","fonts/fontawesome-webfont.woff2","fonts/FontAwesome.otf","images/author-image1.jpg","images/author-image2.jpg","images/author-image3.jpg","images/author-image4.jpg","images/contact-image.jpg","images/contact-us.png","images/courses-image1.jpg","images/courses-image2.jpg","images/courses-image3.jpg","images/courses-image4.jpg","images/courses-image5.jpg","images/slider-image1.jpg","images/slider-image2.jpg","images/slider-image3.jpg","images/tst-image1.jpg","images/tst-image2.jpg","images/tst-image3.jpg","images/tst-image4.jpg","js/bootstrap.min.js","js/custom.js","js/jquery.js","js/smoothscroll.js"]),
	mimeTypes: {".css":"text/css",".eot":"application/vnd.ms-fontobject",".svg":"image/svg+xml",".ttf":"font/ttf",".woff":"font/woff",".woff2":"font/woff2",".otf":"font/otf",".jpg":"image/jpeg",".png":"image/png",".js":"application/javascript"},
	_: {
		client: {"start":"_app/immutable/entry/start.6de74f68.js","app":"_app/immutable/entry/app.535b6ed8.js","imports":["_app/immutable/entry/start.6de74f68.js","_app/immutable/chunks/index.534476f4.js","_app/immutable/chunks/singletons.695dd013.js","_app/immutable/entry/app.535b6ed8.js","_app/immutable/chunks/index.534476f4.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
}
})();
