if($(window).width() < 767)
{
    // JavaScript here 
    // 當視窗寬度小於767px時執行
    setSlideGroup();

function setSlideGroup() {
    var index = 0;
    var $items = $('#PdList');
    var $item = $items.find('.product__item');
    var itemWidth = $item.width();
    var len = $item.length;
    var column = 1;
    var dX = itemWidth * column;
    var pageLen = doCalcPageLen(len, column);
    //len=6 column=3 pageLen=2
    var isActive = true;

    // Init ----------------------------------
    $items.css({
        'width': itemWidth * len,
        'left': 0
    });

    // Event ----------------------------
    $('#BtnNext').click(function () {
        if (isActive) {
            isActive = false;
            index = index < pageLen - 1 ? index + 1 : pageLen - 1;
            $items.css('left', -dX * index);
            setTimeout(function () {
                isActive = true;
            }, 500);
        }
    });

    //三木運算c=a>b?1:0;    a大於b？如果大於，就给c值1，否则值0


    $('#BtnPrev').click(function () {
        if (isActive) {
            isActive = false;
            index = index > 0 ? index - 1 : 0;
            $items.css('left', -dX * index);
            setTimeout(function () {
                isActive = true;
            }, 500);
        }
    });

}

function doCalcPageLen(l, c) {
    return l % c === 0 ? l / c : Math.ceil(l / c);
}

//Math.ceil() 函式會回傳大於等於所給數字的最小整數。
//（％）是模數運算符，它會讓您獲得place/sequence.length的其餘部分。

} 
else {
    // JavaScript here
    // 當視窗寬度不小於767px時執行
    setSlideGroup();

function setSlideGroup() {
    var index = 0;
    var $items = $('#PdList');
    var $item = $items.find('.product__item');
    var itemWidth = $item.width();
    var len = $item.length;
    var column = 3;
    var dX = itemWidth * column;
    var pageLen = doCalcPageLen(len, column);
    //len=6 column=3 pageLen=2
    var isActive = true;

    // Init ----------------------------------
    $items.css({
        'width': itemWidth * len,
        'left': 0
    });

    // Event ----------------------------
    $('#BtnNext').click(function () {
        if (isActive) {
            isActive = false;
            index = index < pageLen - 1 ? index + 1 : pageLen - 1;
            $items.css('left', -dX * index);
            setTimeout(function () {
                isActive = true;
            }, 500);
        }
    });

    //三木運算c=a>b?1:0;    a大於b？如果大於，就给c值1，否则值0


    $('#BtnPrev').click(function () {
        if (isActive) {
            isActive = false;
            index = index > 0 ? index - 1 : 0;
            $items.css('left', -dX * index);
            setTimeout(function () {
                isActive = true;
            }, 500);
        }
    });

}

function doCalcPageLen(l, c) {
    return l % c === 0 ? l / c : Math.ceil(l / c);
}

//Math.ceil() 函式會回傳大於等於所給數字的最小整數。
//（％）是模數運算符，它會讓您獲得place/sequence.length的其餘部分。

}

