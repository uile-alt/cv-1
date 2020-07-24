let html = document.querySelector("#html");
let style = document.querySelector("#style");

let string = `/* 制作八卦图
* 首先我要准备一个div
**/
.div2{
   border: 1px solid red;
   width: 300px;
   height: 300px;
}
/* 接下来把div变成一个八卦图
* 首先把div变成一个圆
**/
.div2{
    border-radius: 50%;
    box-shadow: 0 0 3px rgba(0,0,0,0.5);
    border: none;
}
/* 八卦是黑白的
**/
.div2{
    background: linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 50%, rgba(0,0,0,1) 50%);
}
/* 八卦里面两个小球
**/
.div2::before{
    width: 150px;
    height: 150px;
    border: 1px solid red;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    background: #000;
    border-radius: 50%;
    border: none;
    background: radial-gradient(circle, rgba(255,255,255,1) 25%, rgba(0,0,0,1) 25%);
}
.div2::after{
    width: 150px;
    height: 150px;
    border: 1px solid red;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    background: #fff;
    border-radius: 50%;
    border: none;
    background: radial-gradient(circle, rgba(0,0,0,1) 25%, rgba(255,255,255,1) 25%);
}
`;

let n = 0;
let string2 = "";
let step = () => {
  setTimeout(() => {
    if (string[n] === "\n") {
      string2 += "<br>";
    } else if (string[n] === " ") {
      string2 += "&nbsp;";
    } else {
      string2 += string[n];
    }

    html.innerHTML = string2;
    style.innerHTML = string.substring(0, n);
    window.scrollTo(0, 9999);
    html.scrollTo(0, 9999);
    if (n < string.length - 1) {
      n += 1;
      step();
    }
  }, 0);
};
step();
