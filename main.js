/*
poprzednie zajecia
const test = (ev, a) => {
    console.log ("Log");
    console.log (ev);
    console.log (a);
    console.log( double(a, 4))
}

const double = (a, b) => a*b;
window.addEventListener('DOMContentLoaded', x => {
    test(x, 5);
});
*/



const init = () => {
    const tab = ["",7,8,9,"C",4,5,6,"+",1,2,3,"-",0,".","="];
    const nums = ["1","2","3","4","5","6","7","8","9","0","."];
    const operations = ["+","-"];
    let op = "";
    let przecinek = 0;
    let result=0;
    let clear=0;
    let first=1;
    let temp=0;
    const calculator = (x) => {
        button = document.getElementsByClassName("resultDisplay");
        if (operations.includes(x.target.textContent) || (x.target.textContent == "C")) {przecinek=0;result=0}
        if (nums.includes(x.target.textContent)){
            if(clear==1){button[0].textContent ="";clear=0}
            if ((x.target.textContent == ".") && (przecinek == 0)) {
                button[0].textContent =  button[0].textContent + x.target.textContent;
                przecinek++;
            }
            else if ((x.target.textContent == ".") && (przecinek != 0)) {}
            else button[0].textContent =  button[0].textContent + x.target.textContent;
        }
        if (first==1) {
            temp = button[0].textContent;
            if (x.target.textContent == "-") {result=temp-parseFloat(button[0].textContent);button[0].textContent=result;clear=1;op="-";first=0}
        } else {
            if (x.target.textContent == "-") {result=temp-parseFloat(button[0].textContent);button[0].textContent=result;clear=1;op="-";first=0}
         }
         if (x.target.textContent == "+") { result=result+parseFloat(button[0].textContent);button[0].textContent=result;clear=1;op="+";first=0}

         if (x.target.textContent == "=") {
            if (op=="+") result=result+parseFloat(button[0].textContent);
            if (op=="-") result=result+parseFloat(button[0].textContent);
            button[0].textContent = result;
            clear=1;
            op="";
            first=1;
        }
        if (x.target.textContent == "C") {
            button[0].textContent = "";
            clear=0;
            przecinek=0;
            op="";
            first=1;
        }
    }
    var main = document.getElementById("container");
    tab.forEach((el,id) => {
        var item=document.createElement("div");
        if (el==="") item.className="resultDisplay"
        else if (el==0) item.className="buttonBig";
        else item.className="buttonSmall";
        item.textContent=el;
        item.addEventListener("click", x => calculator(x));
        main.appendChild(item);
    });
}

window.addEventListener('DOMContentLoaded', init);
