$(function () {
   let dl = $('dl');
   let datalist = [];
   let aside = $('ul.aside');
   let tips = $('div.tips');
   let search = $(':text');
   $.ajax({
       url:'queryCall.php',
       dataType:'json',
       success:function(data){
           datalist = data;
           render(data);

       }
   })
    search.on('input',function(){
        let value = $.trim(this.value);
        let data = datalist.filter(element=>{
           return element.aname.includes(value) || element.phone.includes(value) ||
                element.py.includes(value);

        })
        render(data);
    })
    function render(obj) {
        // 先分类
        dl.html('');
        aside.html('');
       let ranger = {};
       $.each(obj,function(index,value){
          let firstChar = value.py.charAt(0).toUpperCase();
          if(!ranger[firstChar]){
              // 没有此属性就设置
              ranger[firstChar]=[];

          }
           ranger[firstChar].push(value)
       })
        // 拿到ranger中的属性
       let chars = Object.keys(ranger).sort();
       tips.text(chars[0]);

       // value 为字母
       $.each(chars,function(index,value){
           dl[0].innerHTML +=`<dt>${value}</dt>`;
           aside[0].innerHTML += `<li>${value}</li>`;
           $.each(ranger[value],function(i,v){
               // dl为jQuery对象，所以需要转换一下
               dl[0].innerHTML += `
              <dd><a href="tel:${v.phone}">${v.aname}</a></dd>`
           })
       })


    }
})