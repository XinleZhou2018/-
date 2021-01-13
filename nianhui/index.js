var threeButton = document.getElementById("threeButton");
var twoButton = document.getElementById("twoButton");
var oneButton = document.getElementById("oneButton");
var resetButton = document.getElementById("resetButton");

var loading = document.getElementById("loading");

// 关志军
var persons = ["庄炎", "肖立松", "潘淑人", "杨荣", "沈丽", "袁野", "黄润诗", "武国俊", "吴禹瞳", "刘天", "向辉军","覃空"];
var there_nums = 4;
var two_nums = 3;
var one_nums = 2;

window.onload = function () {
    console.log("haha");

    loading.hidden = true;

    threeButton.disabled = false;
    twoButton.disabled = true;
    oneButton.disabled = true;
    resetButton.disabled = false;

    var persons_3;  //三等奖获奖名单
    var persons_2;  //二等奖获奖名单
    var persons_1;  //一等奖获奖名单


    threeButton.onclick = function () {
        console.log("threeButton");
        threeButton.disabled = true;

        //开始抽三等奖
        loading.hidden = false;
        persons_3 = getRandomArrayElements(persons, there_nums);

        //延迟3秒
        setTimeout(function () {
            loading.hidden = true;
            console.log(persons_3);
            var string = persons_3.join("、");
            var r_string = "<p class='threeText'>" + "三等奖名单：" + string + "</p>";
            document.getElementById("threeGift").innerHTML = r_string;

            twoButton.disabled = false;
        }, 3000);
    }

    twoButton.onclick = function () {
        twoButton.disabled = true;

        //开始抽二等奖
        loading.hidden = false;

        var persons2 = [];

        for (let i of persons){
            if (persons_3.indexOf(i) ===  -1){
                persons2.push(i);
            }
        }

        persons_2 = getRandomArrayElements(persons2, two_nums);

        //延迟3秒
        setTimeout(function () {
            loading.hidden = true;
            console.log(persons_2);
            var string = persons_2.join("、");
            var r_string = "<p class='twoText'>" + "二等奖名单：" + string + "</p>";
            document.getElementById("twoGift").innerHTML = r_string;

            oneButton.disabled = false;
        }, 3000);
    }

    oneButton.onclick = function () {
        oneButton.disabled = true;

        //开始抽一等奖
        loading.hidden = false;

        var persons1 = [];

        //已经抽出的名单
        var arr = persons_3.concat(persons_2);

        for (let i of persons){
            if (arr.indexOf(i) ===  -1){
                persons1.push(i);
            }
        }

        persons_1 = getRandomArrayElements(persons1, one_nums);

        //参与奖名单
        var arr_1 = arr.concat(persons_1);
        var canyuPersons = [];
        for (let i of persons){
            if (arr_1.indexOf(i) ===  -1){
                canyuPersons.push(i);
            }
        }


        //延迟3秒
        setTimeout(function () {
            loading.hidden = true;
            console.log(persons_1);
            var string = persons_1.join("、");
            var r_string = "<p class='oneText'>" + "一等奖名单：" + string + "</p>";
            document.getElementById("oneGift").innerHTML = r_string;

            var string1 = canyuPersons.join("、");
            var r_string1 = "<p class='zeroText'>" + "纪念奖名单："+ "关志军、" + string1 + "</p>";
            document.getElementById("zeroGift").innerHTML = r_string1;
            }, 3000);
    }

    resetButton.onclick = function () {
        threeButton.disabled = false;
        twoButton.disabled = true;
        oneButton.disabled = true;

        persons_3 = null;
        persons_2 = null;
        persons_1 = null;

        document.getElementById("threeGift").innerHTML = "";
        document.getElementById("twoGift").innerHTML = "";
        document.getElementById("oneGift").innerHTML = "";
        document.getElementById("zeroGift").innerHTML = "";
    }

}

function getRandomArrayElements(arr, count) {
    var shuffled = arr.slice(0), i = arr.length, min = i - count, temp, index;
    while (i-- > min) {
        index = Math.floor((i + 1) * Math.random());
        temp = shuffled[index];
        shuffled[index] = shuffled[i];
        shuffled[i] = temp;
    }
    return shuffled.slice(min);
}