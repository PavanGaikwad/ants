
Meteor.publish('projects', function() {
	
  if(this.userId){

  return Projects.find({owner: this.userId,archived:0});
}
});

Meteor.publish('tasks', function() {

  if(this.userId){
  return Tasks.find({owner: this.userId ,archived:0});
}
});

// Meteor.publish('feed', function() {

//   if(this.userId){
//   return Feed.find({owner: this.userId ,archived:0, });
// }
// });

Meteor.publish('quickboard', function() {
  if(this.userId){
  return Quickboard.find({_id: this.userId});
}
});

Accounts.onCreateUser(function(options, user) {
  Projects.insert({title:"Personal", desc : "Personal Tasks", "archived":0,owner:user._id, created_on : new Date().toString()});
  Quickboard.insert({_id:user._id, quick_text : "Welcome to Ants! You can add projects on the left side and add Tasks in the middle column. Click on any project to view tasks specific to that project. Click on a project and add the add the task to it. We have created Personal project for you by default. This is a box to keep your temporary text. Feel free to remove this and add your own. Cheers!"});
  return user;
});