const getJSON = function(url,type, data) {
    const promise = new Promise(function(resolve, reject){ 
      const handler = function() {
        if (this.readyState !== 4) {
          return;
        };
        if (this.status === 200) {
            //resolve promise对象从未完成到成功 ,将异步操作的结果作为参数传递
          resolve(this.response); 
        } else {
            //resolve promise对象从未完成到失败,将异步操作的结果作为参数传递
          reject(new Error(this.statusText));
        }
      };
      const client = new XMLHttpRequest();
      client.open(type, url);
      client.onreadystatechange = handler;
      client.responseType = "json";
      if(type =='get'){
          client.send();
      }else {
          client.setRequestHeader("Content-Type", "application/json");
          client.send(JSON.stringify(data));
      }
    });
    return promise;
  };
//   var promise = new Promise(function(resolve,reject){
//     //resolve   异步操作成功时调用，
//     //reject  异步操作失败时调用，
//     //then()  方法  分别指定resolve 和reject的回调函数
//     resolve(res)
// }).then(function(){
//     resolve(res)
// }).then(function(){
//     resolve(res)
// }).catch(function(){
    
// })
let obj ={
   // m:new Map(),
    init:function(){
        this.bind()
    },
    bind:function(){
        $(".container .submit").click(()=>{
            let _name = $(".name").val(),
                _msg = $(".message").val();
            if(_name =='' || _msg ==''){
                alert('请输入信息')
            }else {
                //this.m.set(_name,_msg);
                this.add(_name,_msg);
                $(".name,.message").val('');
            }
        });
        $(".container .queryThen").click(()=>{    //链式调用
            this.queryThen();
        });
        $(".container .queryWhen").click(()=>{    //链式调用  并行
            this.queryWhen();
        });
    },
    add:function(name,msg){ 
        getJSON('http://localhost:3000/add','post',{name:name,message:msg})
        .then((res)=>{
            console.log(res)
            if(res.code =='200'){
                this.getData();
            }
        },function(error){
            console.log(error)
        })
       
    },
    getData:function(){
        getJSON('http://localhost:3000/get','get')
        .then(function(res){
            if(res.code =='200'){
                let str = '';
                for(let item of res.result){
                    str+=`<li class="list-group-item">${item.name}<span>说：</span>${item.message}</li>`;
                };
                $(".messageList").html(str);
            }
        },function(error){
            console.log(error)
        })
    },
    queryThen:function(){   //链式请求   串行
        // getJSON('http://localhost:3000/get_query','get')
        // .then(function(res){
        //     //res.result.id   发送get请求获取ID
        //     console.log(res.result.id);
        //     return  getJSON('http://localhost:3000/add','post',{id:res.result.id,name:'123',message:'123'})
        // })
        // .then(function(res){
        //     console.log(res);
        // },function(error){
        //     console.log(error)
        // });
        //jquery
        $.ajax({url:'http://localhost:3000/get_query',type:'get',dataType:'json'})
        .then(res=>{
            console.log(res);
            return  $.ajax({
                url:'http://localhost:3000/add',
                type:'post',
                data:{id:res.result.id,name:'123',message:'123'}})
        },(error)=>{
            console.log(error)
        })
    },
    queryWhen:function(){   //链式请求  并行
        // var a = new Promise((resolve,reject) =>{
        //     getJSON('http://localhost:3000/get','get')
        //     .then(function(res){
        //         resolve(res)
        //     },function(error){
        //         console.log(error)
        //     })
        // });
        // var b = new Promise((resolve,reject) =>{
        //     getJSON('http://localhost:3000/get_query','get')
        //     .then(function(res){
        //         resolve(res)
        //     },function(error){
        //         console.log(error)
        //     })
        // });
        // // a b请求完成后返回
        // Promise.all([a,b]).then(([a1,b1])=>{
        //     console.log(a1);
        //     console.log(b1)
        // },function(){

        // })
        //jquery 写法  
        $.when(
            $.ajax({url:'http://localhost:3000/get',type:'get',dataType:'json'}),
            $.ajax({url:'http://localhost:3000/get_query',type:'get',dataType:'json'}),
        ).then((a,b)=>{
            console.log(a[0]);
            console.log(b[0]);
        },(error)=>{
            console.log(error)
        })
    }
}
$(function(){
   obj.init();
})

var promise = new Promise(function(resolve,reject){
    //resolve   异步操作成功时调用，
    //reject  异步操作失败时调用，
})