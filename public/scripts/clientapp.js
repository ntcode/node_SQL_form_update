$(document).ready(function() {

    $('#submit-button').on('click', postData);


});

function postData() {
    event.preventDefault();

    var values = {};
    $.each($('#sql-form').serializeArray(), function(i, field) {
        values[field.name] = field.value;
    });

    console.log(values);

    $.ajax({
        type: 'POST',
        url: '/people',
        data: values,
        success: function(data) {
            if(data) {
                // everything went ok
                console.log('from server:', data);
                getData();
            } else {
                console.log('error');
            }
        }
    });

}

function getData() {
    $.ajax({
        type: 'GET',
        url: '/people',
        success: function(data) {
            console.log(data);
            if(data) {
                // everything went ok
                for(var i = 0; i <=data.length; i++) {
                  $('.container').append('<div>' +
                  '<b>Name:</b> ' + data[i].name + '\n' + 
                  '<b>| Address:</b>  ' + data[i].address + '\n' +
                  '<b>| City:</b>  ' + data[i].city + '\n' +
                  '<b>| State:</b>  ' + data[i].state + '\n' +
                  '<b>| Zip Code:</b>  ' + data[i].zip_code + '</div>' + '<br>');
                }
            } else {
                console.log('error');
            }
        }
    });
}
