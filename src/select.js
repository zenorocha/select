function select(element) {
    var selection = window.getSelection();

    if (element.nodeName === 'INPUT' || element.nodeName === 'TEXTAREA') {
        element.select();
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
