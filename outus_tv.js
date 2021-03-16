$(function() {
$("#submit_form").click(function(e){
var CWID=$("#element_2").val();
var lastName= $("#element_1_2").val();
var firstName=$("#element_1_1").val();
var visa=$("input[name='element_7']:checked").val();
var visa_value;
if(visa=="1")
{
	visa_value="Yes";
}
else if(visa=="2")
{
	visa_value="No";
}

var visa_exe_dd=$("#element_8_2").val();
var visa_exe_mm=$("#element_8_1").val();
var visa_exe_yy=$("#element_8_3").val();
var visa_exe=visa_exe_mm+"/"+visa_exe_dd+"/"+visa_exe_yy;

var sevis;
if($("#element_3").val() == "")
{
	sevis="emp";
}
else
{
	sevis=$("#element_3").val();
}
var level=$("input[name='element_4']:checked").val();
var lv_value;
if(level=="1")
{
	lv_value="Undergraduate";
}
else if(level=="2")
{
	lv_value="Graduate";
}

var spa=$("input[name='element_5']:checked").val();
var spa_value;
if(spa=="1")
{
	spa_value="Yes";
}
else if(spa=="2")
{
	spa_value="No";
}
var email=$("#element_6").val();

var lv_us_dd=$("#element_11_2").val();
var lv_us_mm=$("#element_11_1").val();
var lv_us_yy=$("#element_11_3").val();
var lv_us=lv_us_mm+"/"+lv_us_dd+"/"+lv_us_yy;

var rt_us_dd=$("#element_20_2").val();
var rt_us_mm=$("#element_20_1").val();
var rt_us_yy=$("#element_20_3").val();
var rt_us=rt_us_mm+"/"+rt_us_dd+"/"+rt_us_yy;

var enr=$("input[name='element_10']:checked").val();
var enr_value;
if(enr=="1")
{
	enr_value="Yes";
}
else if(enr=="2")
{
	enr_value="No";
}

var enrh;
if($("#element_14").val() == "")
{
	enrh="0";
}
else
{
	enrh=$("#element_14").val();
}
var major=$("#element_16").val();
var gd_sem=$("#element_12").val();
var assist=$("input[name='element_15']:checked").val();
var as_value;
if(assist=="1")
{
	as_value="Yes";
}
else if(assist=="2")
{
	as_value="No";
}

var opt=$("input[name='element_13']:checked").val();
var opt_value;
if(opt=="1")
{
	opt_value="Yes";
}
else if(opt=="2")
{
	opt_value="No";
}
var add=$("input[name='element_18']:checked").val();
var add_value;
if(add=="1")
{
	add_value="Yes";
}
else if(add=="2")
{
	add_value="No";
}
var querystring="&CWID="+CWID+"&ln="+lastName+"&fn="+firstName+"&visa="+visa_value+"&visaexe="+visa_exe+"&sevis="+sevis+"&lv="+lv_value+"&spa="+spa_value+"&em="+email+"&lev="+lv_us+"&rt="+rt_us+"&enr="+enr_value+"&enrh="+enrh+"&mj="+major+"&gs="+gd_sem+"&as="+as_value+"&opt="+opt_value+"&add="+add_value;
var url = "https://okstate.forms-db.com/view.php?id=734119"+querystring;
$("#element_26").val(url.replaceAll(" ", "%20"));
});
});