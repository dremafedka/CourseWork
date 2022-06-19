var a1 = []
var a2 = []
var a3 = []
Student.getPeopleInGroups()

document.getElementById('marks').addEventListener('click', () => {
    window.open('MainStudent2.html', '_self')
})

document.getElementById('my_group').addEventListener('click', () => {
    Student.getPeopleInMyGroup()
    document.getElementById('my_group2').style.display = 'inline'
})

document.getElementById('my_group2').addEventListener('click', () => {
    Student.HidePeopleInMyGroup()
        document.getElementById('my_group2').style.display = 'none'
    }
)



