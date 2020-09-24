
    var countUpValue = 1;
    window.onload = function onLoad(){
      target = document.getElementById("quiz-count");
      target.innerHTML = countUpValue + "/30";
      };
//ボタンを押すごとに画面が切り替わる関数
  $(function () {

    $(".btn").on("click", function () {
      $(this).closest("div").css("display", "none");
      id = $(this).attr("href");
      $(id).addClass("fit").fadeIn("slow").show();
    });
      
    let targets = document.getElementsByClassName("btn");
    for(let i = 0; i < targets.length; i++){
      targets[i].addEventListener("click",() => {
        countUpValue += 1;
        target = document.getElementById("quiz-count");
        target.innerHTML = countUpValue + "/30";
        console.log("pressed");
      }, false);
    }

//選択ボタンデータを配列に入れてカウントする関数
      var countA;
      var countB;
      var countC;
      var countD;
      var countE;
      var box =[];
    $(".btn").each(function(){
     
      $(this).on('click',function(){
        var value = $(this).data("value");
         box.push(value);
         
        countA = box.filter(function(x){
                      return x === "a"
                    }).length;
        countB = box.filter(function(y){
                        return y === "b"
                    }).length;
        countC = box.filter(function(z){
                        return z === "c"
                    }).length;
        countD = box.filter(function(v){
                        return v === "d"
                    }).length;
        countE = box.filter(function(w){
                        return w === "e"
                    }).length;                    
      });
    });
    const percentFormatter = new Intl.NumberFormat('ja', { style: 'percent' });
    

//結果を出力する関数
    $('.end').on('click',function(){
        const countTotal = countA + countB + countC + countD + countE;
        $('.app-theme').css("display","none");
        $('#answer_01').css("display","");
        $('#resultA').html(percentFormatter.format(countA/countTotal)); //回答1
        $('#resultB').html(percentFormatter.format(countB/countTotal)); //回答1
        $('#resultC').html(percentFormatter.format(countC/countTotal)); //回答1
        $('#resultD').html(percentFormatter.format(countD/countTotal)); //回答1
        $('#resultE').html(percentFormatter.format(countE/countTotal)); //回答1
        var countMax = countA;
        if (countMax <= countB){
          countMax = countB;
        }
        if (countMax <= countC){
          countMax = countC;
        }
        if (countMax <= countD){
          countMax = countD;
        }
        if (countMax <= countE){
          countMax = countE;
        }
        if (countMax == countA){
          $('.type-image').attr('src','images/image-words.svg');
          $('.result_type').html('<h4>肯定の言葉</h4>');
          $('.result_message').html('励ましや感謝の気持など、褒めてくれる言葉を言われたときに愛を感じるタイプです。<br>「今日可愛いね」「いつもありがとう」などの言葉に愛情を感じます。');
        } else if (countMax == countB){
          $('.type-image').attr('src','images/image-time.svg');
          $('.result_type').html('<h4>充実した時間</h4>');
          $('.result_message').html('恋人と一緒に時間を過ごすことで愛情を感じます。<br>ただ一緒にいれば良いのではなく、恋人が自分に集中してくれる時に愛を感じます。話している時に携帯などは触ってほしくないです。');
        } else if (countMax == countC){
          $('.type-image').attr('src','images/image-present.svg');
          $('.result_type').html('<h4>プレゼント</h4>');
          $('.result_message').html('プレゼントをもらうことで愛情を感じます。<br>値段ではなく、「自分のことを考えて何かを買ってくれた」ということに幸せを見出します。');
        } else if (countMax == countD){
          $('.type-image').attr('src','images/image-volunteer.svg');
          $('.result_type').html('<h4>奉仕活動</h4>');
          $('.result_message').html('ただ奉仕されるのではなく、自分が必要としていることをしてもらうと愛情を感じます。<br>困っているときに、助けてもらえるととても幸せです。');
        } else {
          $('.type-image').attr('src','images/image-contact.svg');
          $('.result_type').html('<h4>スキンシップ</h4>');
          $('.result_message').html('手をつないだり、触れ合うことで愛情を感じます。<br>恋人が先にスキンシップをしてくれると大きな幸せを感じます。');
        }
  });

});
