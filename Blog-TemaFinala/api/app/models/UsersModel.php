<?php

require_once "DB.php";

class UsersModel extends DB {
    function getAll($search = "", $start = 0, $limit = 50) {
        
        $sql = 'select * from users'; 
        
        $data = array();
        
        if ($search !== "") {
            $data = ['%' . $search . '%'];
            $sql .= ' where name like ?';
        }
      
        $sql .= ' limit ' .$start . ',' .$limit;
        return $this->selectAll($sql, $data);
    }
    
    function countUsers($search) {
        
        $sql = "select id from users";
        
        $data = [];
        
        if ($search !== "") {
            $data = ['%' . $search . '%'];
            $sql .= ' where name like ?';
        }
        
        
        $this->selectAll($sql, $data);
        return $this->countAll();
    }

     function selectUser($item) {
        $data= [$item['email'],
                $item['password']];
        $sql = 'select * from users where (email = ? and password = ?)';
        return $this->selectItem($sql, $data);
    }
   
    function selectEmail($item) {
        $data= [$item['email']];
        $sql = 'select * from users where email = ?';
        return $this->selectAll($sql, $data);
    }
    function addUser($item) {
        
        $data = [$item['email'],
                    $item['password'],
                    $item['name'],
                    $item['age'],
                    $item['gender']];
        
        $sql = 'insert into users (email, password, name, age, gender) values (?, ?, ?, ?, ?)';
        return $this->insertItem($sql, $data);
    }
    
    function deleteUser($item) {
      $data= [$item['id']=$_SESSION['id']];
     $sql= 'delete from users where id = ?';
      return $this->deleteItem($sql, $data);
    }
    function editUser($item) {
        $data = [$item ['name'],
                 $item ['password'],
                 $item ['id']= $_SESSION['id']];
        $sql = 'update users set name =?, password =?   where id = ?';
        return $this->editItem($sql, $data);
    }
}
     
?>