$(function() {
	GetParameterValues();
function GetParameterValues() { 
//get the URL   
var url = window.location.href.slice(window.location.href.indexOf('?') +1).split('&');
//"https://okstate.forms-db.com/view.php?id=734119&CWID=&ln=&fn=&visa=&visaexe=&sevis=&lv=&spa=&em=&lev=&rt=&enr=&enrh=&mj=&gs=&as=&opt=&add=;
var urlparam = String(url).split('=');

//CWID
var arr = urlparam[2].split(",");
var vs=arr[0];
$("#element_2").val(vs);

//last name
arr = urlparam[3].split(",");
vs=arr[0];
$("#element_36").val(vs);

//first name
arr = urlparam[4].split(",");
vs=arr[0];
$("#element_35").val(vs);

// visa type
arr = urlparam[5].split(",");
vs=arr[0];
$("#element_37").val(vs);

// visa expiration date
arr = urlparam[6].split(",");
vs=arr[0];
$("#element_38").val(vs);

// visa expiration date
arr = urlparam[7].split(",");
vs=arr[0];
if(vs == "emp")
{
	$("#element_3").val("");
}
else
{
	$("#element_3").val(vs);
}

//level
arr = urlparam[8].split(",");
vs=arr[0];
$("#element_39").val(vs);


//SPA
arr = urlparam[9].split(",");
vs=arr[0];
$("#element_40").val(vs);

//email
arr = urlparam[10].split(",");
vs=arr[0];
$("#element_6").val(vs);

//leave usa
arr = urlparam[11].split(",");
vs=arr[0];
$("#element_41").val(vs);

//return usa
arr = urlparam[12].split(",");
vs=arr[0];
$("#element_42").val(vs);

//enrolled
arr = urlparam[13].split(",");
vs=arr[0];
$("#element_43").val(vs);

//enrolled hours
arr = urlparam[14].split(",");
vs=arr[0];
$("#element_14").val(vs);

//major
arr = urlparam[15].split(",");
vs=arr[0];
$("#element_16").val(vs.replaceAll("%20", " "));

//graduate
arr = urlparam[16].split(",");
vs=arr[0];
if(vs == "4")
{
	$("#element_44").val("Spring 2021");
}
else if(vs == "5")
{
	$("#element_44").val("Summer 2021");
}
else if(vs == "6")
{
	$("#element_44").val("Fall 2021");
}
else if(vs == "7")
{
	$("#element_44").val("Spring 2022");
}
else if(vs == "8")
{
	$("#element_44").val("Summer 2022");
}
else if(vs == "9")
{
	$("#element_44").val("Fall 2022");
}
else if(vs == "10")
{
	$("#element_44").val("Spring 2023");
}
else if(vs == "11")
{
	$("#element_44").val("Summer 2023");
}
else if(vs == "12")
{
	$("#element_44").val("Fall 2023");
}
else if(vs == "13")
{
	$("#element_44").val("Spring 2024");
}
else if(vs == "14")
{
	$("#element_44").val("Summer 2024");
}
else if(vs == "15")
{
	$("#element_44").val("Fall 2024");
}
else if(vs == "16")
{
	$("#element_44").val("Spring 2025");
}
else if(vs == "17")
{
	$("#element_44").val("Summer 2025");
}
else if(vs == "18")
{
	$("#element_44").val("Fall 2025");
}
else if(vs == "19")
{
	$("#element_44").val("Spring 2026");
}
else if(vs == "20")
{
	$("#element_44").val("Summer 2026");
}
else if(vs == "21")
{
	$("#element_44").val("Fall 2026");
}


//assistantship
arr = urlparam[17].split(",");
vs=arr[0];
$("#element_45").val(vs);

//opt
arr = urlparam[18].split(",");
vs=arr[0];
$("#element_46").val(vs);

//address updated
arr = urlparam[19].split(",");
vs=arr[0];
$("#element_47").val(vs);
}
});