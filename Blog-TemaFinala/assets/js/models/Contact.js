
/*global $, Contact */
function Contact (options) {
    this.id= options.id;
    this.email= options.email;
    this.content= options.content;
    
}
Contact.prototype.add = function() {
    var contactData= {
        email: this.email,
        content: this.content
    };
     return $.ajax({
            url:"https://roxana-roxanaalb.c9users.io/Blog-TemaFinala/api/contact/add",
            type:"POST",
            data: contactData,
            success:function(resp){
                console.log("Your question was successfully sent");
            },
          error:function(xhr,status,error){
                alert("Your message hasn't been sent"+status);
            }
        });
        
};