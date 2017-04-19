/**
 * Created by YUE on 2017/3/11.
 */
(function (window) {
    function FB() {

    };
    FB.loadImages = function (srcList,callback) {
        var count = 0;
        var objList = {};
        srcList.forEach(function (item) {
            var img = new Image();
            img.src = "img/"+item+".png";
            objList[item] = img;
            img.onload = function () {
                count++;
                if(count==srcList.length){
                    //所有图片加载完毕后
                    callback(objList);
                }
            }
        });
        return objList;
    };
    window.FB = FB;
})(window);