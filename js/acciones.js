// JavaScript Document
$(document).ready(function(e) {
	document.addEventListener("deviceready",function(){
		$('.Enviar').tap(function(){
			var formulario=$(this).parents('form');
			var usuario= formulario.children ('input:eq(0)').val();
   			var password= formulario.children ('input:eq(1)').val();
			var usuario= document.getElementById('Usuario').value;
			var password= document.getElementById('Password').value;
   
   function LoginConectar(U, P)
   {
	   datos= "usuario="+U+"$passwprd="+P;
	   $.ajax({
		   type: "POST",
		   url: "192.168.1.165/sitio6/Log_in_m.php"     ,
		   data:datos
	   }).done(function(msg){
		   alert(msg);
		   if (msg=="" || msg==null)
		   {
			   alert("Usuario incorrecto");
		   }
		   else
		   {
			   alert("Bienvenido");
		   }
	   });//funtion msg
   }//function
		});//tap
	});//deviceready
});//ready