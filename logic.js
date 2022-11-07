function checkString(string){
    return !(Number.isNaN(Number(string)))

}


function checkFirstNumber(){
    const number = document.getElementById("firstNumber").value;
    if(!checkString(number)){
        document.getElementById("announce").innerHTML=' giá trị số thứ nhất không là số'

    }



}

function checkSecondNumber(){
    const number = document.getElementById("secondNumber").value;
    if(!checkString(number)){
        document.getElementById("announce").innerHTML='giá trị số thứ hai không là số'
    }
}



function checkCalculation(){
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
    if(checkCalculation() ===1 ){
        document.getElementById("result").value =
            (parseFloat(document.getElementById("firstNumber").value)+ parseFloat(document.getElementById("secondNumber").value));
    }
    else if(checkCalculation() ===2 ){
        document.getElementById("result").value =
            (parseFloat(document.getElementById("firstNumber").value)- parseFloat(document.getElementById("secondNumber").value));
    }

    else if(checkCalculation() ===3 ){
        document.getElementById("result").value =
            (parseFloat(document.getElementById("firstNumber").value)* parseFloat(document.getElementById("secondNumber").value));
    }
    

    else if(checkCalculation() ===4 ){
        document.getElementById("result").value =
            (parseFloat(document.getElementById("firstNumber").value)/ parseFloat(document.getElementById("secondNumber").value));
    }
}

function checkCalculation(){
    document.getElementById("announce").innerText="";
    if(document.getElementById("firstNumber").value=="" || document.getElementById("secondNumber").value==""){
        document.getElementById("announce").innerText=
        "Chưa điền đủ hai số hợp lệ để tính";
    }


    else if(checkCalculation()==0)
    document.getElementById("announce").innerHTML=
        `<p>Bấm nút <span class="text-italic">Tính</span> mà chưa chọn phép tính</p>`;

    else{
        
        calculate(parseFloat(document.getElementById("firstNumber").value),
           parseFloat(document.getElementById("secondNumber").value));

    }
}



