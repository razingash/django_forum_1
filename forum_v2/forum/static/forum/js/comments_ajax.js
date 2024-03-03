//comments manipulations
$(document).ready(function() {
    const currentUrl = window.location.href
    const csrfToken = $('meta[name=csrf-token]').attr('content');
    const userId = $('meta[name="user-id"]').attr('content');
    const discussionId = $('meta[name="discussion-id"]').attr('content');
    $('.movement__annihilate').on('click', function () {
        var commentId = $(this).closest('.comment__field').attr('id');
        $.post({
            url: currentUrl,
            headers: {
                'X-CSRFToken': csrfToken
            },
            data: {
                'request_type': 'comment_delete',
                'discussion_id': discussionId,
                'comment_id': commentId,
                'user_id': userId
            },
            success: function (response) {
                console.log('success')
            },
            error: function (xhr, errmsg, err) {
                console.log(xhr.status + ": " + xhr.responseText);
            }
        });
    });
    $('.editing__text_input').on('click', function () {
        var commentId = $(this).closest('.comment__field').attr('id');
        var editedText = $(this).closest('.comment__field').find('.editing__textarea').val();
        $.post({
            url: currentUrl,
            headers: {
                'X-CSRFToken': csrfToken
            },
            data: {
                'request_type': 'comment_editing',
                'discussion_id': discussionId,
                'comment_id': commentId,
                'user_id': userId,
                'edited_text': editedText
            },
            success: function (response) {
                location.reload()
            },
            error: function (xhr, errmsg, err) {
                console.log('Ошибка при отправке POST-запроса');
            }
        });
    });
    $('.reply__text_input').on('click', function () {
        var commentId = $(this).closest('.comment__field').attr('id');
        var repliedText = $(this).closest('.editing__field').find('.reply__textarea').val();
        $.post({
            url: currentUrl,
            headers: {
                'X-CSRFToken': csrfToken
            },
            data: {
                'request_type': 'comment_reply',
                'discussion_id': discussionId,
                'comment_id': commentId,
                'user_id': userId,
                'repliedText': repliedText,
            },
            success: function (response) {
                location.reload()
            },
            error: function (xhr, errmsg, err) {
                console.log('Ошибка при отправке POST-запроса');
            }
        });
    });
    $('.new_comment__text_input').on('click', function () {
        var csrfToken = $('meta[name=csrf-token]').attr('content');
        var commentText = $(this).closest('form').find('.editing__textarea').val();
        $.post({
            url: currentUrl,
            headers: {
                'X-CSRFToken': csrfToken
            },
            data: {
                'request_type': 'comment_new',
                'discussion_id': discussionId,
                'user_id': userId,
                'comment_text': commentText
            },
            success: function (response) {
                location.reload()
            },
            error: function (xhr, errmsg, err) {
                console.log('Ошибка при отправке POST-запроса');
            }
        });
    });

    //grading
    $('.grade_up').on('click', function () {
        var commentId = $(this).closest('.comment__field').attr('id');
        $.post({
            url: currentUrl,
            headers: {
                'X-CSRFToken': csrfToken
            },
            data: {
                'request_type': 'comment_grade',
                'action': 'up',
                'comment_id': commentId,
                'user_id': userId
            },
            success: function (response) {
                $('#' + commentId + ' .preview-rating').text(response.new_rating);
            },
            error: function (xhr, errmsg, err) {
                console.log(xhr.status + ": " + xhr.responseText);
            }
        });
    });
    $('.grade_down').on('click', function(){
        var commentId = $(this).closest('.comment__field').attr('id');
        $.post({
            url: currentUrl,
            headers: {
                'X-CSRFToken': csrfToken
            },
            data: {
                'request_type': 'comment_grade',
                'action': 'down',
                'comment_id': commentId,
                'user_id': userId
            },
            success: function (response) {
                $('#' + commentId + ' .preview-rating').text(response.new_rating);
            },
            error: function (xhr, errmsg, err) {
                console.log(xhr.status + ": " + xhr.responseText);
            }
        });
    });
});