/**
 * Created by Administrator on 2016/5/22 0022.
 */
function MapSelect(){
    var that=this;
    this.$MainBody=$("<div></div>");
    this.$MainBody.css({
        width:"100%", height:"100%", "background-size":"cover","background-repeat":"no-repeat",
        "background-image":"url(img/LGbg.jpg)", "background-position":"center center",position:"absolute"
    });
    this.$MainBody.appendTo(that.$MainBody);
    var $black=$("<div></div>");
    $black.css({
        width: "96px",height: "96px","border-radius": "48px",position: "absolute",top: "20px",cursor: "pointer",
        background: "url(img/return.png) no-repeat center",right:"calc(50% - 572px)"
    });
    $black.click(function(){
        director.runScene(new Main());
    });
    $black.appendTo(this.$MainBody);            /*返回按钮*/
    var t=new TanChuang(that.$MainBody,"正在努力建设中。。。。。","img/001.gif");
    this.$map=$("<div></div>");
    this.$map.css({
        width:"1200px",height:"450px",margin: '0 auto',position: 'absolute',overflow:'hidden',
        left:"calc(50% - 600px)",top:'calc(50% - 225px)'
    });
    this.$map.appendTo(this.$MainBody);
    var $left=$("<div></div>");
    $left.css({
        "background-image":"url(img/left.png)","position":"absolute","background-repeat":"no-repeat",
        "left":"40px","top":"calc(50% - 67px)","height":"134px","width":"47px"
    });
    var $right=$("<div></div>");
    $right.css({
        "background-image":"url(img/right.png)","position":"absolute","background-repeat":"no-repeat",
        "right":"40px","top":"calc(50% - 67px)","height":"134px","width":"47px"
    });
    this.$MainBody.append($left,$right);            /*左右箭头*/
    var $imgdiv_l = $("<div></div>");
    $imgdiv_l.css({
        width:"500px",height:"300px", 'background-repeat': 'no-repeat',"background-color": "rgba(0,0,0,0.7)",
        position:"absolute",top:"calc(50% - 150px)"
    });
    var $imgdiv_r=$imgdiv_l.clone();
    $imgdiv_l.css("left","20px");
    $imgdiv_r.css("right","20px");
    this.$map.append($imgdiv_l,$imgdiv_r);
    var $imgdiv=$("<div></div>");
    $imgdiv.css({
        width:"700px",height:"400px",'background-repeat': 'no-repeat',"background-color": "white",
        position:"absolute",top:"calc(50% - 200px)",left:"calc(50% - 350px)"
    });
    $imgdiv.appendTo(this.$map);
}