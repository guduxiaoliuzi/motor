/**
 * Created by Administrator on 2016/5/21 0021.
 */
/*参数1：难度系数  参数2：获得金币  参数3：获得名次*/
function Settlement(difficulty,gold,rank){
    var that=this;
    this.$MainBody=$("<div></div>");
    this.$MainBody.css({
        width:"100%",height:"100%","background-size":"cover","background-repeat":"no-repeat",
        "background-image":"url(img/model-bg.png)","background-position":"center center",position:"absolute"
    });
    this.$MainBody.appendTo(that.$MainBody);
    var $bg=$("<div></div>");
    $bg.css({
        width:"1005px",height:"530px","background-repeat":"no-repeat","background-size":"cover","background-image":"url(img/qiang.png)",
        "background-position":"center center", position:"absolute",top:"calc(1% + 5px)",left:"calc(50% - 502px)"
    });
    $bg.appendTo(that.$MainBody);
    var $rank_bg=$("<div></div>");
    $rank_bg.css({
        width:"300px",height:"110px",position:"absolute",right:"0px","margin-top":"30px"
    });
    $rank_bg.appendTo($bg);         /*结算数据背景*/
    var $rank=$("<p></p>");
    $rank.css({
        width:"300px",height:"30px",color:"white","font-size":"120%","margin-top":"15px"
    });
    this.$live=new Jiesuan("难度",""+difficulty+"星",$rank);       /*本关难度*/
    this.$gold=new Jiesuan("金币",gold,$rank);                       /*本次获得金币*/
    this.$rank=new Jiesuan("名次",rank,$rank);                    /*本次名次*/
    $rank.appendTo($rank_bg);
    var $g_tu=$("<div></div>");
    $g_tu.css({
        width:"65px",height:"67px",display:"inline-block",background:"url(img/coins.png)"
    });
    $g_tu.appendTo($rank_bg);
    var a=1234+gold;                        /*获得用户金币加上本次所获得的金币*/
    var $sum=$("<p>总数："+a+"</p>");
    $sum.css({
        width:"230px",height:"30px",display:"inline-block",position:"absolute",color:"white","margin-left":"20px","font-size":"120%",top:"70px"
    });
    $sum.appendTo($rank_bg);
    var $Lj=$("<div></div>");
    $Lj.css({
        width:"539px",height:"211px",background:"url(img/ljt.png)",position:"absolute",bottom:"0px"
    });
    $Lj.appendTo($bg);
    var $first_man=$("<div></div>");
    $first_man.css({
        width:"128px",height:"128px",position:"absolute",bottom:"120px",left:"190px",background:"url(img/cha04.png)"
    });
    $first_man.appendTo($bg);               /*第一名人物*/
    var $first_time=new LJ_time("01:02:20",$bg);
    $first_time.$lj_time.css("left","230px");       /*第一名时间*/
    var $second_man=$("<div></div>");
    $second_man.css({
        width:"128px",height:"128px",position:"absolute",bottom:"87px",left:"10px",background:"url(img/cha05.png)"
    });
    $second_man.appendTo($bg);    /*第二名人物*/
    var $second_time=new LJ_time("01:22:20",$bg);
    $second_time.$lj_time.css("left","36px");       /*第二名时间*/
    var $third_man=$("<div></div>");
    $third_man.css({
        width:"128px",height:"128px",position:"absolute",bottom:"54px",left:"370px",background:"url(img/cha03.png)"
    });
    $third_man.appendTo($bg);    /*第三名人物*/
    var $third_time=new LJ_time("01:32:20",$bg);
    $third_time.$lj_time.css("left","396px");       /*第三名时间*/
    var $four_display=$("<div></div>");
    $four_display.css({
        width:"400px",height:"360px",position:"absolute",left:"600px",bottom:"0px"
    });
    $four_display.appendTo($bg);            /*第四名显示与否*/
    var $fourth=$("<div>第四名</div>");
    $fourth.css({
        width:"200px",height:"50px","font-size":"300%",color:"white",position:"absolute",bottom:"250px",left:"50px"
    });
    $fourth.appendTo($four_display);          /*第四名名次显示*/
    var $fourth_man=$("<div></div>");
    $fourth_man.css({
        width:"128px",height:"128px",position:"absolute",bottom:"0px",left:"50px",background:"url(img/cha03.png)"
    });
    $fourth_man.appendTo($four_display);    /*第四名人物*/
    var $fourth_time=new LJ_time("02:02:20",$four_display);
    $fourth_time.$lj_time.css({left:"56px",bottom:"180px"});       /*第四名时间*/
    var $one=$("<div></div>");
    $one.css({
        width:"263px", height:"69px", position:"absolute",bottom:"30px",cursor: "pointer"
    });
    var $more=$one.clone();
    var $shop=$one.clone();
    $one.css({left:"calc(50% - 500px)",background:"url(img/restart.png)"});
    $more.css({left:"calc(50% - 131px)",background:"url(img/backenu.png)"});
    $shop.css({right:"calc(50% - 500px)",background:"url(img/nextstage.png)"});
    /*$shop.click(function(){
        director.runScene(new Store());
    });*/
    $more.click(function(){
        director.runScene(new Main());
    });
    $one.appendTo(this.$MainBody);      /*重新开始*/
    $more.appendTo(this.$MainBody);     /*返回主菜单*/
    $shop.appendTo(this.$MainBody);     /*下一关*/
}
function Jiesuan(name,num,$parent){         /*结算控件  参数1：名字如（难度、名次等） 参数2：数字如名次、金币数等*/
    this.$J_span=$("<span>"+name+"："+num+"</span>");
    this.$J_span.css({
        width:"50px",height:"30px","margin-left":"10px"
    });
    this.$J_span.appendTo($parent);
}
function LJ_time(time,$parent){             /*领奖台时间控件 参数1：比赛时间 参数2：插入位置*/
    this.$lj_time=$("<div></div>");
    this.$lj_time.css({
        width:"150px",height:"30px",color:"red","font-size":"150%",position:"absolute",bottom:"10px"
    });
    this.$lj_time.html(time);
    this.$lj_time.appendTo($parent);
}