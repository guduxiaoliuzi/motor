/**
 * Created by Administrator on 2016/5/15 0015.
 */
function Register(){
    var that=this;
    this.$MainBody=$("<div></div>");
    this.$MainBody.css({
        width:"100%",height:"100%","background-size":"cover","background-repeat":"no-repeat",
        "background-image":"url(img/LGbg.jpg)","background-position":"center center",position:"absolute"
    });
    this.$MainBody.appendTo(that.$MainBody.view);
    var $form=$("<form></form>");
    $form.css({
        width:"510px",height:"424px",background:"url(img/login-bg.png) no-repeat",
        position:"absolute",top:"calc(50% - 212px)",left:"calc(50% - 255px)"
    });
    var $form=$("<form></form>");
    $form.css({
        width:"510px",height:"424px", background:"url(img/login-bg.png) no-repeat",
        position:"absolute",top:"calc(50% - 212px)",left:"calc(50% - 255px)"
    });
    var $put_name_bg=$("<div></div>");
    $put_name_bg.css({
        width:"386px",height:"62px",margin:"30px auto","text-align":"right",position:"absolute",
        left:"calc(50% - 193px)"
    });
    var $put_name=$("<input>")
    $put_name.css({
        "background-color": "#2f2f2f",color: "white","font-size": "110%",height: "36px",width: "220px",
        margin:"10px 40px","line-height": "36px",position:"absolute",left:"80px",display:"inline"
    });
    var $put_pwd_bg=$put_name_bg.clone();
    var $put_pwd=$put_name.clone();
    $put_name_bg.css({background:"url(img/username.png) no-repeat center",top:"10px"});
    $put_name.attr({
        type:"text","placeholder":"请输入账号",name:"name"
    });
    $put_name.appendTo($put_name_bg);
    $put_name_bg.appendTo($form);   /*账号框*/
    $put_pwd_bg.css({background:"url(img/pwd.png) no-repeat center",top:"106px"});
    var $put_pwd2_bg=$put_pwd_bg.clone();
    var $put_pwd2=$put_pwd.clone();
    $put_pwd.attr({
        type:"password","placeholder":"请输入密码", name:"password"
    });
    $put_pwd2.attr({
        type:"password","placeholder":"请确认密码",name:"password2"
    });
    $put_pwd2_bg.css("top","202px");
    $put_pwd.appendTo($put_pwd_bg);
    $put_pwd_bg.appendTo($form);
    $put_pwd2.appendTo($put_pwd2_bg);
    $put_pwd2_bg.appendTo($form);
    this.$bt_rgister=$("<input>");
    this.$bt_rgister.css({
        width: "263px",height:"68px",margin: "30px auto","text-align": "center",background:"url(img/bt-bg.png) no-repeat",
        "font-size":"200%",display:"block",border:"none",color:"#e4d630","font-weight":"800",cursor:"pointer",
        position:"absolute",top:"300px",left:"calc(50% - 131px)"
    });
    this.$bt_rgister.attr({
        type:"text",value:"注册新账号",name:"submit"
    });
    this.$bt_rgister.click(function(){
        var name=$put_name.val();
        var pwd=$put_pwd2.val();
        if(name!=""||pwd!=""){
            db.transaction(function(tx){
                tx.executeSql("select * from users",[],function(tx,results){
                    var len = results.rows.length;
                    var i=0;
                    for(;i<len;i++){
                        if(results.rows.item(i).login == name){
                            break;
                        }
                    }
                    if(i<len){
                        var tc4=new TanChuang(that.$MainBody,"哎！被注册啦","img/003.gif");
                    }else{
                        tx.executeSql("insert into users (u_name,login,password,level,money) values (?,?,?,?,?);",[name,name,pwd,1,1000],function(tx,e){
                            var tc3=new TanChuang(that.$MainBody,"恭喜注册成功。。。","img/ppb.gif");
                            tc3.close.click(function(){
                                director.runScene(new Loading());
                            });
                        });
                    }
                },null);
            });
        }else{
            var tc2=new TanChuang(that.$MainBody,"你居然不写内容。。。","img/002.gif")
        }
    });
    this.$bt_rgister.appendTo($form);           /*注册按钮*/
    var $back=$("<div></div>");
    $back.css({
        width: "96px",height: "96px","border-radius": "48px",position: "absolute",top: "10px",
        cursor: "pointer", background:"url(img/return.png) no-repeat",right:"calc(40% - 300px)"
    });
    $back.click(function(){
        director.runScene(new Login());
    });
    $back.appendTo(that.$MainBody);
    $form.appendTo(that.$MainBody);

    $form.validate({
        rules:
        {
            name://用户名
            {
                required: true,
                minlength:5,
                maxlength:8
                //rangelength:[2,20]
            },
            password://密码
            {
                required: true,
                minlength:6,
                maxlength:10
            },
            password2://确认密码
            {
                required: true,
                equalTo: "input[name=password]"
            }
        }
    });
}
