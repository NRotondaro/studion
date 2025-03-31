$(document).ready(() => {
  //MENU
  $('.navbar__menu-btn').on('click', function () {
    $('.navbar__links').toggleClass('active');
    $(this).find('i').toggleClass('fa-bars');
    $(this).find('i').toggleClass('fa-times');
  });

  //CAROUSEL
  const slickOptions = {
    autoplay: true,
    autoplaySpeed: 4500,
    dots: false,
    prevArrow: '<button type="button" class="slick-prev">Previous</button>;',
    nextArrow: '<button type="button" class="slick-next">Previous</button>;',
  };
  $('.slider').slick(slickOptions);
  $('.testimonials__slider').slick(slickOptions);

  $('.footer__form-button').on('click', () => {
    const email = $('#email').val();
    Email.send({
      Host: 'smtp.elasticemail.com',
      Username: 'niksonrotondaro1@gmail.com',
      Password: 'DC4049BF23107FAEC385E815EB67D69D3E74',
      To: 'nikson_rotondaro@hotmail.com',
      From: email,
      Subject: 'Please add me to the newsletter',
      Body: `Olá. 
            Eu gostaria de ser adicionado na newsletter do site. 
            Meu email é ${email}. 
            Obrigado!`,
    }).then((message) => alert(message));
  });
});
