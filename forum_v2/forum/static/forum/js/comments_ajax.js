$(document).ready(function(){
    $('.grade_up').on('click', function(){
        var commentId = $(this).closest('.comment__field').attr('id');
        $.post({
            url: '/forum/discussion/{{ discussion.pk }}/',
            data: {
                'type': 'comment_grade',
                'action': 'up',
                'comment_id': commentId,
                'user_id': {{ user.id }}
            },
            success: function(response) {
                $('#' + commentId + ' .preview-rating').text(response.new_rating);
            },
            error: function(xhr, errmsg, err) {
                console.log(xhr.status + ": " + xhr.responseText);
            }
        });
    });

    $('.grade_down').on('click', function(){
        var commentId = $(this).closest('.comment__field').attr('id');
        $.post({
            url: '/forum/discussion/{{ discussion.pk }}/',
            data: {
                'type': 'comment_grade',
                'action': 'down',
                'id': commentId,
            },
            success: function(response) {
                $('#' + commentId + ' .preview-rating').text(response.new_rating);
            },
            error: function(xhr, errmsg, err) {
                console.log(xhr.status + ": " + xhr.responseText);
            }
        });
    });
});