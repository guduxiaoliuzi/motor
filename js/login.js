/**
 * Created by Administrator on 2016/5/14 0014.
 */
function Login(){
    var that=this;
    this.$MainBody=$("<div></div>");
    this.$MainBody.css({
        width:"100%",height:"100%","background-size":"cover","background-repeat":"no-repeat",
        "background-image":"url(img/LGbg.jpg)","background-position":"center center",position:"absolute"
    });
    this.$MainBody.appendTo(that.$MainBody);
    var $form=$("<form></form>");
    $form.css({
        width:"510px",height:"424px",background:"url(img/login-bg.png) no-repeat",position:"absolute",top:"calc(50% - 212px)",left:"calc(50% - 255px)"
    });
    //$form.attr("class","form");
    var $put_name_bg=$("<div></div>");
    $put_name_bg.css({
        width:"386px",height:"62px",margin:"30px auto","text-align":"right"
    });
    var $put_name=$("<input>")
    $put_name.css({
        "background-color": "#2f2f2f",color: "white","font-size": "110%",height: "36px",width: "220px",margin:"10px 40px","line-height": "36px"
    });
    var $put_pwd_bg=$put_name_bg.clone();
    var $put_pwd=$put_name.clone();
    $put_name_bg.css("background","url(img/username.png) no-repeat center");
    $put_name.attr({
        type:"text","placeholder":"请输入账号",name:"name"
    });
    $put_name.appendTo($put_name_bg);
    $put_name_bg.appendTo($form);   /*账号框*/
    $put_pwd_bg.css("background","url(img/pwd.png) no-repeat center");
    $put_pwd.attr({
        type:"password","placeholder":"请输入密码",name:"password"
    });
    $put_pwd.appendTo($put_pwd_bg);
    $put_pwd_bg.appendTo($form);        /*密码框*/
    this.$bt_login=$("<input>");
    this.$bt_login.css({
        width: "263px",height:"69px",background:"url(img/loginbtn.png)",position:"absolute",
        left:"120px",top:"220px",border:"none",cursor:"pointer"
    });
    this.$bt_new=this.$bt_login.clone();
    this.$bt_login.attr({
        name:"submit"
    });
    this.$bt_login.click(function(){            /*登录按钮事件*/
        var name=$put_name.val();
        var pwd=$put_pwd.val();
        if(name!=""||pwd!=""){
            db.transaction(function(tx){
                tx.executeSql("select * from users",[],function(tx,results){
                    var len = results.rows.length;
                    var i=0;
                    for(;i<len;i++){
                        if(results.rows.item(i).login == name && results.rows.item(i).password==pwd){
                            break;
                        }
                    }
                    if(i<len){
                        alert("登录成功");
                        director.runScene(new Loading());
                    }else{
                        alert("登录失败");
                    }
                },null);
            });
        }else{
            alert("用户名或密码为空");
        }
    });
    this.$bt_login.appendTo($form);      /*登陆按钮*/
    this.$bt_new.css({
        background:"url(img/zucebtn.png)",top:"320px"
    });
    this.$bt_new.click(function(){
        director.runScene(new Register());
    });
    this.$bt_new.appendTo($form);           /*注册按钮*/
    $form.appendTo(that.$MainBody);     /*表单*/
    var $help=$("<div></div>");
    $help.css({
        width: "96px",height: "96px","border-radius": "48px",position: "absolute",bottom: "90px",cursor: "pointer"
    });
    var $music=$help.clone();
    $help.css({background: "url(img/help.png) no-repeat center",left: "calc(50% - 392px)",});
    $music.css({background: "url(img/music.png) no-repeat center",right:"calc(50% - 392px)"});
    $help.appendTo(this.$MainBody);
    $music.appendTo(this.$MainBody);
}
