requirejs.config({
	baseUrl: "js/modules",
	paths: {
		jquery: "//ajax.googleapis.com/ajax/libs/jquery/1.11.2/jquery.min",
		brei: "../lib/brei",
		magnific: "../../bower_components/magnific-popup/dist/jquery.magnific-popup"
	}
});

require(["jquery", "brei"], function (jquery, brei) {

	brei.load("lightbox");

});
