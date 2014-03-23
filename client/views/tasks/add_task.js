Template.addTask.events = ({
	'keypress #addTask': function (evt, template) {
	
    if (evt.which === 13) {
      var todo = document.getElementById("addTask").value;
      var project_id = window.location.pathname.split("/")[window.location.pathname.split("/").length - 1];
      if(project_id === ""){
        project_id = Projects.findOne({"title":"Personal"})["_id"];

      }
      project_name = Projects.findOne({"_id":project_id})["title"];
      if(todo != ""){
      data = {
      	"todo" : todo,
        "date_added" : new Date(),
      	"owner" : Meteor.userId(),
        "priority" : 'low',
        "archived" : 0,
        "project_id" : project_id,
        "project": project_name
      }
      
      Tasks.insert(data);
      document.getElementById("addTask").value = "";
      // toastr.success('New Task Added!');
  	}else{
  		toastr.error("Task cannot be blank");
  	}
    }
  }
  
});


Template.addTask.project_name = function(){
  console.log(this);
}