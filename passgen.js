const keys = {
  upperCase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  lowerCase: "abcdefghijklmnopqrstuvwxyz",
  number: "0123456789",
  symbol: "@#$%^&*()_+~|}{[]></-="
}
const getKey = [
  function upperCase() {
    return keys.upperCase[Math.floor(Math.random() * keys.upperCase.length)];
  },
  function lowerCase() {
    return keys.lowerCase[Math.floor(Math.random() * keys.lowerCase.length)];
  },
  function number() {
    return keys.number[Math.floor(Math.random() * keys.number.length)];
  },
  function symbol() {
    return keys.symbol[Math.floor(Math.random() * keys.symbol.length)];
  }
];

function createPassword() {
  const upper = document.getElementById("upperCase").checked;
  const lower = document.getElementById("lowerCase").checked;
  const number = document.getElementById("number").checked;
  const symbol = document.getElementById("symbol").checked;
  if (upper + lower + number + symbol == 0) {
    alert("Please select atleast one box!");
    return;
  }
  const passwordBox = document.getElementById("passwordBox");
  const length = document.getElementById("length");
  let password = "";
  while (length.value > password.length) {
    let keyToAdd = getKey[Math.floor(Math.random() * getKey.length)];
    let isChecked = document.getElementById(keyToAdd.name).checked;//
    if (isChecked) {
      password += keyToAdd();
    }
  }
  passwordBox.innerHTML = password;//
}
function copyPassword() {
  const textarea = document.createElement('textarea');
  const password = document.getElementById("passwordBox").innerText;
  if (!password) { return; }
  textarea.value = password;
  document.body.appendChild(textarea);
  textarea.select();
  document.execCommand('copy');
  textarea.remove();
  alert('Password copied to clipboard');
}

var lists = [];
document.getElementById("savebtn").addEventListener("click", function(){
    const data = document.getElementById("gmail1").value;
    console.log(data);
     lists.push(data);
    console.log(lists);
    lists.forEach((list) => {
        document.getElementById("show").innerHTML+=`<div>${list}</div>`;
                })

    lists = [];

})
document.getElementById("savebtn").addEventListener("click", function(){
  var savePWD = document.getElementById("passwordBox").innerHTML;
  console.log(savePWD);
  document.getElementById('savebtn').addEventListener('click', function(){
    newSel = "<input id='data' type='text' placeholder='Enter Mail..'><button id='bindbtn'>Bind</button>";


    document.getElementById('show').innerHTML = newSel
    document.getElementById('bindbtn').addEventListener('click', function(){
     pswddata = document.getElementById('passwordBox').innerHTML;
    maildata=
document.getElementById('data').value;
    
    const passwdBlob = new Blob([pswddata], {type: "text/plain"});  
        const mailblob = new Blob([maildata], {type: "text/plain"});
    
      const mergedBlob = new Blob([mailblob," | "," "," " ,passwdBlob], { type: "text/plain" });

const link = document.createElement("a");
link.href = URL.createObjectURL(mergedBlob);
link.download = "mergedFile.txt";

// Click the link to download the file
document.body.appendChild(link);
link.click();
})

})
})

function viewFile() {
  // Replace "filename.ext" with the actual filename and extension
  var url = "C:/Users/pavan/Downloads/mergedFile.txt";
  window.open(url);
}


