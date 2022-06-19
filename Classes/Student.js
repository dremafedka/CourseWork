class Student extends Person {
    constructor(username, password, name, group_id) {
        super(username, password, name);
        this._group_id = group_id
    }

    get group() {
        return this._group_id
    }


    static getPeopleInMyGroup(mygroup) {
        let students = [student1,student2, student3, student4, student5, student6, student7, student8, student9, student10]
        const get = localStorage.getItem('datastudentname')
        const getmark = JSON.parse(get)
        for (let i = 0; i < students.length; i++) {
            if (getmark === students[i].name) {
                mygroup = students[i]._group_id
            }
        }

        if (mygroup === 1)
        {
            document.getElementById('group_a1').style.display = 'block'
        }

        if (mygroup === 2)
        {
            document.getElementById('group_a2').style.display = 'block'
        }

        if (mygroup === 3)
        {
            document.getElementById('group_a3').style.display = 'block'
        }

        return mygroup


    }

    static HidePeopleInMyGroup(mygroup) {

        let students = [student1,student2, student3, student4, student5, student6, student7, student8, student9, student10]
        const get = localStorage.getItem('datastudentname')
        const getmark = JSON.parse(get)
        for (let i = 0; i < students.length; i++) {
            if (getmark === students[i].name) {
                mygroup = students[i]._group_id
            }
        }

        if (mygroup === 1)
        {
            document.getElementById('group_a1').style.display = 'none'
        }

        if (mygroup === 2)
        {
            document.getElementById('group_a2').style.display = 'none'
        }

        if (mygroup === 3)
        {
            document.getElementById('group_a3').style.display = 'none'
        }


        return mygroup
    }


}