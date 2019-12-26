// $(function(){ 
//   　  $('#new_message').on('submit', function(e){
//     e.preventDefault();
//     var formData = new FormData(this);
//     var url = $(this).attr('action')
//     $.ajax({
//       url: url,
//       type: "POST",
//       data: formData,
//       dataType: 'json',
//       processData: false,
//       contentType: false
//     })
//   });
//     $function ;buildHTML(message){  
//       // ;はいるのか？
//    if ( message.image ) {
//      var html =
//       `<div class="message" data-message-id=${message.id}>
//          <div class="upper-message">
//            <div class="upper-message__user-name">
//              ${message.user_name}
//            </div>
//            <div class="upper-message__date">
//              ${message.date}
//            </div>
//          </div>
//          <div class="lower-message">
//            <p class="lower-message__content">
//              ${message.content}
//            </p>
//          </div>
//          <img src=${message.image} >
//        </div>`
//      return html;
//    } else {
//      var html =
//       `<div class="message" data-message-id=${message.id}>
//          <div class="upper-message">
//            <div class="upper-message__user-name">
//              ${message.user_name}
//            </div>
//            <div class="upper-message__date">
//              ${message.date}
//            </div>
//          </div>
//          <div class="lower-message">
//            <p class="lower-message__content">
//              ${message.content}
//            </p>
//          </div>
//        </div>`
//      return html;
//    };
//  }
//  $('#new_message').on('submit', function(e){
//   e.preventDefault();
//   var formData = new FormData(this);
//   var url = $(this).attr('action')
//   $.ajax({
//     url: url,
//     type: "POST",
//     data: formData,
//     dataType: 'json',
//     processData: false,
//     contentType: false
//   })
//    .done(function(data){
//      var html = buildHTML(data);
//      $('.messages').append(html);      
//      $('form')[0].reset();
//    })
// })
// });
 
// $('.js-form').on('submit', function(e){
//   // console.log("aaa")
//  e.preventDefault();
//  var formData = new FormData(this);
//  var url = $(this).attr('action')
//  $.ajax({
//    url: url,
//    type: "POST",
//    data: formData,
//    dataType: 'json',
//    processData: false,
//    contentType: false
//  })
//   .done(function(data){
//     var html = buildHTML(data);
//     $('.messages').append(html);     
//     $('.messages').animate({scrollTop: $('.messages')[0].scrollHeight}, 'fast');    
//        $('form')[0].reset();
//   })
//   .fail(function(){
//     alert('error');
//   });
//   return false;
// });
$(function(){ 
  function buildHTML(message){
   if ( message.image ) {
     var html =
      `<div class="message" data-message-id=${message.id}>
         <div class="upper-message">
           <div class="upper-message__user-name">
             ${message.user_name}
           </div>
           <div class="upper-message__date">
             ${message.date}
           </div>
         </div>
         <div class="lower-message">
           <p class="lower-message__content">
             ${message.content}
           </p>
         </div>
         <img src=${message.image} >
       </div>`
     return html;
   } else {
     var html =
      `<div class="message" data-message-id=${message.id}>
         <div class="upper-message">
           <div class="upper-message__user-name">
             ${message.user_name}
           </div>
           <div class="upper-message__date">
             ${message.date}
           </div>
         </div>
         <div class="lower-message">
           <p class="lower-message__content">
             ${message.content}
           </p>
         </div>
       </div>`
     return html;
   };
 }
$('.js-form').on('submit', function(e){
 e.preventDefault();
 var formData = new FormData(this);
 var url = $(this).attr('action')
 console.log(url)
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
    $('.messages').append(html);
    $('.messages').animate({scrollTop: $('.messages')[0].scrollHeight}, 'fast');   
    $('form')[0].reset();
  })
   .fail(function(){
     alert('error');
   });
   return false;
 });
});