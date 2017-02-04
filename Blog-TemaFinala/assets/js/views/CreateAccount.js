/* global $ */
/* global User, Users */
$(document).ready(onHtmlLoaded);

function onHtmlLoaded() {
    
      var sectionCreate = $('#display-data');
      sectionCreate.on("click", function (){
          var accountSection = $('.jsCreateForm').addClass("show");
              
      });
      var hideData= $('#data');
      hideData.on("click", function (){
          var hideAccount= $('.jsCreateForm').removeClass("show");
      });
        
       var submitBtn = $(".js-create");
          submitBtn.on("click", function(ev){
          ev.preventDefault();
         var emailInput= $("input[name='email']");
         var mail = emailInput.val();
        
       var passwordInput= $("input[name= 'password']");
       var pass = passwordInput.val();
       
       var nameInput= $("input[name= 'name']");
       var name = nameInput.val();
       
       var ageInput= $("input[name= 'age']");
       var age = ageInput.val();
       
       var genderInput= $(".js-gender");
       var gender = genderInput.val();
       
       var formData= new FormData();
      formData.append("email", mail);
      formData.append("password", pass);
      formData.append("name", name);
      formData.append("age", age);
      formData.append("gender", gender);
     
     
       if (mail === "") {
        
         var error= $ ('<p> Email required!!! </p>').appendTo("h6");
     } 
      if (pass === "" || (pass.str)<6) {
      var error= $ ('<p> Password required!!! It must contain at least 6 character </p>').appendTo("h6");
     }
     if (name === "") {
        var error= $ ('<p> Name required!!! </p>').appendTo("h6");
     }
     if (age === "" || (age.str)>3) {
         
        var error= $ ('<p>Age required!!! It must contain maximum 3 numbers. </p>').appendTo("h6");
     }
     if (gender === "" || (gender.str)>1) {
        
         var error= $ ('<p>Gender required!!! It must be F or M! </p>').appendTo("h6");
     }
     
     var newAccount= new User ({
       name: name,
       email: mail,
       password: pass,
       age: age,
       gender: gender
     });
     
    var accountXhr=  newAccount.createAccount(formData);
    
    
          }); 
}