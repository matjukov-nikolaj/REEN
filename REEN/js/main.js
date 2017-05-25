window.onload = function () {
    var scrolled = 0, timer = 0, to = 0;


    function scrollToTop() {
        if (scrolled > 0) {
            window.scrollTo(0, scrolled);
            // Шаг поднятия 50 пикселей
            scrolled = scrolled - 50;
            // Время поднятия на 50 пикселей
            timer = setTimeout(scrollToTop, 10);
        }
        else {
            clearTimeout(timer);
            window.scrollTo(0, 0);
        }
    }

    function scrollToBottom() {
        if (scrolled < to) {
            window.scrollTo(0, scrolled);
            scrolled = scrolled + 50;
            timer = setTimeout(scrollToBottom, 10);
        }
        else {
            clearTimeout(timer);
            window.scrollTo(0, to);
        }
    }

    document.getElementById('roll_to_top').onclick = function () {
        scrolled = window.pageYOffset;
        scrollToTop();
    }

    document.getElementById('about_us').onclick = function () {
        scrolled = window.pageYOffset;
        to = document.getElementById('about_block').getBoundingClientRect().top;
        scrollToBottom();
    }

    document.getElementById('latest_work').onclick = function () {
        scrolled = window.pageYOffset;
        to = document.getElementById('latest_work_block').getBoundingClientRect().top;
        scrollToBottom();
    }

    document.getElementById('get_in_touch').onclick = function () {
        scrolled = window.pageYOffset;
        to = document.getElementById('get_in_block').getBoundingClientRect().top;
        scrollToBottom();
    }

    window.onscroll = function () {
        var scrolled = window.pageYOffset,
            oldScrollBottom = 0;
        if (scrolled > 1000) {
            document.getElementById("roll_to_top").style.display = "block";
        }
        else {
            document.getElementById("roll_to_top").style.display = "none";
        }
    }

    document.getElementById("show_more_button").onclick = function () {
        document.getElementsByClassName("show_more_button")[0].style.display = "none";
        document.getElementsByClassName("show_button_block")[0].style.margin = 0;
        document.getElementById("not_visible_one").classList.remove('invisible');
        document.getElementById("not_visible_one").classList.add('advantage_block', 'smoothness');
        document.getElementById("not_visible_two").classList.remove('invisible');
        document.getElementById("not_visible_two").classList.add('advantage_block', 'smoothness');
        document.getElementById("not_visible_three").classList.remove('invisible');
        document.getElementById("not_visible_three").classList.add('advantage_block', 'smoothness');
    }
}