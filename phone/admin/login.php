<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
    <link rel="stylesheet" href="../static/css/login.css">
</head>
<body>
<form action="checkuser.php" method="post">
	<div class="formGroup">
		<h3>登陆界面</h3>
	</div>
	<div class="formGroup">
		<label for="">
			用户名
		</label>
		<input type="text" name="user" placeholder="请输入用户名">
	</div>
	<div class="formGroup">
		<label for="">
			密&nbsp;&nbsp;&nbsp;码
		</label>
		<input type="password" name="pass" placeholder="请输入密码">
	</div>
	<div class="formGroup">
		<input type="submit" name="sub" value="提交">
	</div>
</form>
</body>
</html>