const carousel1=document.querySelector(".carousel-1");
const wrapper1=document.querySelector(".wrapper-1");
const arrowBtns1=[...document.querySelectorAll(".c1-btn")];
const imgsCarousel1=[...document.querySelectorAll(".slide-1")]

//function to change button Opacity depending on currentscroll position
setOpacity=(carousel,arrBtn)=>{
    const maxScroll=(carousel.scrollWidth-carousel.clientWidth);
    if(carousel.scrollLeft<=1) {
        arrBtn[0].style.opacity=0.4;
        arrBtn[1].style.opacity=1;
    }
    else if(maxScroll-carousel.scrollLeft<=1) {
        arrBtn[0].style.opacity=1;
        arrBtn[1].style.opacity=0.4;
    }
    else{
        arrBtn[0].style.opacity=1;
        arrBtn[1].style.opacity=1;
    }
}


arrowBtns1.forEach(btn=>{
    btn.addEventListener('click',(e)=>{
        const imgWidthC1=carousel1.clientWidth;
        carousel1.scrollLeft+=btn.id==="l1"?-imgWidthC1:imgWidthC1;
    })
})

wrapper1.addEventListener('mouseover',()=>{
    setOpacity(carousel1,arrowBtns1);
})

wrapper1.addEventListener('mouseout',()=>{
    arrowBtns1.forEach(btn=>btn.style.opacity=0);
})

// second carousel
const carousel2=document.querySelector('.carousel-2');
const arrowBtns2=[...document.querySelectorAll(".c2-btn")];

arrowBtns2.forEach(btn=>{
    btn.addEventListener('click',(e)=>{
        const imgWidthC1=(carousel2.scrollWidth)/4+10;
        carousel2.scrollLeft+=btn.id==="l2"?-imgWidthC1:imgWidthC1;
    })
})

/*let isDragStart=false, prevPageX, prevScroll;

const dragStart=(e)=>{
    isDragStart=true;
    e.target.classList.add("dragging");
    // initial cursor position and position of carousel
    prevPageX=e.pageX;
    prevScroll=e.target.scrollLeft;
}

const dragStop=(e)=>{
    isDragStart=false;
    e.target.classList.remove("dragging");
}

const dragging=(e)=>{
    if(!isDragStart) return;
    e.preventDefault();
    console.log(e.pageX);
    let positionDiff=e.pageX-prevPageX;
    carousel2.scrollLeft=prevScroll-(positionDiff);
}

carousel2.addEventListener('mousedown',dragStart);
carousel2.addEventListener('mousemove',dragging);
carousel2.addEventListener('mouseout',dragStop);*/

// video section (sec-5)
const carousel3=document.querySelector('.carousel-3');
const videos1=[...document.querySelectorAll('.vid-card-1')];

videos1.forEach(vid=>{
    vid.addEventListener('mouseover',(e)=>{
        vid.children[0].play();
        vid.children[0].muted=!vid.children[0].muted;
    });
    vid.addEventListener('mouseout',(e)=>{
        vid.children[0].pause();
        vid.children[0].muted=!vid.children[0].muted;
    });
})

const arrowBtns3=[...document.querySelectorAll('.c3-btn')];

arrowBtns3.forEach(btn=>{
    btn.addEventListener('click', (e)=>{
        const imgWidthC1=(carousel3.clientWidth)+20;
        carousel3.scrollLeft+=btn.id==="l3"?-imgWidthC1:imgWidthC1;
    });
});

// section 11
const slideContainer=document.querySelector('.s11-wrapper');
const slide=document.querySelector('.s11-img-container');
let slideImgs=document.querySelectorAll('.s11-img');

const rightScroll=()=>{
    slide.scrollLeft-=slideImgs[0].clientWidth*slideImgs.length;
}

slideContainer.addEventListener("mouseout",rightScroll);

// section12
const carousel4=document.querySelector('.carousel-4');
const videos2=[...document.querySelectorAll('.vid-card-2')];

videos2.forEach(vid=>{
    vid.addEventListener('mouseover',(e)=>{
        vid.children[0].play();
        vid.children[0].muted=!vid.children[0].muted;
    });
    vid.addEventListener('mouseout',(e)=>{
        vid.children[0].pause();
        vid.children[0].muted=!vid.children[0].muted;
    });
})

const arrowBtns4=[...document.querySelectorAll('.c4-btn')];

arrowBtns4.forEach(btn=>{
    btn.addEventListener('click', (e)=>{
        const imgWidthC1=(carousel4.clientWidth)+20;
        carousel4.scrollLeft+=btn.id==="l4"?-imgWidthC1:imgWidthC1;
    });
});

// section 3 increment decrement on + -
const add=document.querySelector('.add-btn');
const remove=document.querySelector('.remove-btn');
const netQty=document.querySelector('.qty');

add.addEventListener('click', (e)=>{
    netQty.value++;
})

remove.addEventListener('click', (e)=>{
    if(netQty.value>1) netQty.value--;
    else netQty.value='';
})