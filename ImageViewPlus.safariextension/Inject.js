var html = document.getElementsByTagName('html')[0];
if(html.childNodes.length === 1 && html.firstChild.nodeName.toLowerCase() === 'body'){
    var body = html.firstChild;
    if(body.childNodes.length === 1 && body.firstChild.nodeName.toLowerCase() === 'img'){
        body.className = 'ImageViewPlus-body';
        
        var img = body.firstChild;
        img.className = 'ImageViewPlus-img ImageViewPlus-Treatment';
        
        var p = document.createElement('p');
        p.className = 'ImageViewPlus-p';
        
        p.appendChild(img);
        body.appendChild(p);
    } 
}
