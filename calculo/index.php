<?php
$goodtext = "Not found";
$guessVal = '';
$report_time = false;
// If there is no parameter, this code is all skipped
if ( isset($_REQUEST['guess']) ) {
  $time_pre = microtime(true);
  $guessVal = $_REQUEST['guess'];

  // Compute elapsed time
  $time_post = microtime(true);
  $report_time = " Elapsed time: ". ($time_post-$time_pre)."\n";
}
?>

<!DOCTYPE html>
<html lang="en">
<head>
  <title>Horas de Trabajo - calculadora</title>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">

  <style>

body
{
  margin: 3%;
}
   span{
    /* color: #700070; */
    font-style: italic;
  }
  #hrP ,#taxP,#hours_W,#goal_W,#days_W
  {
    color:#700070;
    font-weight: bold;
  }
  .red , .green{
    box-sizing: border-box;
    border-radius: 3px;
    width: 50%;
    text-align: center;
    line-height: 3em;
  }

  .red{
    background-color: #ffcfcf;
    color:red;
  }
  #id_answer{
    background-color: #71ad71;
    color: white;
  }

  </style>
</head>


<body>

<a href="/"> &larr; Back</a>


<h1> Bienvenidos a mi calculadora de horas</h1>
<p>Esta pagina se hizo con la intencion de que puedan organizarse mejor con las horas de trabajo, para que asi puedan hacer mucho dinero sin descuidar el tiempo en familia.</p>
<p>Mas adelante agregare una donde puedan colocar sus ingresos y egresos, para luego ver proyecciones y mostrarles graficos que muestren lo que pueden llegar a ahorrar en un a#o.</p>
<div class="container-fluid">
  <div class="row">
    <h2> Calcular cuanto tiempo tengo que trabajar para hacer dinero:</h2>
    <p>Las variables de entrada son un estimado de impuestos, el pago por ahora y la meta semanal.</p>
    <div class="col-sm-6">
      <p class="row"> <label class="col-sm-9 col-md-6">Meta semanal [$]: </label><input class="col-sm-3 col-md-5" id="goal" onclick="update()" type="number" value="250" min=150 max=500 /></p>
      <p class="row"> <label class="col-sm-9 col-md-6">Pago por hora [$]:</label> <input class="col-sm-3 col-md-5" id="hr" onclick="update()" type="number" value="10" min=8 max=30 /></p>
      <p class="row"> <label class="col-sm-9 col-md-6">Impuesto estimado [%]:</label> <input class="col-sm-3 col-md-5" id="tax" onclick="update()" type="number" value="25" min=10 max=30/></p>
    </div>
    <div class="col-sm-6" id="id_answer">
      <p>Si ganas a $<span id="hrP">___</span> la hora y
       pagas un <span id="taxP">___</span>% de impuesto.
      <br>Para cumplir tu meta de $<span id="goal_W">___</span> en una semana
         necesitas trabajar:</p>
           <p class="text-center"><span id="hours_W">___</span> horas  == <span id="days_W">___</span> dias (asumiento 8 horas en un dia).</p>
         </div>
    <ul class="col-12">
      <li><a href="index.php">Resetear esta pagina</a></li>
    </ul>
  </div>

  <div class="row">
    <h2 class="col-12">Referencia</h2>
      <p classs="col-sm-7">Esta es una tabla que pueden usar de referencia para sus calculos.</p>
        <div>
          <img width=100% src="referencia.jpeg" alt="referencia de entradas"/>
        </div>
  </div>
</div>



<!-- Footer -->
<footer class="page-footer font-small blue pt-4">
        <hr class="clearfix w-100 d-md-none pb-3">
    <!-- Copyright -->
    <div class="footer-copyright text-center py-3">© 2018 Copyright:
      <a href="https:manela.web.ve" target="_blank"> manela.web.ve</a>
      <br>
      <span>Si tienes comentarios o sugerencias para mi relacionadas con esta pagina web, porfavor contactame a <a href="mailto:info@manela.web.ve" target="_blank">esta direccion</a></span>
    </div>
    <!-- Copyright -->
  </footer>


<script>
function update()
{
  var money_week = document.getElementById('goal').value;
  var taxRate = document.getElementById('tax').value;
  var hourlyRatePaper = document.getElementById('hr').value;
  var h_week = Math.round(money_week/( hourlyRatePaper*(1-taxRate/100)  )*10)/10;

  document.getElementById('hrP').innerHTML = hourlyRatePaper;
  document.getElementById('taxP').innerHTML = taxRate;
  document.getElementById('hours_W').innerHTML = h_week;
  document.getElementById('goal_W').innerHTML = money_week;
  document.getElementById('days_W').innerHTML = Math.ceil(h_week/8);
}

</script>
<script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>

</body>

</html>
