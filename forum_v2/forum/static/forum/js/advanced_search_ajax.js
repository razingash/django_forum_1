//sorting
$(document).ready(function () {
    $('.bunch__apply').on('click', function () {
        var tags_p = [];
        var tags_n = [];
        var p_orients_p = [];
        var p_orients_n = [];
        var csrfToken = $('meta[name=csrf-token]').attr('content');
        var minLvl = $('#author__lvl__minimal').val().trim();
        var maxLvl = $('#author__lvl__maximal').val().trim();
        var level_limits = {};
        var currentUrl = window.location.href

        if (!isNaN(minLvl)) {
            level_limits['min'] = minLvl;
        }
        if (!isNaN(maxLvl)) {
            level_limits['max'] = maxLvl;
        }

        $('.bunch__tag__checkbox').each(function () {
            var id = $(this).attr('id');
            var value = $(this).val();

            if (value === '1') {
                tags_p.push(id);
            } else if (value === '2') {
                tags_n.push(id);
            }
        });
        $('.p_orientation__checkbox').each(function () {
            // Получаем id и value текущего элемента
            var id = $(this).attr('id');
            var value = $(this).val();

            if (value === '1') {
                p_orients_p.push(id);
            }
            if (value === '2') {
                p_orients_n.push(id);
            }
        });

        $.ajax({
            type: "POST",
            headers: {
                'X-CSRFToken': csrfToken
            },
            url: currentUrl,
            contentType: 'application/json',
            data: JSON.stringify({
                'request_type': 'advanced_search',
                'level_limits': level_limits,
                'tags_p': tags_p,
                'tags_n': tags_n,
                'p_orients_p': p_orients_p,
                'p_orients_n': p_orients_n
            }),
            success: function (response) {
                if (response.reload_page) {
                    location.reload();
                }
            },
            error: function (xhr, status, error) {
                console.error('Ошибка при отправке POST запроса:', error);
            }
        });
    });
});
//grading
$(document).ready(function () {
    var csrfToken = $('meta[name=csrf-token]').attr('content');
    var currentUrl = window.location.href
    var userId = $('meta[name="user-id"]').attr('content');
    $('.grade_up').on('click', function () {
        var discussion_id = $(this).closest('.preview').attr('id');
        $.post({
            url: currentUrl,
            headers: {
                'X-CSRFToken': csrfToken
            },
            data: {
                'request_type': 'discussion_grade',
                'action': 'up',
                'discussion_id': discussion_id,
                'user_id': userId
            },
            success: function (response) {
                console.log(response.new_rating)
                $('#' + discussion_id + ' .preview-rating').text(response.new_rating);
            },
            error: function (xhr, errmsg, err) {
                console.log(err);
            }
        });
    });

    $('.grade_down').on('click', function () {
        var discussion_id = $(this).closest('.preview').attr('id');
        $.post({
            url: currentUrl,
            headers: {
                'X-CSRFToken': csrfToken
            },
            data: {
                'request_type': 'discussion_grade',
                'action': 'down',
                'discussion_id': discussion_id,
                'user_id': userId
            },
            success: function (response) {
                console.log(response.new_rating)
                $('#' + discussion_id + ' .preview-rating').text(response.new_rating);
            },
            error: function (xhr, errmsg, err) {
                console.log(err);
            }
        });
    });
});