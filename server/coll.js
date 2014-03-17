
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

Accounts.onCreateUser(function(options, user) {
  Projects.insert({title:"Personal", desc : "Personal Tasks", "archived":0,owner:user._id, created_on : new Date().toString()});
  return user;
});