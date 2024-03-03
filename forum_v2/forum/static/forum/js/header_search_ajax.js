$(document).ready(function () {
    function sendPostRequest() {
        var search_request = $('.search__form__input').val();
        if (search_request.length >= 4) {
            var csrfToken = $('meta[name=csrf-token]').attr('content');
            var request_type = $('.subject__item.active').attr('id');
            $.ajax({
                type: 'POST',
                url: /forum/,
                headers: {
                    'X-CSRFToken': csrfToken
                },
                data: {
                    'request_type': request_type,
                    'search_request': search_request
                },
                success: function (response) {
                    console.log('POST запрос успешно отправлен');
                    if (response.message !== 'nothing founded') {
                        $('.search__results').empty();
                        console.log(response)
                        console.log(response.type)
                        if (response.type === 'result_users') {
                            console.log('LAKATMATATAG')
                            response.message.forEach(function (item) {
                                $('.search__results').append('<a href="' + item.get_absolute_url + '" class="search__result">' + item.username + '</a>');
                            });
                        } else if (response.type === 'result_discussions') {
                            response.message.forEach(function (item) {
                                $('.search__results').append('<a href="' + item.get_absolute_url + '" class="search__result">' + item.theme + '</a>');
                            });
                        }
                    } else {
                        $('.search__results').empty();
                        console.log('Ничего не найдено');
                    }
                },
                error: function (xhr, errmsg, err) {
                    console.log('Ошибка при отправке POST запроса');
                }
            });
        }
    }

    $('.search__form__input').on('input', function () {
        sendPostRequest();
    });
});