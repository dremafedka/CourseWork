

Thelpers.select = function(value, arr) {
    var res = arr.findItem('id', value);
    return (res) ? res.name : '';
};



//сохранение данных об оценках в локальную память
document.querySelector('.save_marks').addEventListener('click', () => {
    const get = localStorage.getItem('datastudentname')
    const getstudentname = JSON.parse(get)

    for(i=0; i < localStorage.length; i++) {
       var getstudentname2 = localStorage.key(i)
        var n = getstudentname.length
       if(getstudentname2.slice(0,n) === getstudentname)
       {
           localStorage.removeItem(getstudentname2)
       }
    }

    for (let i=0; i < datasource.length; i++){
        localStorage.setItem((getstudentname)+'_mark'+(i+1), JSON.stringify(new Mark(mark_types[(datasource[i].mark_id)-1].name ,subject_types[(datasource[i].subject_id)-1].name ,datasource[i].value,datasource[i].date, getstudentname )))
    }

})

//редактирование записи в ячейке таблицы
$('body').on('click', 'table td.edit', function(e) {
    if ($(e.target).closest('select, input, .btn-group, .btn, a').length) return;
    var tr = $(this).closest('tr');
    var ind = tr.data('index');
    var type = $(this).data('type');
    var field = $(this).data('field');
    var source = $(this).data('source');
    if (type=='textbox') {
        $(this).html('<div data---="textbox__datasource[{0}].{1}__class:form-control input-sm;keypress:true;"></div>'.format(ind, field));
    }
    if (type=='dropdown') {
        $(this).html('<div data---="dropdown__datasource[{0}].{1}__class:form-control input-sm;required:true;datasource:{2};text:name;value:id;type:number;"></div>'.format(ind, field, source));
    }
    COMPILE();
})
//добавить запись
function addRow(e) {
    if (!VALIDATE('form.*')) return;
    PUSH('datasource', form);
    SET('form', null);
    RESET('form.*');
}
//удалить запись
function remRow(e) {
    var tr = $(e).closest('tr');
    var ind = tr.data('index');
    datasource.splice(ind, 1);
    UPDATE('datasource');
}


