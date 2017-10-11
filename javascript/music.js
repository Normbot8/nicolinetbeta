var music = localStorage.getItem('music');
var sans = localStorage.getItem('sans');
var vidTime = sessionStorage.getItem('vidtime');
var isTime = sessionStorage.getItem('isTime');
var musicID;
if (music === "astley" && sans === "no") {
    $('.into-pic').replaceWith('<div class=\"into-pic\"><img src=\"pics/nicoliastley.png\" alt=\"The Grate Nicoli\"></div>');
    musicID = 'k5pL79ywoTY';
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        $('.into-pic').replaceWith('<div class=\"into-pic\"><iframe width=\"640\" height=\"360\" src=\"https://www.youtube.com/embed/k5pL79ywoTY\?autoplay=1&loop=1&playlist=k5pL79ywoTY\" frameborder=\"0\" allowfullscreen style=\'display:block; margin: auto;\'></iframe></div>');
    }
} else if (music === 'wham' && sans === "no") {
    $('.into-pic').replaceWith('<div class=\"into-pic\"><img src=\"pics/nicoliwham.png\" alt=\"The Grate Nicoli\"></div>');
    musicID = 'gpqmoBYkQfc';
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        $('.into-pic').replaceWith('<div class=\"into-pic\"><iframe width=\"640\" height=\"360\" src=\"https://www.youtube.com/embed/gpqmoBYkQfc\?autoplay=1&loop=1&playlist=gpqmoBYkQfc\" frameborder=\"0\" allowfullscreen style=\'display:block; margin: auto;\'></iframe></div>');
    }
}
if (sans === "yes") {
    $('*').css("font-family", "Comic Sans MS");
    $('.into-pic').replaceWith('<div class=\"into-pic\"><img src=\"pics/sansnicoli.png\" alt=\"The Grate Nicoli\"></div>');
    musicID = 'ZcoqR9Bwx1Y'
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        $('.into-pic').replaceWith('<div class=\"into-pic\"><iframe width=\"640\" height=\"360\" src=\"https://www.youtube.com/embed/ZcoqR9Bwx1Y\?autoplay=1&loop=1&playlist=ZcoqR9Bwx1Y\" frameborder=\"0\" allowfullscreen style=\'display:block; margin: auto;\'></iframe></div>');
    }
}

$(window).on("unload", storeData)

function storeData() {
    var upVidTime = sessionStorage.getItem('vidtime');
    if (upVidTime != 'breh') {
        var musicTime = player.getCurrentTime();
        sessionStorage.setItem('isTime', "true");
        sessionStorage.setItem('vidtime', musicTime);
    } else if (upVidTime === 'breh') {
        sessionStorage.setItem('isTime', "false");
    }
};

if (isTime != "true") {
    vidTime = 0;
    sessionStorage.setItem('vidtime', 0);
}

vidTime = Math.round(vidTime);

var tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
var player;

function onYouTubeIframeAPIReady() {
    player = new YT.Player('ytcontent', {
        height: '315',
        width: '560',
        videoId: musicID,
        playerVars: {
            'autoplay': 1,
            'playlist': musicID,
            'loop': 1,
            'start': vidTime,
        }
    });
}
