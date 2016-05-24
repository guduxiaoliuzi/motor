/**
 * Created by Administrator on 2016/5/12.
 */
function Rocker($parent){       /*参数：传入一个父节点*/
    var that=this;
    var BAR_SIZE = 200;
    var BAR_HSIZE = BAR_SIZE/2-25;
    var BC_R = 60;
    var SC_R = 20;
    var x_speed;
    var y_speed;
    var SC_bg = "rgba(100, 100, 100, 0.5)";
    var W_BL = BAR_SIZE/$parent.width();//本控件和父元素宽之比
    var H_BL = BAR_SIZE/$parent.height();//本控件和高元素的高之比
    this.$bar=$("<canvas width="+BAR_SIZE+"height="+BAR_SIZE+"></canvas>"); /*直接设置画布像素跟父节点一样*/
    this.$bar.css({ width:"100%", height: "100%" });
    this.$bar.appendTo($parent);    /*插入页面*/
    /*画两个圆的方法；参数为：鼠标当前坐标*/
    this.draw=function(ex,ey){
        if(that.$bar[0].getContext){
            /*外圆的框*/
            var cxt=that.$bar[0].getContext("2d");
            cxt.clearRect(0,0,BAR_SIZE,BAR_SIZE);
            cxt.beginPath();
            cxt.arc(BAR_HSIZE,BAR_HSIZE,BC_R,0,2*Math.PI);
            cxt.lineWidth=3;
            cxt.strokeStyle="white";
            cxt.stroke();
            cxt.closePath();
            /*内圆的框*/
            cxt.beginPath();
            if(ex==undefined){
                cxt.arc(BAR_HSIZE,BAR_HSIZE,SC_R,0,2*Math.PI);
            }
            else{
                var lr=Math.sqrt(Math.pow(ex-BAR_HSIZE,2)+Math.pow(ey-BAR_HSIZE,2));/*鼠标离圆心距离*/
                if(lr<BC_R){
                    x_speed=(ex-BAR_HSIZE)/BC_R;
                    y_speed=(ey-BAR_HSIZE)/BC_R;
                    cxt.arc(ex,ey,SC_R,0,2*Math.PI);
                }
                else{
                    var xx=ex-BAR_HSIZE;//鼠标X和圆心的差
                    var dx=BC_R*xx/lr;//小圆现在所在X和圆心X差
                    var yy=ey-BAR_HSIZE;//鼠标Y和圆心的差
                    var dy=BC_R*yy/lr;//小圆现在所在Y和圆心Y差
                    x_speed=dx/BC_R;
                    y_speed=dy/BC_R;
                    cxt.arc(dx+BAR_HSIZE,dy+BAR_HSIZE,SC_R,0,2*Math.PI);
                }
            }
        }
        cxt.fillStyle=SC_bg;
        cxt.closePath();
        cxt.fill();
        cxt.stroke();
    }
    this.draw();/*画圆*/
    var dragging=false;     /*设置标志位*/
    this.$bar.mousedown(function(e){
        dragging=true;
        var ex = e.clientX-that.$bar.offset().left;
        var ey = e.clientY-that.$bar.offset().top;
        that.draw(ex*W_BL, ey*H_BL);                    /*按照比例来缩放*/
        that.$bar.trigger("swig_start");
        e.preventDefault();
    });
    $(document).mousemove(function(e){
        if(dragging){
            var ex = e.clientX-that.$bar.offset().left;
            var ey = e.clientY-that.$bar.offset().top;
            //console.log(ex, ey);
            that.draw(ex*W_BL, ey*H_BL);
            that.$bar.trigger("swig",[x_speed,y_speed]);
            //console.log(x_speed,y_speed);
        }
    });
    $(document).mouseup(function(e){
        dragging = false;
        that.draw();
        that.$bar.trigger("swig_end");
    });
    this.on = function(event, f){
        that.$bar.on(event, f);
    }
}
