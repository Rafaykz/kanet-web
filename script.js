let main = document.querySelector("body");
let maintable = document.createElement("div");
maintable.style.display = "flex";
maintable.style.maxwidth = "100%"
maintable.style.justifyContent = "space-between"
maintable.style.alignItems = "center"
maintable.style.padding = "20px 60px 20px 60px"
main.appendChild(maintable);


var main1 = document.createElement("div");
main1.style.padding = "3px";
main1.style.color = "blue";
main1.style.display = "flex";
main1.style.gap = "10px"
main1.style.alignItems = "center"
maintable.appendChild(main1);

var image = document.createElement('img');
image.setAttribute("src", "click.png");
image.style.width = "30px"
main1.appendChild(image);

let main8 = document.createElement("div")
main8.innerHTML = "Ka-net";
main1.appendChild(main8);




let main2 = document.createElement("div");
main2.style.display = "flex"
main2.style.gap = "50px";
main2.style.fontSize = "20px"
main2.style.fontWeight = "600"
maintable.appendChild(main2);
let main4 = document.createElement("a");
main4.setAttribute("href", "#")
main4.innerHTML = "home";
main4.style.textDecoration = "none";
main4.style.color = "black";


main2.appendChild(main4);

let main5 = document.createElement("a");
main5.setAttribute("href", "#")
main5.style.textDecoration = "none";
main5.style.color = "black";
main5.innerHTML = "about us";

main2.appendChild(main5);

let main6 = document.createElement("a");
main6.setAttribute("href", "#")
main6.style.textDecoration = "none";
main6.style.color = "black";
main6.innerHTML = "Blogs";

main2.appendChild(main6);

let main7 = document.createElement("a");
main7.setAttribute("href", "#")
main7.style.textDecoration = "none";
main7.style.color = "black";
main7.innerHTML = "contect us";

main2.appendChild(main7);


let main3 = document.createElement("div");
main3.style.paddingTop = "10px";
main3.style.paddingBottom = "10px";
main3.style.paddingLeft = "50px";
main3.style.paddingRight = "50px";
main3.style.backgroundColor = "blue";
main3.innerHTML = "Connect Now";
main3.style.color = "white";
maintable.appendChild(main3);
 



let container = document.createElement("div")
container.style.display = "flex";
container.style.marginTop = "30px";
container.style.justifyContent = "space-between";
container.style.maxwidth = "100%";
container.style.padding = "20px 60px 20px 60px"

main.appendChild(container)

let container1 = document.createElement("div")
container1.style.display = "flex";
container1.style.gap = "50px"
container1.style.flexDirection = "column"
container.appendChild(container1)

let container2 = document.createElement("div")
container2.style.color = "blue";
container2.style.fontWeight = "600";
container2.style.fontSize = "40px";
container2.innerHTML = "Why Wait to Connect with <br> your favourite People?";

container1.appendChild(container2)


let container3 = document.createElement("div")
container3.style.color = "gray";
container3.style.fontWeight = "400";
container3.style.fontSize = "28px";
container3.style.width = "430px"
container3.innerHTML = "Now its easy to join your friends & family with ka-net. Download and connect seemlessly with anyone around the world. ";

container1.appendChild(container3);

let container4 = document.createElement("div");
container4.style.width = "400px";
container4.style.display = "flex";
container4.style.justifyContent = "space-between"
container4.style.alignItems = "center"
container1.appendChild(container4);

let container5 = document.createElement("div");
container5.style.backgroundColor = "black";
container5.style.color = "white";
container5.innerHTML = "Download Now"; 
container5.style.width = "40%";
container5.style.fontSize = "20px"
container5.style.padding = "15px 0px 15px 40px";
container4.appendChild(container5);

let container6 = document.createElement("div");

container6.style.display = "flex";
container6.style.gap = "30px";


var image1 = document.createElement('img');
image1.setAttribute("src", "Vector (4).png");
image1.style.width = "40px"
container6.appendChild(image1);

var image2 = document.createElement('img');
image2.setAttribute("src", "Vector (5).png");
image2.style.width = "4 0px"
container6.appendChild(image2);

container4.appendChild(container6);

let container7 = document.createElement("div");
container7.style.display = "flex";
container7.style.justifyContent = "end"
var image3 = document.createElement('img');
image3.setAttribute("src", "People.png");
image3.style.width = "90%"
container7.appendChild(image3);

container.appendChild(container7);


let userdata = document.createElement("div");
userdata.style.display = "flex";
userdata.style.marginTop = "30px";
userdata.style.justifyContent = "space-between";
userdata.style.maxwidth = "100%";
userdata.style.padding = "20px 60px 20px 60px"

main.appendChild(userdata);

let userdata1 = document.createElement("div");
userdata1.style.display = "flex";
userdata1.style.gap = "5px";
userdata1.style.alignItems = "center";
userdata.appendChild(userdata1)

let userdata2 = document.createElement("div");
userdata2.style.color = "blue";
userdata2.innerHTML  = "2M+";
userdata2.style.fontSize = '40px';
userdata2.style.fontWeight = "600";
userdata1.appendChild(userdata2);

let userdata3 = document.createElement("div");
userdata3.style.color = "blue";
userdata3.style.opacity = "0.4"
userdata3.innerHTML  = "Active User";
userdata3.style.fontSize = '30px';
userdata3.style.paddingTop = "5px";

userdata3.style.fontWeight = "600";
userdata1.appendChild(userdata3);



let userdata4 = document.createElement("div");
userdata4.style.display = "flex";
userdata4.style.gap = "5px";
userdata4.style.alignItems = "center";
userdata.appendChild(userdata4)

let userdata5 = document.createElement("div");
userdata5.style.color = "red    ";
userdata5.innerHTML  = "38K+";
userdata5.style.fontSize = '40px';
userdata5.style.fontWeight = "600";
userdata4.appendChild(userdata5);

let userdata6 = document.createElement("div");
userdata6.style.color = "red";
userdata6.style.opacity = "0.4"
userdata6.innerHTML  = "Service";
userdata6.style.fontSize = '30px';
userdata6.style.paddingTop = "5px";

userdata6.style.fontWeight = "600";
userdata4.appendChild(userdata6);




let userdata7 = document.createElement("div");
userdata7.style.display = "flex";
userdata7.style.gap = "5px";
userdata7.style.alignItems = "center";
userdata.appendChild(userdata7)

let userdata8 = document.createElement("div");
userdata8.style.color = "green  ";
userdata8.innerHTML  = "96K+";
userdata8.style.fontSize = '40px';
userdata8.style.fontWeight = "600";
userdata7.appendChild(userdata8);

let userdata9 = document.createElement("div");
userdata9.style.color = "green";
userdata9.style.opacity = "0.4"
userdata9.innerHTML  = "Reviews";
userdata9.style.fontSize = '30px';
userdata9.style.paddingTop = "5px";

userdata9.style.fontWeight = "600   ";
userdata7.appendChild(userdata9);









