$(document).ready(function () {
    var ws = new WebSocket("ws://" + location.host + "/chat");
    
    ws.onmessage = function (e) { $('#chat').append(e.data + "\n") };

    $("form").bind('submit', function (e) {
        var message = $('#msg').val();

        if (message.length != 0) {
            ws.send(message);
            $('#msg').val(''); $('#msg').focus();
        }

        e.preventDefault();
    });
});