<?php
  header('Content-type:text/html;charset=utf—8');
  $mysql = new mysqli('localhost','root','','skelyfang',3306);
  $mysql->query('set names utf8');
  if($mysql->connect_errno){
  	echo '数据库连接失败，失败信息' .$mysql->connect_errno;
	exit(); 
  };
$sql = "select * from addresslist";
$result = $mysql->query($sql);
$data = $result->fetch_all(MYSQL_ASSOC);
echo json_encode($data);

?>