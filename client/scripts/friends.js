var friends = []

var Friends = {
  toggleStatus: function(){
    $(".chat .username").click(function(){
      var user = $(this).text();
      friends.push(user);
    });
  }
};