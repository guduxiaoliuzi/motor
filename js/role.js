/**
 * Created by Administrator on 2016/5/11 0011.
 */
function Rider(img){
    this.rImg=img;  /*ͼ��*/
    this.rAddSpeed=.1;  /*���ٶ�*/
    this.rYspeed=0    /*Y����ٶ�*/
    this.rMaxSpeed=.9; /*����ٶ�*/
    this.rAttack=2;    /*����ֵ*/
    this.rDefense=7;   /*����ֵ*/
}
function MoToBody(img){
    this.mImg=img;
    this.mAddSpeed=.1;  /*���ٶ�*/
    this.mYspeed=0    /*Y����ٶ�*/
    this.mMaxSpeed=.9; /*����ٶ�*/
    this.mAttack=3;    /*����ֵ*/
    this.mDefense=5;   /*����ֵ*/
}
function Wheel(img){
    this.cImg=img;
    this.cAddSpeed=.1;  /*���ٶ�*/
    this.cYspeed=0     /*Y����ٶ�*/
    this.cMaxSpeed=.9; /*����ٶ�*/
    this.cAttack=0;    /*����ֵ*/
    this.cDefense=10;   /*����ֵ*/
}
function Role(riders,moToBodys,wheels){
    var that=this;
    this.Cmoney=10000;  /*���*/
    this.CUnlock=new Array();  /*�����ؿ�*/
    var $role=$("<div></div>");
    $role.css({
        width: '101px',
        height: '120px',
        position: 'absolute'
    });
    /*����*/
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

    /*Ħ�г�*/
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
    /*����*/
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
    /*��ӳ���*/
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