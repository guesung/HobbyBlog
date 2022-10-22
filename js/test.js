// 범위 랜덤 함수(소수점 2자리까지)
function random(min, max) {
    // `.toFixed()`를 통해 반환된 문자 데이터를,
    // `parseFloat()`을 통해 소수점을 가지는 숫자 데이터로 변환
    return parseFloat((Math.random() * (max - min) + min).toFixed(2))
}
const random_num=random(10,15)      // 랜덤 개수(10~15)

const containerEl=document.querySelector('.container')

for(var i=0;i<random_num;i++){
    var random_left, random_top
    if(i<random_num/2){
        random_left=random(0,300)
        random_top=random(300,1000)
    }
    else{
        random_left=random(1800,2200)
        random_top=random(300,1000)
    }

    const balloon__boxEl=document.createElement('div')
    containerEl.appendChild(balloon__boxEl)
    balloon__boxEl.classList.add('balloon__boxEl')

    balloon__boxEl.style.cssText="position:absolute;"
    balloon__boxEl.style.left=random_left+'px'
    balloon__boxEl.style.top=random_top+'px'

    const balloonEl=document.createElement('img')
    balloon__boxEl.appendChild(balloonEl)
    balloonEl.classList.add('balloon')
    balloonEl.setAttribute('src','https://cdn-icons-png.flaticon.com/512/6472/6472480.png')
    balloonEl.style.cssText="width:200px;"
}
function floatingObject(selector, delay, size) {
    // gsap.to(요소, 시간, 옵션);
    gsap.to(
        selector, //선택자
        random(0.5, 1.5), //애니메이션 동작 시간
        { // 옵션
            y: size,
            repeat: -1, // 무한 반복
            yoyo: true, // 1번실행 후 반대로 실행
            ease: Power1.easeInOut, //gsap easing에서 가져옴
            delay: random(0, delay)
        }
    );
}
floatingObject(document.querySelectorAll('.balloon'), 1, 15)

// containerEl.forEach(function(box,index){
//     floatingObject(box, 1, 15)
// });
// for(var i=0;i<random_num;i++){
    
// }
// A.forEach(function(B,index){} ; A내의 요소들이 하나씩 B에 들어가며, index는 0부터 1씩 증가함


const badgeEl = document.querySelectorAll('.balloon');
window.addEventListener('scroll', _.throttle(function () { 
  if (window.scrollY > 500) {
    gsap.to(badgeEl, .6, {
      opacity: 0,
      display: 'none'
    });
  } else {
    gsap.to(badgeEl, .6, {
      opacity: 1,
      display: 'block'
    });
  }
}, 300));
