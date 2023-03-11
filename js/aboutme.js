
var button1 = document.getElementById("btn1");
var button2 = document.getElementById("btn2");
var div = document.getElementById('content');


button1.onclick = function() {
    div.innerHTML = '<li>Địa chỉ: 249 – Tich Phuc, Khanh Thanh Tan, Mo Cay Bac, Ben Tre</li><li>Điện thoại: +84 3 65209761</li> <li>Work: +84 8 65879617</li> <li>Email: ngminhkha.bt@gmail.com</li> ';
};

button2.onclick = function() {
    div.innerHTML = '<li>Khu II, Đ. 3/2, P. Xuân Khánh, <br> Q.Ninh Kiều, Cần Thơ</li><li>Điện thoại: +84292 3832 663</li> <li>Fax: +84292 3838474</li><li> Email: dhct@ctu.edu.vn</li> ';
};