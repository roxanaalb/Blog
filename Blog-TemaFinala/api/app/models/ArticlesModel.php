<?php
require_once "DB.php";

class ArticlesModel extends DB {
 function getAll($search = "", $start = 0, $limit =3 ) {
    $sql = 'select * from articles';
    $data = array();
        
        if ($search !== "") {
            $data = ['%' . $search . '%', '%' . $search . '%'];
            $sql .= ' where title like ? or content like ?';
         }
          $sql .= ' limit ' .$start . ',' .$limit;
          
   return $this->selectAll($sql, $data);
 }
   
   function countArticles($search) {
        
        $sql = "select * from articles";
        
        $data = [];
        
        if ($search !== "") {
             $data = ['%' . $search . '%', '%' . $search . '%'];
            $sql .= ' where title like ? or content like ?';
        }
        
        $this->selectAll($sql, $data);
        return $this->countAll();
    }
    
    function selectArticle($id) {
        // $data= [$item['id']];
        $sql = 'select * from articles where id = '. $id; 
        return $this->getItem($sql);
        // return $this->selectAll($sql);
    }
  function addArticle($item) {
        $data= [
                 $item['title'],
                 $item['content'],
                 $item['category'],
                 $item['file']
                    ];
                    
                    
     $sql = 'insert into articles (title, content, category, file) values (?, ?, ?, ?)';
     
     return $this->insertItem($sql, $data);
     
    }
   
    
     function deleteArticle($item) {
      $data= [$item['id']];
     $sql= 'delete from articles where id = ?';
      return $this->deleteItem($sql, $data);
    }
     
     
    function editArticle($item) {
     
     $data= [ 
                 $item['title'],
                 $item['content'],
                 $item ['id']];
                 
      $sql = 'update articles set title = ?, content = ? where id = ?';
        return $this->editItem($sql, $data);
    }
}

?>