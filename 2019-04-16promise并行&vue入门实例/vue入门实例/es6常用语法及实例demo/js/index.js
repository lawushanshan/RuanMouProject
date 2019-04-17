window.onload = function(){
    new Vue({
        el:'#my',  //element 元素   挂载元素
        data:{    //数据  键值对  
           name:'orange' ,
           message:'报错',
           lists:[{name:'a',message:'aa'},{name:'b',message:'bb'}]
        },
        methods:{   //方法
            add:function(){
                if(this.name ==''|| this.message =='') return;
                this.lists.unshift({name:this.name,message:this.message});
                this.name ='';
                this.message ='';
            },
            del:function(name,message){
                var newlist=this.lists.filter((item)=>{
                    return (item.name!=name&&item.message!=message)
                })
                this.lists=newlist
            }
        }
    });
}