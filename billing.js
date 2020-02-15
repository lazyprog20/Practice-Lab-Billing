/*Add the JavaScript here for the function billingFunction().  
It is responsible for setting and clearing the fields 
in Billing Information */

var flag = "off";

function billingFunction(){
    if(flag === "off"){
        let name = document.getElementById('shippingName').value;
        let zip = document.getElementById('shippingZip').value;
    
        document.getElementById('billingName').value = name;
        document.getElementById('billingZip').value = zip;

        this.flag = "on";
    }else{
        document.getElementById('billingName').value = "";
        document.getElementById('billingZip').value = "";

        this.flag = "off";
    }
}