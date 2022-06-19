class Person extends User {
    constructor(username, password, name) {
        super(username, password);
        this.name = name;
    }
    static getPeopleInGroups() {
        let students = [student1,student2, student3, student4, student5, student6, student7, student8, student9, student10]

        for (let i = 0; i < students.length; i++) {
            var group1 = students[i]._group_id
            if (group1 === 1) {
                a1.push({name:students[i].name})
            }
        }


        for (let i = 0; i < students.length; i++) {
            var group2 = students[i]._group_id
            if (group2 === 2) {
                a2.push({name:students[i].name})
            }
        }



        for (let i = 0; i < students.length; i++) {
            var group3 = students[i]._group_id
            if (group3 === 3) {
                a3.push({name:students[i].name})
            }
        }

        return a1
        return a2
        return a3
    }
}
