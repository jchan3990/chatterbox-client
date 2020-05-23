var FormView = {

  $form: $('form'),

  initialize: function() {
    FormView.$form.off('submit');
    FormView.$form.on('submit', FormView.handleSubmit);
  },

  handleSubmit: function(event) {
    // Stop the browser from submitting the form
    event.preventDefault();

    var msgObj = {};
    msgObj.username = App.username;
    msgObj.roomname = 'jonathin';
    msgObj.text = $('#send').find('input[name="message"]').val();
    Parse.create(msgObj, ()=>{});
    //console.log('click!');
  },

  setStatus: function(active) {
    var status = active ? 'true' : null;
    FormView.$form.find('input[type=submit]').attr('disabled', status);
  }

};