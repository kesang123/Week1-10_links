const dateOfBirth="15/02/1999"

const getStudentName= () =>{
    return"Himanshu Singhal"
}

const getCampusName = () =>{
    return "uel campus"
}

exports.getName = getStudentName
exports.location = getCampusName

exports.dob = dateOfBirth

exports.StudentGrade = (marks) =>{
    if(marks > 50 && marks < 70) return "B grade"
    else "A grade"
}