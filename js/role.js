/**
 * Created by Administrator on 2016/5/11 0011.
 */
function Rider(img){
    this.rImg=img;  /*图像*/
    this.rAddSpeed=.1;  /*加速度*/
    this.rYspeed=0    /*Y轴的速度*/
    this.rMaxSpeed=.9; /*最高速度*/
    this.rAttack=2;    /*攻击值*/
    this.rDefense=7;   /*防御值*/
}
function MoToBody(img){
    this.mImg=img;
    this.mAddSpeed=.1;  /*加速度*/
    this.mYspeed=0    /*Y轴的速度*/
    this.mMaxSpeed=.9; /*最高速度*/
    this.mAttack=3;    /*攻击值*/
    this.mDefense=5;   /*防御值*/
}
function Wheel(img){
    this.cImg=img;
    this.cAddSpeed=.1;  /*加速度*/
    this.cYspeed=0     /*Y轴的速度*/
    this.cMaxSpeed=.9; /*最高速度*/
    this.cAttack=0;    /*攻击值*/
    this.cDefense=10;   /*防御值*/
}
function Role(riders,moToBodys,wheels){
    var that=this;
    this.Cmoney=10000;  /*金币*/
    this.CUnlock=new Array();  /*解锁关卡*/
    var $role=$("<div></div>");
    $role.css({
        width: '101px',
        height: '120px',
        position: 'absolute'
    });
    /*骑手*/
    var $rider=$("<div></div>");
    $rider.css({
        width: '78px',
        height:'101px',
        position: 'absolute',
        top: '0px',
        left: '5px',
        "z-index":'2',
        "background":"url(./"+riders.rImg+")no-repeat center"
    });
    $rider.appendTo($role);

    /*摩托车*/
    var $moToBody=$("<div></div>");
    $moToBody.css({
        width: '85px',
        height:'36px',
        position: 'absolute',
        bottom: '20px',
        left: '10px',
        "z-index":'1',
        "background":"url(./"+moToBodys.mImg+")no-repeat center"
    });
    $moToBody.appendTo($role);
    /*轮子*/
    var $wheel_l=$("<div></div>");
    $wheel_l.css({
        width: '35px',
        height:'35px',
        position: 'absolute',
        bottom: '7px',
        "background":"url(./"+wheels.cImg+")no-repeat center",
        animation: 'wheelRotate 1s linear infinite'
    });
    var $wheel_r=$wheel_l.clone();
    $wheel_l.css("left","3px");
    $wheel_r.css("right","0px");
    $wheel_l.appendTo($role);
    $wheel_r.appendTo($role);
    /*添加车手*/
    this.add=function($parent){
        $role.appendTo($parent);
    }
    this.x;
    this.y;
    var speed = 0;
    this.yspeed=riders.rYspeed+moToBodys.mYspeed+wheels.cYspeed;
    this.addspeed=riders.rAddSpeed+moToBodys.mAddSpeed+wheels.cAddSpeed;
    this.maxspeed=riders.rMaxSpeed+moToBodys.mMaxSpeed+wheels.cMaxSpeed;
    this.setPosition=function(x,y){
        that.x=x;
        that.y=y;
        $role.css({
            left:that.x+"px",
            top:that.y+"px"
        });
    }
    this.move=function(){
        speed+=that.addspeed;
        if(speed>that.maxspeed){
            speed=that.maxspeed;
        }
        if(speed<0){
            speed=0;
        }
        that.x+=speed;
        that.y+=that.yspeed;
        $role.css({
            left:that.x+"px",
            top:that.y+"px"
        });
        //console.log(that.maxspeed);
    }
    this.getSpeed = function(){
        return that.maxspeed;
    }
    this.getX = function(){
        return parseInt($role.css("left"));
    }
}