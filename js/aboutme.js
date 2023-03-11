
var button1 = document.getElementById("btn1");
var button2 = document.getElementById("btn2");
var div = document.getElementById('content');


button1.onclick = function() {
    div.innerHTML = '<li>Địa chỉ: 99/5 – Nguyễn Văn Cừ, <br>P.An Khánh, Q.Ninh Kiều, TP.CT</li><li>Điện thoại: +84292 3832 663</li> <li>Fax: +84292 3838474</li> <li>Email: nva @ctu.edu.vn</li> ';
};

button2.onclick = function() {
    div.innerHTML = '<li>Khu II, Đ. 3/2, P. Xuân Khánh, <br> Q.Ninh Kiều, Cần Thơ</li><li>Điện thoại: +84292 3832 663</li> <li>Fax: +84292 3838474</li><li> Email: dhct@ctu.edu.vn</li> ';
};