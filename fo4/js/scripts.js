var totalPoints = 28;

var renderPerks = function () {
    var html = '',
        special = getSPECIAL();

    html += '<tr>';
    for (var i = 0; i < special.length; ++i) {
        html += '<th>' + special[i].special.toUpperCase() + ': ' + special[i].value + '</th>';
    }
    html += '</tr>';

    for (var i = 0; i <= 9; ++i) {
        html += '<tr>';
        for (var j = 0; j < perks.length; ++j) {
            var perk = perks[j].perks[i],
                className = i > special[j].value - 1 ? ' unavailable' : '';

            if (!perk.currentRank) {
                perk.currentRank = 0;
            }

            var title = perk.name;
            if (perk.ranked) {
                title += '\r\n\r\n';
                title += perk.ranked.map(function (rank) {
                    return 'Rank ' + rank.rank + ': ' + rank.description;
                }).join('\r\n');
            }

            html += '<td><div data-i="' + i + '" data-j="' + j + '" title="' + title + '" class="perk' + className + '" style="background-image:url(\'img/' + perk.img + '\');">';
            if (className !== ' unavailable') {
                html += '<div class="overlay"><button class="btn btn-xs btn-danger btn-dec-perk"><i class="glyphicon glyphicon-minus"></i></button>&nbsp;' + perk.currentRank + '/' + perk.ranks + '&nbsp;<button class="btn btn-xs btn-success btn-inc-perk"><i class="glyphicon glyphicon-plus"></i></button></div>';
            }
            html += '</td>';
        }
        html += '</tr>';
    }
    $('.table').html(html);
}

var getSPECIAL = function () {
    return $('[data-special]').map(function () {
        return {
            special: $(this).data('special'),
            value: $(this).find('input').val()
        };
    });
};

var requiredLevel = function () {
    var total = 0;
    for (var i = 0; i < perks.length; ++i) {
        for (var j = 0; j < perks[i].perks.length; ++j) {
            total += perks[i].perks[j].currentRank;
        }
    }

    return total;
}

var renderRequiredLevel = function () {
    $('.required-level').text(requiredLevel());
}

var renderAll = function () {
    renderPerks();
    calculatePoints();
    renderRequiredLevel();
    renderSummary();
}

var calculatePoints = function () {
    var remaining = totalPoints - getAllocatedPoints();
    if (includeBobbleheads()) {
        remaining += 7;
    }
    $pointsLeft.text(remaining);
}

var getAllocatedPoints = function () {
    return $('[data-special] input').map(function () {
        return parseInt($(this).val());
    }).get().reduce(function (prev, curr) {
        return prev + curr;
    });
}

var $pointsLeft = $('.points-left'),
        $includeBobbleheads = $('.include-bobbleheads');

var includeBobbleheads = function () {
    return $includeBobbleheads.is(':checked');
}

var pointsRemaining = function () {
    return parseInt($pointsLeft.text());
}

var renderSummary = function () {
    var html = '';
    for (var i = 0; i < perks.length; ++i) {
        for (var j = 0; j < perks[i].perks.length; ++j) {
            var perk = perks[i].perks[j];
            if (perk.currentRank && perk.currentRank > 0) {
                html += '<li>' + perk.name + ': ' + perk.currentRank + '/' + perk.ranks + '</li>';
            }
        }
    }

    $('.summary').html(html);
}

$(function () {
    renderAll();

    $includeBobbleheads.on('click', function () {
        renderAll();
    });

    $('.btn-inc').on('click', function () {
        var $li = $(this).parent().parent(),
            $input = $li.find('input'),
            value = parseInt($input.val()),
            remaining = pointsRemaining();

        if (remaining === 0)
            return;

        if (value < 10) {
            $input.val(value + 1);
        }

        renderAll();
    });

    $('.btn-dec').on('click', function () {
        var $li = $(this).parent().parent(),
            $input = $li.find('input'),
            value = parseInt($input.val()),
            special = $li.data('special');

        if (value > 1) {
            $input.val(value - 1);

            for (var i = 0; i < perks.length; ++i) {
                if (perks[i].special === special) {
                    for (var j = value - 1; j < perks[i].perks.length; ++j) {
                        perks[i].perks[j].currentRank = 0;
                    }
                }
            }
        }

        renderAll();
    });

    $('body').on('click', '.btn-inc-perk, .btn-dec-perk', function () {
        var $container = $(this).parent().parent(),
            i = parseInt($container.data('i')),
            j = parseInt($container.data('j')),
            perk = perks[j].perks[i],
            incrementing = $(this).hasClass('btn-inc-perk');

        if (!perk.currentRank)
            perk.currentRank = 0;

        if (incrementing) {
            if (perk.currentRank < perk.ranks) {
                perk.currentRank += 1;
            }
        } else {
            if (perk.currentRank > 0) {
                perk.currentRank -= 1;
            }
        }

        renderAll();
    });
});