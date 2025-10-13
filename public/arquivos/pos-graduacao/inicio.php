<?php
	if (!isset($_SESSION)) {//Verificar se a sessão não já está aberta.
		session_start();
	  }
	
	unset(
		$_SESSION['loginuser']
	);
	session_destroy();
	header("Cache-Control: no-cache, must-revalidate");
	header("Expires: Mon, 26 Jul 1997 05:00:00 GMT");
?>
<!DOCTYPE html>
<html lang="pt-br">
<head>
	<meta http-equiv="cache-control" content="max-age=0" />
	<meta http-equiv="cache-control" content="no-cache" />
	<meta http-equiv="expires" content="0" />
	<meta http-equiv="expires" content="Tue, 01 Jan 1980 1:00:00 GMT" />
	<meta http-equiv="pragma" content="no-cache" />
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
	<meta name="description" content="<b>Vetibular FKB segundo semeste. Vem você também fazer parte da FKB a melhor Faculdade da região.</b>" />
	<meta name="keywords" content="Vestibular é na FKB, Faculdade é na FKB, Bolsa de estudos é na FKB" />
    <link rel="stylesheet" href="estilos/style.css" type="text/css" media="screen"/>
    <link rel="stylesheet" href="estilos/nivo-slider.css" type="text/css" media="screen" />
	<link rel="stylesheet" href="estilos/dark.css" type="text/css" media="screen" />
	<link rel="stylesheet" href="css/galeria_campus.css" />
	<link rel="stylesheet" href="css/noticias.css" />
	<link rel="stylesheet" href="css/cookies.css">
	<link rel="stylesheet" href="css/contato.css">
	<link rel="stylesheet" href="css/app.css">
	<link rel="stylesheet" href="css/admin.css">
	<link rel="shortcut icon" href='img/icone.ico' type="imagen/x-icon" /> 
	<link rel="stylesheet" href="css/font-awesome.css"><link rel="stylesheet" href="estilos/popup.css">
	<script src="https://use.fontawesome.com/0f22015a58.js"></script>
	<!--galeria de videos-->
	<link rel='stylesheet' href='unitegallery/css/unite-gallery.css' type='text/css' />

    <title>FKB - FACULDADES INTEGRADAS</title>
</head>
<body>
	
    <section id="sessao1" class="sessao1">
		<header id="header">
			<nav id="nav">
			  <button aria-label="Abrir Menu" id="btn-mobile" aria-haspopup="true" aria-controls="menu" aria-expanded="false">Menu
				<span id="hamburger"></span>
			  </button>
			  <ul id="menu" role="menu">
						<li><a href="#sessao1" id="btn-link">INÍCIO</a></li>
						<li><a href="#sessao2" id="btn-link1">PORTAL DE ACESSO</a></li>
						<li><a href="#sessao9" id="btn-link2">NOTÍCIAS</a></li>
						<li><a href="#sessao3" id="btn-link2">INSTITUCIONAL</a></li>
						<li><a href="#sessao8" id="btn-link2">CAMPUS</a></li>
						<li><a href="#sessao7" id="btn-link2">MULTIMÍDIA</a></li>
						<li><a href="#sessao4" id="btn-link3">CURSOS</a></li>
						<li><a href="#sessao5" id="btn-link4">CONTATOS</a></li>
			  </ul>
			</nav>
		  </header>
		  <script src="js/menu.js"></script>
		<div class="logo-mobile"><img src="img/logofkb.png"/></div>

          <div class="sub-menu">
			<p class="p">Horário de Funcionamento : 13:30 às 17:00 e das 18:30 às 22:00<br>
				Segunda à Sexta-feira<br>
   			</p>
            <h3>Vestibular 1º Semestre 2022</h3>
            
                <form action="https://portais.qualinfonet.com.br/fkb/acadweb.modulo.eventos.php" target="_blank"><input type="submit" class="btn_submit_cad" value="INSCREVA-SE"></form>
        
                <form action="arquivos/edital_geral_03.pdf" target="_blank"><input type="submit" class="btn_submit_cad" value="EDITAL GERAL"></form>

                <form action="arquivos/Edital de Publicação Fase 04 -Semana 3 - 1 Semestre 2022.pdf" target="_blank"><input type="submit" class="btn_submit_cad" value="EDITAL DIVULGAÇÃO DE RESULTADOS"></form>
         
                <form action="arquivos/RESULTADO DA CLASSIFICAÇÃO PSU2022-1.1.3.pdf" target="_blank"><input type="submit" class="btn_submit_cad" value="RESULTADO DA CLASSIFICAÇÃO PSU 2022 - 1.1.3"></form>

				<form action="arquivos/calendario letivo 1.2022.pdf" target="_blank"><input type="submit" class="btn_submit_cad" value="CALENDÁRIO LETIVO 1° SEMESTRE 2022"></form>
        </div>
		<div id="rede_social">
			
		</div>
		<div class="cookies-container">
		  <div class="cookies-content">
			<p>Este site usa cookies para melhorar a sua experiência de navegação e fornecer o melhor serviço possível.
				Continuando a navegar no site, você concorda com o uso deles.</p>
			<div class="cookies-pref">
				<input type="checkbox" checked data-function="analytics">
				<label><a id="PP" class="termos">Política de Uso de Cookies</a>
						<script> 
							document.getElementById("PP").addEventListener("click", exibeMensagem);
							function exibeMensagem() {
								Swal.fire({
									  title: '<strong>Política de Privacidade</strong>',
									  confirmButtonText: `Concordo e aceito`,
									  html:
									  '<iframe src="view/politica_privacidade.html"  width="100%" height="500px">'+
									 '',
									});
								};</script>
					</label>
					
					<input type="checkbox" checked data-function="marketing">
					<label><a id="TU" class="termos">Termos de Uso</a>
						<script>
							document.getElementById("TU").addEventListener("click", exibeMensagem);
							function exibeMensagem() {
								Swal.fire({
									  title: '<strong>Termos de Uso</strong>',
									  confirmButtonText: `Concordo e aceito`,
									  html:
									  '<iframe src="view/termos_uso.html"  width="100%" height="500px">'+
									 '',
									});
								};</script>
					</label>

			</div>
			<button class="cookies-save">Salvar e Continuar</button>
		  </div>
		</div>
		<script src="js/cookies.js"></script>
		<div class="back-to-top"><a href="#sessao1" class="setaup">▲</a></div>
	
		
		<div class="tel">
			<a href="https://www.facebook.com/fkbsocial" class="fa fa-facebook" target="_blank"></a>
			<a href="https://www.instagram.com/faculdades_fkb" class="fa fa-instagram" target="_blank"></a>
			<h2 class="telefone">fone: (15) 3376-9300 <br> <br>Rod. Raposo Tavares, km 162 - Vila Nova Itapetininga, Itapetininga - SP, cep: 18203-340</h2><br>
		</div>
    </section>
	<div vw class="enabled">
    <div vw-access-button class="active tamanho"></div>
    <div vw-plugin-wrapper>
      <div class="vw-plugin-top-wrapper"></div>
    </div>
  </div>
  <script src="https://vlibras.gov.br/app/vlibras-plugin.js"></script>
  <script>
    new window.VLibras.Widget('https://vlibras.gov.br/app');
  </script>	
   
    <section id="sessao2" class="sessao2">
        <h1>PORTAL DE ACESSO</h1>
        <div class="tools">

			<a id="portal" class="itens"><img src="img/portal.png" class="p"><br> <span>PORTAL DE ACESSO</span></a>
			<script>
				document.getElementById("portal").addEventListener("click", exibeMensagem);
				function exibeMensagem() {
					Swal.fire({
						  title: '<strong>PORTAL DO ALUNO</strong>',
						  showDenyButton: true,
						  confirmButtonText: `<a href="https://portais.qualinfonet.com.br/fkb/" target="_blank" style="color: #f0f0f0;">Acesso ao Portal</a>`,
						  denyButtonText: `sair`,
						  html:
						  '<br><img src="img/portal.png" class="scale2"><br><br>'+
						 '<a href="arquivos/Comunicado SG 04 sistema.pdf" id="bli" target="_blank">✓ Comunicado Sistema Acadêmico ACADWEB</a><br><br>'+
						 '<a href="arquivos/Comunicado acesso ao portal do aluno.pdf" id="bli" target="_blank">✓ Requerer LOGIN e SENHA</a><br><br>'+
						 '<a href="arquivos/Comunicado de Rematrícula.pdf" id="bli" target="_blank">✓ Comunicado de Rematrícula</a><br><br>' +
						 '<a href="arquivos/instruções para a rematricula.pdf" id="bli" target="_blank">✓ Passo a Passo para Rematrícula</a><br><br>'+
						 '<a href="#tutorial" id="bli" ">✓ Tutorial em vídeo para Rematrícula</a><br><br>'+
						 '<a href="arquivos/Req. de Rematrícula 1º2022.docx" id="bli" target="_blank">✓ Requerimento para Rematrícula</a><br><br>'+
						 '<a href="arquivos/plano negociação 2.2021.pdf" id="bli" target="_blank">✓ Plano de negociação</a><br><br>'+
						 '<a href="arquivos/AC-FORM.doc" id="bli" target="_blank">✓ Relátorio de Atividades Complementares</a><br><br>'+
						 '',
						});
					};</script>

			<a id="cpa" class="itens"><img src="img/comissão.png"><br> <span>CPA <br>Comissão própria de avaliação</span></a>
			<script>
				document.getElementById("cpa").addEventListener("click", exibeMensagem);
				function exibeMensagem() {
					Swal.fire({
						  title: '<strong>CPA-COMISSÃO PRÓPRIA DE AVALIAÇÃO</strong>',
						  confirmButtonText: `sair`,
						  html:
						  '<br><img src="img/comissão.png" class="scale2"><br><br>'+
						 '<a href="arquivos/biblioteca/doc_CPA/comissão CPA.pdf" id="bli" target="_blank">✓ Comissão CPA</a><br><br>'+
						 '<a href="arquivos/biblioteca/doc_CPA/1 Regimento CPA FKB.pdf" id="bli" target="_blank">✓ Regimento CPA-FKB</a><br><br>'+
						 '<a href="arquivos/biblioteca/doc_CPA/2 CPA-FKB Portarias de nomeação dos integrantes.pdf"id="bli" target="_blank">✓ Portarias de Nomeação CPA-FKB</a><br><br>' +
						 '<a href="arquivos/biblioteca/doc_CPA/3. Estatuto FKB  2019.pdf" id="bli" target="_blank">✓ Estatuto da FKB</a><br><br>'+
						 '<a href="arquivos/biblioteca/doc_CPA/4. Lei SINAES nº 10.861-2004.pdf" id="bli" target="_blank">✓ Lei nº 10.861/2004 <br>Sistema Nacional de Avaliação <br> da Educação Superior (Sinaes)</a>'+
						 '',
						});
					};</script>

			<a id="bib" class="itens"><img src="img/biblioteca_digital.png" class="p"><br><span>BIBLIOTECA DIGITAL<br>Biblioteca Padre Lambert Prins</span></a>
			<script>
				document.getElementById("bib").addEventListener("click", exibeMensagem);
				function exibeMensagem() {
					Swal.fire({
						  title: '<strong>BIBLIOTECA DIGITAL</strong>',
						  showDenyButton: true,
						  confirmButtonText: `<a href="https://dliportal.zbra.com.br/Login.aspx?key=FKB" target="_blank" style="color: #f0f0f0;">Acesso ao Portal</a>`,
						  denyButtonText: `sair`,
						  html:
						  '<br><img src="img/biblioteca_digital.png" class="scale2"><br><br>'+
						 '<p><b>Responsável:</b><br><br>'+
						 ' Marcos Paulo de Passos CRB-8/8046. Bibliotecário das Faculdades Integradas de Itapetininga<br><br>'+
						 '<b>E-mail:</b> marcos.passos@fkb.br e biblioteca@fkb.br<br><br>' +
						 '<a href="http://buscatextual.cnpq.br/buscatextual/visualizacv.do?id=K4243907D8" target="_blank">Currículo Lattes</a><br><br>'+
						 '<a href="arquivos/biblioteca/Manual Biblioteca Digital.pdf"id="bli" target="_blank">✓ Manual Biblioteca Digital</a><br><br>'+
						 '<a href="arquivos/biblioteca/login.pdf" id="bli" target="_blank">✓ Requerer LOGIN e SENHA</a></p>',
						});
					};</script>

			<a id="bibl" class="itens"><img src="img/biblioteca.png"><br><span>BIBLIOTECA <br>Biblioteca Padre Lambert Prins</span></a>
			<script>
				document.getElementById("bibl").addEventListener("click", exibeMensagem);
				function exibeMensagem() {
					Swal.fire({
						  title: '<strong>BIBLIOTECA PADRE LAMBERT PRINS</strong>',
						  confirmButtonText: `sair`,
						  html:
						  '<br><img src="img/biblioteca.png" class="scale2"><br><br>'+
						 '<a href="arquivos/biblioteca/Patrono da Biblioteca FKB Padre Lambert Prins.pdf" id="bli" target="_blank">✓ Patrono da Biblioteca (Padre Lambert Prins)</a><br><br>'+
						 '<a href="arquivos/biblioteca/CERTIFICADO CRB-8 2019 BIBLIOTECA LAMEBRT PRINS FKB.pdf"id="bli" target="_blank">✓ Certificado Conselho Federal de Biblioteconomia<br> 8ª Região (CRB-8)</a><br><br>'+
						 '<a href="arquivos/biblioteca/Ficha Catalográfica - BIBLIOTECA FKB.pdf" id="bli" target="_blank">✓ Ficha Catalográfica</a><br><br>' +
						 '<a href="arquivos/biblioteca/Principais normas da ABNT para Elaboração de Trabalhos aca….pdf" id="bli" target="_blank">✓ Orientações para Normas da ABNT.</a><br><br>'+
						 '<a href="arquivos/biblioteca/BASES DE DADOS - ACESSO GRATUITO.pdf" id="bli" target="_blank">✓ Bases de dados com acesso gratuito.</a><br><br>'+
						 '<a href="arquivos/biblioteca/Comunicado Geral Biblioteca Lambert Prins FKB 20 dezembro 21.pdf" id="bli" target="_blank">✓ COMUNICADO GERAL 2022.</a>',
						});
					};</script>

			<a id="di" class="itens"><img src="img/diplomas.png"><br><span>DIPLOMAS <br>Acesso aos Diplomas</span></a>
			<script>
				document.getElementById("di").addEventListener("click", exibeMensagem);
				function exibeMensagem() {
					Swal.fire({
						  title: '<strong>ACESSO AOS DIPLOMAS</strong>',
						  confirmButtonText: `sair`,
						  html:
						  '<br><img src="img/diplomas.png" class="scale3"><br><br>'+
						 'Lista de Diplomas para Retirada<br><br>'+
						 '<iframe src="view/diplomas.php"  width="100%" height="450px">'+
						 '',
						});
					};</script>

			<a id="es" class="itens"><img src="img/estagio.png"><br><span>ESTÁGIOS <br>Acesso aos documentos</span></a>
			<script>
				document.getElementById("es").addEventListener("click", exibeMensagem);
				function exibeMensagem() {
					Swal.fire({
						  title: '<strong>DOCUMENTOS PARA O ESTÁGIO</strong>',
						  confirmButtonText: `sair`,
						  html:
						  '<br><img src="img/estagio.png" class="scale2"><br><br>'+
						  '<strong>Lista de empresas conveniadas:</strong><br><br>'+
						  '<a href="arquivos/CONVENIOS 20.12.21.pdf">Lista de empresa conveniadas</a><br><br>'+
						  '<strong>Lista de Documentos dos Cursos de Ed.Física/Ciências Biológicas:</strong><br><br>'+
						  '<a href="arquivos/Documentos de Estágio/4 - Acordo de cooperação.docx">✓ Acordo de Cooperação Agente de Integração</a><br><br>' +
						  '<a href="arquivos/Documentos de Estágio/3 - Convênio.docx">✓ Convênio Unidade Concedente Modelo 1</a><br><br>' +
						  '<a href="arquivos/Documentos de Estágio/5 - Programa de atividades.docx">✓ Programa das Atividades do Estágio</a><br><br>' +
						  '<a href="arquivos/Documentos de Estágio/9 - Relatório mensal.doc">✓ Relatório Mensal de Estágio</a><br><br>' +
						  '<a href="arquivos/Documentos de Estágio/2 - Termo de compromisso.docx">✓ Termo de Compromisso Geral</a><br><br>' +
						  '<a href="arquivos/Documentos de Estágio/Termo de Compromisso Licenciatura e Bacharelado.rar">✓ Termo de Compromisso Licenciatura e Bacharelado</a><br><br>' +
						  '<strong>Lista de Documentos do Curso de Administração:</strong><br><br>'+
						  '<a href="arquivos/Documentos de Estágio/ADM e CST/Acordo de Cooperação Agente de Integração.doc">✓ Acordo de Cooperação Agente de Integração</a><br><br>' +
						  '<a href="arquivos/Documentos de Estágio/ADM e CST/Convênio Unidade Concedente Modelo 1.doc">✓ Convênio Unidade Concedente Modelo 1</a><br><br>' +
						  '<a href="arquivos/Documentos de Estágio/ADM e CST/Programa das Atividades de Estágio.doc">✓ Programa das Atividades do Estágio</a><br><br>' +
						  '<a href="arquivos/Documentos de Estágio/ADM e CST/Relatório Mensal de Estágio.doc">✓ Relatório Mensal de Estágio</a><br><br>' +
						  '<a href="arquivos/Documentos de Estágio/ADM e CST/Termo de Compromissi Geral.doc">✓ Termo de Compromisso Geral</a><br><br>'+

						  '<strong>Lista de Documentos do Curso de Direito:</strong><br><br>'+
						  '<a href="arquivos/Documentos de Estágio/direito/RELATÓRIO DE AUTOS FINDOS.docx">✓ Relatório de Autos Findos</a><br><br>' +
						  '<a href="arquivos/Documentos de Estágio/direito/RELATÓRIO DE SESSÃO DO TRIBUNAL DO JÚRI.docx">✓ Relatório de Sessão do Tribunal de Júri</a><br><br>' +
						  '<a href="arquivos/Documentos de Estágio/direito/RELATÓRIO DE VISITAS.docx">✓ Relatório de Visitas</a><br><br>' +
						  '',
						});
					};</script>

<!--
	 
-->

			</div>
    </section>

	<section class="app">
        <div class="container">
            <span class="titulo-app">Aluno obtenha sua carteirinha digital das faculdades FKB</span>
           
            <div class="img-central">
                <img src="img/sessão-app.png" alt="imagem-central">
            </div>
            <p class="sec_text">BAIXE SUA CARTEIRINHA AGORA!</p>
            <p class="sec_text_sub">Realize o primeiro acesso informando seu CPF e RA
                (somente números) e siga as instruções do app.</p>
                <div class="container-center">
                <div class="botao">
                <a class="bt-app" href="https://play.google.com/store/apps/details?id=com.inovatecnologia.carteirinha&hl=pt" target="_blank"><img src="img/disponivel-google-play-badge-6.png" alt="disponivel-google-play-badge-6" /></a>
                <a class="bt-app" href="https://apps.apple.com/br/app/carteirinha/id1476399490" target="_blank"><img src="img/disponivel-na-app-store-botao-10.png" alt="disponivel-na-app-store" /></a>
                </div>
                <div class="qrcode">
                    <img src="img/qr-google.png" alt="qr-google">
                    <img src="img/qr-apple.png" alt="qr-apple">
                </div>
            </div>
        </div>
    </section>			

	<section id="sessao9" class="sessao9">
    <div class="noticias">
      <h1>NOTÍCIAS</h1>
	  <iframe class="ifr" src="noticias/noticia_tres.html" scrolling="no" frameborder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>
	  <iframe class="ifr" src="https://www.facebook.com/plugins/video.php?height=476&href=https%3A%2F%2Fwww.facebook.com%2Ffkbsocial%2Fvideos%2F4949351295086754%2F&show_text=false&width=267&t=0" scrolling="no" frameborder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share" allowFullScreen="true"></iframe>
	  <iframe class="ifr" src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Ffkbsocial%2Fposts%2F3106529666232744&show_text=true&width=370" scrolling="no" frameborder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>
	  <iframe class="ifr"src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Ffkbsocial%2Fposts%2F3080652668820444&show_text=true&width=370" scrolling="no" frameborder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe> 
	  <iframe class="ifr" src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Ffkbsocial%2Fposts%2F3080638718821839&show_text=true&width=370" width="370" scrolling="no" frameborder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>
	  <iframe class="ifr" src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fsimonemarquetto%2Fposts%2F2004567323041622&show_text=true&width=370" scrolling="no" frameborder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>
	  
	  
	 
	  
	  <form action="https://www.facebook.com/fkbsocial" target="_blank"><input type="submit" class="btn_submit_cad" value="saiba mais"></form>
    </div>
  	</section>

    <section id="sessao3" class="sessao3">

        <h1>INSTITUCIONAL</h1>
	
        <div id="wrapper">
			
			<div class="slider-wrapper theme-dark">
				<div id="slider" class="nivoSlider">
				<img src="img/banner marketing fkb/n.jpg" data-thumb="img/banner marketing fkb/n.jpg" data-transition="slideInLeft" />
					<img src="img/banner marketing fkb/n1.jpg" data-thumb="img/banner marketing fkb/n1.jpg" data-transition="slideInLeft" />
					<img src="img/banner marketing fkb/n2.jpg" data-thumb="img/banner marketing fkb/n2.jpg"/>
					<img src="img/banner marketing fkb/n3.jpg" data-thumb="img/banner marketing fkb/n3.jpg" data-transition="slideInLeft" />
					<img src="img/banner marketing fkb/n4.jpg" data-thumb="img/banner marketing fkb/n4.jpg"/>
					<img src="img/banner marketing fkb/n5.jpg" data-thumb="img/banner marketing fkb/n5.jpg" data-transition="slideInLeft" />
					<img src="img/banner marketing fkb/n6.jpg" data-thumb="img/banner marketing fkb/n6.jpg" />
					<img src="img/banner marketing fkb/n7.jpg" data-thumb="img/banner marketing fkb/n7.jpg" data-transition="slideInLeft" />
					<img src="img/banner marketing fkb/n8.jpg" data-thumb="img/banner marketing fkb/n8.jpg"/>
					<img src="img/banner marketing fkb/n9.jpg" data-thumb="img/banner marketing fkb/n9.jpg" data-transition="slideInLeft"/>
					<img src="img/banner marketing fkb/n10.jpg" data-thumb="img/banner marketing fkb/n10.jpg"/>
					<img src="img/banner marketing fkb/n11.jpg" data-thumb="img/banner marketing fkb/n11.jpg" data-transition="slideInLeft"/>
					<img src="img/banner marketing fkb/n12.jpg" data-thumb="img/banner marketing fkb/n12.jpg"/>
					<img src="img/banner marketing fkb/n13.jpg" data-thumb="img/banner marketing fkb/n13.jpg" data-transition="slideInLeft"/>
					<img src="img/banner marketing fkb/n14.jpg" data-thumb="img/banner marketing fkb/n14.jpg"/>
					<img src="img/banner marketing fkb/n15.jpg" data-thumb="img/banner marketing fkb/n15.jpg" data-transition="slideInLeft"/>
				</div>
			</div> <br> <br>
		</div>
		<script src='js/jquery-2.2.4.min.js'></script><script  src="js/popup.js"></script>
    <link rel="stylesheet" href=" sweetalert2/package/dist /sweetalert2.min.css">
	<script src="sweetalert2/package/dist /sweetalert2.min.js"></script>

    </section>
	<div id="modal">
      
		<div class="modal_content">
		  <img src="img/img7.png" id="modal_img">
			
		</div>
		<div id="bt_close" class="bt_close">&times;</div>
	</div>
	<section id="sessao8" class="sessao8">
    <div class="container">
    <img class="campus" src="img/logo_campus.png">

    <section class="grid3">
      <div class="grid3-item">
        <img src="img/img1.png" class="small_img">
        <span>Vem pra FKB</span>
      </div>
      <div class="grid3-item">
        <img src="img/img2.png" class="small_img">
        <span>Conheça nosso campus</span>
      </div>
      <div class="grid3-item">
        <img src="img/img3.png" class="small_img">
        <span>Biblioteca Padre Lambert Prins</span>
      </div>
      <div class="grid3-item">
        <img src="img/img4.png" class="small_img">
        <span>Piscina semi-olímpica aquecida</span>
      </div>
      <div class="grid3-item">
        <img src="img/img6.png" class="small_img">
        <span>Ambiente agradável</span>
      </div>
      <div class="grid3-item">
        <img src="img/img5.png" class="small_img">
        <span>Escritório de assistência juridica</span>
      </div>
      <div class="grid3-item">
        <img src="img/img7.png" class="small_img">
        <span>Centro de convenções</span>
      </div>
      <div class="grid3-item">
        <img src="img/img8.png" class="small_img">
        <span>Academia equipada</span>
      </div>
      <div class="grid3-item">
        <img src="img/img9.png" class="small_img">
        <span>Júri simulado</span>
      </div>
    </div>
	
    </section>
	
	<section id="sessao7" class="sessao7">
	<script type='text/javascript' src='unitegallery/js/jquery-11.0.min.js'></script>	
	<script type='text/javascript' src='unitegallery/js/unitegallery.min.js'></script>
	<script type='text/javascript' src='unitegallery/themes/compact/ug-theme-compact.js'></script>
	<script type="text/javascript" src="js/jquery.nivo.slider.js"></script>	
	<div class="video">
	<img src="img/logofkbM.png"/>
	<h1>Tutoriais</h1>
	
	<div id="1" style="display:flex;">

	<img alt="Como Ingressar na FKB"
			 data-type="youtube"
			 data-videoid="5VfPlSdBkyk"
			 data-description="Vestibular agendado">	 
	</div> 
	
	<h1 id="tutorial">Tutorial como fazer a Rematrícula</h1>
	<div id="8" style="display:flex;">

		<img alt="Portal do aluno"
			 data-type="youtube"
			 data-videoid="_nkkHjc4l9Y"
			 data-description="Tutorial como fazer a Rematrícula">
		
		<img alt="Portal do aluno"
			data-type="youtube"
			data-videoid="BtltHmlSUNU"
			data-description="Acompanhamento de matricula.">	 
	</div> 

	<h1>Inclusão é na FKB</h1>

	<div id="2" style="display:flex;">
		<img alt="FKB"
			 data-type="youtube"
			 data-videoid="FEU5vr06ZvA"
			 data-description="Inclusão para todos">
		
		<img alt="FKB"
			data-type="youtube"
			data-videoid="ueAfyFvPz3k"
			data-description="Inclusão para todos">	 
	</div>

	<h1>Bolsa de estudos</h1>

	<div id="3" style="display:flex;">
		<img alt="Bolsa de estudos"
			 data-type="youtube"
			 data-videoid="zGlCPNV_PJI">
		
		<img alt="Bolsa de estudos"
			data-type="youtube"
			data-videoid="NgreQYwVZKM">
			
		<img alt="Bolsa de estudos"
			data-type="youtube"
			data-videoid="ziJPA7OHsS4">
	</div>

	<h1>Vem para FKB</h1>

	<div id="4" style="display:flex;">
		<img alt="Vem para FKB"
			 data-type="youtube"
			 data-videoid="a06YzlXTiKQ">
		
		<img alt="Vem para FKB"
			data-type="youtube"
			data-videoid="pDLcZ4sktH0">	
			
		<img alt="Vem para FKB"
			data-type="youtube"
			data-videoid="dy3YU_sgr44">

		<img alt="Vem para FKB"
			data-type="youtube"
			data-videoid="8kuvQtUHsQ8">

		<img alt="Vem para FKB"
			data-type="youtube"
			data-videoid="JEehGhb3rBA">
	</div>

	<h1>Direito</h1>

	<div id="5" style="display:flex;">
		<img alt="Direito"
			 data-type="youtube"
			 data-videoid="sHCMJ-6pMhA">
		
		<img alt="Coordenador de Direito"
			data-type="youtube"
			data-videoid="c0xjJG3Ofm8">
			
		<img alt="Depoimento de alunos"
			data-type="youtube"
			data-videoid="ftM60C-L1kg">
	   
	    <img alt="Nomes de sucesso"
		   data-type="youtube"
		   data-videoid="MdANripfdU4">
		   
	    <img alt="Nomes de sucesso"
		   data-type="youtube"
		   data-videoid="Lg9abXpftTo">
	</div>

	<h1>Administração</h1>

	<div id="6" style="display:flex;">
		<img alt="Coordenador na Rede Administração"
			 data-type="youtube"
			 data-videoid="lMEs2nAYMGU">
		
		<img alt="Administração"
			data-type="youtube"
			data-videoid="gnbq_fJZowI">	
			
		<img alt="Depoimento de alunos"
			data-type="youtube"
			data-videoid="bCy9UP-Zrzg">
	   
	   <img alt="Nomes de sucesso"
		   data-type="youtube"
		   data-videoid="Py9hrdXsrwY">
	</div>

	<h1>Educação Física</h1>

	<div id="7" style="display:flex;">
		<img alt="Depoimento de alunos"
			 data-type="youtube"
			 data-videoid="KxyEsguDHV0">
		
		<img alt="Coordenador de Educação Física"
			data-type="youtube"
			data-videoid="1dj59oFclqI">
			
		<img alt="Educação Física"
			data-type="youtube"
			data-videoid="qS5d5S_XNLA">
	   
	   <img alt="Nomes de sucesso"
		   data-type="youtube"
		   data-videoid="YCosDFErVQw">
	</div>
	<script type="text/javascript">
		$(window).load(function() {
        $('#slider').nivoSlider();
    	});
		
		jQuery(document).ready(function(){
		
			jQuery("#1").unitegallery({
				theme_panel_position: "right"		
			});
		
			jQuery("#2").unitegallery({
				theme_panel_position: "right"		
			});
		
			jQuery("#3").unitegallery({
				theme_panel_position: "right"		
			});
		
			jQuery("#4").unitegallery({
				theme_panel_position: "right"		
			});
		
			jQuery("#5").unitegallery({
				theme_panel_position: "right"		
			});
		
			jQuery("#6").unitegallery({
				theme_panel_position: "right"		
			});
		
			jQuery("#7").unitegallery({
				theme_panel_position: "right"		
			});
			jQuery("#8").unitegallery({
				theme_panel_position: "right"		
			});
		
		
		});
		
		</script>
	</div>
	</section>

    <section id="sessao4" class="sessao4">
        <h1>CURSOS DE GRADUAÇÃO</h1>
        <div class="tools2">

			<a id="adm" class="itens2"><img src="img/adm.png"><br> <span>Administração<br>+Mais</span></a>
			<script>
				document.getElementById("adm").addEventListener("click", exibeMensagem);
				function exibeMensagem() {
					Swal.fire({
						  title: '<strong>ADMINISTRAÇÃO</strong>',
						  showDenyButton: true,
						  confirmButtonText: `<a href="https://portais.qualinfonet.com.br/fkb/acadweb.modulo.eventos.php" target="_blank" style="color: #f0f0f0;">INSCREVA-SE</a>`,
						  denyButtonText: `sair`,
						  html:
						  '<img src="img/adm.png" class="scale2"><br><br>'+
						  '<br><form action="https://querobolsa.com.br/fii-faculdades-integradas-de-itapetininga/cursos/administracao/ec70f545-092b-4d09-ba5c-025f13ec996c" target="_blank"><input type="submit" class="btn_submit_cad" value="✓ BOLSA DE ESTUDOS QUERO BOLSA"></form>'+
						  '<form action="https://www.educamaisbrasil.com.br/faculdades-integradas-de-itapetininga/cursos/administracao" target="_blank"><input type="submit" class="btn_submit_cad" value="✓ BOLSA DE ESTUDOS EDUCA MAIS BRASIL"></form>'+
						 '<form action="arquivos/cursos/adm_info.pdf" target="_blank"><input type="submit" class="btn_submit_cad" value="✓ INFORMAÇÃO SOBRE O CURSO"></form>'+
						 '<form action="arquivos/matriz_curricular/matriz_adm.pdf" target="_blank"><input type="submit" class="btn_submit_cad" value="✓ MATRIZ CURRICULAR"></form>'+
						 '<form><input type="submit" class="btn_submit_cad" value="✓ PROFESSORES"></form>',
						});
					};</script>

			<a id="dire" class="itens2"><img src="img/direito.png" class="scale1"><br><span>Direito<br>+Mais</span></a>
			<script>
				document.getElementById("dire").addEventListener("click", exibeMensagem);
				function exibeMensagem() {
					Swal.fire({
						  title: '<strong>DIREITO</strong>',
						  showDenyButton: true,
						  confirmButtonText: `<a href="https://portais.qualinfonet.com.br/fkb/acadweb.modulo.eventos.php" target="_blank" style="color: #f0f0f0;">INSCREVA-SE</a>`,
						  denyButtonText: `sair`,
						  html:
							'<img src="img/direito.png" class="scale2"><br><br>'+
							'<br><form action="https://querobolsa.com.br/fii-faculdades-integradas-de-itapetininga/cursos/direito/41ca632d-6f02-4da7-9434-427490534fc3" target="_blank"><input type="submit" class="btn_submit_cad" value="✓ BOLSA DE ESTUDOS"></form>'+
							'<form action="arquivos/cursos/dir_info.pdf" target="_blank"><input type="submit" class="btn_submit_cad" value="✓ INFORMAÇÃO SOBRE O CURSO"></form>'+
							'<form action="arquivos/matriz_curricular/matriz_dir.pdf" target="_blank"><input type="submit" class="btn_submit_cad" value="✓ MATRIZ CURRICULAR"></form>'+
							'<form><input type="submit" class="btn_submit_cad" value="✓ PROFESSORES"></form>',
						});
					};</script>

			<a id="edf" class="itens2"><img src="img/ed_fisica.png" class="scale"><br><br><span>Ed. Física bacharelado<br>+Mais</span></a>
			<script>
				document.getElementById("edf").addEventListener("click", exibeMensagem);
				function exibeMensagem() {
					Swal.fire({
						  title: '<strong>ED. FÍSICA BACHARELADO</strong>',
						  showDenyButton: true,
						  confirmButtonText: `<a href="https://portais.qualinfonet.com.br/fkb/acadweb.modulo.eventos.php" target="_blank" style="color: #f0f0f0;">INSCREVA-SE</a>`,
						  denyButtonText: `sair`,
						  html:
						 '<img src="img/ed_fisica.png" class="scale3"><br><br>'+
						 '<br><form action="https://querobolsa.com.br/fii-faculdades-integradas-de-itapetininga/cursos/educacao-fisica/81f6d0a9-5833-4d33-805e-45d8aca429fb" target="_blank"><input type="submit" class="btn_submit_cad" value="✓ BOLSA DE ESTUDOS QUERO BOLSA"></form>'+
						  '<form action="https://www.educamaisbrasil.com.br/faculdades-integradas-de-itapetininga/cursos/educacao-fisica" target="_blank"><input type="submit" class="btn_submit_cad" value="✓ BOLSA DE ESTUDOS EDUCA MAIS BRASIL"></form>'+
						 '<form action="arquivos/cursos/edfb_info.pdf" target="_blank"><input type="submit" class="btn_submit_cad" value="✓ INFORMAÇÃO SOBRE O CURSO"></form>'+
						 '<form action="arquivos/matriz_curricular/matriz_edfb.pdf" target="_blank"><input type="submit" class="btn_submit_cad" value="✓ MATRIZ CURRICULAR"></form>'+
						 '<form><input type="submit" class="btn_submit_cad" value="✓ PROFESSORES"></form>',
						});
					};</script>

			<a id="lic" class="itens2"><img src="img/licenciatura.png" class="scale"><br><br><span>Ed. Física licenciatura<br>+Mais</span></a>
			<script>
				document.getElementById("lic").addEventListener("click", exibeMensagem);
				function exibeMensagem() {
					Swal.fire({
						  title: '<strong>ED. FÍSICA LICENCIATURA</strong>',
						  showDenyButton: true,
						  confirmButtonText: `<a href="https://portais.qualinfonet.com.br/fkb/acadweb.modulo.eventos.php" target="_blank" style="color: #f0f0f0;">INSCREVA-SE</a>`,
						  denyButtonText: `sair`,
						  html:
						  '<img src="img/licenciatura.png" class="scale3"><br><br>'+
						  '<br><form action="https://querobolsa.com.br/fii-faculdades-integradas-de-itapetininga/cursos/educacao-fisica/577ab097-7d5f-491b-9681-890dec466aab" target="_blank"><input type="submit" class="btn_submit_cad" value="✓ BOLSA DE ESTUDOS QUERO BOLSA"></form>'+
						  '<form action="https://www.educamaisbrasil.com.br/faculdades-integradas-de-itapetininga/cursos/educacao-fisica" target="_blank"><input type="submit" class="btn_submit_cad" value="✓ BOLSA DE ESTUDOS EDUCA MAIS BRASIL"></form>'+
						 '<form action="arquivos/cursos/edfl_info.pdf" target="_blank"><input type="submit" class="btn_submit_cad" value="✓ INFORMAÇÃO SOBRE O CURSO"></form>'+
						 '<form action="arquivos/matriz_curricular/matriz_edfl.pdf" target="_blank"><input type="submit" class="btn_submit_cad" value="✓ MATRIZ CURRICULAR"></form>'+
						 '<form><input type="submit" class="btn_submit_cad" value="✓ PROFESSORES"></form>',
						});
					};</script>
			<a id="fk" class="itens2"><img src="img/logofkb.png" class="scale"><br><br><span>Vem pra FKB</span></a>
			<script>
				document.getElementById("fkb").addEventListener("click", exibeMensagem);
				function exibeMensagem() {
					Swal.fire({
						  title: '<strong>Ciências Biológicas</strong>',
						  showDenyButton: true,
						  confirmButtonText: `<a href="https://portais.qualinfonet.com.br/fkb/acadweb.modulo.eventos.php" target="_blank" style="color: #f0f0f0;">INSCREVA-SE</a>`,
						  denyButtonText: `sair`,
						  html:
						  '<img src="img/adm.png" class="scale2"><br><span>Ciências Biológicas<br>+Mais</span><img src="img/direito.png" class="scale2">'+
						  '<img src="img/ed_fisica.png" class="scale2"><img src="img/licenciatura.png" class="scale2">'+
						  '<img src="img/bio.png" class="scale3"><br><br>',
						 
						});
					};</script>

			<a id="bio" class="itens2"><img src="img/bio.png" class="scale3"><br><span>Ciências Biológicas<br>+Mais</span></a>
			<script>
				document.getElementById("bio").addEventListener("click", exibeMensagem);
				function exibeMensagem() {
					Swal.fire({
						  title: '<strong>Ciências Biológicas</strong>',
						  showDenyButton: true,
						  confirmButtonText: `<a href="https://portais.qualinfonet.com.br/fkb/acadweb.modulo.eventos.php" target="_blank" style="color: #f0f0f0;">INSCREVA-SE</a>`,
						  denyButtonText: `sair`,
						  html:
						  '<img src="img/bio.png" class="scale3"><br><br>'+
						 '<br><form action="arquivos/cursos/bio_info.pdf" target="_blank"><input type="submit" class="btn_submit_cad" value="✓ INFORMAÇÃO SOBRE O CURSO"></form>'+
						 '<form action="arquivos/matriz_curricular/bio_matriz.pdf" target="_blank"><input type="submit" class="btn_submit_cad" value="✓ MATRIZ CURRICULAR"></form>'+
						 '<form><input type="submit" class="btn_submit_cad" value="✓ PROFESSORES"></form>',
						});
					};</script>
			</div>
    </section>
	<section id="sessao4" class="sessao4">
        <h1>CURSOS DE PÓS-GRADUAÇÃO</h1>
        <div class="tools2">

			<a id="pos" class="itens2"><img src="img/Simbolo-DEE.png"><br> <span>Educação Especial<br>+Mais</span></a>
			<script>
				document.getElementById("pos").addEventListener("click", exibeMensagem);
				function exibeMensagem() {
					Swal.fire({
						  title: '<strong>EDUCAÇÃO ESPECIAL</strong>',
						  showDenyButton: true,
						  confirmButtonText: `<a href="https://bit.ly/pos-especial" target="_blank" style="color: #f0f0f0;">INSCREVA-SE</a>`,
						  denyButtonText: `sair`,
						  html:
						  '<img src="img/Simbolo-DEE.png" class="scale2"><br><br>'+
						  '<br>'+
						  ' <strong>OPÇÕES DE ÊNFASE DA ESPECIALIZAÇÃO</strong><br><br>'+
						  'Ênfase em Altas Habilidades/Superdotação<br>'+
						'Ênfase em Transtorno do Espectro Autista<br>'+
						'Ênfase em Transtornos de Aprendizagem<br>'+
						'Ênfase em Deficiência Auditiva<br>'+
						'Ênfase em Deficiência Física<br>'+
						'Ênfase em Deficiência Intelectual<br>'+
						'Ênfase em Deficiência Visual<br><br>'+
						
						  '<form action="arquivos/cursos/adm_info.pdf" target="_blank"><input type="submit" class="btn_submit_cad" value="✓ CALENDÁRIO LETIVO"></form>'+
						 '<form action="arquivos/cursos/adm_info.pdf" target="_blank"><input type="submit" class="btn_submit_cad" value="✓ INFORMAÇÃO SOBRE O CURSO"></form>'+
						 '<form action="arquivos/matriz_curricular/matriz_adm.pdf" target="_blank"><input type="submit" class="btn_submit_cad" value="✓ MATRIZ CURRICULAR"></form>'+
						 '<form><input type="submit" class="btn_submit_cad" value="✓ PROFESSORES"></form>',
						});
					};</script>
			</div>
    </section>


	<section id="sessao5" class="sessao5">
        <div class="contato-container">
            <div class="contato_itens">
                <span>CONTATOS FACULDADES</span>
                <ul class="lista-1">
                    <li><img src="img/tel.png" alt="tel"><a id="ico-dir">DIRETORIA GERAL</a></li>
                    <script src="js/sweetalert2@10.js"></script>
                    <script>
                        document.getElementById("ico-dir").addEventListener("click", exibeMensagem);
                        function exibeMensagem() {
                            Swal.fire({
                                title: '<strong>DIRETORIA</strong>',
                                icon: 'info',
                                html:
                                '<b>Diretor Geral:</b><br><br>' +
                                'Prof. Rafael Felipe de Almeida<br><br>'+
                                '<b>E-mail:</b> rafael.almeida@fkb.br<br><br>'+
                                '<b>Telefone:</b> 15.3376-9300 <b>ramal</b> 323<br><br>',
                                });
                            };
                    </script>

                    <li> <img src="img/tel.png" alt="tel"><a id="ico-coo">COORDENAÇÃO</a></li>
                        <script>
                            document.getElementById("ico-coo").addEventListener("click", exibeMensagem);
                            function exibeMensagem() {
                                Swal.fire({
                                    title: '<strong>COORDENADORES</strong>',
                                    icon: 'info',
                                    html:
                                    '<strong>Equipe:</strong><br><br>'+
                                    '<b>Coordenação do Curso de Administração:</b><br><br>'+
                                    'Prof. Helder Boccaletti<br><br>'+
                                    '<b>E-mail:</b> helder.boccaletti@fkb.br<br><br>'+
                                    
                                    '<b>Coordenação do Curso de Direito:</b><br><br>' +
                                    'Prof. Augusto Sérgio Costa Vianna<br><br>'+
                                    '<b>E-mail:</b>augusto.vianna@fkb.br<br><br>'+
                                    
                                    '<b>Coordenação do Curso de Educação Física - Licenciatura e Bacharelado:</b><br><br>' +
                                    'Prof. Esp. Roberto Gonçalves Neves<br><br>'+
                                    '<b>E-mail:</b> roberto.neves@fkb.br<br><br>'+
            
                                    '<b>Coordenação do Curso de Ciências Biológicas:</b><br><br>' +
                                    'Prof. Ma. Mariana Beraldi Rigonato<br><br>'+
                                    '<b>E-mail:</b> mariana.rigonato@fkb.br<br><br>',
                                    });
                                };
                        </script>

                    <li> <img src="img/tel.png" alt="tel"><a id="ico-sec">SECRETARIA</a></li>
                        <script>
                            document.getElementById("ico-sec").addEventListener("click", exibeMensagem);
                            function exibeMensagem() {
                                Swal.fire({
                                    title: '<strong>SECRETARIA</strong>',
                                    icon: 'info',
                                    html:
                                    '<strong>Equipe:</strong><br><br>'+
                                    '<b>Secretário Geral:</b><br><br>'+
                                    ' Prof. Rodrigo Furtado Borges Neto<br><br>'+
                                    '<b>E-mail:</b> secretaria@fkb.br<br><br>'+
                                    
                                    '<b>Sub-Secretários:</b><br><br>' +
                                    'Srª Eleni Aparecida Santos Almeida<br><br>'+
                                    '<b>E-mail:</b> eleni.santos@fkb.br<br><br>'+
                                    
                                    '<b>Sub-Secretários:</b><br><br>' +
                                    'Sr. Francisco Roberto Saraiva<br><br>'+
                                    '<b>E-mail:</b> francisco.saraiva@fkb.br<br><br>'+
            
                                    '<b>Assistentes de Secretária:</b><br><br>' +
                                    'Srª Andrea da Silva Mello<br><br>'+
                                    '<b>E-mail:</b> andrea.mello@fkb.br<br><br>'+
            
                                    'Srª Andrea da Silva Mello<br><br>'+
                                    '<b>E-mail:</b> andrea.mello@fkb.br<br><br>'+
                                    
                                    'Srª. Rita de Cassia da Silva Bueno<br><br>'+
                                    '<b>E-mail:</b> rita.bueno@fkb.br<br><br>'+
            
                                    '<b>Auxiliar de Administração Escolar:</b><br><br>' +
                                    'Srª Gleice Rafaela Rodrigues dos Santos<br><br>'+
                                    '<b>E-mail:</b> protocolo@fkb.br<br><br>'+
                                    
                                    'Sr. Max Alves Moreira<br><br>'+
                                    '<b>E-mail:</b> protocolo@fkb.br<br><br>'+
            
                                    '<b>Atendente de Secretária:</b><br><br>' +
                                    'Sr Carlos Pontes da Silva<br><br>'+
                                    '<b>E-mail:</b> carlos.pontes@fkb.br<br><br>',
                                    });
                                };
                        </script>

                    <li> <img src="img/tel.png" alt="tel"><a id="ico-bibli">BIBLIOTECA</a></li>
                        <script>
                            document.getElementById("ico-bibli").addEventListener("click", exibeMensagem);
                            function exibeMensagem() {
                                Swal.fire({
                                    title: '<strong>BIBLIOTECA FUNDAÇÃO KARNIG BAZARIAN</strong>',
                                    icon: 'info',
                                    html:
                                    'Sr. Marcos Paulo de Passos<br><br>'+
                                    'CRB-8/8046<br><br>'+
                                    'Bibliotecário das Faculdades Integradas de Itapetininga<br><br>'+
                                    '<b>E-mail:</b> marcos.passos@fkb.br e biblioteca@fkb.br<br><br>'+
                                    '<b>Telefone:</b> 15.3376-9300 <b>ramal</b> 353/312<br><br>'+
                                    '<a href="http://buscatextual.cnpq.br/buscatextual/visualizacv.do?id=K4243907D8" target="_blank">Currículo Lattes</a><br><br>',
                                    });
                                };
                        </script>

                    <li> <img src="img/tel.png" alt="tel"><a id="ico-ouv">OUVIDORIA</a></li>
                        <script>
                            document.getElementById("ico-ouv").addEventListener("click", exibeMensagem);
                            function exibeMensagem() {
                                Swal.fire({
                                    title: '<strong>OUVIDORIA</strong>',
                                    icon: 'info',
                                    html:
                                    '<b>Ouvidoria:</b><br><br>' +
                                    'Profª. Eidinilce Duarte de Oliveira<br><br>'+
                                    '<b>E-mail:</b>ouvidoria@fkb.br<br><br>'+
                                    '<b>Telefone:</b> 15.3376-9300 <b>ramal</b> 325<br><br>',
                                    });
                                };
                        </script>

                    <li> <img src="img/tel.png" alt="tel"><a id="ico-saae">SAAE</a></li>
                        <script>
                            document.getElementById("ico-saae").addEventListener("click", exibeMensagem);
                            function exibeMensagem() {
                                Swal.fire({
                                    title: '<strong>SAAE - SERVIÇO DE APOIO AO ALUNO / EGRESSO</strong>',
                                    icon: 'info',
                                    html:
                                    '<b>Responsável:</b>'+
                                    'Srª. Monalisa Gusmão Queiróz Ligabô<br><br>'+
                                    '<b>E-mail:</b> saae@fkb.br<br><br>'+
                                    '<b>Telefone:</b> 15.3376-9300 <b>ramal</b> 324<br><br>',
                                    });
                                };
                        </script>

                    <li> <img src="img/tel.png" alt="tel"><a id="ico-ti">STI</a></li>
                        <script>
                            document.getElementById("ico-ti").addEventListener("click", exibeMensagem);
                            function exibeMensagem() {
                                Swal.fire({
                                    title: '<strong>TECNOLOGIA DA INFORMAÇÃO</strong>',
                                    icon: 'info',
                                    html:
                                    '<strong>Equipe:</strong><br><br>'+
                                    '<b>Responsável Técnico:</b><br><br>'+
                                    'Fabio dos Santos Mello<br><br>'+
                                    '<b>E-mail:</b> fabio.santos@fkb.br<br><br>'+
                                    
                                    '<b>Auxiliar:</b><br><br>' +
                                    'Wellington Correia Borsato Jr<br><br>'+
                                    '<b>E-mail:</b> wellington.borsato@fkb.br<br><br>'+
        
                                    '<b>Ouvidoria:</b><br><br>' +
                                    '<b>E-mail:</b> sti@fkb.br<br><br>',
                                    });
                                };
                        </script>
                </ul>
            </div>
            <div class="contato_itens">
                <span>CONTATOS FUNDAÇÃO</span>
                <ul class="lista-1">
                    <li> <img src="img/tel.png" alt="tel"><a id="ico-dirE">DIRETORIA EXECUTIVA</a></li>
                        <script>
                            document.getElementById("ico-dirE").addEventListener("click", exibeMensagem);
                            function exibeMensagem() {
                                Swal.fire({
                                    title: '<strong>DIRETORIA</strong>',
                                    icon: 'info',
                                    html:
                                    '<strong>Equipe:</strong><br><br>'+
                                    '<b>Presidente:</b>'+
                                    ' Prof. Rodrigo Furtado Borges Neto<br><br>'+
                                    '<b>E-mail:</b> rodrigo.furtado@fkb.br<br><br>'+
                                    
                                    '<b>Vice-presidente:</b><br><br>' +
                                    'Sr. Edson Brun<br><br>'+
                                    '<b>E-mail:</b><br><br>'+
                                    
                                    '<b>Tesoureiro:</b><br><br>' +
                                    'Sr. Wagner de Souza<br><br>'+
                                    '<b>E-mail:</b> francisco.saraiva@fkb.br<br><br>'+
            
                                    '<b>Secretario:</b><br><br>' +
                                    'Sr. Danilo Monari Baptista dos Santos<br><br>'+
                                    '<b>E-mail:</b> danilo@fkb.br<br><br>',
                                    });
                                };
                        </script>

                    <li> <img src="img/tel.png" alt="tel"><a id="ico-mar">MARKETING</a></li>
                        <script>
                            document.getElementById("ico-mar").addEventListener("click", exibeMensagem);
                            function exibeMensagem() {
                                Swal.fire({
                                    title: '<strong>MARKETING</strong>',
                                    icon: 'info',
                                    html:
                                    '<b>Responsável:</b>'+
                                    'Srª. Sabrina Brisola<br><br>'+
                                    '<b>E-mail:</b> sabrina.brisola@fkb.br<br><br>'+
                                    '<b>Telefone:</b> 15.3376-9300 <b>ramal</b> 306<br><br>'+
                                    '<b>Auxiliar:</b><br><br>' +
                                    'Milena Ferreira Dias da Silva<br><br>'+
                                    '<b>E-mail:</b> milena.ferreira@fkb.br<br><br>',
                                    });
                            };
                        </script>

                    <li> <img src="img/tel.png" alt="tel"><a id="ico-fin">FINANCEIRO</a></li>
                        <script>
                            document.getElementById("ico-fin").addEventListener("click", exibeMensagem);
                            function exibeMensagem() {
                                Swal.fire({
                                    title: '<strong>Setor Financeiro FKB</strong>',
                                    icon: 'info',
                                    html:
                                    '<strong>Equipe:</strong><br><br>'+
                                    '<b>Responsável:</b><br><br>'+
                                    'Srª. Eliane Silva<br><br>'+
                                    '<b>E-mail:</b> eliane.silva@fkb.br<br><br>'+
                                    
                                    '<b>Atendimento ao público:</b><br><br>' +
                                    'Bruna Gomes<br><br>'+
                                    'Carlos Junior<br><br>'+
                                    '<b>E-mail:</b> financeiro@fkb.br<br><br>'+
                                    '<b>Telefone:</b> 15.3376-9300 <b>ramal</b> 308/336<br><br>',
                                    });
                            };
                        </script>

                    <li> <img src="img/tel.png" alt="tel"><a id="ico-cape">CAPE</a></li>
                        <script>
                            document.getElementById("ico-cape").addEventListener("click", exibeMensagem);
                            function exibeMensagem() {
                                Swal.fire({
                                    title: '<strong>CAPE - CENTRO DE APERFEIÇOAMENTO E PESQUISAS NO ESPORTE</strong>',
                                    icon: 'info',
                                    html:
                                    'Sr. João Paulo Ayres<br><br>'+
                                    '<b>E-mail:</b> fitness@fkb.br<br><br>'+
                                    '<b>Telefone:</b> 15.3376-9300 <b>ramal</b> 330<br><br>',
                                    });
                                };
                        </script>

                    <li> <img src="img/tel.png" alt="tel"><a id="ico-rh">RH</a></li>
                        <script>
                            document.getElementById("ico-rh").addEventListener("click", exibeMensagem);
                            function exibeMensagem() {
                                Swal.fire({
                                    title: '<strong>RECURSOS HUMANOS</strong>',
                                    icon: 'info',
                                    html:
                                    '<b>Responsável:</b><br><br>'+
                                    'Tatiane F. Ravagnani - Analista de R.H.<br><br>'+
                                    '<b>E-mail:</b> tatiane.ravagnani@fkb.br ou drh@fkb.br<br><br>'+
                                    '<b>Telefone:</b> 15.3376-9300 <b>ramal</b> 300/307<br><br>',
                                    });
                                };
                        </script>
                </ul>
            </div>
            <div class="contato_itens">
                <span>OUTROS</span>
                <ul class="lista-1">
                    <li> <img src="img/fone.png" alt="tel">Fone: (15) 3376-9300</li>
                    <li> <img src="img/loc.png" alt="tel">Rod. Raposo Tavares, km 162 </li>
                    <li class="ende">Vila Nova Itapetininga,<br> Itapetininga - SP <br>cep: 18203-340</li>
                </ul>
            </div>
        </div>
			<!--- Secure Site Seal - DO NOT EDIT --->
<!---<span id="ss_img_wrapper_115-55_image_en">
<a href="http://www.alphassl.com/ssl-certificates/wildcard-ssl.html" 
target="_blank" title="SSL Certificates">
<img alt="Wildcard SSL Certificates" border=0 id="ss_img"
src="//seal.alphassl.com/SiteSeal/images/alpha_noscript_115-55_en.gif"
title="SSL Certificate">
</a>
</span>
<script type="text/javascript"
src="//seal.alphassl.com/SiteSeal/alpha_image_115-55_en.js"></script>
 Secure Site Seal - DO NOT EDIT --->					
     </section>
     <footer class="rodape">
         <h5>© 2021 FKB. Todos os Direitos Reservado.</h5>
		 
		</footer>
	<!-- Modal-->
<div class="modal-wrapper">
	<div class="modal">
	  <div class="head">
		<!--<h1>Comunicado</h1>-->
		<a class="btn-close trigger" href="#">X</a>
		
	  </div>
	  <div class="content">
		  <div class="good-job">
			<!--<img src="img/logofkb.png"><br><br>
			<p><?php 
				//include_once "controler/conexao.php";

				//consultar no banco de dados
				//$result_setor = "SELECT * FROM conteudo_popup WHERE id_conteudo = 5";
				//$resultado_setor = mysqli_query($conn, $result_setor);
				//$row_setor = mysqli_fetch_assoc($resultado_setor);

				//echo $row_setor['conteudo'];
				
				?></p>-->
		  </div>
	  </div> 
	</div>
  </div>

<script src="js/galeria.js"></script>

</body>
</html>