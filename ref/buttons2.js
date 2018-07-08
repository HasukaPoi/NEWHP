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
        window.open('https://dictionary.goo.ne.jp/srch/all/' + $("#dictSearchKey").val()+ '/m0u/');
    });
    $('#dictSearchKey').keydown(function (e) {
        var curKey = e.which;
        if (curKey === 13) $("#weblio").click();
    });
});