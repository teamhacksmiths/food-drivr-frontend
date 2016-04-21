import $ from 'jquery';

var Models = function() {
    $(document).ready(function() {
        var donations = [];
        $.ajax({
            url: 'https://wastenotfoodtaxi.herokuapp.com/api/v1/users/',
            type: 'POST',
            dataType: 'json',
            success: function() {
                console.log('excellent');
            },
            error: function() {
                alert('boo!');
            },
            headers: {
                'Content-Type': 'application/json',
//                'Authorization': 'sxmZ9FczHE-Nz-ykFcea'
            }
//            beforeSend: setHeader()
        }).done(function(data) {
            donations.push(data);
            console.log(data);
        });


        function setHeader(xhr) {
//            xhr.setRequestHeader('Content-Type', 'application/json');
//            xhr.setRequestHeader('Authorization', 'sxmZ9FczHE-Nz-ykFcea');
        }
    });
};

module.exports = Models;