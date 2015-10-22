function select(element) {
    var selection = window.getSelection();
    
    var iOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
    
    if(iOS){
        
        element.selectionStart = 0;
		element.selectionEnd = this.target.value.length;
		element.selectedText = this.target.value;
		
    }else{
        
        if (element.nodeName === 'INPUT' || element.nodeName === 'TEXTAREA') {
            element.select();
        }
        else {
            var range = document.createRange();
    
            range.selectNodeContents(element);
            selection.removeAllRanges();
            selection.addRange(range);
        }
        
    }

    return selection.toString();
}

module.exports = select;
