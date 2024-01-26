
function selected(value){
    var formRugasT = document.getElementsByClassName('form1')
    if(value =="Rugas - Transversais"){
        formRugasT[0].style.display = 'block'
     }
}
function carregar(){
   var selectElement = document.getElementById('severity')
   var indiceOpition0 = 0;
   var indiceOpition1 = 1; /*sev0*/
   var indiceOpition2 = 2; /*sev1*/
   var indiceOpition3 = 3; /*sev2*/
   var indiceOpition4 = 4; /*sev3*/
   var indiceOpition5 = 5; /*sev4*/
   var indiceOpition6 = 6; /*sev5*/
   


 

   


    
    var faltura = document.getElementsByName('altura')
    var fprop = document.getElementsByName('propagacao')
    var ftempo = document.getElementsByName('operacao')
    var ftam = document.getElementsByName('tamanho')
    var fluz = document.getElementsByName('luz')
 


    if(faltura[0].checked && fprop[1].checked){
      selectElement.selectedIndex = indiceOpition1
     }else if(ftempo[0].checked && fprop[1].checked){
      selectElement.selectedIndex = indiceOpition2
     } else if(ftempo[0].checked && ftam[0].checked && fprop[0].checked ){
      selectElement.selectedIndex = indiceOpition3
     }else if(ftempo[1].checked && ftam[0].checked && fprop[0].checked){
      selectElement.selectedIndex = indiceOpition4
     } else if(fprop[0].checked && ftam[0].checked && fluz[1].checked){
      selectElement.selectedIndex = indiceOpition5
     } else if(fprop[0].checked && ftam[1].checked || fluz[0].checked){
      selectElement.selectedIndex = indiceOpition6 
    
     }}

 

 