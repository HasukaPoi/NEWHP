/**
 * Created by Hasuka on 2018/1/20.
 * The js of buttons in newhp2.html
 */

$(document).ready(function () {
    $("#bing").click(function () {
        window.open('https://www.bing.com/search?q=' + $("#webSearchKey").val());
    });
    $('#yahoo').click(function () {
        window.open('http://search.yahoo.co.jp/search' + $("#webSearchKey").val());
    });
    $('#webSearchKey').keydown(function (e) {
        var curKey = e.which;
        if (curKey === 13) $("#bing").click();
    });
});