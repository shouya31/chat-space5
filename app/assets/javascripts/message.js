$(function() {
  function buildHTML(message){
    var addImage = '';
    if (message.image.url) {
      addImage = `<img src="${message.image.url}" class="form__mask__image">`;
    }
    var html =  `
    <div class="messages">
      <div class="upper-message">
        <div class="chat-main_message-name">${message.user_name}</div>
        <div class="chat-main_message-time">${message.time}</div>
      </div>
      <div class="chat-main_message-body">${message.content}${addImage}</div>
    </div>`;
    return html;
  }

  $('#new_message').on('submit', function(e){
    e.preventDefault();
    var formData = new FormData(this);
    var url = $(this).attr('action')
    $.ajax({
      url: url,
      type: "POST",
      data: formData,
      dataType: 'json',
      processData: false,
      contentType: false
    })
    .done(function(data){
      var html = buildHTML(data);
      $('.messages').append(html)
      $('.message').val('')
    })
    .fail(function(){
      alert('error');
    })
  })

  $(function() {
    function buildMESSAGE(message) {
      var messages = `
      <div class="messages">
        <div class="upper-message">
          <div class="chat-main_message-name">${message.user_name}</div>
          <div class="chat-main_message-time">${message.time}</div>
        </div>
        <div class="chat-main_message-body">${message.content}${addImage}</div>
      </div>`;
    return html;
    $(function() {      
        setInterval(update, 1000);
    });
      function update(){
        if($('.upper-message')[0]){
          var message_id = $('.upper-message:last').data('message-id');
        } else {
          return false
        }

        $.ajax({
          url: location.href,
          type: 'GET',
          data: { id : message_id },
          dataType: 'json'
        })
        .done(function(data){
          
          $.each(data, function(i, data){
            buildMESSAGE(message)
          });
        }
        .fail(function(){
          alert('自動更新に失敗しました')
        })
    }
  }
});
