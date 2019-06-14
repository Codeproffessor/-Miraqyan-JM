(function($) {
    $(function() { 
      $('nav ul li a:not(:only-child)').click(function(e) {
        $(this).siblings('.nav-dropdown').toggle();
        $('.nav-dropdown').not($(this).siblings()).hide();
        e.stopPropagation();
      });
      $('html').click(function() {
        $('.nav-dropdown').hide();
      });
      $('#nav-toggle').click(function() {
        $('nav ul').slideToggle();
      });
      $('#nav-toggle').on('click', function() {
        this.classList.toggle('active');
      });
    }); 
  })(jQuery); 




var ph = "Your Work Email"
searchBar = $('#search'),
phCount = 0;


function randDelay(min, max) {
return Math.floor(Math.random() * (max-min+1)+min);
}


function printLetter(string, el) {

var arr = string.split(''),
  input = el,
  origString = string,
  curPlace = $(input).attr("placeholder"),
  placeholder = curPlace + arr[phCount];
  
setTimeout(function(){
  $(input).attr("placeholder", placeholder);
  phCount++;
  if (phCount < arr.length) {
    printLetter(origString, input);
  }
}, randDelay(50, 90));
}  

function placeholder() {
$(searchBar).attr("placeholder", "");
printLetter(ph, searchBar);
}

placeholder();
$('.submit').click(function(e){
phCount = 0;
e.preventDefault();
placeholder();
});


  


  
  