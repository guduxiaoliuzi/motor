/**
 * Created by Administrator on 2016/5/14 0014.
 */
var style=document.createElement("style");
document.head.appendChild(style);
var sheet=style.sheet;
sheet.insertRule("*{margin:0;padding:0}");

var director;
$(function(){
    director=new Director($("body"));
    //director.runScene(new Login());
    //director.runScene(new Loading());
    director.runScene(new Store());
    //director.runScene(new Main());
    //director.runScene(new Depot());
    //director.runScene(new Checkpoint());
    //director.runScene(new Settlement(3,126,2));
    //director.runScene(new MapSelect());
    //director.runScene(new Register());
});
//var login=new Login($("#main"));
function Director(viewPort){
    var that=this;
    this.view=viewPort;
    this.runScene=function(scene){
        that.view.empty();
        that.view.append(scene.$MainBody);
    }
}
/*$(function(){
    var $map=new Map($("#map"));
    var $sb = new Rocker($("#swig"));
    var time=new Timer($(".timer"));
    var riders=[];
    riders[0]=new Rider("img/role/c1.png");
    riders[1]=new Rider("img/role/c2.png");
    riders[2]=new Rider("img/role/c3.png");
    var moToBodys=[];
    moToBodys[0]=new MoToBody("img/role/BikerBody01.png");
    moToBodys[1]=new MoToBody("img/role/BikerBody02.png");
    var wheels=[];
    wheels[0]=new Wheel("img/role/BikerExtraParts1.png");
    wheels[1]=new Wheel("img/role/BikerExtraParts2.png");
    wheels[2]=new Wheel("img/role/BikerExtraParts3.png");
    var roles=[];
    var role_1=new Role(riders[0],moToBodys[0],wheels[0]);
    role_1.add($map.$me);
    role_1.setPosition(50,150);
    role_1.addspeed=0;
    role_1.maxspeed=10;
    roles.push(role_1);
    var role_2=new Role(riders[1],moToBodys[1],wheels[1]);
    role_2.add($map.$me);
    role_2.setPosition(120,220);
    role_2.maxspeed=4;
    roles.push(role_2);
    var role_3=new Role(riders[2],moToBodys[0],wheels[2]);
    role_3.add($map.$me);
    role_3.setPosition(200,340);
    roles.push(role_3);
    setInterval(function(){
        for(i=0;i<roles.length;i++){
            roles[i].move();
        }
        $map.lookAt(role_1.getX()-50);
    },50)

    $sb.on("swig", function(e, x, y){
//            console.log(role_1.addspeed);
        role_1.addspeed=.3;
        role_1.yspeed=0.2;
        role_1.addspeed=role_1.addspeed*x;
//            console.log("sp:"+role_1.addspeed);
        role_1.yspeed=role_1.yspeed*y;
//            console.log(role_1.yspeed)
    });
    $sb.on("swig_start", function(e){

        time.star();
    });
    $sb.on("swig_end", function(e){
//            time.stop();
    });
});*/
