$(document).ready(function () {
    $('.add_friend').click(function (event) {
        event.preventDefault();
        var sender_id = $(this).data('profile-id');
        var csrfToken = $('meta[name=csrf-token]').attr('content');

        var currentUrl = window.location.href
        $.ajax({
            type: 'POST',
            url: currentUrl,
            headers: {
                'X-CSRFToken': csrfToken
            },
            data: {
                'event': 'friendship',
                'sender_id': sender_id
            },
            success: function (response) {
                console.log('POST запрос успешно отправлен');
                location.reload();
            },
            error: function (xhr, errmsg, err) {
                console.log('Ошибка при отправке POST запроса');
            }
        });
    });
});
