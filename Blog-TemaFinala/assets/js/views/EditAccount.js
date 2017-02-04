/* global $ */
/* global Users, User */

$(document).ready(onHtmlLoaded);

function onHtmlLoaded() {
  
    var submitBtn = $(".js-create");
   
     submitBtn.on("click", function (ev){
        ev.preventDefault();
      var nameInput= $(".js-name").val();

      var passwordInput= $(".js-password").val();
 
    var accountEdit = new User ({
          name: nameInput,
          password: passwordInput,
    });
      
     accountEdit.editAccount();
     });
     
     var deleteBtn= $('#delete-account');
     deleteBtn.on("click", function(){
       var deleteUser = new Users ({
        
       });
       deleteUser.deleteAccount();
     });
    
}