<?php
include 'db.php'; 
  $sql = "insert into addresslist (`aname`,`phone`,`py`) values ('','','')";
  $mysql -> query($sql);
  echo $mysql -> insert_id;
?>
