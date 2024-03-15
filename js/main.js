$(function () {

    /* 링크 방지 */
    $('a').click(function (e) {
        e.preventDefault();
    });

    //🚗🚗🚗🚗🚗🚗🚗🚗🚗스크립트 시작

    //cont02 New 
    let newBtn = $('.new .normal');
    newBtn.click(function () {
        $(this).next().slideToggle();
        $(this).toggleClass('on');

        //siblings() : 나를 제외한 모든 형제 선택자
        //next() : 바로 뒤에 있는 형제선택자
        //nextAll() : 뒤에 있는 모든 형제선택자
        //prev()
        //prevAll()
    });//newBtn.click()


    //product jquery 탭메뉴 구현
    let productMenu = $('.product .product__menu li');
    let productList = $('.product .product__list');

    //$(this).index() => 클릭한 index찾기
    //eq() => index값 설정
    //productMenu[3] => productMenu.eq(3)
    //eq($(this).index()) 

    productMenu.click(function () {
        productMenu.removeClass('on');
        $(this).addClass('on');

        //console.log($(this).index())
        productList.removeClass('on');
        productList.eq($(this).index()).addClass('on');
    });//productMenu.click()


    //best 
    let bestLink = $('.best .item-big a');
    let bestImage = $('.best .item-big img');
    let bestTitle = $('.best .item-big h4');
    let bestText = $('.best .item-big strong');

    let bestSmallItem = $('.best .item-small .item');

    bestSmallItem.mouseenter(function () {

        bestSmallItem.find('img').css({
            'opacity': '0.3'
        });

        $(this).find('img').css({
            'opacity': '1'
        })

        let thisLink = $(this).find('a').attr('href');
        let thisImage = $(this).find('img').attr('src');
        let thisTitle = $(this).find('h4').text();
        let thisText = $(this).find('strong').text();


        bestLink.attr('href', thisLink);
        bestImage.attr('src', thisImage);
        bestTitle.text(thisTitle);
        bestText.text(thisText);
    });///bestSmallItem.mouseenter()



    //md
    //480 이하일때 슬라이드 구현 안되게
    if ($(window).width() < 481) {
        $('.md .swiper').removeClass('.md_pick_slides');
    } else {
        var swiper = new Swiper(".md_pick_slides", {
            slidesPerView: 2.5,
            spaceBetween: 25,
            pagination: {
                el: ".swiper-pagination",
                clickable: true,
            },
            breakpoints: {
                767: {
                    slidesPerView: 3.5,
                    spaceBetween: 30,
                },
                1024: {
                    slidesPerView: 4.5,
                    spaceBetween: 35,
                },
                1280: {
                    slidesPerView: 5.5,
                    spaceBetween: 35,
                },
            },
        });
    }


    //image__box
    let imageBoxImage = document.querySelectorAll('.image_box figure');
    let imageBoxNextBtn = document.querySelector('.image_box .slide_btn');
    let imageBoxPage = document.querySelector('.image_box .slide_pagination');

    for (let i = 0; i < imageBoxImage.length; i++) {
        imageBoxPage.innerHTML += '<li></li>';
    }

    let pageBtn = document.querySelectorAll('.slide_pagination li')
    pageBtn[0].classList.add('on');

    //페이징 버튼 클릭시 진행
    for (let i = 0; i < pageBtn.length; i++) {
        pageBtn[i].addEventListener('click', () => {
            imageBoxImage.forEach((item) => {
                item.classList.remove('on');
            });
            imageBoxImage[i].classList.add('on')

            pageBtn.forEach((icon) => {
                icon.classList.remove('on')
            })
            pageBtn[i].classList.add('on')
        });
    }

    //imageBoxNextBtn 다음버튼 클릭시 진행
    let index = 0;
    imageBoxNextBtn.addEventListener('click', () => {
        index++;
        if (index >= pageBtn.length) {
            index = 0;
        }

        imageBoxImage.forEach((item) => {
            item.classList.remove('on');
        });
        imageBoxImage[index].classList.add('on');

        pageBtn.forEach((icon) => {
            icon.classList.remove('on');
        });
        pageBtn[index].classList.add('on');
    });

    //자동슬라이드
    setInterval(() => {
        index++;
        if (index >= pageBtn.length) {
            index = 0;
        }

        imageBoxImage.forEach((item) => {
            item.classList.remove('on');
        });
        imageBoxImage[index].classList.add('on');

        pageBtn.forEach((icon) => {
            icon.classList.remove('on');
        });
        pageBtn[index].classList.add('on');
    }, 3000);


    //footer 제이쿼리
    $('.company_info-mobile').click(function(){
        $(this).next().toggle();

        $(this).toggleClass('on');
    });

});//script end
