var html = document.getElementsByTagName('html')[0];
if(html.childNodes.length == 1 && html.childNodes[0].nodeName == 'BODY'){
    var body = html.childNodes[0];
    if(body.childNodes.length == 1 && body.childNodes[0].nodeName == 'IMG'){
        var img = body.childNodes[0];
        var p = document.createElement('p');
        p.appendChild(img);
        body.appendChild(p);
    }
}
