var Rooms = {

  add: function() {
    $(".btn-add-room").click(function(e) {
      var roomName = prompt('What room would you like to add?' || 'nathan');
      var tmpRoom = RoomsView.renderRoom(roomName);
      RoomsView.$select.append(tmpRoom);
    })
  }
}