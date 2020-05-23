var RoomsView = {

  $button: $('#rooms button'),
  $select: $('#rooms select'),

  initialize: function() {
    this.$button.off('click');
    this.$button.on('click', Rooms.add);
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


