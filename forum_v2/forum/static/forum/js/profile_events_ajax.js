$(document).ready(function () {
    const currentUrl = window.location.href;
    $('.event__choose-reject').on('click', function () {
        const csrfToken = $('meta[name=csrf-token]').attr('content');
        const possible_friend = $(this).data('user-id');
        $.ajax({
            type: 'POST',
            headers: {
                'X-CSRFToken': csrfToken
            },
            url: currentUrl,
            data: {
                'event': 'event__friendship',
                'event_type': 'reject',
                'sender_id': possible_friend,
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
    $('.event__choose-accept').on('click', function () {
        const csrfToken = $('meta[name=csrf-token]').attr('content');
        const possible_friend = $(this).data('user-id');
        $.ajax({
            type: 'POST',
            headers: {
                'X-CSRFToken': csrfToken
            },
            url: currentUrl,
            data: {
                'event': 'event__friendship',
                'event_type': 'accept',
                'sender_id': possible_friend,
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