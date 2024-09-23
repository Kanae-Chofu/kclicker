
let amountK =0;
let p5 =0; //＋５機能をオフにする
let p100 =0;
let timerStringDOM; //タイマーの時間を表示する場所を覚えておく変数
let plusamountpersec; //1秒あたり自動で増える数を0にする

//ここに記述したイベントは、htmlが完全に読み込まれた後から実行される。
window.onload = function(){
    timerStringDOM = document.getElementById('timerString');

}
var plus1 = function(){
    amountK = amountK +1 ; //1増やす
    document.getElementById('amountK').
    textContent=amountK;
}

var plus5 = function(){
    if (p5 == 1){
    amountK = amountK +5 ; //5増やす
    document.getElementById('amountK').
    textContent=amountK;
    }
}

var plus100 = function(){
    if (p100 == 1){
    amountK = amountK +100 ; //5増やす
    document.getElementById('amountK').
    textContent=amountK;
    }
}

var addp5 = function(){
    if (amountK > 20){
        if(p5 ==0){
    amountK = amountK -20; //20減らす
    p5 = 1;　//+5機能をオンにする
    document.getElementById('amountK').
    textContent=amountK;
    }
}
}

var addp100 = function(){
    if (amountK > 500){
        if(p100 ==0){
    amountK = amountK - 500; //500減らす
    p100 = 1;　//+5機能をオンにする
    document.getElementById('amountK').
    textContent=amountK;
    }
}
}

var addp5 = function(){
    if (amountK > 100){
    amountK = amountK -100; //100減らす
    plusamountpersec = plusamountpersec + 1;　//1秒で増える数を1増やす
   document.getElementById('plusamountpersec').
    textContent=amountK;
    }
}
