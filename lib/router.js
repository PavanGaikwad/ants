Router.configure({
	layoutTemplate:"layout"
});


Router.map(function(){
	this.route('home',{
		path:"/",
		yieldTemplates :{
			"feed":{to:'dashboard'},
			"projects_list":{to:"sidebar"},
			"tasks":{to:"tasks"}
		},
		data: function(){

			
			var projects = Projects.find({});

			
   			
			var tasks = Tasks.find({});
			if(Meteor.user()){
			if(!Projects.findOne({title:"Personal"})){
  				console.log("Creating first project");
				}
			}

			return {
				active_project : "All",
				projects : projects,
				feed:[{
					title : "Task Completed!",
					message : "Pavan Completed task 1",
					bravo:10,
					time : 15
				},
				{
					title : "Survey added!",
					message : "Nikhil added survey.",
					bravo:3,
					time : 39
				}],
				task : tasks
			}
		}
	});


	this.route('project',{
		path:"/project/:_id",
		yieldTemplates :{
			"feed":{to:'dashboard'},
			"projects_list":{to:"sidebar"},
			"tasks":{to:"tasks"}
		},
		data: function(){
			var projects = Projects.find({});
			var project_id = this.path.split("/")[this.path.split("/").length - 1];
			var tasks = Tasks.find({"project_id": project_id});
			var project_name = Projects.findOne({"_id": project_id})["title"];
			return {
				active_project : project_name,
				projects : projects,
				feed:[{
					title : "Task Completed!",
					message : "Pavan Completed task 1",
					bravo:10,
					time : 15
				},
				{
					title : "Survey added!",
					message : "Nikhil added survey.",
					bravo:3,
					time : 39
				}],
				task : tasks
			}
		}
		});

});