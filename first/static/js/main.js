$(document).ready(function()
{
    QueryBookingList();
    QueryAllBooking();
});

function QueryAccountList()
{
    $.ajax({
        data: "", // get the form data
        type: "POST", // GET or POST
        url: "QueryAccount", // the file to call
        success: function(data){
            /*
            $("#PlayerListInnerTable").empty();

            for(var i=0; i<= Object.keys(data).length; i++)
            {
                $("#PlayerListInnerTable").append(
                    "<tr><td>" + data[i].ID + "</td></tr>"
                );
            }
            */
            console.log(data)
        },
        error: function(){

        },
    })
}

function AddAccount()
{
    $.ajax({
        data: $("#registerForm").serialize(), // get the form data
        type: "POST", // GET or POST
        url: "AddAccount", // the file to call
        success: function(result){

            console.log(result);
            document.location.href="login"
        },
        error: function(){

        },
    })
}

function Login()
{
    $.ajax({
        data: $("#loginForm").serialize(), // get the form data
        type: "POST", // GET or POST
        url: "LoginAccount", // the file to call
        success: function(result){
            if(result["status"] == "ok")
            {
                $("#submitBtn").val("重新登入");
                alert("您已成功登入！");
                document.location.href="user";
            }
            else
            {
                alert("錯誤！");
            }
        },
        error: function(){

        },
    })
}

function AddBooking()
{
    $.ajax({
        data: $("#BookingForm").serialize(), // get the form data
        type: "POST", // GET or POST
        url: "AddBooking", // the file to call
        success: function(result){
            console.log(result);
            document.location.href="platform";
        },
        error: function(){
            alert("請輸入數字")
        },
    })
}

function QueryBookingList()
{
    $.ajax({
        data: "", // get the form data
        type: "POST", // GET or POST
        url: "QueryBooking", // the file to call
        success: function(data){
            
            $("#BookingListInnerTable").empty();

            for(var i=0; i<= Object.keys(data).length; i++)
            {
                $("#BookingListInnerTable").append(
                    "<tr><td>" + data[i].Date + "</td><td>" + data[i].Quantity + "</td><td>" + data[i].Remark + "</tr>"
                );
            }
            
            console.log(data)
        },
        error: function(){

        },
    })
}

//--文章樣式--
var tagCss = "background-color:#bc0ba;border-style:solid;\
border-width:3px;margin-bottom:1%;text-align:center;width:70%";
function QueryBookingByCity()
{
    $.ajax({
        data: $("#selectCityForm").serialize(), // get the form data
        type: "POST", // GET or POST
        url: "QueryBookingByCity", // the file to call
        success: function(returnData){
            
            $("#bookingListDiv").empty();
            
            for(var i=Object.keys(returnData).length - 1; i>= 0; --i)
            {
                $("#bookingListDiv").append(
                    "<div class='well' style=" + tagCss + "> <p class='bookingData'>養黑水虻單位：" + returnData[i].Name + "</p><p class='bookingData'>地點：" + returnData[i].Location + "</p><p class='bookingData'>可接受廚餘數量：" + returnData[i].Quantity + "</p><p class='bookingData'>推文日期：" + returnData[i].Date + "</p><p class='bookingData'>備註：" + returnData[i].Remark + "</p>" + "<p></p><div>"
                );
            }              
        },
        error: function(){

        },
    })
}


function QueryAllBooking()
{
    $.ajax({
        data: "", // get the form data
        type: "POST", // GET or POST
        url: "QueryAllBooking", // the file to call
        success: function(returnData){
            //console.log(returnData);
            $("#bookingListDiv").empty();
            
            for(var i=Object.keys(returnData).length - 1; i>= 0; --i)
            {
                $("#bookingListDiv").append(
                    "<div class='well' style=" + tagCss + "> <p class='bookingData'>養黑水虻單位：" + returnData[i].Name + "</p><p class='bookingData'>地點：" + returnData[i].Location + "</p><p class='bookingData'>可接受廚餘數量：" + returnData[i].Quantity + "</p><p class='bookingData'>推文日期：" + returnData[i].Date + "</p><p class='bookingData'>備註：" + returnData[i].Remark + "</p>" + "<p></p><div>"
                );
            }     
        },
        error: function(){

        },
    })
}