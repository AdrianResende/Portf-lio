// Scroll navbar e botão de voltar ao topo
$(document).ready(function(){
    $(window).scroll(function(){
        // Navbar sticky
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        } else {
            $('.navbar').removeClass("sticky");
        }
        
        // Botão scroll to top
        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        } else {
            $('.scroll-up-btn').removeClass("show");
        }
    });

    // Smooth scroll para o topo
    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
    });

    // Efeito de digitação
    var typed = new Typed(".typing", {
        strings: ["Desenvolvedor Vue.js", "Desenvolvedor Front-end", "Especialista em UI/UX", "Entusiasta React"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    // Menu mobile
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    // Smooth scroll para links internos
    $('a[href^="#"]').click(function(e){
        e.preventDefault();
        var target = $($(this).attr('href'));
        if(target.length){
            $('html, body').animate({
                scrollTop: target.offset().top - 70
            }, 1000);
        }
    });

    // Animação das barras de progresso quando ficam visíveis
    function animateProgressBars() {
        $('.line').each(function() {
            var $this = $(this);
            var windowTop = $(window).scrollTop();
            var elementTop = $this.offset().top;
            var elementHeight = $this.height();
            var windowHeight = $(window).height();

            if (windowTop + windowHeight > elementTop + elementHeight/2) {
                $this.addClass('animate');
            }
        });
    }

    $(window).scroll(animateProgressBars);
    animateProgressBars(); // Executar uma vez no carregamento

    // Adicionar classe CSS para animação
    $('<style>')
        .prop('type', 'text/css')
        .html('.line.animate::before { transition: width 2s ease; }')
        .appendTo('head');
});
