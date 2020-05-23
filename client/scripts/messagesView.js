var MessagesView = {

  $chats: $('#chats'),
  $button: $('#submit'),

  initialize: function() {

  },

  renderMessage: function(data) {
    var html = "";

    if (data) {
      if (data.username && data.text && data.roomname){
        html += MessageView.render(data);
      }
        this.$chats.append(html);
    }
  }
}
