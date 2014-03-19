Quickboard= new Meteor.Collection("quickboard");

Quickboard.allow({
	insert: function (userId, doc) {
		if(userId){
			return true;
		}
		
	},
	update: function (userId, doc, fields, modifier) {
		if(userId){
			return true;
		}
	},
	remove: function (userId, doc) {
		if(userId){
			return true;
		}
	}
});