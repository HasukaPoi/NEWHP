$(document).ready(function () {
    $("#hj").click(function () {
        window.open("http://dict.hjenglish.com/jp/jc/" + $("#dictkw").val());
    });
    $("#weblio").click(function () {
        window.open('http://www.weblio.jp/content/' + $("#dictkw").val());
    });
    $("#goo").click(function () {
        window.open('https://dictionary.goo.ne.jp/srch/all/' + $("#dictkw").val() + '/m0u/');
    });
    $("#dictkw").keydown(function (e) {
        var curKey = e.which;
        if (curKey == 13) {
            $("#hj").click();
        }
    });
    $('#tkw').keydown(function (e) {
        var curKey = e.which;
        if (curKey == 13) {
            $("#tb").click();
        }
    });
    $('#tb').click(function () {
        if ($('#tkw').val() == "") {
            window.open('http://www.taobao.com');
        } else {
            window.open('https://s.taobao.com/search?q=' + $("#tkw").val());
        }
    });

    $('#akw').keydown(function (e) {
        var curKey = e.which;
        if (curKey == 13) {
            $("#ama").click();
        }
    });
    $('#ama').click(function () {
        if ($('#akw').val() == "") {
            window.open('http://www.amazon.co.jp');
        } else {
            window.open(encodeURI('https://www.amazon.co.jp/s/ref=nb_sb_noss?__mk_ja_JP=カタカナ&url=search-alias%3Daps&field-keywords=' + $("#akw").val()));
        }
    });
    $('#srg').click(function () {
        if ($('#akw').val() == "") {
            window.open('http://www.suruga-ya.jp');
        } else {
            window.open(encodeURI('http://www.suruga-ya.jp/search?category=&search_word=' + $("#akw").val()));
        }
    });


    $('#wikiw').keydown(function (e) {
        var curKey = e.which;
        if (curKey == 13) {
            $("#wikij").click();
        }
    });
    $('#wikij').click(function () {
        if ($('#wikiw').val() == "") {
            window.open('http://ja.wikipedia.org');
        } else {
            window.open('https://ja.wikipedia.org/wiki/' + $('#wikiw').val());
        }

    });
    $('#wikic').click(function () {
        if ($('#wikiw').val() == "") {
            window.open('http://zh.wikipedia.org');
        } else {
            window.open('https://zh.wikipedia.org/wiki/' + $('#wikiw').val());
        }

    });


});