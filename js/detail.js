


//实现小图前进后退
let prev=document.querySelector('.prev');
let next=document.querySelector('.next');
let ul=document.querySelector('.spec-items ul');
let lis=document.querySelectorAll('.spec-items ul li');
let zhongimg=document.querySelector('.img')






prev.onclick=function () {
    ul.style.left='0';
    // prev.style.background='url()'
}

next.onclick=function () {
    ul.style.left='-116px';
}

//能加过度的1、数值类的  2、颜色类的  3、转换：位移、旋转、缩放、倾斜 4、盒阴影

//实现现实中图
console.log(lis)




//
let mainImg=document.querySelector('.main-img');
let zoomPup=document.querySelector('.zoom-pup');
let zoomDiv=document.querySelector('.zoom-div');
let bigImg=document.querySelector('.zoom-div img');



for(let i=0;i<lis.length;i++)
{
    lis[i].onclick=function () {
    //这里的children是li标签的子元素，即li标签下的第0个标签<img>的.src
    zhongimg.src=lis[i].children[0].src;
    bigImg.src=zhongimg.src;
    }
}





// 鼠标划入后显示
mainImg.onmouseover=function ()
{
    zoomPup.style.display='block';
    zoomDiv.style.display='block';
}

mainImg.onmouseout=function ()
{
    zoomPup.style.display='none';
    zoomDiv.style.display='none';
}



//
//e为事件对象
mainImg.onmousemove=function (e)
{
    //获取鼠标距离文档顶部的像素
    let pageY=e.pageY;

    //获取鼠标距离文档左侧的像素
    let pageX=e.pageX

    //获取到中图距离文档顶部的距离
    let offsetTop=mainImg.offsetTop;
    //获取到中图距离文档左侧的距离
    let offsetLeft=mainImg.offsetLeft;


    //获取黄色小框的高度的一半
    let h=zoomPup.clientHeight/2;
    //宽度的一半
    let  w=zoomPup.clientWidth/2;

    let  top=pageY-offsetTop-h;
    let left=pageX-offsetLeft-w;

    //限定上下的范围，不超出中图的安慰
    if(top<=0)
    {
           top=0;
    }
    else if(top>=mainImg.clientHeight-zoomPup.clientHeight)
    {
        top=mainImg.clientHeight-zoomPup.clientHeight;
    }

    //限定左右的范围，不超出中图的安慰
    if(left<=0)
    {
        left =0;
    }
    else if(left>=mainImg.clientWidth-zoomPup.clientWidth)
    {
        left=mainImg.clientWidth-zoomPup.clientWidth;
    }


    zoomPup.style.top=top+'px';
    zoomPup.style.left=left+'px';

    let y=top/(mainImg.clientHeight-zoomPup.clientHeight);

    let  yy=y*(800-540);

    bigImg.style.top=-yy+'px';



    let x=left/(mainImg.clientWidth-zoomPup.clientWidth);
    let  xx=x*(800-540);
    bigImg.style.left=-xx+'px';
}

let reduce=document.querySelector('.reduce');

let add=document.querySelector('.add');

let buyNum=document.querySelector('.buy-num')


add.onclick=function ()
{
    buyNum.value++;
    if(buyNum.value>1)
    {
        reduce.className='reduce';
    }
}

reduce.onclick=function ()
{
    buyNum.value--;
    if(buyNum.value<=1)
    {
        buyNum.value=1;
        reduce.className='reduce disabled';
    }
}













