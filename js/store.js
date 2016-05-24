/**
 * Created by Administrator on 2016/5/17 0017.
 */
function Store(){
    var that=this;
    this.$MainBody=$("<div></div>");
    this.$MainBody.css({
        width:"100%", height:"100%","background-size":"cover", "background-repeat":"no-repeat",
        "background-image":"url(img/LGbg.jpg)","background-position":"center center",position:"absolute"
    });
    this.$MainBody.appendTo(that.$MainBody.view);
    var $left=$("<div></div>");
    $left.css({
        width:"291px",height:"562px", border:"black solid 3px", position:"absolute",
        "border-radius":"15px",background:"white",left:"calc(50% - 525px)",top:"calc(2% + 30px)"
    });
    $left.appendTo(this.$MainBody);
    var $head=$("<div></div>");
    $head.css({
        width:"256px",height:"60px",background:"url(img/small-bg.png) no-repeat",position:"absolute",top:"-20px",left:"18px"
    });
    var $see=$("<span></span>");
    $see.css({
        width:"76",height:"32px",position:"absolute",top:"10px",left:"92px",background:"url(img/yulan.png)"
    });
    $see.appendTo($head);
    $head.appendTo($left);
    var $names=$("<div></div>");    /*用户名*/
    $names.html("我任性");
    $names.css({
        width:"290px",margin:"50px 0 10px 0","text-align":"center","font-size":"30px"
    });
    $names.appendTo($left);
    var $preview=$("<div></div>");      /*预览框背景*/
    $preview.css({
        width:"257px",height:"267px",background:"url(img/preview-bg.png) no-repeat",position:"absolute",left:"18px"
    });
    /*var $rider=new Rider("img/c1.png");     /!*角色拼接，不过太小了得要重写角色类了(-__-)b*!/
    var $moToBody=new MoToBody("img/BikerBody01.png");
    var $wheel=new Wheel("img/BikerExtraParts1.png");*/
    $roles=new Role1("img/c1.png","img/BikerBody01.png","img/BikerExtraParts1.png",$preview);
    $preview.appendTo($left);
    var $money_bg=$("<p></p>");
    var $My=$("<span>我的金币：</span>");
    var $money=$("<span></span>");          /*金币数量*/
    $money_bg.css({
        width:"260px",color:"gold",position:"absolute","font-size":"150%",top:"370px",left:"23px"
    });
    $money.html("0123456789");
    $My.appendTo($money_bg);
    $money.appendTo($money_bg);
    $money_bg.appendTo($left);
    var $myCar=$("<div></div>");
    $myCar.css({
        width:"231px",height:"61px",position:"absolute",bottom:"90px",left:"25px","background-image":"url(img/carport.jpg)",cursor:"pointer"
    });
    $myCar.click(function(){
        director.runScene(new Depot());
    });
    $myCar.appendTo($left);     /*我的车库按钮*/
    var $recharge=$myCar.clone();
    $recharge.css({
       bottom:"20px","background-image":"url(img/chongzhi.jpg)"
    });
    $recharge.click(function(){
        var t=new TanChuang(that.$MainBody,"正在努力建设中。。。。。","img/001.gif");
    });
    $recharge.appendTo($left);          /*游戏充值*/
    var $right=$("<div></div>");
    $right.css({
        width:"713px",height:"562px",border:"black solid 3px",position:"absolute",
        "border-radius":"15px",background:"white",right:"calc(50% - 500px)",top:"calc(2% + 30px)"
    });
    $right.appendTo(this.$MainBody);
    var $r_head=$("<div></div>");
    $r_head.css({
        width:"394px",height:"53px",background:"url(img/long-bg.png)",position:"absolute",top:"-20px",left:"168px"
    });
    var $sd=$("<p></p>");
    $sd.css({width:"84px",height:"32px",background:"url(img/malltxt.png)",position:"absolute",top:"10px",left:"155px"});
    $sd.appendTo($r_head);
    $r_head.appendTo($right);
    var $exit=$("<div></div>");
    $exit.css({
        width:"62px",height:"62px",background:"url(img/exit.png)",position:"absolute",top:"-31px",right:"-15px"
    });
    $exit.click(function(){
        director.runScene(new Main());
    });
    $exit.appendTo($right);             /*退出按钮*/
    var $man=new Menu(50,"img/item1.png");
    $man.$bg.css({
        "background-image":"url(img/login-bg.png)","border-color":"black"
    });
    $man.$bg.click(function(){
        $car.$bg.css({"background-image":"","border-color":"white"});
        $wheel.$bg.css({"background-image":"","border-color":"white"});
        $tank.$bg.css({"background-image":"","border-color":"white"});
        $man.$bg.css({"background-image":"url(img/login-bg.png)","border-color":"black"});
        $stores.css("display","block");
        $stores_car.css("display","none");
        $stores_wheel.css("display","none");
        $stores_tank.css("display","none");
    });
    $right.append($man.$bg);              /*人物的按钮*/
    var $car=new  Menu(165,"img/item5.png");
    $car.$bg.click(function(){
        $car.$bg.css({"background-image":"url(img/login-bg.png)","border-color":"black"});
        $wheel.$bg.css({"background-image":"","border-color":"white"});
        $tank.$bg.css({"background-image":"","border-color":"white"});
        $man.$bg.css({"background-image":"","border-color":"white"});
        $stores.css("display","none");
        $stores_car.css("display","block");
        $stores_wheel.css("display","none");
        $stores_tank.css("display","none");
    });
    $car.$bg.appendTo($right);         /*摩托车身按钮*/
    var $wheel=new Menu(280,"img/item6.png");
    $wheel.$bg.click(function(){
        $car.$bg.css({"background-image":"","border-color":"white"});
        $wheel.$bg.css({"background-image":"url(img/login-bg.png)","border-color":"black"});
        $tank.$bg.css({"background-image":"","border-color":"white"});
        $man.$bg.css({"background-image":"","border-color":"white"});
        $stores.css("display","none");
        $stores_car.css("display","none");
        $stores_wheel.css("display","block");
        $stores_tank.css("display","none");
    });
    $wheel.$bg.appendTo($right);        /*轮子的按钮*/
    var $tank=new Menu(395,"img/dongji_01.png");
    $tank.$bg.click(function(){
        $car.$bg.css({"background-image":"","border-color":"white"});
        $wheel.$bg.css({"background-image":"","border-color":"white"});
        $tank.$bg.css({"background-image":"url(img/login-bg.png)","border-color":"black"});
        $man.$bg.css({"background-image":"","border-color":"white"});
        $stores.css("display","none");
        $stores_car.css("display","none");
        $stores_wheel.css("display","none");
        $stores_tank.css("display","block");
    });
    $tank.$bg.appendTo($right);     /*油箱的按钮*/
    var $shop=$("<div></div>");
    $shop.css({
        width:"533px",height:"510px",border:"black solid 3px",position:"absolute","border-radius":"15px",background:"white",right:"2px",top:"40px"
    });
    $shop.appendTo($right);     /*商店背景*/
    var $stores=$("<div></div>");
    $stores.css({
        width:"523px",height:"430px",border:"black solid 3px",position:"relative",display:"none",
        "border-radius":"15px","background-image":"url(img/shop-bg.png)","background-repeat":"no-repeat",
        "background-position":"center center","background-size":"cover",left:"4px",top:"3px",overflow:"hidden"
    });
    var $stores_car=$stores.clone();
    var $stores_wheel=$stores.clone();
    var $stores_tank=$stores.clone();
    $stores.css("display","block");
    var m=new Array;        /*人物*/
    var cs=new Array;        /*摩托车*/
    var w=new Array;        /*轮子*/
    var r=new Array;        /*油箱*/
    db.transaction(function(tx){
        tx.executeSql("select * from equipment where type=1",[],function(tx,results){       /*车身*/
            var len = results.rows.length;
            var i=0;
            for(;i<len;i++){
                cs[i]=new Items(results.rows.item(i).name,results.rows.item(i).price,results.rows.item(i).img,$stores_car,$preview)
            }
        },null);
        tx.executeSql("select * from equipment where type=2",[],function(tx,results){       /*摩托车轮*/
            var len = results.rows.length;
            var i=0;
            for(;i<len;i++){
                w[i]=new Items(results.rows.item(i).name,results.rows.item(i).price,results.rows.item(i).img,$stores_wheel,$preview)
            }
        },null);
        tx.executeSql("select * from equipment where type=3",[],function(tx,results){       /*引擎动力*/
            var len = results.rows.length;
            var i=0;
            for(;i<len;i++){
                r[i]=new Items(results.rows.item(i).name,results.rows.item(i).price,results.rows.item(i).img,$stores_tank,$preview)
            }
        },null);
        tx.executeSql("select * from equipment where type=4",[],function(tx,results){       /*人物车手*/
            var len = results.rows.length;
            var i=0;
            for(;i<len;i++){
                cs[i]=new Items(results.rows.item(i).name,results.rows.item(i).price,results.rows.item(i).img,$stores,$preview)
            }
        },null);
    });
    var $page=$("<div></div>");
    $page.css({
        width:"530px",height:"43px","margin-top":"20px","text-align":"center"
    });
    var $up=$("<span></span>");
    $up.css({
        width:"43px",height:"43px",display:"inline-block",background:"url(img/buy-left.png)"
    });
    var $num=$("<span></span>");
    $num.html("1");
    $num.css({
        width:"43px",height:"43px","margin-top":"0px","line-height":"43px","font-size":"120%",display:"inline-block"
    });
    var $down=$("<span></span>");
    $down.css({
        width:"43px",height:"43px",display:"inline-block",background:"url(img/buy-right.png)"
    });
    $up.appendTo($page);
    $num.appendTo($page);
    $down.appendTo($page);
    $stores.appendTo($shop);
    $stores_car.appendTo($shop);
    $stores_wheel.appendTo($shop);
    $stores_tank.appendTo($shop);
    $page.appendTo($shop);
}
/*商品类控件*/
function Items(name,price,img,$parent,$P){
    var that=this;
    this.$bg=$("<div></div>")
    this.$bg.css({
        width:"147px",height:"195px",border:"black solid 3px","border-radius":"15px",margin:"10px 0 0 15px",float:"left"});
    this.$name=$("<p></p>");
    this.$name.css({width:"140px","text-align":"center","font-size":"120%"});
    this.$name.html(name);
    this.$img=$("<div></div>");
    this.$img.css({
        width:"126px",height:"100px","margin-left":"9px","margin-top":"3px","background-image":"url("+img+")","background-repeat":"no-repeat",
        "background-position":"center center","background-size":"cover"});
    var $shop_price=$("<p>价格</p>");
    $shop_price.css({
        width:"126px",color:"aqua","margin-left":"9px","margin-top":"3px","font-size":"100%"});
    this.$price=$("<span></span>");
    this.$price.html(price);
    this.$price.css({ float:"right" });
    this.$price.appendTo($shop_price);
    var $shop_buy=$("<div></div>")
    $shop_buy.css({
        width:"65px",height:"30px",float:"left",color:"white","text-align": "center","line-height":"30px","margin-left":"3px","margin-top":"9px",
        cursor:"pointer","background-image":"url(img/buy-bt.png)","background-repeat":"no-repeat","background-position":"center center","background-size":"cover"});
    $shop_buy.html("购买");
    var $shop_buy1=$("<div></div>")
    $shop_buy1.css({
        width:"65px",height:"30px",float:"right",color:"white",cursor:"pointer","text-align": "center","line-height":"30px","margin-right":"3px","margin-top":"9px",
        "background-image":"url(img/buy-bt.png)","background-repeat":"no-repeat","background-position":"center center","background-size":"cover"});
    $shop_buy1.html("预览");
    /*预览效果*/
    $shop_buy1.click(function(){
       //console.log(name);
        db.transaction(function(tx){
            tx.executeSql("select * from equipment",[],function(tx,results){
                var len = results.rows.length;
                var i=0;
                for(;i<len;i++){
                   if(results.rows.item(i).type==4){
                       $roles=new Role1(results.rows.item(i).img2,"img/BikerBody01.png","img/BikerExtraParts1.png",$P);
                   }
                   if(results.rows.item(i).type==1){
                        $roles=new Role1("img/c1.png",results.rows.item(i).img2,"img/BikerExtraParts1.png",$P);
                   }
                    if(results.rows.item(i).type==2){
                        $roles=new Role1("img/c1.png","img/BikerBody01.png",results.rows.item(i).img2,$P);
                    }
                }
            },null);
        },null);
    });
    this.$name.appendTo(this.$bg);
    this.$img.appendTo(this.$bg);
    $shop_price.appendTo(this.$bg);
    $shop_buy.appendTo(this.$bg);
    $shop_buy1.appendTo(this.$bg);
    this.$bg.appendTo($parent);
}
/*商店类别控件*/
function Menu(top,img){
    this.$bg=$("<div></div>");
    this.$bg.css({
        width:"160px",height:"110px",border:"white solid 2px",position:"absolute",left:"8px",top:top+"px",cursor:"pointer",
        "background-repeat":"no-repeat","background-position":"center center","background-size":"cover"});
    this.$centent=$("<span></span>");
    this.$centent.css({
        width:"64px",height:"64px",background:"url("+img+")no-repeat",display:"inline-block",position:"absolute",left:"45px",top:"15px"});
    this.$centent.appendTo(this.$bg);
}