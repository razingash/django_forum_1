//advanced search for DDA
document.addEventListener('DOMContentLoaded', function () {
    // Получаем все чекбоксы
    const PolitOrientationCheckboxes = document.querySelectorAll('.p_orientation__item input[type="checkbox"]');
    const TagsCheckboxes = document.querySelectorAll('.bunch__tag input[type="checkbox"]');
    const UserInfoReset = document.getElementById('user_info__reset')
    const TagsReset = document.getElementById('tags__reset')
    //открытие\закрытие нижнего меню
    const ContainerAS = document.querySelector('.advanced_search__bunch');
    const ButtonAS1 = document.getElementById('advanced_search_button_1');
    const ButtonAS2 = document.getElementById('advanced_search_button_2');
    const ButtonCancle = document.querySelector('.bunch__cancle');
    //очистка level
    const MinAuthorLevel = document.getElementById('author__lvl__minimal');
    const MaxAuthorLevel = document.getElementById('author__lvl__maximal');


    ButtonCancle.addEventListener('click', function() {
        ContainerAS.style.bottom = '-500px';
    });

    function toggleContainerAS() {
        if (ContainerAS.style.display === 'flex') {
            ContainerAS.style.display = 'none';
        } else {
            ContainerAS.style.display = 'flex';
        }
    }
    ButtonAS2.addEventListener("click", function() {
        ContainerAS.style.bottom = "0";
    });

    // Добавляем обработчик события для ButtonAS1
    ButtonAS1.addEventListener('click', toggleContainerAS);

    // Добавляем обработчик события для ButtonAS2
    //ButtonAS2.addEventListener('click', toggleContainerAS);

    //сброс value
    UserInfoReset.addEventListener('click', function () {
        MinAuthorLevel.value = "";
        MaxAuthorLevel.value = "";

        PolitOrientationCheckboxes.forEach((checkbox) => {
            checkbox.value = 0;
            updateCheckboxState(checkbox);
        });
    });
    TagsReset.addEventListener('click', function () {
        TagsCheckboxes.forEach((checkbox) => {
            checkbox.value = 0;
            updateCheckboxState(checkbox);
        });
    });

    // Применяем сохраненные состояния для PolitOrientation
    PolitOrientationCheckboxes.forEach((checkbox) => {
        updateCheckboxState(checkbox);
    });
    TagsCheckboxes.forEach((checkbox) => {
        updateCheckboxState(checkbox);
    });

    // Добавляем обработчик события для каждого чекбокса
    PolitOrientationCheckboxes.forEach((checkbox) => {
        checkbox.addEventListener('click', function () {
            updateCheckbox(checkbox);
        });
    });
    TagsCheckboxes.forEach((checkbox) => {
        checkbox.addEventListener('click', function () {
            updateCheckbox(checkbox);
        });
    });

    function updateCheckbox(checkbox) {
        let currentValue = parseInt(checkbox.value);
        currentValue = (currentValue + 1) % 3;
        checkbox.value = currentValue;
        updateCheckboxState(checkbox);
    }

    function updateCheckboxState(checkbox) {
        // Удаляем все классы состояний у чекбокса
        checkbox.parentElement.classList.remove('state_0', 'state_1', 'state_2');//

        // Получаем текущее значение
        let currentValue = parseInt(checkbox.value);

        // Добавляем класс состояния только выбранному чекбоксу, соответствующему текущему значению
        checkbox.parentElement.classList.add(`state_${currentValue}`);//
    }
});


document.addEventListener('DOMContentLoaded', function () {
    function getSelectedInfo(checkboxes) {
        const selectedTags = [];
        checkboxes.forEach((checkbox) => {
            if (parseInt(checkbox.value) === 1) {
                selectedTags.push({
                    id: checkbox.id,
                    value: 'include'
                });
            }
            if (parseInt(checkbox.value) === 2) {
                selectedTags.push({
                    id: checkbox.id,
                    value: 'exclude'
                });
            }
        });
        return selectedTags;
    }

    document.querySelector('.bunch__apply').addEventListener('click', function () {
        const tagsCheckboxes = document.querySelectorAll('.bunch__tag input[type="checkbox"]');
        const pOrientationCheckboxes = document.querySelectorAll('.p_orientation__checkbox');

        const selectedTags = getSelectedInfo(tagsCheckboxes);
        const selectedPOrientations = getSelectedInfo(pOrientationCheckboxes);

        let url = window.location.origin + window.location.pathname;
        let isFirstParam = true;
        selectedTags.forEach((tag, index) => {
            url += (isFirstParam ? '?' : '&') + `tag[${tag.value}]=${tag.id}`;
            isFirstParam = false;
        });
        selectedPOrientations.forEach((p_orient, index) => {
            url += (isFirstParam ? '?' : '&') + `orientation[${p_orient.value}]=${p_orient.id}`;
            isFirstParam = false;
        });
        window.location.href = url;
    });
});
