function ball(top,left,inx,iny ) {
    this.count = '';
    this.top = top;
    this.left = left;
    this.iny = iny;
    this.inx = inx;
    this.ballCreate = function (divId,color) {
        var contain = document.getElementById('con1');
        var iDiv = document.createElement('div');
        iDiv.id = divId;
        iDiv.className = 'circles';
        iDiv.setAttribute('style', 'width:40px;height:40px;background-color:' + color);
        iDiv.style.top = this.top + 'px';
        iDiv.style.left = this.left + 'px';
        contain.appendChild(iDiv); 
        this.count = divId;
    }
}


var iballs = [];
var no;
window.onload = function () {
    //debugger;
  
    var top = 30;
    var left = 200;
    var int = 30;
    var inl = 50;
    document.getElementById('enter').onclick = function () {
        no = parseInt(document.getElementById('num').value);
        for (var i = 0; i < no; i++) {
            var iball = new ball(top, left, 30, -12);
            iballs[i] = iball;
            var id = (i + 1).toString();
            iballs[i].ballCreate(id, 'blue');
            top += int;
            left += inl;
            if (top < 0 || top > 550)
                int = -int;
            else if (top == 0 )
                int = 30;
            if (left < 0 || left > 750)
                inl = -inl;
            else if (left == 0)
                inl = 50;
           
        }
    }
    
    setInterval(shake, 100);
}


var animate;

function iniitializeBall(){

    var posRight, posTop;

    var idOfDiv = iball.count.toString();

    var obj = document.getElementById(idOfDiv);

    var obj_rect = document.getElementById('rect');

    obj.style.position = 'relative';


    obj.style.left = '0px';

    obj.style.top = '300px';

}

function shake() {
    
    for (var i = 0; i < no; i++) {
        move(iballs[i]);
        
    }

}

var move = function (ball) {
    debugger;
    var con = ball.count;
    var idOfDiv = con;

    var obj = document.getElementById(idOfDiv);

    var posRight = parseInt(obj.style.left);

    var posTop = parseInt(obj.style.top);

    if (posRight <=10 || posRight > 750)
        ball.inx = -ball.inx;


    if (posTop <= 10 || posTop > 550)
        ball.iny = -ball.iny;

    obj.style.top=parseInt(obj.style.top)+ball.iny+ 'px';
    obj.style.left=parseInt(obj.style.left)+ball.inx + 'px';
    

}

  