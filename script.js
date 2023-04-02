
//bmi hesapla fonksiyonu yazdık.



function calculateBMI() {
  //HTML'de id si weight ve height olan inputların valuesu var weight ve 
  //var height'e assign edildi.
    var weight = document.getElementById("weight").value;
    var height = document.getElementById("height").value;
    //weight ve height boş ise ekranda uyarı verdi.
    if (weight === "" || height === "") {
        alert("Weight and height can't be empty!");
        return;
      }
      //boyu metreye çevirdik.
    height = height / 100;
    //bmi formülü
    var bmi = weight / (height * height);
    
    // Sonucu iki ondalık basamağa yuvarlama
    bmi = Math.round(bmi * 100) / 100;
    //hml'de idsi result olaan div etiketine karşılık geldi.
    var resultElement = document.getElementById("result");
    //ekranda yazdırabilmek için önce boş tanımladık..
    var resultText;
    if (bmi < 16) {
      resultText = "Body Mass İndex: " + bmi + " (Severe Thinness)";
    } else if (bmi < 17) {
      resultText = "Body Mass İndex: " + bmi + " (Moderate Thinness)";
    } else if (bmi < 18.5) {
      resultText = "Body Mass İndex: " + bmi + " (Mild Thinness)";
    } else if (bmi < 25) {
      resultText = "Body Mass İndex: " + bmi + " (Normal)";
    } else if (bmi < 30) {
      resultText = "Body Mass İndex: " + bmi + " (Overweight)";
    } else if (bmi < 35) {
      resultText = "Body Mass İndex: " + bmi + " (Obese Class I)";
    } else if (bmi < 40) {
      resultText = "Body Mass İndex: " + bmi + " (Obese Class II)";
    } else {
      resultText = "Body Mass İndex: " + bmi + " (Obese Class III)";
    }
    //innerhtml ile Html elementinin içeriği değiştirilir.
    //resultText değişkenini innerhtml ile HTML sayfasında yazdırdık.
    resultElement.innerHTML = resultText;
  }
  //clearResult fonksiyonu HTML elementinin içini temizledi.
  function clearResult() {
    //html de result idsine sahip elemanı temizle dedik.
    //id si farklı olsaydı getElementById("----") buraya yacaktık
    var resultElement = document.getElementById("result");
    resultElement.innerHTML = "";
  }
  //yada clearResult("result") yapabilirdik.
  //sayfadan resim silmek istersem resmin src sini kaldırmam gerekir.
//  function clearImage(id) {
//   var imgElement = document.getElementById(id);
//   if (imgElement) {
//     imgElement.removeAttribute("src");
//   }
// }//
        








