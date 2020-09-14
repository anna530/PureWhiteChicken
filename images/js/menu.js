// Away Begin -----------------------------------
setChicken();

function setChicken() {
    var index = 0;
    var $ckItem = $('#Ck1 .product__item');//所有產品
    var ckLen = $ckItem.length;//所有產品數量5
    var isActive = true;//按按鈕布林true

    // Init一開始
    $ckItem.eq(2).addClass('js-product__item--right-ready');
    $ckItem.eq(1).addClass('js-product__item--right');
    $ckItem.eq(index).addClass('js-product__item--center');
    $ckItem.eq(ckLen - 1).addClass('js-product__item--left');
    $ckItem.eq(ckLen - 2).addClass('js-product__item--left-ready');


    // Event ------------------------------------
    $('#BtnNext').click(function () {

        if (isActive) {

            isActive = false;

            var rightReady = (index + 3) % ckLen;
            var rightStage = (index + 2) % ckLen;
            var centerStage = (index + 1) % ckLen;
            var leftStage = index % ckLen;
            var leftReady = (index - 1) % ckLen;
            var pure = (index - 2) % ckLen;

            if (rightReady < 0) { rightReady += ckLen; }
            if (rightStage < 0) { rightStage += ckLen; }
            if (centerStage < 0) { centerStage += ckLen; }
            if (leftStage < 0) { leftStage += ckLen; }
            if (leftReady < 0) { leftReady += ckLen; }
            if (pure < 0) { pure += ckLen; }

            /* 右邊準備 */
            $ckItem.eq(rightReady)
                .attr('class', 'product__item js-product__item--right-ready');

            /* 準備-->右邊 */
            $ckItem.eq(rightStage)
                .attr('class', 'product__item js-product__item--right');

            /* 右邊-->中間 */
            $ckItem.eq(centerStage)
                .attr('class', 'product__item js-product__item--center');

            /* 中間-->左邊 */
            $ckItem.eq(leftStage)
                .attr('class', 'product__item js-product__item--left');

            /* 左邊準備 */
            $ckItem.eq(leftReady)
                .attr('class', 'product__item js-product__item--left-ready');

            /* 預設狀態 */
            $ckItem.eq(pure).attr('class', 'product__item');

            index++;

            setTimeout(function () {
                isActive = true;
            }, 500);
        }
    });

    $('#BtnPrev').click(function () {

        if (isActive) {

            isActive = false;

            var rightReady = (index - 3) % ckLen;
            var rightStage = (index - 2) % ckLen;
            var centerStage = (index - 1) % ckLen;
            var leftStage = index % ckLen;
            var leftReady = (index + 1) % ckLen;
            var pure = (index + 2) % ckLen;

            if (rightReady < 0) { rightReady += ckLen; }
            if (rightStage < 0) { rightStage += ckLen; }
            if (centerStage < 0) { centerStage += ckLen; }
            if (leftStage < 0) { leftStage += ckLen; }
            if (leftReady < 0) { leftReady += ckLen; }
            if (pure < 0) { pure += ckLen; }

            /* 右邊準備 */
            $ckItem.eq(leftReady)
                .attr('class', 'product__item js-product__item--right-ready');

            /* 準備-->右邊 */
            $ckItem.eq(leftStage)
                .attr('class', 'product__item js-product__item--right');

            /* 右邊-->中間 */
            $ckItem.eq(centerStage)
                .attr('class', 'product__item js-product__item--center');

            /* 中間-->左邊 */
            $ckItem.eq(rightStage)
                .attr('class', 'product__item js-product__item--left');

            /* 左邊準備 */
            $ckItem.eq(rightReady)
                .attr('class', 'product__item js-product__item--left-ready');

            /* 預設狀態 */
            $ckItem.eq(pure).attr('class', 'product__item');

            index--;

            setTimeout(function () {
                isActive = true;
            }, 500);
        }
    });
}


// Away End -----------------------------------


