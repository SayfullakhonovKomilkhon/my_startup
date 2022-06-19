$(document).ready(function () {
    
    // Filter Menu
    function filterMenu(all){
        $('.all').filter(all).slideDown(1000);
        $('.all').not(all).slideUp(1000); 
    }
    
    $('.btn').click(function(){
        var dataMenu = $(this).attr('data-menu');
        filterMenu('.' + dataMenu);
        $(this).addClass('active').siblings().removeClass('active');
    });
    
    
    
});