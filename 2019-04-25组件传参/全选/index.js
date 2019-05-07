window.onload=function(){
    new Vue({
    el:'#my',
    data:{
        all:{check:false,name:'全选'},
        lists:[{
            id:0,
            name:'中国0',
            check:false
        },{
            id:1,
            name:'中国1',
            check:true
        },
        {
            id:2,
            name:'中国2',
            check:false
        },
        {
            id:3,
            name:'中国3',
            check:false
        },
        {
            id:4,
            name:'中国4',
            check:false
        },
    
        ],
    },
    components:{
        'my-check':{
            template:'#my-check',//局部组件
            props:['all','lists'],
            methods:{
                checkAllChange:function(){
                    this.lists.forEach(item => {
                        item.check=this.all.check;
                    });
                },
                curChange:function(){
                    //获取选中的状态 filter()
                    var selectItem=this.lists.filter(item=>{
                        return item.check
                    })
                    console.log(selectItem.length);

                    //第一种方法 常规方法
                    if(selectItem.length==this.lists.length)
                    {
                        this.all.check=true;
                    }
                    else{
                        this.all.check=false;
                    }

                    //第二种方法
                    selectItem.length == this.lists.length ?this.all.check = true:this.all.check = false;

                     //第三种方法 every 和some方法的比较
                     //every 每一项满足条件返回true
                     //some  只要有一项满足返回true，或者说多部满足返回true
                     this.all.check = this.lists.every(function(item){
                        return item.check
                    });
                }
            }
        }
    } 
    });
}