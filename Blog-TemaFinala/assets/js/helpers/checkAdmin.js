/* global $ */
 function checkAdminSession () {
    $.ajax({
        url:"https://roxana-roxanaalb.c9users.io/Blog-TemaFinala/api/users/sessionAdmin",
        type:"GET",
        success:function(resp) {
        },
        error:function(xhr, status, error) {
    window.location.href = "https://roxana-roxanaalb.c9users.io/Blog-TemaFinala/templates/Articles.html";
        }
    });
}
checkAdminSession();

