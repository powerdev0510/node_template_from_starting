$(document).ready(function() {

    $.ajax({
        url: 'https://api.quadrigacx.com/public/info',
        type: 'get',
        success: function(data) {
            console.log(data);
            $("#list_content").html(JSON.stringify(data));
        }
    });
})