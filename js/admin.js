new Vue({
    el: "#modal-body",
    data: {
        product_name: "",
        product_code: "",
        number: "",
        cost: ""
    },
    methods: {
        add(){
            pname = this.product_name;
            pcode = this.product_code;
            number = this.number;
            cost = this.cost;
            if(pname == "" || pcode == "" || number == "" || cost == ""){
                alert("Vui lòng nhập đủ các trường thông tin!");
                return false;
            }
            else if(pcode.startsWith("#")==false){
                alert("Mã sản phẩm phải bắt đầu bằng #");
                return false;
            }
            else if(isNaN(number)==true || number<0){
                alert("Số lượng sản phẩm không hợp lệ!");
                return false;
            }
            else if(isNaN(cost)==true || cost<=0){
                alert("Giá tiền sản phẩm không hợp lệ!");
                return false;
            }
            else{
                alert("Sản phẩm đã được thêm thành công!")
            }
        }
    }
})