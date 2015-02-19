define(["jquery"], function ($) {
	return {
		status: function () {
			console.log("Hello from BREI!");
		},
		load: function (dep) {
			require([dep], function (dep) {
				dep.init();
			});
		},
		loadWhen: function (el, dep) {
			if ($(el).length) {
				this.load(dep);
			}
		}
	};
});
