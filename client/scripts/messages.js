var Messages = {

  $chats: $('#chats'),

  add: function() {
    $(".submit").click(function(e) {
      //var roomName = prompt('What room would you like to add?') || "nathan";
      //var tmpRoom = RoomsView.renderRoom(roomName);
      var $messageInput = $("#message").val()
      messagesView.$chats.append($messageInput);

    })
  }


};