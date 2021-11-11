const inpKey = document.getElementById("inpKey");

const inpValue = document.getElementById("inpValue");

const btnInsert = document.getElementById("btnInsert");

const IsOutput = document.getElementById("IsOutput");

btnInsert.onclick = function () {

  const key = inpKey.value;

  

  const value = inpValue.value;

  

  

  if (key && value) {

    sessionStorage.setItem(key, value);

    location.reload();

  }

  

};

for (let i = 0; i < sessionStorage.length; i++) {

  const key = sessionStorage.key(i);

  const value = sessionStorage.getItem(key);

  

  IsOutput.innerHTML += `${key}: ${value}<br />`;

}

