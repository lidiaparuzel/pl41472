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
    const tab = ["Display",7,8,9,"C",4,5,6,"+",1,2,3,"-",0,".","="];
    const getData = () => {
        console.log("jestem!!");
    }
    var main = document.getElementById("container");
    tab.forEach((el,id) => {
        var item=document.createElement("div");
        if (el=="Display") item.className="resultDisplay"
        else if (el==0) item.className="buttonBig";
        else item.className="buttonSmall";
        item.textContent=el;
        item.addEventListener("click", getData);
        main.appendChild(item);
    });
}

window.addEventListener('DOMContentLoaded', init);
