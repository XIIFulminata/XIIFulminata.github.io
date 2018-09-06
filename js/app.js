
/*$(document).ready(function(){
  $('.clamp-slider').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
      arrows: true,
  });
});*/

$( ".instron-link" ).click(function() {
    //location.href="instron.html"

    var win = window.open('instron.html', '_blank');
    if (win) {
        //Browser has allowed it to be opened
        win.focus();
    } else {
        //Browser has blocked it
        alert('Please allow popups for this website');
    }
});

$( ".cake-link" ).click(function() {
    //location.href="cake.html"

    var win = window.open('cake.html', '_blank');
    if (win) {
        //Browser has allowed it to be opened
        win.focus();
    } else {
        //Browser has blocked it
        alert('Please allow popups for this website');
    }
});

$( ".GE-link" ).click(function() {
  location.href="experience.html#go-to-ge"
});

$( ".REU-link" ).click(function() {
    //location.href="experience.html#go-to-reu";

    var win = window.open('https://www.ncbi.nlm.nih.gov/pubmed/25822873', '_blank');
    if (win) {
        //Browser has allowed it to be opened
        win.focus();
    } else {
        //Browser has blocked it
        alert('Please allow popups for this website');
    }

});

$( ".slay-link" ).click(function() {
    //location.href="https://github.com/XIIFulminata/AFK-Slayer"

    var win = window.open('https://github.com/XIIFulminata/AFK-Slayer', '_blank');
    if (win) {
        //Browser has allowed it to be opened
        win.focus();
    } else {
        //Browser has blocked it
        alert('Please allow popups for this website');
    }
});

$( ".daily-link" ).click(function() {
    //location.href="https://github.com/XIIFulminata/Daily-Scape"

    var win = window.open('https://github.com/XIIFulminata/Daily-Scape', '_blank');
    if (win) {
        //Browser has allowed it to be opened
        win.focus();
    } else {
        //Browser has blocked it
        alert('Please allow popups for this website');
    }
});

/*$( ".REU-link" ).click(function() {
  location.href="experience.html#ge-exp-card"
});*/
/*
$( ".raw-link" ).click(function() {
    window.open('http://rawtours.org/');
});


$( ".bess-link" ).click(function() {
    window.open('http://nuweb2.neu.edu/bess/');
});
*/

$( ".mlh-link" ).click(function() {
    //location.href="mlh.html"

    var win = window.open('mlh.html', '_blank');
    if (win) {
        //Browser has allowed it to be opened
        win.focus();
    } else {
        //Browser has blocked it
        alert('Please allow popups for this website');
    }
});

$( ".3dp-link" ).click(function() {
    //location.href="3dp.html"

    var win = window.open('3dp.html', '_blank');
    if (win) {
        //Browser has allowed it to be opened
        win.focus();
    } else {
        //Browser has blocked it
        alert('Please allow popups for this website');
    }
});

$( ".wiz-link" ).click(function() {
    //location.href="wiz.html"

    var win = window.open('wiz.html', '_blank');
    if (win) {
        //Browser has allowed it to be opened
        win.focus();
    } else {
        //Browser has blocked it
        alert('Please allow popups for this website');
    }
});

$( ".unprod-link" ).click(function() {
    /*window.open('https://xiifulminata.github.io/Popcorn-Time-Clone/');*/
    location.href="#"
});

$( document ).ready(function() {
    $( ".qrc2" ).hide();
    $( ".qrc3" ).hide();
    $( ".qrc4" ).hide();
    $( ".qrc5" ).hide();
});

function clearQRC() {
    $( ".qrc1" ).hide();
    $( ".qrc2" ).hide();
    $( ".qrc3" ).hide();
    $( ".qrc4" ).hide();
    $( ".qrc5" ).hide();
}

$( "#qrc1-f" ).click(function() {
    clearQRC();
    $( ".qrc1" ).show();
});

$( "#qrc2-f" ).click(function() {
    clearQRC();
    $( ".qrc2" ).show();
});

$( "#qrc3-f" ).click(function() {
    clearQRC();
    $( ".qrc3" ).show();
});

$( "#qrc4-f" ).click(function() {
    clearQRC();
    $( ".qrc4" ).show();
});

$( "#qrc5-f" ).click(function() {
    clearQRC();
    $( ".qrc5" ).show();
});
