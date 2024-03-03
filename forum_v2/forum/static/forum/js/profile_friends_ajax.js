$(document).ready(function () {
    $('.delete_kick_off').on('click', function () {
        const csrfToken = $('meta[name=csrf-token]').attr('content');
        const friend_id = $('.delete_friend_field').data('user-id');
        const currentUrl = window.location.href
        $.ajax({
            type: 'POST',
            headers: {
                'X-CSRFToken': csrfToken
            },
            url: currentUrl,
            data: {
                'event': 'broken friendship',
                'friend_id': friend_id,
            },
            success: function (response) {
                console.log('POST запрос выполнен успешно');
                location.reload();
            },
            error: function (xhr, errmsg, err) {
                console.log('Ошибка при выполнении POST запроса');
            }
        });
    });
});