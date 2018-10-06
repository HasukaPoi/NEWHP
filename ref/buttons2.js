/**
 * Created by Hasuka on 2018/1/20.
 * The js of buttons in newhp2.html
 */

$(document).ready(function () {
    $("#bing").click(function () {
        window.open('https://www.bing.com/search?q=' + $("#webSearchKey").val());
    });
    $('#yahoo').click(function () {
        window.open(encodeURI('http://search.yahoo.co.jp/search?p=' + $("#webSearchKey").val()));
    });
    $('#webSearchKey').keydown(function (e) {
        var curKey = e.which;
        if (curKey === 13) $("#bing").click();
    });


    $("#weblio").click(function () {
        window.open('http://www.weblio.jp/content/' + $("#dictSearchKey").val());
    });
    $('#goo').click(function () {
        window.open('https://dictionary.goo.ne.jp/srch/all/' + $("#dictSearchKey").val() + '/m0u/');
    });
    $('#dictSearchKey').keydown(function (e) {
        var curKey = e.which;
        if (curKey === 13) $("#weblio").click();
    });

    $("#taobao").click(function () {
        if ($("#buySearchKey").val() == '')
            window.open('https://www.taobao.com');
        else
            window.open('https://s.taobao.com/search?q=' + $("#buySearchKey").val());
    });
    $('#jd').click(function () {
        if ($("#buySearchKey").val() == '')
            window.open('https://www.jd.com');
        else
            window.open('https://search.jd.com/Search?keyword=' + $("#buySearchKey").val());
    });
    $('#buySearchKey').keydown(function (e) {
        var curKey = e.which;
        if (curKey === 13) $("#taobao").click();
    });

    $("#erotoku").click(function () {
        window.open('http://erogame-tokuten.com/redate.php?keyword=' + $("#erogeSearchKey").val().replace(/ /g, "+"));
    }); 
    $("#getchu").click(function () {
        window.open('http://www.getchu.com/php/nsearch.phtml?genre=pc_soft&search_keyword=' + $("#erogeSearchKey").val().replace(/ /g, "+"));
    });
    $('#erogeSearchKey').keydown(function (e) {
        var curKey = e.which;
        if (curKey === 13) $("#erotoku").click();
    });
});