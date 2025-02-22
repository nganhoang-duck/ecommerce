new Vue({
    el: "#checkout_form",
    data: {
        firstname: "",
        lastname: "",
        address: "",
        city: "",
        email: "",
        phone: ""
    },
    methods: {
        CheckOut(){
            fname = this.firstname;
            lname = this.lastname;
            add = this.address;
            city = this.city;
            email = this.email;
            phone = this.phone;

            if (fname == "" || lname == "" || add == "" || city == "" || email == "" || phone == "") {
                alert("Vui lòng nhập đủ các trường!");
                return false;
            }
            else if (email.includes("@gmail.com") == false) {
                alert("Email sai định dạng!");
                return false;
            }
            else if (isNaN(phone) == true) {
                alert("Số điện thoại không hợp lệ!");
                return false;
            }
            else if (phone.length != 10) {
                alert("Nhập số điện thoại có 10 số!");
                return false;
            }
            else if (phone.startsWith("0") == false) {
                alert("Số điện thoại phải bắt đầu với 0");
                return false;
            }
            else {
                alert("Đơn hàng đang trong quá trình xử lý!");
            }
        }
    }
})