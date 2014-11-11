$(function() {

    // Update checklist on load
    var rows = window.location.hash.substring(1).split(',');

    if (rows[0].length) {
        $('.checklist__input').each(function(index) {
            if ($.inArray($(this).val(), rows) < 0) {
                $(this).attr('checked', false);
            }
        });
    }

    // Update hash on change
    $('.checklist__input').change(function () {

        var rows = [];

        $('.checklist__input:checked').each(function(index) {
            rows.push($(this).val());
        });

        window.location.hash = rows.join(',');

        $('.share__input').val(window.location);

    }).trigger('change');

    // Select share link on input click
    $('.share__input').click(function () {
        $(this).select();
    });
});