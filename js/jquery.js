// CAMISAS
		$(".imgThumb").on("mouseover",function(){
			var color = $(this).data("color");
			var url = "assets/camiseta/large/"+color+".jpg";

			$("#vistaPrevia").attr("src",url);
			$("#lblColor").text(color);
		});

		//REDIRECCIONES

$(".home").on("click",function(){
	var url = "index.html";
	$(location).attr('href',url);

});

$(".ropa").on("click",function(){
	var url = "Ropa.html";
	$(location).attr('href',url);

});


//IMAGENES

 		$(document).ready(function(){
			var src= ["assets/banner/Ropa1.JPG","assets/banner/Ropa2.JPG","assets/banner/Ropa3.JPG"];
			var contador=0;
			var html="";
			for (var i = 0; i <= 2; i++) {

				contador++;


				html += '<div class="carousel-item">';
				html += '<img class="d-block img-responsive banner" src="'+src[i]+'">';
				html += '</div>';
				console.log(src);
				$("#bannerc").html(html);
			}

			$( "#bannerc div:nth-child(1)" ).addClass("active");
});


//CARDS

 		$(document).ready(function(){

 			var text = ["Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.","Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.","Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus."];
 			var titulos = ["Eventos","LifeStyle","Stores"];
 			var img = ["assets/Seccion/img1.JPG","assets/Seccion/img2.JPG","assets/Seccion/img3.JPG"];
 			var html = '';

 			for (var i = 0; i <= 2; i++) {

 				 html += '<div class="card">';
 				 html += '<img class="card-img-top card-per" src="' + img[i] + '">';
 				 html += '<div class="card-block">';
              	 html += '<h4 class="card-title">'+ titulos[i] +'</h4>';
                 html += '<p class="card-text">' + text[i] + '</p>';
                 html += '<a href="#" class="btn btn-outline-primary">Leer más..</a>';
                 html += '</div></div>';
 			}

 			$("#titu").html(html);
 		})


		/*
		$(document).ready(function(){

		$("#titu").children("div").each(function(){

			if($(this).hasClass("card-title")){

				console.log('dd');
			}


		});

		});

		*/

		// $(document).ready(function(){
		// 	var src= ["assets/banner/Ropa1.JPG","assets/banner/Ropa2.JPG","assets/banner/Ropa3.JPG"];
		// 	var contador=0;
		// 	var html="";
		// 	for (var i = 0; i <= 2; i++) {
		//
		// 		contador++;
		//
		//
		// 		html += '<div id="ccard'+contador+'" class="carousel-item">';
		// 		html += '<img class="d-block img-responsive banner" src="'+src[i]+'">';
		// 		html += '</div>';
		// 		console.log(src);
		// 		$("#bannerc").html(html);
		// 	}
		//
		// 	$("#ccard1").addClass("active");
		// });





		//
		// $("<img>",{
		// 	class: "d-block img-fluid banner",
		// 	src: "assets/banner/Ropa1.JPG"
		// }).appendTo(".ban-1");
		//
		// $("<img>",{
		// 	class: "d-block img-fluid banner",
		// 	src: "assets/banner/Ropa2.JPG"
		// }).appendTo(".ban-2");
		//
		// $("<img>",{
		// 	class: "d-block img-fluid banner",
		// 	src: "assets/banner/Ropa3.JPG"
		// }).appendTo(".ban-3");



		// $(document).ready(function(){
		// 	var contador=0;
		// 	var src= ["assets/banner/Ropa1.JPG","assets/banner/Ropa2.JPG","assets/banner/Ropa3.JPG"];
		// 	for (var i = 0; i <= 2; i++) {
		// 			contador++;
		// 			console.log(src[i]);
		// 			console.log(contador);
		// 			var imag = $("<img>",{
		// 				class: "d-block img-fluid banner",
		// 				src:"assets/banner/Ropa2.JPG"
		// 			});
		// 			$("#bannerc").html(imag);
		// 			$(".banner").attr("src",src[i]);
		// 	}
		// });
