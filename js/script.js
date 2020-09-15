$('.header-contacts-btn').on('click', ()=>{
    $('.modal').removeClass('hidden')
    $('body').css("overflow-y","hidden");
    
})
$('.modal-close').on('click', ()=>{
    $('.modal').addClass('hidden');
    $('body').css("overflow-y","visible");
})




if($(window).width()<700){
    $('.header-contacts-btn').text('');
    
 }else{
     $('.header-contacts-btn').text('ОБРАТНЫЙ ЗВОНОК')
 }
console.dir($('#myMap')[0].scroling)
 //.behaviors.disable('scrollZoom')

$(window).resize(()=>{
    if($(window).width()<700){
       $('.header-contacts-btn').text('')
    }else{
        $('.header-contacts-btn').text('ОБРАТНЫЙ ЗВОНОК')
    }
});

// if(window.screen.availWidth < 700){
//     alert('hello')
// }