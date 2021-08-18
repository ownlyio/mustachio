$(window).on("load", function() {
    $("#app").removeClass("d-none");
});

$(document).on("submit", "#newsletter-form", function(e) {
    e.preventDefault();

    let newsletter_form = $(this);
    newsletter_form.find("[type='submit']").prop("disabled", true);

    console.log(newsletter_form);
    let data = new FormData($(this)[0]);

    $.ajax({
        url: "https://ownly.tk/api/store-mustachio-subscriber",
        method: "POST",
        cache: false,
        contentType: false,
        processData: false,
        data: data
    }).done(function(response) {
        $("#newsletter-form input").val("");

        $("#modal-subscribe-success").modal("show");
    }).fail(function(error) {
        console.log(error);
    }).always(function() {
        $("#newsletter-form [type='submit']").prop("disabled", false);
    });
});