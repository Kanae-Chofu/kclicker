//1兆個検討を積み重ねればゲームクリア

let amountK =10000; //時短のため+10000にとりあえずしておく。公開の時は0に戻す
let p5 = 0; //＋５機能をオフにする
let p100 =0;
let p1000 = 0;
let p10000 =0;
let p100000 =0;
let p1000000 =0;
let p10000000 =0;
let p100000000 =0;
let timerStringDOM; //タイマーの時間を表示する場所を覚えておく変数
let plusamountpersec =0; //1秒あたり自動で増える数を0にする


//countup.htmlのidを呼び出して定数に格納
const timer = document.getElementById('timer');
const start = document.getElementById("start");
//開始時間の変数をセット
let startTime;

//変数startTimeに現在の時間(Date.now())を入れる
    startTime = Date.now();
    console.log(startTime);
    countUp(); //関数countUp()を呼び出す

//ここに記述したイベントは、htmlが完全に読み込まれた後から実行される。
window.onload = function(){
    timerStringDOM = document.getElementById('timerString');

}
const plus1 = function(){
    amountK = amountK +1 ; //1増やす
    document.getElementById('amountK').
    textContent=amountK;
}

const plus5 = function(){
   if (p5 == 1){
    amountK = amountK +5 ; //5増やす
    document.getElementById('amountK').
    textContent=amountK;
   }
}

const plus100 = function(){
    if (p100 == 1){
    amountK = amountK +100 ; //100増やす
    document.getElementById('amountK').
    textContent=amountK;
    }
}

const plus1000 = function(){
    if (p1000 == 1){
    amountK = amountK +1000 ; //1000増やす
    document.getElementById('amountK').
    textContent=amountK;
    }
}

const plus10000 = function(){
    if (p10000 == 1){
    amountK = amountK +10000 ; //10000増やす
    document.getElementById('amountK').
    textContent=amountK;
    }
}

const plus100000 = function(){
    if (p100000 == 1){
    amountK = amountK +100000 ; //100000増やす
    document.getElementById('amountK').
    textContent=amountK;
    }
}

const plus1000000 = function(){
    if (p1000000 == 1){
    amountK = amountK +1000000 ; //100万増やす
    document.getElementById('amountK').
    textContent=amountK;
    }
}

const plus10000000 = function(){
    if (p10000000 == 1){
    amountK = amountK +10000000 ; //1000万増やす
    document.getElementById('amountK').
    textContent=amountK;
    }
}

const plus100000000 = function(){
    if (p100000000 == 1){
    amountK = amountK +100000000 ; //1億増やす
    document.getElementById('amountK').
    textContent=amountK;
    }
}

const addp5 = function(){
  if (amountK > 20){
       if(p5 ==0){
    amountK = amountK -20; //20減らす
    p5 = 1;　//+5機能をオンにする
    document.getElementById('amountK').
    textContent=amountK;
  }
  }
}

const addp100 = function(){
    if (amountK > 500){
        if(p100 ==0){
    amountK = amountK - 500; //500減らす
    p100 = 1;　//+5機能をオンにする
    document.getElementById('amountK').
    textContent=amountK;
    }
}
}


const addp1000 = function(){
    if (amountK > 5000){
        if(p1000 ==0){
    amountK = amountK - 5000; //5000減らす
    p1000 = 1;　//+1000機能をオンにする
    document.getElementById('amountK').
    textContent=amountK;
    }
}
}

const addp10000 = function(){
    if (amountK > 100000){
        if(p10000 ==0){
    amountK = amountK - 100000; //100000減らす
    p10000 = 1;　//+1000機能をオンにする
    document.getElementById('amountK').
    textContent=amountK;
    }
}
}


const addp100000 = function(){
    if (amountK > 1500000){
        if(p100000 ==0){
    amountK = amountK - 1500000; //150万減らす
    p100000 = 1;　//+10000機能をオンにする
    document.getElementById('amountK').
    textContent=amountK;
    }
}
}

const addp1000000 = function(){
    if (amountK > 15000000){
        if(p1000000 ==0){
    amountK = amountK - 15000000; //1500万減らす
    p1000000 = 1;　//+100万機能をオンにする
    document.getElementById('amountK').
    textContent=amountK;
    }
}
}

const addp10000000 = function(){
    if (amountK > 150000000){
        if(p10000000 ==0){
    amountK = amountK - 150000000; //1.5億減らす
    p10000000 = 1;　//+1000万機能をオンにする
    document.getElementById('amountK').
    textContent=amountK;
    }
}
}

const addp100000000 = function(){
    if (amountK > 2000000000){
        if(p100000000 ==0){
    amountK = amountK - 2000000000; //20億減らす
    p100000000 = 1;　//+1億機能をオンにする
    document.getElementById('amountK').
    textContent=amountK;
    }
}
}

const auto1 = function(){
    if (amountK > 100){
    amountK = amountK -100; //100減らす
    document.getElementById('amountK').
    textContent=amountK;
    plusamountpersec = plusamountpersec + 1;　//1秒で増える数を1増やす
   document.getElementById('plusamountpersec').
    textContent=plusamountpersec;
    }
}

const auto10 = function(){
    if (amountK > 950){
    amountK = amountK - 950; //950減らす
    document.getElementById('amountK').
    textContent=amountK;
    plusamountpersec = plusamountpersec + 10;　//1秒で増える数を10増やす
   document.getElementById('plusamountpersec').
    textContent=plusamountpersec;
    }
}

const auto100 = function(){
    if (amountK > 9300){
    amountK = amountK - 9300; //9300減らす
    document.getElementById('amountK').
    textContent=amountK;
    plusamountpersec = plusamountpersec + 100;　//1秒で増える数を100増やす
   document.getElementById('plusamountpersec').
    textContent=plusamountpersec;
    }
}

const auto10000 = function(){
    if (amountK > 920000){
    amountK = amountK - 920000; //920000減らす
    document.getElementById('amountK').
    textContent=amountK;
    plusamountpersec = plusamountpersec + 10000;　//1秒で増える数を10000増やす
   document.getElementById('plusamountpersec').
    textContent=plusamountpersec;
    }
}

const auto1000000 = function(){
    if (amountK > 91000000){
    amountK = amountK - 91000000; //91000000減らす
    document.getElementById('amountK').
    textContent=amountK;
    plusamountpersec = plusamountpersec + 1000000;　//1秒で増える数を1000000増やす
   document.getElementById('plusamountpersec').
    textContent=plusamountpersec;
    }
}

//備考（本プログラムとは関係なし）
//検討クリッカーでは、最初に+1ボタンを
//押したときにカウントイベントを発動させることで
//正確な時間を測りたいと思う。

//countUp()関数の中身
   function countUp(){
        //現在の時間からstartボタンを引いた時間を定数dに格納
        const d=new Date(Date.now()- startTime);
        //d.getMinutes()で定数dに格納されている「分」の部分を取り出す
        //padStart()で必要な桁数を指定
        const m=String(d.getMinutes()).padStart(2,"0");
       const s=String(d.getSeconds()).padStart(2,"0");
        const ms =String(d.getMilliseconds()).padStart(3,"0");
        //定数タイマーのテキストに上記で取り出した時間を表示
       timer.textContent = `${m}:${s},${ms}`;
        //setTimeout()で関数countUp()を10みり秒ごとに繰り返す
       setTimeout(() => {
            countUp();
        }, 10);
 }

//1秒ごとにplusamountpersec分amountKを追加する
const autoplusing = setInterval(function(){
    console.log(autoplusing);
amountK = amountK + plusamountpersec;
document.getElementById('amountK').
textContent = amountK;
}, 1000);