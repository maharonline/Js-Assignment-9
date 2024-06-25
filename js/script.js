getIputfield=(id)=> {
   return document.getElementById(id).value
}
isfound=false 

let Users = []

function handlesubmit() {
    event.preventDefault();
    let firstname = getIputfield("firstname")
    let lastname = getIputfield("lastname")
    let email = getIputfield("email")
    let dob = getIputfield("dob")

    firstname=firstname.trim()
    lastname=lastname.trim()
    email=email.trim()


    if(firstname.length<3){
        shownotify("Please Enter Your Name","error")
    }

    if(!email){
        shownotify("Please Enter Your Email Correctly","error")

    }

    if(!dob){
        shownotify("Please Enter Your Date Of Birth","error")

    }

    let user = {
        firstname,
        lastname,
        email,
        dob,

    }

    // for(let i=0;i<Users.length;i++){
    //     if(Users[i]===user.firstname && user.lastname && user.email && user.dob){
    //         isfound=true
    //         shownotify("User Already in Array","error")
    //         Users.push("")
            

    //     }
    // }
    // if(isfound===false){
    //     shownotify("NAi hai","success")
    //     Users.push(user)

    // }
    if(Users.push(user)){
        shownotify("User Successfully Added","success")
    }
    
    console.log(Users)
    showtable()
}

function showimage(){
    let image='<div class="modal-dialog modal-dialog-centered"><img src="image/download.jpeg" alt=""></div>'
    document.getElementById("output").innerHTML=image
    
   
}

//Print User

printuser=()=>{
    console.log(Users)
}




function showtable(){
    let tableStartingCode='<div class="table-responsive"><table class="table">'
    let tablehead='<thead><tr><th scope="col">#</th><th scope="col">First</th><th scope="col">Last</th><th scope="col">Email</th> <th scope="col">Date of Birthday</th><th scope="col">Age</th></tr></thead>'

  let tableendingcode='</table></div>'
  let tablebody=''
  for(let i=0;i<Users.length;i++){

      tablebody+= '<tbody><tr><th scope="row">'+(i+1)+'</th><td>'+Users[i].firstname+'</td><td>'+Users[i].lastname+'</td><td>'+Users[i].email+'</td><td>'+Users[i].dob+'</td><td></td></tr></tbody>'
}
let table=tableStartingCode +tablehead+tablebody+tableendingcode
document.getElementById("output").innerHTML=table
}

let shownotify=(msg,type)=>{
    let color=""
    if(type==="success"){
        color="linear-gradient(to right ,#1d976c,#93f9b9)"
    }

    else if(type==="error"){
        color="linear-gradient(to right ,#ed213a,#93291e)"
    }else{
        color="#000"
    }

    Toastify({
    text: msg,
    duration: 3000,
    close: true,
    gravity: "top", // `top` or `bottom`
    position: "center", // `left`, `center` or `right`
    stopOnFocus: true, // Prevents dismissing of toast on hover
    style: {
        background: color,
    },
}).showToast();
}

function otp(){
    let otp=""
    for(let i=0;i<4;i++){
       otp+=Math.floor(Math.random()*10)
    }

    
    document.getElementById("output").innerHTML=otp
    console.log(otp)

    shownotify("OTP Successfully Generated","success")
}

// console.log(Math.ceil(Math.random()*10));



