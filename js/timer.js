/**
 * Created by Administrator on 2016/5/11 0011.
 */

function Timer($parent){
    var that=this;
    var starTime;
    this.margin_top=10;
    this.margin_left=10;
    this.$height=$parent.height();
    this.$width=$parent.width();
    this.$radius=1;
    //console.log(this.$width+','+this.$height);
    this.$canvas=$("<canvas width="+this.$width+" height="+this.$height+"></canvas>");
    $parent.append(this.$canvas);
    this.star=function(){
        starTime=window.setInterval(time,1);
    }
    this.stop=function(){
        clearInterval(starTime);
    }
    function time(){
        if(that.$canvas[0].getContext)
        {
            var ctx=that.$canvas[0].getContext('2d');
            render(ctx);
        }
    }
    /*设置时间初始值为0*/
    this.ms=0;
    this.seconds=0;
    this.minutes=0;
    this.hours=0;
    function render(context){
        context.clearRect(0,0,that.$width,that.$height);
        if(that.ms>100)
        {
            that.seconds++;
            that.ms=0;
        }
        if(that.seconds>59)
        {
            that.minutes++;
            that.seconds=0;
        }
        if(that.minutes>59)
        {
            that.hours++;
            that.minutes=0;
        }
        if(that.hours>23)
        {
            that.hours=0;
        }
        renderDigit(that.margin_left+(that.$radius+1),that.margin_top,parseInt(that.hours/10),context)
        renderDigit(that.margin_left+15*(that.$radius+1),that.margin_top,that.hours%10,context);
        renderDigit(that.margin_left+30*(that.$radius+1) , that.margin_top ,10, context )
        renderDigit(that.margin_left+39*(that.$radius+1),that.margin_top,parseInt(that.minutes/10),context);
        renderDigit(that.margin_left+54*(that.$radius+1),that.margin_top,that.minutes%10,context);
        renderDigit(that.margin_left+ 69*(that.$radius+1) , that.margin_top ,10, context);
        renderDigit(that.margin_left+78*(that.$radius+1),that.margin_top,parseInt(that.seconds/10),context);
        renderDigit(that.margin_left+93*(that.$radius+1),that.margin_top,that.seconds%10,context);
        renderDigit(that.margin_left+108*(that.$radius+1) , that.margin_top ,10, context);
        renderDigit(that.margin_left+117*(that.$radius+1),that.margin_top,parseInt(that.ms/10),context);
        renderDigit(that.margin_left+132*(that.$radius+1),that.margin_top,that.ms%10,context);
        that.ms++;
    }
    function renderDigit(x,y,num,context){
        context.fillStyle = "red";
        for( var i = 0 ; i < digital[num].length ; i++ ){
            for(var j = 0 ; j < digital[num][i].length ; j++ ){
                if(digital[num][i][j]==1){
                    context.beginPath();
                    context.arc(x+j*2*(that.$radius+1)+(that.$radius+1),y+i*2*(that.$radius+1)+(that.$radius+1),that.$radius,0,2*Math.PI);
                    context.closePath();
                    context.fill();
                }
            }
        }
    }

}
