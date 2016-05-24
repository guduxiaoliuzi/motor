/**
 * Created by Administrator on 2016/5/16 0016.
 */
function Map($parent){
    var that=this;
    this.$me=$("<div></div>");
    this.$me.css({
        width: "15600px",
        height: "100%",
        "background": "url(img/map.png)",
        "position":"absolute"
        //"z-index": "13"
    });
    this.$me.appendTo($parent);
    $parent.css("overflow", "hidden")
    this.lookAt=(function(x){
        this.$me.css("left",-x+"px");
    });
}