var Cat = function() {
	this.clickCount = ko.observable(0);
	this.name = ko.observable('Tabby');
	this.imgSrc = ko.observable('img/434164568_fea0ad4013_z.jpg');
	this.imgAttribution = ko.observable('https://www.flickr.com/photos/bigtallguy/434164568');
	this.catLevelArray = ko.observableArray(["Newborn", "Infant", "Toddler", "Homeowner"]);
	
	this.nickNames = ko.observableArray([
			{name: "Steve", id: 4597}, 
			{name: "Bert", id: 7879}
		]);

	this.promoteCat = ko.computed(function() {
		var rank;
		
		if(this.clickCount() > 30) {
			return rank = this.catLevelArray()[2];
		} else if (this.clickCount() > 20) {
			return rank = this.catLevelArray()[1];
		} else {
			return rank = this.catLevelArray()[0];
		}
	}, this);
};

var ViewModel = function() {

	this.currentCat = ko.observable(new Cat());

	this.incrementCounter = function() {
		this.currentCat().clickCount(this.currentCat().clickCount() + 1);
	};
};

var viewModel = new ViewModel();
ko.applyBindings(viewModel);