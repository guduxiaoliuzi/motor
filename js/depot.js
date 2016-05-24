/**
 * Created by Administrator on 2016/5/20.
 */
function Depot(){
    var that=this;
    this.$MainBody=$("<div></div>");
    this.$MainBody.css({
        width:"100%",height:"100%","background-size":"cover","background-repeat":"no-repeat",
        "background-image":"url(img/LGbg.jpg)", "background-position":"center center", position:"absolute"
    });
    this.$MainBody.appendTo(that.$MainBody.view);
    var $left=$("<div></div>");
    $left.css({
        width:"291px",height:"562px",border:"black solid 3px",position:"absolute","border-radius":"15px",
        background:"white",left:"calc(50% - 525px)",top:"calc(2% + 30px)"
    });
    $left.appendTo(this.$MainBody);
    var $head=$("<div></div>");
    $head.css({
        width:"256px",height:"60px",background:"url(img/small-bg.png) no-repeat",position:"absolute",top:"-20px",left:"18px"
    });
    var $see=$("<span></span>");
    $see.css({
        width:"118px", height:"27px", position:"absolute",left:"70px",top:"13px",background:"url(img/showtxt.png)no-repeat"
    });
    $see.appendTo($head);
    $head.appendTo($left);
    var $preview=$("<div></div>");      /*预览框背景*/
    $preview.css({
        width:"257px",height:"267px",background:"url(img/preview-bg.png) no-repeat",position:"absolute",left:"18px",top:"50px"
    });
    var $rider=new Rider("img/c1.png");     /*角色拼接，不过太小了得要重写角色类了(-__-)b*/
    var $moToBody=new MoToBody("img/BikerBody01.png");
    var $wheel=new Wheel("img/BikerExtraParts1.png");
    var $roles=new Role($rider,$moToBody,$wheel);
    $roles.add($preview);
    $roles.setPosition(80,70);
    $preview.appendTo($left);
    var $yue=new Buton("越野：","2325454",$left);
    $yue.$p.css("top","330px");       /*越野能力*/
    var $tiao=new Buton("跳跃：","322365",$left);
    $tiao.$p.css("top","370px");        /*跳跃能力*/
    var $sudu=new Buton("速度：","2325454",$left);
    $sudu.$p.css("top","410px");       /*速度*/
    var $fanyu=new Buton("坚固：","322365",$left);
    $fanyu.$p.css("top","450px");       /*坚固*/
    var $hc=new Buton("航程：","322365",$left);
    $hc.$p.css("top","490px");           /*航程*/
    var $right=$("<div></div>");
    $right.css({width:"713px",height:"562px",border:"black solid 3px",position:"absolute",
        "border-radius":"15px",background:"white",right:"calc(50% - 500px)",top:"calc(2% + 30px)"});
    $right.appendTo(this.$MainBody);
    var $r_head=$("<div></div>");
    $r_head.css({
        width:"400px",height:"60px",position:"absolute",top:"-20px",left:"168px",background:"url(img/long-bg.png) no-repeat"
    });
    var $seeKu=$("<span></span>");
    $seeKu.css({
        width:"120px", height:"31px", position:"absolute",left:"140px",top:"13px",background:"url(img/cangkutxt.png)no-repeat"
    });
    $seeKu.appendTo($r_head);
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
        $shop.css("display","block");
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
        $shop.css("display","none");
        $stores_car.css("display","block");
        $stores_wheel.css("display","none");
        $stores_tank.css("display","none")
    });
    $car.$bg.appendTo($right);         /*摩托车身按钮*/
    var $wheel=new Menu(280,"img/item6.png");
    $wheel.$bg.click(function(){
        $car.$bg.css({"background-image":"","border-color":"white"});
        $wheel.$bg.css({"background-image":"url(img/login-bg.png)","border-color":"black"});
        $tank.$bg.css({"background-image":"","border-color":"white"});
        $man.$bg.css({"background-image":"","border-color":"white"});
        $shop.css("display","none");
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
        $shop.css("display","none");
        $stores_car.css("display","none");
        $stores_wheel.css("display","none");
        $stores_tank.css("display","block");
    });
    $tank.$bg.appendTo($right);     /*油箱的按钮*/
    var $shop_bg=$("<div></div>");
    $shop_bg.css({
        width:"533px",height:"510px",border:"black solid 3px",position:"absolute","border-radius":"15px",
        background:"white",right:"2px",top:"40px"
    });
    $shop_bg.appendTo($right);     /*仓库背景*/
    var $shop=$("<div></div>");
    $shop.css({
        width:"530px",height:"456px",display:"none",position:"absolute",right:"0px",top:"0px",overflow:"hidden"
    });
    var $page=$("<div></div>");
    $page.css({
        width:"530px",height:"50px",position:"absolute",left:"0px","text-align":"center","line-height":"60px", bottom:"0px"
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
        width:"43px", height:"43px",display:"inline-block",background:"url(img/buy-right.png)"
    });
    var $stores_car=$shop.clone();
    var $stores_wheel=$shop.clone();
    var $stores_tank=$shop.clone();
    $shop.css("display","block");
    $up.appendTo($page);            /*上一页按钮*/
    $num.appendTo($page);           /*数字显示*/
    $down.appendTo($page);          /*下一页按钮*/
    $shop.appendTo($shop_bg);       /*展示背景*/
    $page.appendTo($shop_bg);
    var m=new D_man($shop,"img/z2.png");
    var m1=new D_man($shop,"img/z2.png");
    var m2=new D_man($shop,"img/z2.png");
    var m3=new D_man($shop,"img/z2.png");
    var m4=new D_man($shop,"img/z2.png");
    var m5=new D_man($shop,"img/z2.png");
    var m6=new D_man($shop,"img/z2.png");
    var m7=new D_man($shop,"img/z2.png");
    var m8=new D_man($shop,"img/z2.png");
    var m9=new D_man($shop,"img/z2.png");
    var m10=new D_man($shop,"img/z2.png");
    var m11=new D_man($shop,"img/z2.png");
    var m12=new D_man($shop,"img/z2.png");
    var m13=new D_man($shop,"img/z2.png");
    var m14=new D_man($shop,"img/z2.png");
    var m15=new D_man($shop,"img/z2.png");
}
/*人物生成类控件*/
function D_man($parent,img){
    this.$div=$("<div></div>");
    this.$div.css({"margin-top":"6px","margin-left":"19px",width:"106px",height:"106px",
        background:"url("+img+") no-repeat center",border:"solid 1px",float:"left"});
    this.$div.appendTo($parent);
}
/*预览属性类控件*/
function Buton(name,ability,$parent){
    this.$p=$("<p></p>");
    this.$p.html(name);
    this.$p.css({width:"250px",height:"30px",position:"absolute",left:"25px","font-size":"150%" });
    this.$span=$("<span></span>");
    this.$span.html(ability);
    this.$span.appendTo(this.$p);
    this.$p.appendTo($parent);
}