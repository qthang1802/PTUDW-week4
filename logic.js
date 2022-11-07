
function selectCalculation(){
    if(document.getElementById("plus").checked==true){
        return 1;
    }

    else if(document.getElementById("minus").checked==true){
        return 2;
    }

    else if(document.getElementById("multiply").checked==true){
        return 3;
    }

    else if(document.getElementById("divide").checked== true){
        return 4;
    }

    else {
        return 0;
    }
}


function calculate(){
    if(selectCalculation() ===1 ){
        document.getElementById("result").value =
            (parseFloat(document.getElementById("firstNumber").value)+ parseFloat(document.getElementById("secondNumber").value));
    }
    else if(selectCalculation() ===2 ){
        document.getElementById("result").value =
            (parseFloat(document.getElementById("firstNumber").value)- parseFloat(document.getElementById("secondNumber").value));
    }

    else if(selectCalculation() ===3 ){
        document.getElementById("result").value =
            (parseFloat(document.getElementById("firstNumber").value)* parseFloat(document.getElementById("secondNumber").value));
    }
    

    else if(selectCalculation() ===4 ){
        
        if(parseFloat(document.getElementById("secondNumber").value)!=0){
        document.getElementById("result").value =(parseFloat(document.getElementById("firstNumber").value)/ parseFloat(document.getElementById("secondNumber").value));
        }
        else {
            document.getElementById("result").value="Không chia được"
        }
    }
}


function checkString(_string){
    return !(Number.isNaN(Number(_string)))

}


function checkFirstNumber(){
    const firstNumber = document.getElementById("firstNumber").value;
    if(!checkString(firstNumber)){
        document.getElementById("announce").innerHTML=' giá trị số thứ nhất không là số'

    }



}

function checkSecondNumber(){
    const secondNumber = document.getElementById("secondNumber").value;
    if(!checkString(secondNumber)){
        document.getElementById("announce").innerHTML='giá trị số thứ hai không là số'
    }
}

function check(){

    document.getElementById("announce").innerText="";

    if(document.getElementById("firstNumber").value==""|| document.getElementById("secondNumber").value=="")
    document.getElementById("announce").innerHTML="Chưa điển đủ 2 số hợp lệ"

    else if(selectCalculation() ==0){
        document.getElementById("announce").innerHTML='hãy chọn phép tính'
    }
}

function Calculation(){
    check()
    calculate(parseFloat(document.getElementById("firstNumber").value),parseFloat(document.getElementById("secondNumber").value));
    
}



