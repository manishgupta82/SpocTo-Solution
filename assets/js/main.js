$(document).ready(function () {
    // Load header content
    $("#header").load("partials/header.html", function () {
        // function to load url on click button
        function loadContent(url, button) {
            $.ajax({
                url: url,
                success: function (data) {
                    $('#mainSection').html(data);
                    $('.nav-link').removeClass('active'); // Remove active from all buttons
                    $(button).addClass('active');         // Set active on the clicked button
                },
                error: function (jqXHR, textStatus, errorThrown) {
                    console.error('Error loading content: ' + textStatus, errorThrown);
                }
            });
        }

        function ActivBtn(button) {
            $('.collapse').removeClass('show'); // hide hamburger icon

            $('.nav-link').removeClass('active'); // Remove active from all buttons
            $(button).addClass('active');         // Set active on the clicked button  
               
        }

        $(document).on('click', '#homeBtn', function () {
            ActivBtn(this);
        });
        $(document).on('click', '#aboutBtn', function () {
            ActivBtn(this);
        });
        $(document).on('click', '#ServicesBtn', function () {
            console.log(this);
            ActivBtn(this);
        });
        $(document).on('click', '#careerBtn', function () {
            ActivBtn(this);
        });
        $(document).on('click', '#TestimonialsBtn', function () {
            ActivBtn(this);
        });
        $(document).on('click', '#contactBtn', function () {
            ActivBtn(this);
        });
        //     // click home button
        //     $(document).on('click', '#homeBtn', function() {
        //         // loadContent('app/home.html', this);
        //     });
        //     // click about button
        //     $(document).on('click', '#aboutBtn', function() {
        //         // loadContent('app/about.html', this);
        //     });
        //     // click Contact button
        //     $(document).on('click', '#contactBtn', function() {
        //         // loadContent('app/contact.html', this);
        //     });
        //     // click Service button
        //     $(document).on('click', '#ServicesBtn', function() {
        //         // loadContent('app/Services.html', this);
        //         loadContent('#services', this);
        //     });
        //     // click Testimonial button
        //     $(document).on('click', '#TestimonialsBtn', function() {
        //         // loadContent('app/Testimonial.html', this);
        //     });
        //     //click Career button
        //     $(document).on('click', '#careerBtn', function() {
        //         // loadContent('app/contact.html', this);
        //     });
    });

    // Load the default section and set the Home button as active
    $('#mainSection').load('app/home.html');

    // Load footer
    $("#footer").load("partials/footer.html");
});
