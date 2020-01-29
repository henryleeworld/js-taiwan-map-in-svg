$('.taiwan-map').append('<div class="mouse"></div>');

$('.taiwan-map svg path').each(function(index, el) {
    $this = $(this);
    var mapName = $this.attr('name');
    $this.mousemove(function(e) {
        $('.mouse').show();

        var TEST = $('.mouse').position();
        var TESTX = TEST.left;
        var TESTY = TEST.top;
        var parentOffset = $(this).parent().offset();
        var relX = e.pageX - parentOffset.left;
        var relY = e.pageY - parentOffset.top

        $('.mouse').css({
            left: relX + 10,
            top: relY - 30
        });
        $('.mouse').html(mapName);    
    });
    $this.mouseout(function(event) {
        $('.mouse').hide();
    });
});

$('.mouse').hide();