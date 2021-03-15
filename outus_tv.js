$(function() {
$("#submit_primary").click(function(e){
var CWID=$("#element_2").val();
var lastName= $("#element_1_2").val();
var firstName=$("#element_1_1").val();
var visa=$("#element_7").val();
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
var level=$("#element_4").val();
var spa=$("#element_5").val();
var email=$("#element_6").val();

var lv_us_dd=$("#element_11_2").val();
var lv_us_mm=$("#element_11_1").val();
var lv_us_yy=$("#element_11_3").val();
var lv_us=lv_us_mm+"/"+lv_us_dd+"/"+lv_us_yy;

var rt_us_dd=$("#element_20_2").val();
var rt_us_mm=$("#element_20_1").val();
var rt_us_yy=$("#element_20_3").val();
var rt_us=rt_us_mm+"/"+rt_us_dd+"/"+rt_us_yy;

var enr=$("#element_10").val();
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
var assist=$("#element_15").val();
var opt=$("#element_13").val();
var add=$("#element_18").val();
var querystring="&CWID="+CWID+"&ln="+lastName+"&fn="+firstName+"&visa="+visa+"&visaexe="+visa_exe+"&sevis="+sevis+"&lv="+level+"&spa="+spa+"&em="+email+"&lev="+lv_us+"&rt="+rt_us+"&enr="+enr+"&enrh="+enrh+"&mj="+major+"&gs="+gd_sem+"&as="+assist+"&opt="+opt+"&add="+add;
var url = "https://okstate.forms-db.com/view.php?id=734119"+querystring;
$("#element_26").val(url.replaceAll(" ", "%20"));
});
});