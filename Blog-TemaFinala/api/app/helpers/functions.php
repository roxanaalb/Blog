<?php

 function checkUserSession() {
    
        if (isset($_SESSION["userIsLogged"]) && ($_SESSION["userIsLogged"] == TRUE)) {
      
            echo "You are logged";
            return ["userIsLogged]"=>TRUE, "email" => $_SESSION["email"]];  
            
        } 
        
        
        else {
          
        http_response_code(401);  
        return ["error"=>"UNAUTHORIZED"];
    
  
        }
    }
    
    function checkAdminSession() {
        if (isset($_SESSION["adminIsLogged"]) && ($_SESSION["adminIsLogged"] == TRUE)) {
      
            echo "You are logged as admin";
            return ["adminIsLogged"=>TRUE, "email" => $_SESSION["email"]];  
            
        } 
        
        
        else {
          
        http_response_code(401);  
        return ["error"=>"UNAUTHORIZED"];
    
  
        }
    }

    ?>