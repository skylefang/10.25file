<?php
  // 将db.php引入
  include 'db.php'; 
  $sql = "insert into manager (`uname`,`upass`) values ('','')";
  $mysql -> query($sql);
  echo $mysql -> insert_id;
?>
