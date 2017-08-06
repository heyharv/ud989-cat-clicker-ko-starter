var ViewModel = function() {
	this.clickCount = ko.observable(0);
	this.name = ko.observable('Tabby');
	this.level = ko.observable('');
	this.imgSrc = ko.observable('img/434164568_fea0ad4013_z.jpg');
	this.imgAttribution = ko.observable('https://www.flickr.com/photos/bigtallguy/434164568');
	this.catLevelArray = ko.observableArray(["Newborn", "Infant", "Toddler", "Homeowner"]);

	this.incrementCounter = function() {
		this.clickCount(this.clickCount() + 1);
	};

	this.promoteCat = ko.computed(function() {
		var rank;
		
		if(this.clickCount() > 30) {
			return rank = this.catLevelArray()[2];
		} else if (this.clickCount() > 20) {
			
			return rank = this.catLevelArray()[1];
		} else {
			console.log("Happy Star!");
			return rank = this.catLevelArray()[0];
		}
	}, this);
}

ko.applyBindings(new ViewModel);