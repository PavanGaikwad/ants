
Template.tasks.insideProject = function(){
  return this.active_project != "All";
}


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

