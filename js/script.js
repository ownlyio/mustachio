$(window).on("load", function() {
    $("#app").removeClass("d-none");
});

$(document).on("submit", "#newsletter-form", async (event) => {
    event.preventDefault();

    let newsletter_form = $(this);
    newsletter_form.find("[type='submit']").prop("disabled", true);

    let data = new FormData(event.target);

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