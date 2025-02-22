new Vue({
    el: "#sign",
    data: {
        email: "",
        username: "",
        password: "", 
        password_retyped: ""
    },
    methods: {
        SignUp() {
            var email = this.email;
            var username = this.username;
            var password = this.password;
            var password_retyped = this.password_retyped;

            if (email == "" || username == "" || password == "" || password_retyped == "") {
                alert("Vui lòng nhập đủ các trường!");
                return false;
            }
            else if (email.includes("@gmail.com") == false) {
                alert("Email sai định dạng!");
                return false;
            }
            else if (this.CheckPassword(password)==false) {
                alert("Mật khẩu không hợp lệ: Mật khẩu có 8 kí tự, phải chứa chữ hoa, chữ thường, số và kí tự đặc biệt");
                return false;
            }
            else if (password != password_retyped){
                alert("Mật khẩu không đồng nhất!")
            }
            else {
                alert("Đăng kí thành công");
                return true;
            }
        },
        SignIn() {
            var username = this.username;
            var password = this.password;

            if (username == "" || password == "") {
                alert("Vui lòng nhập đủ các trường!");
                return false;
            }
            else if (this.CheckPassword(password)==false) {
                alert("Mật khẩu sai!");
                return false;
            }
            else {
                alert("Đăng nhập thành công");
                return true;
            }
        },
        CheckPassword(input) {
            var pass = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{7,8}$/;
            if (input.match(pass)) {
                return true;
            }
            else {
                return false;
            }
        }
    }
})