
var websiteNameInput = document.getElementById("websiteNameInput");
var websiteUrlInput = document.getElementById("websiteUrlInput");
var websiteContainer = [];

if(localStorage.getItem("websites") != null){
websiteContainer = JSON.parse(localStorage.getItem("websites"))
DisplayData()
}

function addWebsite() {
  if(validationName()==true && validationUrl()==true)
  {
  var website = {
    name: websiteNameInput.value,
    url: websiteUrlInput.value
  };
 
  websiteContainer.push(website)
  localStorage.setItem("websites",JSON.stringify(websiteContainer))
  DisplayData()
  clearData()

}
}

function DisplayData() {
  var cartona = ""
  for(var  i = 0 ; i < websiteContainer.length ; i++){
    cartona += `<tr>
    <td>${i+1}</td>
    <td>${websiteContainer[i].name}</td>
    <td>
    <button class="btn btn-success" onclick="visit(${i})">
      <i class="fa-solid fa-eye "></i>
      Visit
    </button>
  </td>
    <td> <button class="btn btn-danger" onclick="deleteItem(${i})">
      <i class="fa-solid fa-trash "></i>
      Delete
    </button></td>
   
  </tr>`
  }
  document.getElementById('Tbody').innerHTML = cartona

}

function clearData(){
  websiteNameInput.value = "" ,
  websiteUrlInput.value = ""
}

function visit(index){
  window.open(websiteContainer[index].url)
 } 

function deleteItem(index){
 websiteContainer.splice(index,1)
 localStorage.setItem("websites",JSON.stringify(websiteContainer))
 DisplayData()
}


     /// validation of productName ///
    var messageName = document.getElementById('showMessage');
    function validationName() {
       var text = websiteNameInput.value;
       var reguxName = /^[A-Z][a-z]{3,8}$/;
       if (reguxName.test(text)) {
        websiteNameInput.classList.add("is-valid");
        websiteNameInput.classList.remove("is-invalid");
        messageName.classList.add('d-none');
        return true; // result of function and using of deny data in crud system
       }
     
       else
       {
         websiteNameInput.classList.add("is-invalid");
         websiteNameInput.classList.remove("is-valid");
         messageName.classList.remove('d-none');
         return false;
       }
     } 

    //  validation url 
    var showMessageUrl = document.getElementById('showMessageUrl')
    function validationUrl(){
     var text = websiteUrlInput.value;
     var reguxUrl = /^(www.)[a-zA-Z0-9]{2,256}\.([-a-zA-Z0-9@:%_\+.~#?&//=]*)$/;
     if (reguxUrl.test(text))
     {
      websiteUrlInput.classList.add('is-valid')
      websiteUrlInput.classList.remove('is-invalid')
      showMessageUrl.classList.add('d-none')
      return true
     }
     else
     {
      websiteUrlInput.classList.add('is-invalid')
      websiteUrlInput.classList.remove('is-valid')
      showMessageUrl.classList.remove('d-none')
      return false
     }
    }

