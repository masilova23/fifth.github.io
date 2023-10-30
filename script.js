function isNumberKey(evt)
{
    var charCode = (evt.which) ? evt.which : event.keyCode;
    if(charCode > 31 && (charCode < 48 || charCode > 57)){
        alert("Вы должны использовать цифры.");
        return false;
    }
    return true;
}
function calc() {
    var kittens = document.getElementById("kittens");
    var count = document.getElementById("count").value;
    if(count==""){alert("Вы не указали количество");}
    else if(count<0){alert("Количество не может быть отрицательным");}
    else{
      var price = 0;
      price += parseInt(kittens.options[kittens.selectedIndex].value);
      price = parseInt(count) * price;
      document.getElementById('result').innerHTML = "Стоимость равна: "+ price +" р.";
    }
  }
