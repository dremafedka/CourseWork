var a1 = []
var a2 = []
var a3 = []
Student.getPeopleInGroups()

var b = []
User.GetAllDatas()



document.querySelector('.student_submit').addEventListener('click', () => {
    let data_student_name = document.querySelector('.select_student').value
    if (data_student_name) {
        console.log(data_student_name)
        localStorage.setItem('datastudentname', JSON.stringify( data_student_name ))
        // window.open('MainTeacher2.html', '_self')
        open('MainTeacher2.html')
    }
})


document.querySelector('.all_students1').addEventListener('click', () => {
    document.querySelector('.all_students2').style.display = 'inline'
    document.querySelector('.studentsingroups').style.display = 'block'
} )

document.querySelector('.all_students2').addEventListener('click', () => {
    document.querySelector('.studentsingroups').style.display = 'none'
    document.querySelector('.all_students2').style.display = 'none'
} )


document.querySelector('.all_usernames1').addEventListener('click', () => {
    document.querySelector('.all_usernames2').style.display = 'inline'
    document.querySelector('.listusernames').style.display = 'block'
} )

document.querySelector('.all_usernames2').addEventListener('click', () => {
    document.querySelector('.listusernames').style.display = 'none'
    document.querySelector('.all_usernames2').style.display = 'none'

} )