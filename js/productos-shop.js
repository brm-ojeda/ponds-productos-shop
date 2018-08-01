$(document).ready(function() {
	// console.log('hola');

// Select list
	$('ul li a').click(function(){

		$('li a').removeClass("filt-active");
		$(this).addClass("filt-active");

	});


// Nav Mobil - Mostrar y ocultar

    $('#boton-nav').click(function(){

		var estado = $('#nav-filt').data('estado'); 

		if(estado == 'Oculto'){
			$('#nav-filt').slideDown(700);
			$('#nav-filt').data('estado','Mostrar');
		}
		else if (estado == 'Mostrar'){
			$('#nav-filt').slideUp(700);
			$('#nav-filt').data('estado','Oculto');
		}

	});

// Características KIT - Mostrar y ocultar

	$('#btn-caract').click(function(){

		var estado = $('#view-caract').data('estado');

		if(estado == 'Oculto'){
			$('#view-caract').show();
			$('#view-caract').data('estado','Mostrar');

			$("#img-close").attr("src","images/shop/less.svg");

		}
		else if (estado == 'Mostrar'){
			$('#view-caract').hide();
			$('#view-caract').data('estado','Oculto');

			$("#img-close").attr("src","images/shop/more.svg");
		}

	});

// BOTON Características CLOSE - Mostrar y ocultar

	$('#btn-close-caract').click(function(){

		var estado = $('#view-caract').data('estado');

		if (estado == 'Mostrar'){
			$('#view-caract').hide();
			$('#view-caract').data('estado','Oculto');

			$("#img-close").attr("src","images/shop/more.svg");
		}

	});


// redimensionar la pantalla resoluciones

	$(window).resize(function(){
		
		if (window.matchMedia("(min-width: 800px)").matches) {
			// console.log('Desktop');
			$('#nav-filt').css('display', 'inline-block');


		} else {
			// console.log('Mobil');
			$('#nav-filt').css('display', 'none');

		}

	});


// Seleccionar y montar en el h4, tambien cierra el filtro 
	
	$('.element-filt').click(function(){
		// console.log('selecciona elemento');

		var seleccionado = $(this).text();
		// console.log( seleccionado, 'selee');

		$('#select-filt').text( seleccionado);


		if (window.matchMedia("(max-width: 800px)").matches) {

			$('#nav-filt').slideUp(700);


		}

	});

});

	var alto_hd = document.getElementsByClassName('menu-principal')
		console.log('Medir alto')



