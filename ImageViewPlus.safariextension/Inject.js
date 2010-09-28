var html = document.getElementsByTagName('html')[0];
if(html.childNodes.length == 1 && html.firstChild.nodeName == 'BODY'){
    var body = html.firstChild;
    if(body.childNodes.length == 1 && body.firstChild.nodeName == 'IMG'){
        var img = body.firstChild;
        var p = document.createElement('p');
        p.appendChild(img);
        body.appendChild(p);
        
        var imgClass = 'ImageViewPlus-Display';
        //TODO: add setting for this
        imgClass += ' ImageViewPlus-Treatment';
        img.className = imgClass;
    } 
}
