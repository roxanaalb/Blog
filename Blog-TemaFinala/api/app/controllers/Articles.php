<?php
require "app/models/ArticlesModel.php";
require "app/helpers/functions.php";
class Articles {
    
    private $articlesModel;
    function __construct() {
    $this->articlesModel = new ArticlesModel();
    }
    function getAll() {
        $search = (!empty($_GET["search"])) ? ($_GET["search"]) : "";
        $page = (!empty($_GET["page"])) ? $_GET["page"] : 1;
        $ipp = 3;                       
        $start = $page*$ipp-$ipp;
        $count = $this->articlesModel->countArticles($search);
        $nrPages = ceil($count/$ipp);
        $articles =['items'=> $this->articlesModel->getAll($search, $start, $ipp),
                     'nrPages' => $nrPages];  
        return $articles;
    }
    
    function selectArticle(){
        if (isset($_GET['id'])) {
        return $this->articlesModel->selectArticle($_GET['id']);
        
    }
    }
    function addArticle() {
         
          $tmpPath = $_FILES["file"]["tmp_name"];
          
          $filePath= "../uploads/" . $_FILES["file"]["name"];
          move_uploaded_file($tmpPath, $filePath);
          
          $_POST["file"] = $_FILES["file"]["name"];
          
        //   $tmpPath1 = $_FILES["file1"]["tmp_name"];
        //   $filePath1= "/uploads/" . $_FILES["file1"]["name"];
        //   move_uploaded_file($tmpPath1, $filePath1);
          
        //   $_POST["file1"] = $_FILES["file1"]["name"];
          

         return $this->articlesModel->addArticle($_POST);
   
    }
    
    function editArticle() {
        // if (!checkAdminSession()) {
        //     return checkAdminSession();
        // }
        global $PUT;
       
        return $this->articlesModel->editArticle($PUT);
   
    }
    function deleteArticle() {
        //  if (!checkAdminSession()) {
        //     return checkAdminSession();
        // }
        global $DELETE;
        
        return $this->articlesModel->deleteArticle($DELETE);
    }
     
}

?>

