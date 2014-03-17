Template.tasks.events = ({
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

Template.tasklist.events = ({
  'keypress .form-control': function (evt, template) {
    
    if (evt.which === 13) {  
      var comment = $("#"+this._id).val();
      
      if(comment!=""){

      Tasks.update({"_id":this._id},{$addToSet :{ comments : {comment : comment,comment_time : new Date().toString()}}});
      // toastr.info("Added comment");
      $("#"+this._id).val("");
      }
      
    }
    },
    'click .fa-check-circle-o': function (evt, template) {
        console.log("done request");
        Tasks.update({_id:this._id},{$set : {archived : 1}})
    }
    // ,
    // 'click .fa-archive': function (evt, template) {
    //     console.log("archive request");
    //     console.log(this);
    // }
});

// Template.comment.rendered = function() {
//   console.log(this.find("abbr.timeago"));
//     $(this.find("abbr.timeago")).timeago();
// };