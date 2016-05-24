/**
 * Created by Administrator on 2016/5/17.
 */
var db= openDatabase("MY_games18",'1.0.1','我的本地数据库',1024);
$(function(){
    db.transaction(function(tx){
        /*用户资料列表*/
        tx.executeSql("create table if not exists users(" +
            "id          integer primary key autoincrement," +
            "login       text    unique  not null, " +
            "password    text    NOT NULL," +
            "u_name      text    unique  not null," +
            "level       integer not null," +           /*角色等级*/
            "money       integer not null," +
            " online_time float," +
            "last_time   date)");
        var user_table="insert into users (login, password, u_name, level, money)values ( ?,?,?,1,?)";
        tx.executeSql(user_table,['admin','123','我喜欢',99999999]);
        tx.executeSql(user_table,['lucifer','123456','Lucifer',100000]);
        ///!*装备属性列表*!/
           tx.executeSql("create table if not exists equipment(" +
            "id         integer primary key autoincrement," +
            "name       text    unique, " +
            "type       integer not null," +
            "value_type integer," +
            "value      integer," +                         /*属性*/
            "degree     integer default ( 1 )," +       /*等级*/
            " price     integer not null," +
            "img        text    not null)");
        var equipment_table="insert into equipment(name, type, value_type, value, price, img)values(?, ?, ?, ?, ?, ?)";
        tx.executeSql(equipment_table,['哈雷摩托',1,1,110,8000,'img/moto01.png']);
        tx.executeSql(equipment_table,['滑板车',1,1,76,5520,'img/moto02.png']);
        tx.executeSql(equipment_table,['奔驰',1,1,86,5600,'img/moto03.png']);
        tx.executeSql(equipment_table,['宝马',1,1,100,6870,'img/moto04.png']);    /*摩托车*/
        tx.executeSql(equipment_table,['A1',2,2,10,1800,'img/wheel01.png']);
        tx.executeSql(equipment_table,['A2',2,2,11,1830,'img/wheel02.png']);
        tx.executeSql(equipment_table,['A3',2,2,14,2300,'img/wheel03.png']);
        tx.executeSql(equipment_table,['A4',2,2,15,4200,'img/wheel04.png']);
        tx.executeSql(equipment_table,['A5',2,2,18,4830,'img/wheel05.png']);
        tx.executeSql(equipment_table,['A6',2,2,22,5300,'img/wheel06.png']);       /*摩托车轮*/
        tx.executeSql(equipment_table,['TSI 1.4',3,3,10,3680,'img/engine01.png']);
        tx.executeSql(equipment_table,['TFSI 2.0',3,3,12,8888,'img/engine03.png']);
        tx.executeSql(equipment_table,['AMG 2.7',3,3,14,2300,'img/engine04.png']);
        tx.executeSql(equipment_table,['CDI 2.7',3,3,18,9080,'img/engine05.png']);
        tx.executeSql(equipment_table,['V8 3.8',3,3,19,10010,'img/engine06.png']);
        tx.executeSql(equipment_table,['V8 4.5',3,3,22,12300,'img/engine07.png']);  /*引擎动机*/
        /*车手属性列表*/
        tx.executeSql("create table if not exists riders(" +
            "id         integer primary key autoincrement," +
            "r_name     text    unique," +
            "price      integer not null," +
            "img_1      text    not null," +
            "img_2      text    not null," +
            "skill      text," +
            "r_level    integer default ( 1 ))");
        /*用户拥有的车手列表*/
        tx.executeSql("create table if not exists user_rider(" +
            "userid     integer references users ( id )," +
            "riderid    integer references rider ( id )," +
            "blong_time date," +
            "now_value  integer default ( 1 )," +
            "degree     integer default ( 1 )," +
            "CONSTRAINT pk_ur PRIMARY KEY ( userid, riderid ))");
        /*用户拥有的车子列表*/
        tx.executeSql("create table if not exists user_bike(" +
            "id         integer primary key autoincrement," +
            "userid     integer references users (id)," +
            "bikebody   integer not null," +
            "tyre       integer not null," +
            "engine     integer not null," +
            "blong_time date," +
            "now_value  integer," +
            "degree     integer)");
        /*用户装备列表*/
        tx.executeSql("create table if not exists user_equip(" +
            "userid     integer references users ( id )," +
            "equipid    integer references equipment ( id )," +
            "now_value  integer default ( 1 )," +
            "degree     integer default ( 1 )," +
            "blong_time date," +
            "CONSTRAINT pk_ue PRIMARY KEY ( userid, equipid ))");
        /*关卡列表*/
        tx.executeSql("create table if not exists mission (" +
            "id         integer primary key autoincrement," +
            "name     text," +
            "descript text," +
            "level    integer default ( 1 )," +
            "belong   integer," +
            "map      text," +
            "conf     text," +
            "img      text)");
        /*用户关卡列表*/
        tx.executeSql("create table if not exists user_mission (" +
            "userid     integer references users ( id )," +
            "missionid  integer references mission ( id )," +
            "degree     integer," +
            "CONSTRAINT pk_ue PRIMARY KEY ( userid, missionid))");
        /*用户跑完的比赛的结果列表*/
        tx.executeSql("create table if not exists match_result (" +
            "userid     integer references users ( id )," +
            "missionid  integer references mission ( id )," +
            "match_time date," +
            "result     integer," +
            "award      integer," +
            "CONSTRAINT pk_mr PRIMARY KEY ( userid, missionid, match_time ))");
    });
});
