$(document).ready(function () {
    let currentIndex = 0;
    const slides = $('.slide-image').length;
    const imagesPerSlide = 5; // Số hình ảnh hiển thị mỗi lần
    const slideWidth = $('.slide-container').width(); // Độ rộng của 5 hình
    const totalSlides = Math.ceil(slides / imagesPerSlide); // Tổng số lần trượt

    // Chuyển đến slide tiếp theo
    function goToNextSlide() {
        currentIndex++;
        if (currentIndex >= totalSlides) {
            currentIndex = 0; // Quay lại slide đầu tiên khi hết
        }
        $('.slide-stage').css('transform', 'translateX(' + (-currentIndex * slideWidth) + 'px)');
    }

    // Chuyển đến slide trước đó
    function goToPrevSlide() {
        currentIndex--;
        if (currentIndex < 0) {
            currentIndex = totalSlides - 1; // Quay lại slide cuối cùng
        }
        $('.slide-stage').css('transform', 'translateX(' + (-currentIndex * slideWidth) + 'px)');
    }

    // Nút điều khiển trái
    $('.slide-control-prev').click(function () {
        goToPrevSlide();
    });

    // Nút điều khiển phải
    $('.slide-control-next').click(function () {
        goToNextSlide();
    });

    // Tự động chuyển slide sau mỗi 3 giây
    const autoSlide = setInterval(goToNextSlide, 1000);

    // Tạm dừng tự động chuyển slide khi người dùng di chuột vào slider
    $('#slide').hover(
        function () {
            clearInterval(autoSlide); // Dừng tự động khi hover
        },
        function () {
            setInterval(goToNextSlide, 4000); // Bắt đầu lại khi rời chuột khỏi slider
        }
    );
});
