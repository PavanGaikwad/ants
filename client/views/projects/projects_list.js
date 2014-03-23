Template.projects_list.events = ({
	'keypress #add_project': function (evt, template) {
	
    if (evt.which === 13) {
      var project_name = document.getElementById("add_project").value;
      console.log(project_name);
      if(project_name != ""){
      data = {
      	"title" : project_name,
      	"desc" : "",
      	"owner" : Meteor.userId(),
        "archived" :0
      }
         
      Projects.insert(data);
      document.getElementById("add_project").value = "";
      // toastr.success('New Project Added!')
  	}else{
  		toastr.error("Poject name cannot be blank");
  	}
    }
  }

});

Template.project.projectActive = function(){
  var u = $(location).attr('pathname').split("/");
  var presentProjectId = u[$(location).attr('pathname').split("/").length - 1];
  
  return this._id === presentProjectId;
}

Template.project.taskCount = function(){
  return Tasks.find({"project_id":this._id}).count(); 
}


Template.project.events({
  'dblclick': function (evt, template) {
    console.log(template);
  }
});