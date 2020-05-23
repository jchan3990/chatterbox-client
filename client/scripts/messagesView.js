var MessagesView = {

  $chats: $('#chats'),
  $button: $('#submit'),

  initialize: function() {
    this.$chats.off('click');
    this.$chats.on('click', '.username', Friends.toggleStatus);
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
