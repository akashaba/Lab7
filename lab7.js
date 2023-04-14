// Question 1
function askPassword(ok, fail){
    let password = prompt("Password", '')
    if(password==="rockstar"){ok()}
    else {fail()}
}

let user = {
    name: "John",
    loginOk(){
        alert(`${this.name} logged in`)
    },
    loginFailed(){
        alert(`${this.name} failed to login`)
    }
}
// Wrapper
let ok = ()=>user.loginOk()
let fail = ()=>user.loginFailed()
askPassword(ok,fail)
//Call and Apply
askPassword.call(user, ok, fail)
askPassword.apply(user, [ok, fail])
//Binding
let ok1 = user.loginOk.bind(user)
let fail1 = user.loginFailed.bind(user)
askPassword(ok1,fail1)

// Question 2
//Solved question
let group = {
    title: "Our Group",
    students: ["John", "Pete", "Alice"],
    showList: function() {
        this.students.forEach(function(student) {
            console.log(this.title + ": " + student);
          }.bind(this));
  }
};
group.showList();

// Altanatively we can use the allow funtion to inherit this from the main function since arrow functions dont have their own this. as below.
let group1 = {
    title: "Our Group",
    students: ["John", "Pete", "Alice"],
    showList: function() {
        this.students.forEach((student) =>{
            console.log(this.title + ": " + student);
          });
  }
};
group1.showList();