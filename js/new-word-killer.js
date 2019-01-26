$(document).ready(function() {
    const elementsToFix = [
        $(".main-heading"),
        $(".main-subheading"),
        $(".main-big-text"),
        $(".main-small-text"),
        // $(".form-risk"),
        $(".promo-heading"),
        $(".promo-text"),
        $(".promo-risk"),
        $(".regulation-header"),
        $(".acc-heading"),
        $(".acc-risk"),
        $(".about-heading"),
        $(".about-text"),
        $(".about-text-gold"),
        $(".about-risk"),
        $(".contact-heading"),
        $(".contact-subheading"),
        $(".promo-blue-text")
    ];
    function testHeading() {
        for (let u = 0; u <= elementsToFix.length - 1; u++) {
            let content = elementsToFix[u].html(); // берем изначальный текст который находится в диве
            let contentWithoutLastWord = content.substring(0, content.lastIndexOf(" ")); //создаем текст без последнего слова
            let lineHeight = elementsToFix[u].css("line-height");
            if (lineHeight === "normal" || lineHeight === "inherit") {
                elementsToFix[u].css("line-height", parseInt(elementsToFix[u].css("font-size")) + 7 + "px");
                lineHeight = elementsToFix[u].css("line-height");
            }
            let stringAmount = elementsToFix[u].height() / parseInt(lineHeight); //подсчитываем количество строк в диве
            let initialFontSize = parseInt(elementsToFix[u].css("font-size")); // вычисляем стартовый размер шрифта
            elementsToFix[u].html(contentWithoutLastWord); // заполняем наш див текстом без последнего слова
            let stringAmountOfReducedText = elementsToFix[u].height() / parseInt(lineHeight); // вычисляем количество строк в тексте без последнего слова
            elementsToFix[u].html(content.trim());
            if (stringAmountOfReducedText < stringAmount) {
                for (let i = initialFontSize; i >= initialFontSize - 10; i--) {
                    elementsToFix[u].css("font-size", i); 
                    let newStringAmount = elementsToFix[u].height() / parseInt(lineHeight);
                    if (newStringAmount < stringAmount) {
                        elementsToFix[u].css("line-height", i + 7 + "px");
                        break
                    }
                }
            }
        }
    }
    setTimeout(function(){
        testHeading();
    }, 2500);
    testHeading();
    $(window).resize(function() {
        for(let o = 0; o <= elementsToFix.length -1; o++ ) {
            elementsToFix[o].css("font-size", "")
        }
        testHeading();
    });
});


