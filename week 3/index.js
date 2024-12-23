/*First Exercise*/
function EmployeeInfo(name, salary){
    console.log("welcome" + name + "your salary is" + salary)
}

EmployeeInfo("Himashu,50000")
EmployeeInfo("jim",40000)

/*second exercise*/

const EmpSkills=(skills)=>{
    console.log("Expert in " + skills)
}
EmpSkills("java")
EmpSkills("python")
EmpSkills("javascript")

/*Third exercise*/
const studentInfo =  require('./student info')

console.log("student Name : " +studentInfo.getName())
console.log(studentInfo.location())
console.log(studentInfo.dob)

console.log(studentInfo.StudentGrade(69))

const Person=  require('./person')
Person1 = new Person ("himanshu", 24,"myemail@gmail.com")

console.log("Using person module" +Person1.getPersonInfo())
console.log("program end")

os=require("os")
const util=require('util')
console.log("temporary directory"+ os.tmpdir() )
console.log("hostname: "+ os.hostname())
console.log("OS : " + os.platform() +"release:"+ os.release())
console.log("Uptime"+ (os.uptime())/3600 +" hours")
console.log("userInfo" + util.inspect(os.userInfo()))
console.log("Memory "+ os.totalmem()/1000000000 + "Giga byte")
console.log(" free: "+os.freemem()/1000000000 + "Giga byte")
console.log("CPU "+ util.inspect(os.cpus()))
console.log("Network"+ util.inspect(os.networkInterfaces()))
console.log("programe end")
