class Mark {
    constructor(type, subject, value, date, studentname) {
        this.type = type;
        this.subject = subject;
        this.value = value;
        this.date = date;
        this.studentname = studentname
    }

    static getDatasource2() {
        var data_student_name = localStorage.getItem('datastudentname')
        var data_student_name2 = data_student_name.replace(/"/g, '')
        for (let i = 0; i < localStorage.length; i++) {
            const get = localStorage.getItem((data_student_name2)+'_mark'+(i+1))
            const getmark = JSON.parse(get)
            datasource[i] = {subject_name: getmark.subject, value: getmark.value, date: getmark.date, mark_name: getmark.type}
        }
        return datasource
    }

}


