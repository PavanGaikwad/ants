Template.feed.events = ({
	'blur #quickboard' : function (evt, template) {

		$("#saving").show();
		Quickboard.update( Meteor.userId(), {$set :
				 {
					quick_text : $("#quickboard").val()
				}});
		$("#saving").hide();
	}
});