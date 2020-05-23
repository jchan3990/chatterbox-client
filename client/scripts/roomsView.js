var RoomsView = {

  $button: $('#rooms button'),
  $select: $('#rooms select'),

  initialize: function() {
  },

  render: _.template(
    "<option class='roomname'><%= roomname %></option>"
  ),

  renderRoom: function(rooms = "nathan") {
    var newObject = {};
    newObject['roomname'] = rooms;
    this.$select.append(this.render(newObject));
  }
}


