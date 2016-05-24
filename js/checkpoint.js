/**
 * Created by Administrator on 2016/5/20 0020.
 */
function Checkpoint(){
    var that=this;
    this.$MainBody=$("<div></div>");
    this.$MainBody.css({
        width:"100%",height:"100%","background-size":"cover","background-repeat":"no-repeat",
        "background-image":"url(img/guankbg.jpg)","background-position":"center center",position:"absolute"
    });
    this.$MainBody.appendTo(that.$MainBody);
    var $bg=$("<div></div>");
    $bg.css({
        width:"710px",height:"500px",position:"absolute",left:"calc(50% - 355px)",background:"url(img/gkbg.png)no-repeat",top:"calc(3% + 30px)"
    });
    $bg.appendTo(this.$MainBody);       /*�ؿ�����*/
    var $black=$("<div></div>");
    $black.css({
        width: "96px",height: "96px","border-radius": "48px",position: "absolute",top: "20px",
        cursor: "pointer",background: "url(img/return.png) no-repeat center", right:"calc(50% - 472px)"
    });
    $black.appendTo(this.$MainBody);        /*���ذ�ť*/
    var map=new Star(370,70,"img/open.png",$bg,"img/xin02.png");
    map.$span1.css("background","url(img/xin01.png)","img/xin02.png");
    var map1=new Star(320,220,"img/open.png",$bg,"img/xin02.png");
    var map2=new Star(210,90,"img/open.png",$bg,"img/xin02.png");
    var map3=new Star(80,140,"img/open.png",$bg,"img/xin02.png");
    var map4=new Star(150,240,"img/clock.png",$bg);
    var map5=new Star(50,300,"img/clock.png",$bg);
    var map6=new Star(30,440,"img/clock.png",$bg);
    var map7=new Star(130,560,"img/clock.png",$bg);
    var map8=new Star(250,500,"img/clock.png",$bg);
    var map9=new Star(392,550,"img/clock.png",$bg);
}
/*�ؿ���ؼ�  ����1������top�ľ���  ����2������left�ľ���  ����3���ؿ�����Ӱͼ  ����4������λ��  ����5�����ǵ���ʾͼƬ*/
function Star(top,left,img,$parent,img1){
    this.$check=$("<div></div>");
    this.$check.css({
        width:"83px",height:"83px",background:"url("+img+")",position:"absolute",top:top+"px",left:left+"px"});
    this.$check.appendTo($parent);            /*�ؿ�ͼ*/
    this.$cbg=$("<div></div>");
    this.$cbg.css({
        width:"73px",height:"21px",position:"absolute",top:"30px",left:"5px"});
    this.$cbg.appendTo(this.$check);        /*���Ǳ���*/
    this.$span1=$("<span></span>");
    this.$span1.css({
        width:"21px",height:"21px",margin:"2px 0 0 3px",display:"inline-block",float:"left",background:"url("+img1+")"});
    this.span2=this.$span1.clone();
    this.span3=this.$span1.clone();
    this.$span1.appendTo(this.$cbg);
    this.span2.appendTo(this.$cbg);
    this.span3.appendTo(this.$cbg);
}