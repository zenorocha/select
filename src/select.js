function select(element) {
    var selection = window.getSelection();

    if (element.nodeName === 'INPUT' || element.nodeName === 'TEXTAREA') {
        element.selectionStart = 0;
        element.selectionEnd = element.value.length;
    }
    else {
        var range = document.createRange();

        range.selectNodeContents(element);
        selection.removeAllRanges();
        selection.addRange(range);
    }

    return selection.toString();
}

module.exports = select;
