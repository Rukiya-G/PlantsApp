function Validation(values){
    let error={}
    const email_pattern=/^[^\s@]+@[^\s@]+\.[^\s@]+$/
    const password_pattern=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{8,}$/
     if(values.email===""){
        error.email="This field is requried"
     }
     else if(!email_pattern.test(values.email)){
        error.email="Email didn't match"
     }
     else if(values.email==="aits@gmail.com"){
        error.email=""
     }
     else{
        error.email=""
     }
     if(values.password===""){
        error.password="This field is requried"
     }
   //   else if(!password_pattern.test(values.password)){
   //      error.password="password didn't match"
   //   }
     else if(values.password==="Aits123"){
      error.password=""
   }
     else{
        error.password=""
     }
     return error
}
export default Validation;