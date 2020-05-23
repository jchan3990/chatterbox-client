var Friends = {

  friends = {},

  toggleStatus: function(user){
    $("#username").click(function(e) {
      this.friends[user.text()] = user.text();
      console.log(friends);
    });
  }

};