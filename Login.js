let btnTeacher = document.getElementById('btnTeacher')
let btnStudent = document.getElementById('btnStudent')
let sbmtTeacher = document.getElementById('teacherSubmit')
let sbmtStudent = document.getElementById('studentSubmit')

btnTeacher.onclick = BtnTeacher
btnStudent.onclick = BtnStudent

sbmtTeacher.onclick = SbmtTeacher
sbmtStudent.onclick = SbmtStudent

function BtnTeacher () {

   btnTeacher.disabled = true
   btnStudent.disabled = false
    document.querySelector('.studentInput').style.display = 'none'
    document.querySelector('.teacherInput').style.display = 'block'
    btnTeacher.style.color = 'blue'
    btnStudent.style.color = '#36395A'
}
function SbmtTeacher() {
    var teacherUsername = document.getElementById("teacherUsername").value
    var teacherPassword = document.getElementById("teacherPassword").value

    if (teacherUsername === teacher.username && teacherPassword === teacher.password) {
       // window.open('MainTeacher1.html', '_self')
        open('MainTeacher1.html')

    }
    if (teacherUsername === 'jack' && teacherPassword === 'iamnobody') {
        open("https://youtu.be/GNudnifI814")
    }

    if (teacherUsername !== teacher.username || teacherPassword !== teacher.password) {
        alert('Введіть правильні дані!')
    }



}

function BtnStudent () {
    btnStudent.disabled = true
    btnTeacher.disabled = false
    document.querySelector('.teacherInput').style.display = 'none'
    document.querySelector('.studentInput').style.display = 'block'
   btnStudent.style.color = 'blue'
   btnTeacher.style.color = '#36395A'
}

function SbmtStudent() {
    var studentUsername = document.getElementById("studentUsername").value
    var studentPassword = document.getElementById("studentPassword").value


    var status = 1
    for (let i = 0; i < students.length; i++) {
        if (students[i].username === studentUsername && students[i].password === studentPassword)
        {

            localStorage.setItem('datastudentname', JSON.stringify(students[i].name))
            localStorage.setItem('student_id', JSON.stringify(i))
            open("MainStudent1.html")
            status = 0
        }

        if (students[i].username !== studentUsername || students[i].password !== studentPassword)
        {
            continue
        }
    }

    if(status === 1)
    {
        alert("Неправильно введені дані")
    }


}