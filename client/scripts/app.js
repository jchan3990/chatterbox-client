var App = {

  $spinner: $('.spinner img'),

  username: 'anonymous',

  initialize: function() {
    App.username = window.location.search.substr(10);
    FormView.initialize();
    RoomsView.initialize();
    MessagesView.initialize();


    // Fetch initial batch of messages
    App.startSpinner();
    App.fetch(App.stopSpinner);

    //  setInterval(function() {
    //    location.reload();
    //  }, 10000);
  },

  fetch: function(callback = ()=>{}) {
    Parse.readAll((data) => {
      // examine the response from the server request:
      //console.log(data);
      var allRooms = []
      for (var object of data['results']) {
        MessagesView.renderMessage(object);
      }

      iteratee = function(value){return value.roomname}
      var uniqueData = _.uniq(data.results, false, iteratee);
      for (var room of uniqueData){
        RoomsView.renderRoom(room.roomname);
      }
      Rooms.add();
      //console.log(uniqueData);


      // var filteredRooms = _.filter(data.results, (obj) =>{
      //   if (obj.roomname !== 'undefined'){
      //     return obj.roomname;
      //   }
      // });

      //console.log("filteredRooms", filteredRooms);
      Friends.toggleStatus();

      RoomsView.$select.change(function() {
        let selectRoom = RoomsView.$select.val();
        console.log(selectRoom);
        for (var object of data['results']) {
          if (object.roomname === selectRoom){
            MessagesView.renderMessage(object);
          }

        }
      })

      callback();
    });
  },

  startSpinner: function() {
    App.$spinner.show();
    FormView.setStatus(true);
  },

  stopSpinner: function() {
    App.$spinner.fadeOut('fast');
    FormView.setStatus(false);
  }
};
