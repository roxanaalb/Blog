<?php
 session_start();  
  $routes["articles"] = array(
                        // "file"=>"Articles.php",
                         "class"=>"Articles",
                         "method"=>"getAll");
  $routes["articles/item"] = array(
                        // "file"=>"Articles.php",
                         "class"=>"Articles",
                         "method"=>"selectArticle");
  $routes["articles/add"] = array(
                        // "file"=>"Articles.php",
                         "class"=>"Articles",
                         "method"=>"addArticle");
  $routes["articles/edit"] = array(
                        // "file"=>"Articles.php",
                         "class"=>"Articles",
                         "method"=>"editArticle");
                         
  $routes["articles/delete"] = array(
                        // "file"=>"Articles.php",
                         "class"=>"Articles",
                         "method"=>"deleteArticle");

  $routes["comments"] = array(
                              // "file"=>"Comments.php",
                              "class"=>"Comments",
                              "method"=>"getAll");
  $routes["comments/item"] = array(
                              // "file"=>"Comments.php",
                              "class"=>"Comments",
                              "method"=>"selectComment");                             
  $routes["comments/add"] = array(
                              // "file"=>"Comments.php",
                              "class"=>"Comments",
                              "method"=>"addComment");
  // $routes["comments/delete"] = array(
  //                             // "file"=>"Comments.php",
  //                             "class"=>"Comments",
  //                             "method"=>"deleteComment");
  $routes["users"] = array(
                              // "file"=>"Users.php",
                              "class"=>"Users",
                              "method"=>"getAll");
  $routes["users/login"] = array(
                              // "file"=>"Users.php",
                              "class"=>"Login",
                              "method"=>"loginUser"); 
                              
  $routes["users/logout"] = array(
                              // "file"=>"Users.php",
                              "class"=>"Login",
                              "method"=>"logout");   
                              
  $routes["users/createaccount"] = array(
                              // "file"=>"Users.php",
                              "class"=>"Login",
                              "method"=>"createAccount");
                              
  $routes["users/session"] = array (
                              "class"=>"Login",
                              "method"=>"checkUserSession"); 
  $routes["users/sessionAdmin"] = array (
                              "class"=>"Login",
                              "method"=>"checkAdminSession");                           
  $routes["users/edit"] = array(
                              // "file"=>"Users.php",
                              "class"=>"Login",
                              "method"=>"editAccount");
  $routes["users/delete"] = array(
                              // "file"=>"Users.php",
                              "class"=>"Login",
                              "method"=>"deleteAccount"); 
                              
  $routes["contact/add"] = array (
                              "class"=>"Contact",
                              "method"=>"addContactMessage");  
                              
                              
                              
  define ("API_DIR", "/Blog-TemaFinala/api/");
   $redirectUrl= $_SERVER["REDIRECT_URL"];
   $page = str_replace(API_DIR, "", $redirectUrl);
   $page = rtrim($page, "/");
   
   
   
   if (array_key_exists($page, $routes)) {
   
     $method= $_SERVER['REQUEST_METHOD'];
     
     switch ($method) {
   
    case "POST":
      
            $content = file_get_contents("php://input");
             $data= json_decode($content, true);
             
             if ($data) {
              
              $_POST= $data;
             }
           
        break;
    
    case "PUT":
    
              $content = file_get_contents("php://input");
              $PUT= json_decode($content, true);
            
           
           
        break;
    case "DELETE":
            $content = file_get_contents("php://input");
            $DELETE= json_decode($content, true);
             
        break;
    }
     
   require "app/controllers/" .$routes[$page]["class"].".php";
   
   $controller = new $routes[$page]["class"];
  
  $result = $controller->$routes[$page]["method"]();
}
else { 
   $result =["error"=>"Page not found!"];
    // echo "Current Status" . http_response_code();
    http_response_code(404);
}

          

            header("Content-Type: application/json");
            echo json_encode($result);



// echo "<pre>";
// print_r($_SERVER);
// echo "</pre>";
// exit;

?>