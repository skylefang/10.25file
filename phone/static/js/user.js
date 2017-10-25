$(function(){
    // 数据要往tbody中插
    let tbody = $('tbody');
    let addBtn = $('.addBtn');
    let tips = $('.tips');
    console.log(tips);
    $(document).ajaxStart(function() {
    	tips.animate({width:'80%'})
    })
    $(document).ajaxComplete(function(){
    	tips.animate({width:'100%'}).queue(function(){
    		$(this).width(0);
    	});
    })
    
    /*query*/
    /*
    *往进传参的顺序取决于表建的样子
    *data的格式
    * [
    *   {name:'',age:''}
    * ]
    * */
    /*
    * ajax的封装
    *
    *
    * */
    $.ajax({
        type:'get',
        url:'query.php',
        dataType:'json',
        // 数据获取成功后要干的事情
        success:function (data) {
           /*console.log(data)*/
           // 原生方法
           /*data.forEach(element=>{
               createTr(element)
           })*/
           // 下标和数组元素
           $.each(data,function(index,element){
               createTr(element)
           });
        }
    })
    tbody.on('dblclick','td[class!=del]',function(e){
        let element = $(e.target);
        let oval = element.text();
        element.text('');
        $('<input>').appendTo(element).val(oval).blur(function () {
            let nval = $(this).val();
            $(this).remove();
            element.text(nval);
            let info = element.attr('type');
            let uid = element.closest('tr').attr('id');
            // 发数据
            $.ajax({
                url:'update.php',
                data:{value:nval,info,uid},
                success:function(data){
                    // 此处data不必为json
                    if(data){
                        alert('修改成功')
                    }else{
                        alert('修改失败')
                    }
                }
            })
        })
    })
    // 删除
    tbody.on('dblclick','button',function(e){
        let element = $(e.target);
        let uid = element.closest('tr').attr('id');
        $.ajax({
            data:{uid},
            url:'delete.php',
            success:function(data){
                if(data == 1){
                    element.closest('tr').remove();
                }else if(data == 0){
                    alert('删除失败');
                }

            }
        })
    })
    // 插入
    addBtn.on('click',function(){
       /*createTr({name:'',age:'',sex:'',phone:'',address:'',classes:''}); */
       // 
       $.ajax({
           url:'insert.php',
           success:function(data){
               createTr({uid:data,uname:'',upass:''});
           }
       })
    })
    function createTr(data) {
        // 原生方法
       /* tbody[0].innerHTML += `<tr>
        <td>${data.name}</td>
        <td>${data.age}</td>
        <td>${data.sex}</td>
        <td>${data.phone}</td>
        <td>${data.address}</td>
        <td>${data.classes}</td>
        <td class="del"><button>删除</button></td>

</tr>`*/
       // jquery 方法
       tbody.html(function(index,value){
           return value + `<tr id="${data.uid}">
        <td type="uname">${data.uname}</td>
        <td type="upass">${data.upass}</td>
        
        <td class="del"><button>删除</button></td>

</tr> `
       })
    }

})