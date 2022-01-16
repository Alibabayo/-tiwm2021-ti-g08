//Puxar Id e o container do pagina Index
const open = document.getElementById('open')
const close = document.getElementById('close')
const container = document.querySelector('.container')

//Adicionar um evento no qual se o utilizador clicar, ele vai adicionar as classes "show-nav" e "show-nav"
open.addEventListener('click', () => container.classList.add('show-nav'))
close.addEventListener('click', () => container.classList.remove('show-nav'))

//Vai associar o id "myBtn" a variavel mybutton
var mybutton = document.getElementById("myBtn");
    
    //Função para voltar ao top da página
    function topFunction() {
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
    }
    
    
    window.onscroll = function() {scrollFunction()};
    
    //Irá desativar ou ativar o botão consoante a medida
    function scrollFunction() {
      if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block";
      } else {
        mybutton.style.display = "none";
      }
    }
  //Função PopUp do Contacto
  function popup() {
      alert('Obrigado pelo seu feedback!');
  }
  //Ao clicar no botão irá ativar a funçao popup
  document.getElementById('buttonID').onclick = popup; 

    //Importar todas as labels do form-control
    const labels = document.querySelectorAll('.form-control label')
    //Por cada label, irá fazer a transicao
    labels.forEach(label => {
        label.innerHTML = label.innerText
            .split('')
            .map((letter,idx) => `<span style="transition-delay:${idx * 75}ms">${letter}</span>`)
            .join('')
    })  

  //Import xml
  var oXHR = window.XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject('Microsoft.XMLHTTP');

    function reportStatus() {
        if (oXHR.readyState == 4)               // REQUEST COMPLETED.
            showTheList(this.responseXML);      // ALL SET. NOW SHOW XML DATA.
    }

    oXHR.onreadystatechange = reportStatus;
    oXHR.open("GET", "library/library.xml", true);        // true = ASYNCHRONOUS REQUEST (DESIRABLE), false = SYNCHRONOUS REQUEST.
    oXHR.send();

    function showTheList(xml) {

        var divfloresta = document.getElementById('floresta');        // THE PARENT DIV.
        var Book_List = xml.getElementsByTagName('List');       // THE XML TAG NAME.
        
        
        var table = document.createElement('table');
        
        var trHeader = document.createElement('tr');
        var thCol1 = document.createElement('th');
        var thCol2 = document.createElement('th');
        thCol1.innerHTML = "FlorestName";
        thCol2.innerHTML = "Category";
        trHeader.appendChild(thCol1);
        trHeader.appendChild(thCol2);
        divfloresta.appendChild(table);

        
        for (var i = 0; i < Book_List.length; i++) {
            var tr = document.createElement('tr');
            // CREATE CHILD DIVS INSIDE THE PARENT DIV.
            var tdCol1 = document.createElement('td');
            // tdCol1.className = 'col1';
            tdCol1.innerHTML = Book_List[i].getElementsByTagName("FlorestName")[0].childNodes[0].nodeValue;

            var tdCol2 = document.createElement('td');
            // tdCol2.className = 'col2';
            tdCol2.innerHTML = Book_List[i].getElementsByTagName("Category")[0].childNodes[0].nodeValue;

            // ADD THE CHILD TO THE PARENT DIV.
            tr.appendChild(tdCol1);
            tr.appendChild(tdCol2);
            table.appendChild(tr);
        }
    };
