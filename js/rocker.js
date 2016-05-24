/**
 * Created by Administrator on 2016/5/12.
 */
function Rocker($parent){       /*����������һ�����ڵ�*/
    var that=this;
    var BAR_SIZE = 200;
    var BAR_HSIZE = BAR_SIZE/2-25;
    var BC_R = 60;
    var SC_R = 20;
    var x_speed;
    var y_speed;
    var SC_bg = "rgba(100, 100, 100, 0.5)";
    var W_BL = BAR_SIZE/$parent.width();//���ؼ��͸�Ԫ�ؿ�֮��
    var H_BL = BAR_SIZE/$parent.height();//���ؼ��͸�Ԫ�صĸ�֮��
    this.$bar=$("<canvas width="+BAR_SIZE+"height="+BAR_SIZE+"></canvas>"); /*ֱ�����û������ظ����ڵ�һ��*/
    this.$bar.css({ width:"100%", height: "100%" });
    this.$bar.appendTo($parent);    /*����ҳ��*/
    /*������Բ�ķ���������Ϊ����굱ǰ����*/
    this.draw=function(ex,ey){
        if(that.$bar[0].getContext){
            /*��Բ�Ŀ�*/
            var cxt=that.$bar[0].getContext("2d");
            cxt.clearRect(0,0,BAR_SIZE,BAR_SIZE);
            cxt.beginPath();
            cxt.arc(BAR_HSIZE,BAR_HSIZE,BC_R,0,2*Math.PI);
            cxt.lineWidth=3;
            cxt.strokeStyle="white";
            cxt.stroke();
            cxt.closePath();
            /*��Բ�Ŀ�*/
            cxt.beginPath();
            if(ex==undefined){
                cxt.arc(BAR_HSIZE,BAR_HSIZE,SC_R,0,2*Math.PI);
            }
            else{
                var lr=Math.sqrt(Math.pow(ex-BAR_HSIZE,2)+Math.pow(ey-BAR_HSIZE,2));/*�����Բ�ľ���*/
                if(lr<BC_R){
                    x_speed=(ex-BAR_HSIZE)/BC_R;
                    y_speed=(ey-BAR_HSIZE)/BC_R;
                    cxt.arc(ex,ey,SC_R,0,2*Math.PI);
                }
                else{
                    var xx=ex-BAR_HSIZE;//���X��Բ�ĵĲ�
                    var dx=BC_R*xx/lr;//СԲ��������X��Բ��X��
                    var yy=ey-BAR_HSIZE;//���Y��Բ�ĵĲ�
                    var dy=BC_R*yy/lr;//СԲ��������Y��Բ��Y��
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
    this.draw();/*��Բ*/
    var dragging=false;     /*���ñ�־λ*/
    this.$bar.mousedown(function(e){
        dragging=true;
        var ex = e.clientX-that.$bar.offset().left;
        var ey = e.clientY-that.$bar.offset().top;
        that.draw(ex*W_BL, ey*H_BL);                    /*���ձ���������*/
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
