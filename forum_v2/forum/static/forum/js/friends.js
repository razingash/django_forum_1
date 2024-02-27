document.addEventListener("DOMContentLoaded", function() {
    const friendRemove = document.querySelectorAll(".friend__remove");
    const deleteJoke = document.querySelector(".delete_joke");
    const deleteFriendField = document.querySelector(".delete_friend_field");

    // Функция для переключения отображения delete_friend_field на flex
    function toggleDeleteFriendField() {
        if (deleteFriendField.style.display === "flex") {
            deleteFriendField.style.display = "none";
        } else {
            deleteFriendField.style.display = "flex";
        }
    }

    friendRemove.forEach(function(removeButton) {
        removeButton.addEventListener("click", function() {
            toggleDeleteFriendField();

            // Получаем id пользователя из ближайшего блока content-field__friend
            const userId = this.closest(".content-field__friend").getAttribute("id");

            // Вставляем id пользователя в атрибут data-user-id
            deleteFriendField.setAttribute("data-user-id", userId);
        });
    });

    // Добавляем обработчик клика на delete_joke
    deleteJoke.addEventListener("click", function() {
        deleteFriendField.style.display = "none";
    });
});

