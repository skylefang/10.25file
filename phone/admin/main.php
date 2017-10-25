<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
</head>
<style>
	html,body{
		width: 100%;
		height: 100%;
		overflow: hidden;
	}
	body{
		display: flex;
	}
	*{
		text-decoration: none;
		list-style: none;
	}
	.left{
		width: 200px;
		height: 100%;
		border-right: 1px solid #eeeeee;
		padding: 6px 12px;
		
	}
	.left a{
		font-size: 16px;
		color: #14110D;
	}
	.left li{
		line-height: 1.5;
		border-bottom: 1px solid #eeeeee;
		box-sizing: border-box;

	}

	.right{
		flex-grow: 1;
		
	}
	iframe{
		width: 100%;
		height: 100%;
	}
</style>
<body>
  <div class="left">
  	<ul>
  		<li>
  			<a href="user.php" target="right">用户管理</a>
  		</li>
  		<li>
  			<a href="lianxiren.php" target="right">联系人管理</a>
  		</li>
  	</ul>
  </div>
  <div class="right">
  	<iframe src="" frameborder="0" name="right"></iframe>
  </div>
</body>
</html>