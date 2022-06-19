class Teacher extends Person {
    constructor(username, password) {
        super(username,password)
    }

    static name = "Федір Горбенко"

    static getDatasource() {
        var data_student_name = localStorage.getItem('datastudentname')
        var data_student_name2 = data_student_name.replace(/"/g, '')
        for (let i = 0; i < localStorage.length; i++) {

            const get = localStorage.getItem((data_student_name2)+'_mark'+(i+1))
            const getmark = JSON.parse(get)

            let searchMark = getmark.type
            let markid = mark_types.find(mark_type => mark_type.name === searchMark).id

            let searchSubject = getmark.subject
            let subjectid = subject_types.find(subject_type => subject_type.name === searchSubject).id

            datasource[i] = {subject_id: subjectid, value: getmark.value, date: getmark.date, mark_id: markid}
        }

        return datasource

    }



}