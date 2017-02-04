<?php
require "app/models/UsersModel.php";
require "app/helpers/functions.php";

class Login {
    
    private $usersModel;
    function __construct() {
    $this->usersModel = new UsersModel();
    }
    
     function createAccount() {
         if (isset($_POST["email"])) {
    $errors= array();
    $email= $_POST["email"];
    $passwd= $_POST["password"];
   
    if (empty($email) || !filter_var($email,FILTER_VALIDATE_EMAIL)) {
        $errors["email"]= "Email invalid";
        
    }
    
    if (!empty($email)) {
        $checkEmail= $this->usersModel->selectEmail($_POST);
        if ($checkEmail) {
            $errors["email"] = "Email already taken!";
        }
    }
    if (empty($passwd)|| strlen($passwd)<6) {
        $errors["password"]= "Password invalid";
    }
    if (empty($_POST["name"])) {
        $errors["name"]= "Invalid Name";
    }
    if (empty($_POST["age"]) || strlen($_POST["age"])>3) {
        $errors["age"]= "Invalid age";
    }
    if (empty($_POST["gender"])|| strlen($_POST["gender"])>1) {
        $errors["gender"]= "Invalid gender";
    }
       
    // var_dump($errors);
    if (empty($errors)) {
        $salt= "$1$roxana$";
        $password = crypt($passwd, $salt);
        
        $_POST["password"]= $password;
        
        return $this->usersModel->addUser($_POST);
        
    
}
   else {
       return $errors;
   }
    }
 }
   
    function loginUser() {
  
        $email= $_POST["email"];
        $passwd= $_POST["password"];
        
        if (isset($email)){
            $errors= array();
            if (empty($email)|| empty($passwd)) {
               $errors= "Required credentials";
            }
        
        }
        
         if (isset($email) && isset($passwd)) {
             $salt= "$1$roxana8$";
             $password= crypt($passwd, $salt);
           $_POST["password"]= $password;
           
           
            
            if ($_POST['email'] === "roxana.alb13@gmail.com" ) {
               
                if ($passwd === "roxana123") {
                $salt= "$1$roxana8$";
                // $adminPassword= $_POST['password'];
                $adminCriptedPassword= crypt ($passwd, $salt);
              
          
            $admin= $this->usersModel->selectUser($_POST);
               
            if ($admin !== FALSE) {
                $_SESSION['adminIsLogged'] = TRUE;
                 $_SESSION['userIsLogged'] = TRUE;
                 $_SESSION['email']= $email;
                 $_SESSION['adminId']= $admin['id'];
                 $_SESSION['adminName']= $admin['name'];
                 $_SESSION['adminPassword']= $admin['password'];
               
                 return "Welcome to admin page!";
            }
                }
            }
            else {
                $user= $this->usersModel->selectUser($_POST);
            if ($user !== FALSE) {
                $_SESSION['userIsLogged'] = TRUE;
                $_SESSION['email']= $email;
                $_SESSION['id']= $user['id'];
                $_SESSION['name']= $user['name'];
                $_SESSION['password']= $user['password'];
               return "You are logged";
            }
              else {
                   return $errors= "Invalid credentials";
              }
                   
            }
            
                   
            }
        
        
    }
    
    function logout() {
        
        unset($_SESSION["userIsLogged"]);
         unset($_SESSION["AdminIsLogged"]);
        unset($_SESSION["email"]);
       
        if (ini_get("session.use_cookies")) {
    $params = session_get_cookie_params();
    setcookie(session_name(), '', time() - 42000,
        $params["path"], $params["domain"],
        $params["secure"], $params["httponly"]
    );
}
        session_destroy();
         
        return ["success"=>TRUE];
    }
    
    
    function editAccount() {
        global $PUT;
// if (($_POST['user_id'] = $_SESSION['id'])||($_POST['user_id'] = $_SESSION['adminId'])) {
//          if (isset($PUT["password"])) {
    $errors= array();
    // $email= $PUT["email"];
    $passwd=$PUT["password"];
   
    if (empty($passwd)|| strlen($passwd)<6) {
        $errors["password"]= "Password invalid";
    }
    if (empty($PUT["name"])) {
        $errors["name"]= "Invalid Name";
    }
         if (isset($passwd)) {
             $salt= "$1$roxana8$";
             $password= crypt($passwd, $salt);
           $PUT["password"]= $password;
         
    
        return $this->usersModel->editUser($PUT);
        
       
         }  
    
    else {
        
         return $errors;
    }
         
    }
         
         
    function deleteAccount() {
        global $DELETE;
// if (($_POST['user_id'] = $_SESSION['id'])||($_POST['user_id'] = $_SESSION['adminId'])) {
        return $this->usersModel->deleteUser($DELETE);
    // }
    }
         
 
    function checkUserSession() {
    
        if (isset($_SESSION["userIsLogged"]) && ($_SESSION["userIsLogged"] == TRUE)) {
      
            // echo "You are logged";
            return ["userIsLogged"=>TRUE, "email" => $_SESSION["email"]]; 
           
            
        } 
        
        
        else {
          
        http_response_code(401);  
        return ["error"=>"UNAUTHORIZED"];
    
  
        }
    }
    
    function checkAdminSession() {
        // var_dump($_SESSION);
        // exit;
        
        if (isset($_SESSION["adminIsLogged"]) && ($_SESSION["adminIsLogged"] == TRUE)) {
            return ["adminIsLogged"=>TRUE, "email" => $_SESSION["email"]];  
        } 
        else {
            http_response_code(401);  
            return ["error"=>"UNAUTHORIZED"];
        }
    }

   
}

?>