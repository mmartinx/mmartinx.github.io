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

            var title = '';
            title += perk.ranked.map(function (rank) {
                var rankClass = perk.currentRank >= rank.rank ? 'has-rank' : 'no-rank';
                return '<p class=' + rankClass + '>Rank ' + rank.rank + ' (' + rank.level + '): ' + rank.description + '</p>';
            }).join('');

            html += '<td><div data-placement="left" data-trigger="hover" data-original-title="' + perk.name + '" rel="popover" data-html="true" data-content="' + title + '" data-i="' + i + '" data-j="' + j + '" class="perk' + className + '" style="background-image:url(\'img/' + perk.img + '\');">';
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

    var maxLevel = 0;
    for (var i = 0; i < perks.length; ++i) {
        for (var j = 0; j < perks[i].perks.length; ++j) {
            for (var k = 0; k < perks[i].perks[j].currentRank; ++k) {
                if (perks[i].perks[j].ranked[k].level > maxLevel) {
                    maxLevel = perks[i].perks[j].ranked[k].level;
                }
            }
        }
    }

    if (maxLevel > total)
        total = maxLevel;

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
                html += '<ul>';
                for (var k = 0; k < perk.currentRank; ++k) {
                    html += '<li>' + perk.ranked[k].description + '</li>';
                }
                html += '</ul>';
            }
        }
    }

    $('.summary').html(html);
    $('[rel="popover"]').popover();
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