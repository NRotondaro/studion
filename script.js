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

  // Just for leraning porpuse this is not working due to limitations
  $('.footer__form-button').on('click', (e) => {
    const email = $('#email').val();

    // SMTP.js imported in index.html
    // eslint-disable-next-line no-undef
    Email.send({
      Host: 'smtp.elasticemail.com', // No domain available to use
      Username: 'niksonrotondaro1@gmail.com',
      Password: 'DC4049BF23107FAEC385E815EB67D69D3E74',
      To: 'niksonrotondaro1@hotmail.com',
      From: email,
      Subject: 'Por favor me adicione a newsletter',
      Body: `Olá. 
            Eu gostaria de ser adicionado na newsletter do site. 
            Meu email é ${email}. 
            Obrigado!`,
    })
      .then((message) => alert(message))
      .catch((error) => {
        alert('Ocorreu um erro ao enviar o email, tente novamente mais tarde');
        console.warn('Erro no envio do email:', error);
      });
  });
});
