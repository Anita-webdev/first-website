function bar_group() {
    group_ident = 1, $(".bar_group").each(function() {
        $(this).addClass("group_ident-" + group_ident), $(this).data("gid", group_ident), group_ident++
    })
}

function get_max() {
    $(".bar_group").each(function() {
        var a = [];
        $(this).children().each(function() {
            a.push($(this).attr("data-value"))
        }), max_arr["group_ident-" + $(this).data("gid")] = a, void 0 !== $(this).attr("data-max") ? $(this).data("bg_max", $(this).attr("data-max")) : $(this).data("bg_max", Math.max.apply(null, a))
    })
}

function data_labels() {
    $(".bar_group__bar").each(function() {
        void 0 !== $(this).attr("data-label") && $('<p class="b_label">' + $(this).attr("data-label") + "</p>").insertBefore($(this))
    })
}

function show_values() {
    $(".bar_group__bar").each(function() {
        "true" == $(this).attr("data-show-values") && ($(this).css("margin-bottom", "40px"), void 0 !== $(this).attr("data-unit") ? ($(this).append('<p class="bar_label_min">0 ' + $(this).attr("data-unit") + "</p>"), $(this).append('<p class="bar_label_max">' + $(this).parent().data("bg_max") + " " + $(this).attr("data-unit") + "</p>")) : ($(this).append('<p class="bar_label_min">0</p>'), $(this).append('<p class="bar_label_max">' + $(this).parent().data("bg_max") + "</p>")))
    })
}

function show_tooltips() {
    $(".bar_group__bar").each(function() {
        "true" == $(this).attr("data-tooltip") && ($(this).css("margin-bottom", "40px"), $(this).append('<div class="b_tooltip"><span>' + $(this).attr("data-value") + '</span><div class="b_tooltip--tri"></div></div>'))
    })
}

function in_view(a) {
    var t = $(a),
        i = $(window),
        s = i.scrollTop(),
        r = s + i.height(),
        n = t.offset().top,
        o = n + t.height();
    r > o - 45 && t.css("width", t.attr("data-value") / t.parent().data("bg_max") * 100 + "%")
}

function bars() {
    bar_group(), get_max(), data_labels(), show_tooltips(), show_values()
}
max_arr = {}, $(".bar_group__bar").each(function() {
    in_view($(this))
}), $(window).scroll(function() {
    $(".bar_group__bar").each(function() {
        in_view($(this))
    })
}), bars();