let data_json = JSON.parse(localStorage.getItem('ins-last-visited-products-49218')).data;
let manipulateData = data_json.slice(-3);


var script = document.createElement('script'); script.src = "https://code.jquery.com/jquery-3.4.1.min.js"; document.getElementsByTagName('head')[0].appendChild(script);
var script = document.createElement('script'); script.src = "https://kit.fontawesome.com/b99e675b6e.js"; document.getElementsByTagName('head')[0].appendChild(script);

htmlStr = `
<div class="wrapper">
    <div class="notification_wrap">
        <div class="notification_icon" id="notification_btn_id">
            <i class="fa fa-plus" id="notification_icon_fa"></i>
        </div>
        <div class="dropdown" id="notification_dropdown">
            <div class="notify_item">
                <div class="notify_img">
                    <a href="" id="a_tag_first_image">
                        <img id="first_image" src="" alt="profile_pic" style="width: 50px">
                    </a>
                </div>
                <div class="notify_info">
                    <p>20% off on<span id="first_product_name">Timeline Share</span></p>
                    <span class="notify_time">Checkout your offer</span>
                </div>
            </div>
            <div class="notify_item">
                <div class="notify_img">
                    <img id="second_image" src="" alt="profile_pic" style="width: 50px">
                </div>
                <div class="notify_info">
                    <p>Ben hur commented on your<span>Timeline Share</span></p>
                    <span class="notify_time">Click to avail the offer</span>
                </div>
            </div>
            <div class="notify_item">
                <div class="notify_img">
                    <img id="third_image" src="" alt="profile_pic" style="width: 50px">
                </div>
                <div class="notify_info">
                    <p>Meryn trant liked your<span>Cover Picture</span></p>
                    <span class="notify_time">2 hours ago</span>
                </div>
            </div>
        </div>
    </div>
</div>
<style> 
*{ 
margin: 0; 
padding: 0; 
box-sizing: border-box; 
} 
body{ 
background: #ececec; 
} 
.notification_wrap{ 
width: 500px; 
position: fixed; 
top: 50%; 
right: 0; 
transform: translateX(15%); 
z-index: 9999; 
} 
.notification_wrap .notification_icon{ 
position: relative; 
width: 50px; 
height: 50px; 
font-size: 32px; 
margin: 0 70%; 
text-align: center; 
color: #605dff; 
} 
.notification_wrap .notification_icon .fa-plus{ 
cursor: pointer; 
} 
.notification_wrap .dropdown{ 
width: 350px; 
height: auto; 
background: #fff; 
border-radius: 5px; 
box-shadow: 2px 2px 3px rgba(0,0,0,0.125); 
margin: 15px auto 0; 
padding: 15px; 
position: relative; 
display: none; 
} 
.notification_wrap .dropdown .notify_item{ 
display: flex; 
align-items: center; 
padding: 10px 0; 
border-bottom: 1px solid #dbdaff; 
} 
.notification_wrap .dropdown .notify_item:last-child{ 
border-bottom: 0px; 
} 
.notification_wrap .dropdown .notify_item .notify_img{ 
margin-right: 15px; 
} 
.notification_wrap .dropdown .notify_item .notify_info p{ 
margin-bottom: 5px; 
} 
.notification_wrap .dropdown .notify_item .notify_info p span{ 
color: #605dff; 
margin-left: 5px; 
} 
.notification_wrap .dropdown .notify_item .notify_info .notify_time{ 
color: #c5c5e6; 
font-size: 12px; 
} 
.notification_wrap .dropdown:before{ 
content: ""; 
position: absolute; 
top: -30px; 
left: 50%; 
transform: translateX(-50%); 
border: 15px solid; 
border-color: transparent transparent #fff transparent; 
} 
.notification_wrap .dropdown.active{ 
display: block; 
} 
</style>
)`

if (manipulateData.length >= 3) {
    setTimeout(
        function () {
            $("#content-layout").append(htmlStr);

            $(document).ready(function () {
                $(window).click(function () {
                    if ($('#notification_dropdown').hasClass('active')) {
                        $(".dropdown").removeClass("active");
                        $("#notification_icon_fa").toggleClass("fa-plus fa-minus");
                    }
                });
                $("#notification_icon_fa").click(function () {
                    $("#notification_icon_fa").toggleClass("fa-plus fa-minus");
                });

                $(".notification_icon .fa-plus").click(function (event) {
                    $(".dropdown").toggleClass("active");
                    event.stopPropagation();
                })
                $(".notify_item").click(function (event) {
                    event.stopPropagation();
                })


                document.getElementById("first_image").src = manipulateData[0].product_image_url;
                document.getElementById("first_product_name").innerText = manipulateData[0].name;
                document.getElementById("a_tag_first_image").href = manipulateData[0].url;


                document.getElementById("first_image").src = manipulateData[0].product_image_url;
                document.getElementById("second_image").src = manipulateData[1].product_image_url;
                document.getElementById("third_image").src = manipulateData[2].product_image_url;




            });
        }, 1500);
}