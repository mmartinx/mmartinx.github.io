const totalPoints = 28;

const renderPerks = function () {
    let html = '',
    special = getSPECIAL();

    html += '<tr>';

    for (let i = 0; i < special.length; ++i) {
        html += '<th>' + special[i].special.toUpperCase() + ': ' + special[i].value + '</th>';
    }

    html += '</tr>';

    for (let i = 0; i <= 9; ++i) {
        html += '<tr>';
        
        for (let j = 0; j < perks.length; ++j) {
            let perk = perks[j].perks[i],
                className = i > special[j].value - 1 ? ' unavailable' : '';

            if (!perk.currentRank) {
                perk.currentRank = 0;
            }

            const title = perk.ranked.map(function (rank) {
                const rankClass = perk.currentRank >= rank.rank ? 'has-rank' : 'no-rank';
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

const getJSON = function () {
    return btoa(JSON.stringify({
        s: getSPECIALShort(),
        r: getRanks()
    }));
}

const getRanks = function () {
    const ranks = [];
    
    for (let i = 0; i < perks.length; ++i) {
        for (let j = 0; j < perks[i].perks.length; ++j) {
            const perk = perks[i].perks[j];
            if (perk.currentRank && perk.currentRank > 0) {
                const item = {};
                item[perk.name] = perk.currentRank;
                ranks.push(item);
            }
        }
    }

    return ranks;
}

const getSPECIALShort = function () {
    const specs = [];

    $('input[type="number"]').each(function () {
        specs.push($(this).val());
    });

    return specs;
};

const getSPECIAL = function () {
    return $('[data-special]').map(function () {
        return {
            special: $(this).data('special'),
            value: $(this).find('input').val()
        };
    });
};

const requiredLevel = function () {
    let total = 0;
    for (let i = 0; i < perks.length; ++i) {
        for (let j = 0; j < perks[i].perks.length; ++j) {
            total += perks[i].perks[j].currentRank;
        }
    }

    const remaining = totalPoints - getAllocatedPoints();

    if (includeBobbleheads()) {
        remaining += 8
    }

    if (remaining <= 0) {
        total += 1 + remaining * -1;
    }

    let maxLevel = 0;
    
    for (let i = 0; i < perks.length; ++i) {
        for (let j = 0; j < perks[i].perks.length; ++j) {
            for (let k = 0; k < perks[i].perks[j].currentRank; ++k) {
                if (perks[i].perks[j].ranked[k].level > maxLevel) {
                    maxLevel = perks[i].perks[j].ranked[k].level;
                }
            }
        }
    }

    if (maxLevel > total) {
        total = maxLevel;
    }

    return total;
}

const renderRequiredLevel = function () {
    $('.required-level').text(requiredLevel());
}

const renderAll = function () {
    renderPerks();
    calculatePoints();
    renderRequiredLevel();
    renderSummary();
    window.location.hash = '#' + getJSON();
}

const calculatePoints = function () {
    const remaining = totalPoints - getAllocatedPoints();
    
    if (includeBobbleheads()) {
       remaining += 8;
    }
    
    if (remaining < 0) {
        remaining = 0;
    }
    
    $pointsLeft.text(remaining);
}

const getAllocatedPoints = function () {
    return $('[data-special] input').map(function () {
        return parseInt($(this).val());
    }).get().reduce(function (prev, curr) {
        return prev + curr;
    });
}

const $pointsLeft = $('.points-left');
    $includeBobbleheads = $('.include-bobbleheads');

const includeBobbleheads = function () {
   return $includeBobbleheads.is(':checked');
}

const pointsRemaining = function () {
    return parseInt($pointsLeft.text());
}

const renderSummary = function () {
    let html = '';

    for (let i = 0; i < perks.length; ++i) {
        for (let j = 0; j < perks[i].perks.length; ++j) {
            const perk = perks[i].perks[j];
            if (perk.currentRank && perk.currentRank > 0) {
                html += '<li>' + perk.name + ': ' + perk.currentRank + '/' + perk.ranks + '</li>';
                html += '<ul>';

                for (let k = 0; k < perk.currentRank; ++k) {
                    html += '<li>' + perk.ranked[k].description + '</li>';
                }

                html += '</ul>';
            }
        }
    }

    $('.summary').html(html);
    $('[rel="popover"]').popover();
}

const getSPECIALMinMax = function() {
    let min = 1;
    let max = 10;

    if (includeBobbleheads()) {
        min = 2;
        max = 11;
    }

    return {min, max}
}

$(function () {
    const hash = window.location.hash.replace('#', '');
    
    if (hash.length > 0) {
        const load = JSON.parse(atob(hash));
        
        $('input[type=number]').each(function (index) {
            $(this).val(load.s[index]);
        });

        for (let i = 0; i < load.r.length; ++i) {
            const key = Object.keys(load.r[i])[0], value = load.r[i][key];

            for (let j = 0; j < perks.length; ++j) {
                for (let k = 0; k < perks[j].perks.length; ++k) {
                    let perk = perks[j].perks[k];
                    
                    if (perk.name === key) {
                        perk.currentRank = value;
                    }
                }
            }
        }
    }

    renderAll();

    $includeBobbleheads.on('click', function () {
        let valShift = -1;
        
        if (includeBobbleheads()) {
            valShift = 1;
        }
        
        const $inputs = $(".list-special>li>span>input")
        
        $inputs.attr(getSPECIALMinMax());
        $inputs.val( function(i, val) {
            return parseInt(val, 10) + valShift;
        });

        renderAll();
    });

    $('.btn-inc').on('click', function () {
        const {max} = getSPECIALMinMax()
        const $li = $(this).parent().parent(),
              $input = $li.find('input'),
              value = parseInt($input.val());

        if (value < max) {
            $input.val(value + 1);
        }

        renderAll();
    });

    $('.btn-dec').on('click', function () {
        const {min} = getSPECIALMinMax()
        const $li = $(this).parent().parent(),
              $input = $li.find('input'),
              value = parseInt($input.val()),
              special = $li.data('special');

        if (value > min) {
            $input.val(value - 1);

            for (let i = 0; i < perks.length; ++i) {
                if (perks[i].special === special) {
                    for (let j = value - 1; j < perks[i].perks.length; ++j) {
                        perks[i].perks[j].currentRank = 0;
                    }
                }
            }
        }

        renderAll();
    });

    $('body').on('click', '.btn-inc-perk, .btn-dec-perk', function () {
        const $container = $(this).parent().parent(),
              i = parseInt($container.data('i')),
              j = parseInt($container.data('j')),
              perk = perks[j].perks[i],
              incrementing = $(this).hasClass('btn-inc-perk');

        if (!perk.currentRank) {
            perk.currentRank = 0;
        }

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
