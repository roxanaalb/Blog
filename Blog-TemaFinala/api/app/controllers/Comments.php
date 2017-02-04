<?php
require "app/models/CommentsModel.php";
require "app/helpers/functions.php";
class Comments {
  
    private $commentsModel;
    function __construct() {
    $this->commentsModel = new CommentsModel();
    }
    
    function getAll() {
        return $this->commentsModel->getAll();
    }
    function selectComment() {
    
        if (isset($_GET['id'])) {
       return $this->commentsModel->selectComment($_GET['id']);
    }
    }
    function addComment() {
    if ((($_POST['user_id'] = $_SESSION['id'])||($_POST['user_id'] = $_SESSION['adminId']))
     && ($_POST['user_name'] = $_SESSION['name']) || ($_POST['user_name'] = $_SESSION['adminName'])){ 
    
        return $this->commentsModel->addComment($_POST);
     }
    }
    
    
    function deleteComment() {
    
        global $DELETE; 
        return $this->commentsModel->deleteComment($DELETE);
        
    }
}
?>