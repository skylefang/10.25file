<?php
 header('Content-type:text/html;charset=utf—8');
 include 'db.php';
 $sql = "select * from addresslist";
 $result = $mysql->query($sql);
 $data = $result->fetch_all(MYSQL_ASSOC);
 echo json_encode($data);

?>