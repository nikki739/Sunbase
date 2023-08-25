
//Validate form inputs before submitting data
function validateForm(){
    var fname = document.getElementById("fname").value;
    var lname = document.getElementById("lname").value;
    var address = document.getElementById("address").value;
    var city = document.getElementById("city").value;
    var state = document.getElementById("state").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;

    if(fname == ""){
       alert("First Name is required");
       return false;
    }
    if(address = ""){
        alert("Address is required");
        return false;
    }
    if(city = ""){
        alert("City is required");
        return false;
    }
    if(state = ""){
        alert("State is required");
        return false;
    }
    if(email = ""){
        alert("Email is required");
        return false;
    }
    if(phone = ""){
        alert("Phone is required");
        return false;
    }
    else if(phone > 10){
        alert("Phone number must be of 10 digits");
        return false;
    }
    return true;
}
// function to show data
function showData(){
    var peopleList;
    if(localStorage.getItem("peopleList")== null){
        peopleList = [];
    }
    else{
        peopleList = JSON.parse(localStorage.getItem("peopleList"));
    }

    var html ="";
    peopleList.forEach(function (element,index){
        html += "<tr>";
        html += "<td>" + element.fname + "</td>";
        html += "<td>" + element.lname + "</td>";
        html += "<td>" + element.address + "</td>";
        html += "<td>" + element.city + "</td>";
        html += "<td>" + element.state + "</td>";
        html += "<td>" + element.email + "</td>";
        html += "<td>" + element.phone + "</td>";
        html += '<td><button onclick = "deleteCustomer('+index+')" data-bs-toggle="modal"<i class="bi bi-dash-circle-fill"></i></button></button><button onclick = "updateCustomer('+index+')"data-bs-toggle="modal"<i class="bi bi-pencil"></i></button>';
        html += "</tr>";  
    });

    document.querySelector("#cTable tbody").innerHTML = html;
}
//Loads All Data when document or page loaded
document.onload = showData();

// function to add data

function AddCustomer(){ 
    // if form is valid
   if(validateForm() == true) {
    var fname = document.getElementById("fname").value;
    var lname = document.getElementById("lname").value;
    var address = document.getElementById("address").value;
    var city = document.getElementById("city").value;
    var state = document.getElementById("state").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;

    var peopleList;
    if(localStorage.getItem("peopleList")== null){
        peopleList = [];
    }
    else{
        peopleList = JSON.parse(localStorage.getItem("peopleList"));
    }

    peopleList.push({
        fname : fname,
        lname : lname,
        address : address,
        city : city,
        state : state,
        email : email,
        phone : phone,
    });

    localStorage.setItem("peopleList", JSON.stringify(peopleList));
    showData();
    document.getElementById("fname").value = "";
    document.getElementById("lname").value = "";
    document.getElementById("address").value = "";
    document.getElementById("city").value = "";
    document.getElementById("state").value = "";
    document.getElementById("email").value = "";
    document.getElementById("phone").value = "";
   }
}  
 
//function to delete data
function deleteCustomer(index){
    var peopleList;
    if(localStorage.getItem("peopleList")== null){
        peopleList = [];
    }
    else{
        peopleList = JSON.parse(localStorage.getItem("peopleList"));
    }

    peopleList.splice(index,1);
        localStorage.setItem("peopleList", JSON.stringify(peopleList));
        showData();
    
}

//function to update/edit data 
function updateCustomer(index){
    document.getElementById("Add").style.display = "none";
   


    var peopleList;
    if(localStorage.getItem("peopleList")== null){
        peopleList = [];
    }
    else{
        peopleList = JSON.parse(localStorage.getItem("peopleList"));
    }

    document.getElementById("fname").value = peopleList[index].fname;
    document.getElementById("lname").value = peopleList[index].lname;
    document.getElementById("address").value = peopleList[index].address;
    document.getElementById("city").value = peopleList[index].city;
    document.getElementById("state").value = peopleList[index].state;
    document.getElementById("email").value = peopleList[index].email;
    document.getElementById("phone").value = peopleList[index].phone;
    
    document.querySelector("#Add").onclick = function(){
        if(validateForm() == true){
            peopleList[index].fname = document.getElementById("fname").value;
            peopleList[index].lname = document.getElementById("lname").value;
            peopleList[index].address = document.getElementById("address").value;
            peopleList[index].city = document.getElementById("city").value;
            peopleList[index].state = document.getElementById("state").value;
            peopleList[index].email = document.getElementById("email").value;
            peopleList[index].phone = document.getElementById("phone").value;
        
            localStorage.setItem("peopleList",JSON.stringify(peopleList));
            showData();

            document.getElementById("fname").value = "";
            document.getElementById("lname").value = "";
            document.getElementById("address").value = "";
            document.getElementById("city").value = "";
            document.getElementById("state").value = "";
            document.getElementById("email").value = "";
            document.getElementById("phone").value = "";

            document.getElementById("Add").style.display = "block";
           

        }

    }
} 