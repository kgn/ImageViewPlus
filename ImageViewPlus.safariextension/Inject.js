var html = document.getElementsByTagName('html')[0];
if(html.childNodes.length == 1 && html.firstChild.nodeName == 'BODY'){
    var body = html.firstChild;
    if(body.childNodes.length == 1 && body.firstChild.nodeName == 'IMG'){
        body.className = 'ImageViewPlus-body';
        
        var img = body.firstChild;
        img.className = 'ImageViewPlus-img';
        
        var p = document.createElement('p');
        p.className = 'ImageViewPlus-p';
        
        p.appendChild(img);
        body.appendChild(p);
        
        img.className += ' ImageViewPlus-Display';
        
        //TODO: add setting for this
        img.className += ' ImageViewPlus-Treatment';
    } 
}
