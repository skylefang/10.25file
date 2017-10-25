<?php
include 'db.php';
// 拿回前台数据  与前面的name对应
 $user = $_POST['user'];
 $pass = $_POST['pass'];

 $sql = "select * from manager";
 $result = $mysql -> query($sql);
 $data = $result ->fetch_all(MYSQL_ASSOC);
// 遍历
 for($i=0;$i<count($data);$i++){
 	if($data[$i]['uname'] == $user && $data[$i]['upass'] == $pass){
 		/*echo 1;
 		exit();*/
 		$message = '登录成功';
 		$url = 'main.php';
 		include 'message.html';
 		exit();
 		// 返回js脚本 要加标签对
 		/*echo "<script> location.href = 'main.php' </script>"*/
 	}
 }
   /*echo 0;*/
   $message = '登录失败';
   $url = 'login.php';
   include 'message.html';
 // var_dump($data);
  
  //  [
  //    ['uid'=>1,'uname'=>'admin','upass']
  //  
  //  ]