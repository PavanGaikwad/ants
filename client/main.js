$(document).ready(function(){
toastr.options = {
  "closeButton": false,
  "debug": false,
  "positionClass": "toast-top-full-width",
  "onclick": null,
  "showDuration": "300",
  "hideDuration": "1000",
  "timeOut": "5000",
  "extendedTimeOut": "1000",
  "showEasing": "swing",
  "hideEasing": "linear",
  "showMethod": "fadeIn",
  "hideMethod": "fadeOut"
}
jQuery("abbr.timeago").timeago();

}
);

Meteor.subscribe("projects");
Meteor.subscribe("tasks");
Meteor.subscribe("quickboard");




