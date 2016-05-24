/**
 * Created by Administrator on 2016/5/22 0022.
 */
/*摇杆*/
function SwigBar($parent){
    var BAR_SIZE = 200;
    var BAR_HSIZE = 100;
    var LCIR_R = 60;
    var SCIR_R = 20;
    var SC_BG = "rgba(100, 100, 100, 0.5)";
    var that = this;

    this.$me=$("<div></div>");
    this.$me.css({width:"200px",height:"200px",position:"absolute",right:"-10px",bottom:"-20px","z-index":"1000"});
    this.$me.appendTo($parent);
    this.X=0;
    this.Y=0;
    var W_BL = BAR_SIZE/this.$me.width();//本控件和父元素的宽之比
    var H_BL = BAR_SIZE/this.$me.height();//本控件和高元素的高之比

    this.$bar = $("<canvas width="+BAR_SIZE+" height="+BAR_SIZE+"></canvas>");
    this.$bar.css({width:"100%", height: "100%"});
    this.$bar.appendTo(this.$me);
    this.draw = function(ex, ey){
        var ctx = that.$bar[0].getContext("2d");
        ctx.clearRect(0, 0, BAR_SIZE, BAR_SIZE);
        ctx.beginPath();
        ctx.arc(BAR_HSIZE, BAR_HSIZE, LCIR_R, 0, 2*Math.PI);
        ctx.closePath();
        ctx.strokeStyle = "#fff";
        ctx.lineWidth = 3;
        ctx.stroke();
        ctx.beginPath();
        if(ex!=undefined){
            var lr = Math.sqrt(Math.pow(ex-BAR_HSIZE, 2)+ Math.pow(ey-BAR_HSIZE, 2));
            if(lr<LCIR_R){
                ctx.arc(ex, ey, SCIR_R, 0, 2*Math.PI);
                this.X=(ex-BAR_HSIZE)/LCIR_R;
                this.Y=(ey-BAR_HSIZE)/LCIR_R;
            }else {
                var xx = ex - BAR_HSIZE;//鼠标x和圆心x的差
                var dx = LCIR_R * xx / lr;//鼠标y和圆心y的差
                var yy = ey - BAR_HSIZE;//小圆现在所处x和圆心x的差
                var dy = LCIR_R * yy / lr;//小圆现在所处y和圆心y的差
                ctx.arc(BAR_HSIZE + dx, BAR_HSIZE + dy, SCIR_R, 0, 2 * Math.PI);
                this.X=dx/LCIR_R;
                this.Y=dy/LCIR_R;
            }
        }
        else{
            ctx.arc(BAR_HSIZE, BAR_HSIZE, SCIR_R, 0, 2*Math.PI);
        }
        ctx.closePath();
        ctx.fillStyle = SC_BG;
        ctx.fill();
        ctx.stroke();
    };
    this.draw();
    var dragging = false;
    this.$bar.mousedown(function(e){
        dragging = true;
        var ex = e.clientX-that.$bar.offset().left;
        var ey = e.clientY-that.$bar.offset().top;
        that.draw(ex*W_BL, ey*H_BL);
    });
    $(document).mousemove(function(e){
        if(dragging){
            var ex = e.clientX-that.$bar.offset().left;
            var ey = e.clientY-that.$bar.offset().top;
            that.draw(ex*W_BL, ey*H_BL);
            that.$bar.trigger("swig",
                [that.X, that.Y]);
        }
        e.preventDefault();
    });
    $(document).mouseup(function(e){
        dragging = false;
        that.draw();
        that.$bar.trigger("swig_end");
        that.X=0;
        that.Y=0;
        e.preventDefault();
    });

    this.on = function(event, fu){
        that.$bar.on(event, fu);
    }
}
/*摩托车*/
function MotoBody(obj){
    var that=this;
    this.maxSpeed = obj.maxSpeed;
    this.$mbody = $("<div></div>");
    this.$mbody.css({
        "background-image": "url("+obj.Mimg+")",
        "background-repeat":"no-repeat",
        position: "absolute",
        top:"64px",left:"50%",
        "z-index":"5"
    });
    var $img=$('<img src='+obj.Mimg+'>');
    $img.load(function(){
        that.$mbody.css({
            width:$img[0].width,
            height:$img[0].height,
            "margin-left":$img[0].width*(-0.5)
        });
    });
}
/*车轮*/
function Wheel(obj){
    var that=this;
    this.yspeed=obj.yspeed;
    this.$wheel01 = $("<div></div>");
    this.$wheel01.css({
        "background-image": "url("+obj.Wimg+")",
        "background-repeat":"no-repeat",
        position: "absolute",
        top:"76px",
        "z-index":"2"
    });
    this.$wheel02 = this.$wheel01.clone();
    this.$wheel01.css("left","5px");
    this.$wheel02.css("right","12px");
    var $img=$('<img src='+obj.Wimg+'>');
    $img.load(function(){
        that.$wheel01.css({
            width:$img[0].width,
            height:$img[0].height,
        });
        that.$wheel02.css({
            width:$img[0].width,
            height:$img[0].height,
        });
    });
};
/*骑手*/
function Rider(obj){
    //获取加速度。最大速度、换道速度
    var that=this;
    this.$rider = $("<div></div>");
    this.$rider.css({
        "background-image": "url("+obj.Rimg+")",
        width:"56px",
        height:"94px",
        "background-repeat":"no-repeat",
        position: "absolute",
        top:"0px",left:'50%',
        "z-index":"10"
    });
    var $img=$('<img src='+obj.Rimg+'>');
    $img.load(function(){
        that.$rider.css({
            width:$img[0].width,
            height:$img[0].height,
            "margin-left":$img[0].width*(-0.5)
        });
    });
}
var speed=0;
/*速度*/
function downSpeed(speed,num){
    if(speed>0){
        speed-=num;
    }
    else{
        speed=0;
    }
    return speed;
}
/*人物车手*/
function Actor(obj){
    this.img=obj.Rimg;
    this.imgB=obj.RimgB;
    this.xspeed=obj.xspeed;
    this.yspeed=obj.yspeed;
    var maxspeed=obj.maxspeed;
    this.maxspeed=maxspeed;
    this.Top=0;
    var xspeed=obj.xspeed;
    var yspeed=obj.yspeed;
    var rider=new Rider(obj);
    var motobody=new MotoBody(obj);
    var wheel=new Wheel(obj);
    var $act = $("<div></div>");
    $act.addClass('renren');
    $act.css({
        position: "absolute",'z-index': '15'
    });
    $act.append(rider.$rider);
    $act.append(motobody.$mbody);
    $act.append(wheel.$wheel01);
    $act.append(wheel.$wheel02);
    this.addTo=function($parent){
        $act.appendTo($parent);
        $act.css({left: "0px", top: "0px"});
    };
    var deg=0;
    this.speed=0;
    function upSpeed(speed,x){
        if(speed<maxspeed){
            speed+=xspeed*x/50;
        }
        else{
            speed=maxspeed;
        }
        return speed;
    }
    this.run=function(x,y){
        //判断是否到达终点
        if(this.Lef<Mapend){
            //加速
            if(x>0){
                this.speed=upSpeed(this.speed,x);
            }
            //减速
            else{
                this.speed=downSpeed(this.speed,2);
            }
            //换道
            if(this.speed>0){
                this.Top+=y*(yspeed*0.2);
                if(this.Top+120<7*bh){
                    this.Top=7*bh-120;
                }
                if(this.Top+100>13*bh){
                    this.Top=13*bh-100
                }
                $act.css({top: this.Top});
            }
        }
        else {
            this.speed=downSpeed(this.speed,2);
        }
        this.Lef+=(this.speed)*0.1;
        $act.css({left: this.Lef});
        //控制轮胎转动的速度
        deg+=this.speed*0.6;
        wheel.$wheel01.css("transform", "rotate("+deg+"deg)");
        wheel.$wheel02.css("transform", "rotate("+deg+"deg)");
    };
    this.setPosition = function(x, y){

        $act.css({left: x+"px", top: (y*bh-100)+"px"});
        this.Lef=x;
        this.Top=(y*bh-100);
    };
    this.getX = function(){
        return parseInt(this.Lef/bw);
    };
    this.getY = function(){
        return parseInt((this.Top+100)/bh);
    };
    this.w=parseInt(120/bw);
    this.h=parseInt(120/bh)-2;
}
function SpeedBar($parent,maxspeed){
    this.$me=$("<div></div>");
    this.$me.css({ width:218,height: 50,position: "absolute",top:126,right:100,"z-index":"200","background-image":"url(images/border.png)"});
    this.$me.appendTo($parent);
    this.$bar=$("<div></div>");
    this.$bar.css({height: "100%",width:0,"background-image":"url(images/speed.png)"
    });
    this.$bar.appendTo(this.$me);
    this.getSpeed=function(speed){
        if(speed==maxspeed){
            speed=maxspeed*0.8
        }
        this.$bar.width(218*(speed/maxspeed));
    };
}
function TimerBar($parent){
    var k=0;
    var timer1=0;
    var that=this;
    this.overFlag=false;
    this.$bar=$("<div></div>");
    this.$bar.html("00:00:0");
    this.$bar.css({
        "font-size":"40px",position:"absolute",'font-weight': 'bolder',
        top:22,right:12
    });
    this.$bar.appendTo($parent);
    function getTimeTxt(n){
        var i=parseInt(n/2.5);
        var min=parseInt(i/600);
        var s=parseInt(i%600/10);
        var m=i%10;
        if(min<10){
            min="0"+min;
        }
        if(s<10){
            s="0"+s;
        }
        var txt=min+":"+s+":"+m;
        return txt;
    }
    this.getTime=function(objs,me){
        var len=objs.length;
        var arr=new Array(len);
        var sum=0;
        //为每个对象添加tim属性获取比赛用时
        for(var i=0;i<len;i++){
            if(objs[i].Lef<=Mapend){
                objs[i].tim=getTimeTxt(k);
                arr[i]=0;
            }
            else {
                arr[i]=1;
            }
            sum+=arr[i];

        }
        if(sum==len){
            this.overFlag=true;
        }
        that.$bar.html(me.tim);
        k++;
    };
    this.pause=function(timer){
        clearInterval(timer);
    };
    this.gameover=function(timer){
        this.pause(timer);
        k=0;
    };
    this.setPosition=function(x,y){
        this.$bar.css({
            left:x,top:y
        });
    }
}
function RankBar($parent){
    this.$bar=$("<div></div>");
    this.$bar.css({
        width:141,height: 133,background:'url(images/rank.png)',position:'absolute',
        left:0,top:20
    });
    var $num=$("<div></div>");
    $num.css({
        width:141,height: 133
    });
    this.getRank=function(i){
        $num.css('background','url(images/'+i+'.png) no-repeat center 60%/60%')
    };
    this.$bar.append($num);
    function sortNumber(a,b)
    {
        return a - b
    }

    this.setRank=function(objs,that){
        //排序
        var len=objs.length;
        var arr=[];
        for(var i=0;i<len;i++){
            arr.push(objs[i].Lef)
        }
        arr.sort(sortNumber);
        //为每个对象添加rnk属性
        for(var i=0;i<len;i++){
            var obj=objs[i];
            //console.log(obj.Lef)
            for(var k=0;k<len;k++){
                if(obj.Lef==arr[k]){
                    obj.rnk=len-k;
                    break;
                }
            }
        }
        this.getRank(that.rnk);
    };
    $parent.append(this.$bar);
}
function MoneyBar($parent){
    this.$bar=$("<div></div>");
    this.$bar.css({
        width:240,height: 68,background:'url(images/money.png)',position:'absolute',
        right:100,top:46
    });
    var $coins=$("<div></div>");
    $coins.css({
        "font-size":"40px",position:"absolute",'font-weight': 'bolder',top:16,left:96
    });
    var arr=[];
    this.setCoin=function(num,obj){
        var len=arr.length;
        if(arr[len-1]!=num){
            arr.push(num);
        }
        $coins.html('+'+arr.length);
        obj.coin=arr.length;
    };
    this.$bar.append($coins);
    $parent.append(this.$bar);
}