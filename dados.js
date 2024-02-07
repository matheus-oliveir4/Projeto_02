
var selectElement = document.getElementById('severity')

var indiceOpition0 = 0;
var indiceOpition1 = 1; /*sev0*/
var indiceOpition2 = 2; /*sev1*/
var indiceOpition3 = 3; /*sev2*/
var indiceOpition4 = 4; /*sev3*/
var indiceOpition5 = 5; /*sev4*/
var indiceOpition6 = 6; /*sev5*/



function selected(value){
  var radios = document.getElementsByClassName('grupo')
  var formRugasT = document.getElementsByName('form1RugasT')
  var formAusencia = document.getElementsByName('formAusencia ')
  var camadaCont = document.getElementsByName('camadaCont')
  var formRugasL = document.getElementsByName('formRugasL')
  var formRugasAlma = document.getElementsByName('formRugasAlma')
  var formGapAusCore = document.getElementsByName('formGapAusCore')
  var formDegrauC = document.getElementsByName('formDegrauC')
  var formTecSuperC = document.getElementsByName('formTecSuperC')
  var formSemiSec = document.getElementsByName('formSemiSec')
  var formBolhasC = document.getElementsByName('formBolhasC')
  var formCpCascaECol = document.getElementsByName('formCpCascaECol')
  var formTrincasTrans = document.getElementsByName('formTrincasTrans')
  var formTrincasLong= document.getElementsByName('formTrincasLong')

  var formTrincasTransCol = document.getElementsByName('formTrincasTransCol')
  var formTrincasLongCol = document.getElementsByName('formTrincasLongCol')
  var formDescola = document.getElementsByName('formDescola')
  var formTrincasInsBf = document.getElementsByName('formTrincasInsBf')
  var formLinhasDeColBABF = document.getElementsByName('formLinhasDeColBABF')
  var formVazioAreaColSque = document.getElementsByName('formVazioAreaColSque')
  var formVazioColPestBABF= document.getElementsByName('formVazioColPestBABF')
  var formMateriaisSoltos = document.getElementsByName('formMateriaisSoltos')
  var formDelamCA = document.getElementsByName('formDelamCA')
  var formDelamTpul = document.getElementsByName('formDelamTpul')
  var formLPSLCTU = document.getElementsByName('formLPSLCTU')
  var formDanosRaios = document.getElementsByName('formDanosRaios')
  var formCamadaRomp = document.getElementsByName('formCamadaRomp')
  var formFurosLamC  = document.getElementsByName('formFurosLamC')
  var formFurosLamBF  = document.getElementsByName('formFurosLamBF')


   
    for(var i=0; i < radios.length; i++){
      radios[i].checked=false;
    }
    if(value =="Rugas - Longitudinal"){
      formRugasL[0].style.display = 'block'
      formRugasT[0].style.display = 'none'
      formRugasAlma[0].style.display = 'none'
      formGapAusCore[0].style.display = 'none'
      formDegrauC[0].style.display = 'none'
      formTecSuperC[0].style.display = 'none'
      formSemiSec[0].style.display = 'none'
      formBolhasC[0].style.display = 'none'
      formCpCascaECol[0].style.display = 'none' 
      formTrincasTrans[0].style.display = 'none'
      formTrincasLong[0].style.display = 'none'
      formTrincasTransCol[0].style.display = 'none'
      formTrincasLongCol[0].style.display =  'none'
      formDescola[0].style.display = 'none'
      formTrincasInsBf[0].style.display = 'none'
      formLinhasDeColBABF[0].style.display = 'none' 
      formVazioAreaColSque[0].style.display = 'none'
      formVazioColPestBABF[0].style.display = 'none'
      formMateriaisSoltos[0].style.display = 'none'
      formDelamCA[0].style.display = 'none'
      formDelamTpul[0].style.display = 'none'
      formLPSLCTU[0].style.display = 'none'
      formDanosRaios[0].style.display = 'none'
      formCamadaRomp[0].style.display = 'none'
      formFurosLamC[0].style.display = 'none'
      formFurosLamBF[0].style.display = 'none'
      formAusencia[0].style.display = 'none'
      camadaCont[0].style.display = 'none'
      selected.selectedIndex = -1; 


    } else if(value =="Rugas - Transversais"){
        formRugasL[0].style.display = 'none'
        formRugasT[0].style.display = 'block'
        formRugasAlma[0].style.display = 'none'
        formGapAusCore[0].style.display = 'none'
        formDegrauC[0].style.display = 'none'
        formTecSuperC[0].style.display = 'none'
        formSemiSec[0].style.display = 'none'
        formBolhasC[0].style.display = 'none'
        formCpCascaECol[0].style.display = 'none' 
        formTrincasTrans[0].style.display = 'none'
        formTrincasLong[0].style.display = 'none'
        formTrincasTransCol[0].style.display = 'none'
        formTrincasLongCol[0].style.display =  'none'
        formDescola[0].style.display = 'none'
        formTrincasInsBf[0].style.display = 'none'
        formLinhasDeColBABF[0].style.display = 'none' 
        formVazioAreaColSque[0].style.display = 'none'
        formVazioColPestBABF[0].style.display = 'none'
        formMateriaisSoltos[0].style.display = 'none'
        formDelamCA[0].style.display = 'none'
        formDelamTpul[0].style.display = 'none'
        formLPSLCTU[0].style.display = 'none'
        formDanosRaios[0].style.display = 'none'
        formCamadaRomp[0].style.display = 'none'
        formFurosLamC[0].style.display = 'none'
        formFurosLamBF[0].style.display = 'none'
        formAusencia[0].style.display = 'none'
        camadaCont[0].style.display = 'none'
        selected.selectedIndex = -1;} 
     else if(value =="Rugas - Almas"){
      formRugasL[0].style.display = 'none'
      formRugasT[0].style.display = 'none'
      formRugasAlma[0].style.display = 'block'
      formGapAusCore[0].style.display = 'none'
      formDegrauC[0].style.display = 'none'
      formTecSuperC[0].style.display = 'none'
      formSemiSec[0].style.display = 'none'
      formBolhasC[0].style.display = 'none'
      formCpCascaECol[0].style.display = 'none' 
      formTrincasTrans[0].style.display = 'none'
      formTrincasLong[0].style.display = 'none'
      formTrincasTransCol[0].style.display = 'none'
      formTrincasLongCol[0].style.display =  'none'
      formDescola[0].style.display = 'none'
      formTrincasInsBf[0].style.display = 'none'
      formLinhasDeColBABF[0].style.display = 'none' 
      formVazioAreaColSque[0].style.display = 'none'
      formVazioColPestBABF[0].style.display = 'none'
      formMateriaisSoltos[0].style.display = 'none'
      formDelamCA[0].style.display = 'none'
      formDelamTpul[0].style.display = 'none'
      formLPSLCTU[0].style.display = 'none'
      formDanosRaios[0].style.display = 'none'
      formCamadaRomp[0].style.display = 'none'
      formFurosLamC[0].style.display = 'none'
      formFurosLamBF[0].style.display = 'none'
      formAusencia[0].style.display = 'none'
      camadaCont[0].style.display = 'none'
      selected.selectedIndex = -1; 
     }
     else if(value =="Gap ou Ausência de Core - Cascas e Almas"){
      formRugasL[0].style.display = 'none'
      formRugasT[0].style.display = 'none'
      formRugasAlma[0].style.display = 'none'
      formGapAusCore[0].style.display = 'block'
      formDegrauC[0].style.display = 'none'
      formTecSuperC[0].style.display = 'none'
      formSemiSec[0].style.display = 'none'
      formBolhasC[0].style.display = 'none'
      formCpCascaECol[0].style.display = 'none' 
      formTrincasTrans[0].style.display = 'none'
      formTrincasLong[0].style.display = 'none'
      formTrincasTransCol[0].style.display = 'none'
      formTrincasLongCol[0].style.display =  'none'
      formDescola[0].style.display = 'none'
      formTrincasInsBf[0].style.display = 'none'
      formLinhasDeColBABF[0].style.display = 'none' 
      formVazioAreaColSque[0].style.display = 'none'
      formVazioColPestBABF[0].style.display = 'none'
      formMateriaisSoltos[0].style.display = 'none'
      formDelamCA[0].style.display = 'none'
      formDelamTpul[0].style.display = 'none'
      formLPSLCTU[0].style.display = 'none'
      formDanosRaios[0].style.display = 'none'
      formCamadaRomp[0].style.display = 'none'
      formFurosLamC[0].style.display = 'none'
      formFurosLamBF[0].style.display = 'none'
      formAusencia[0].style.display = 'none'
      camadaCont[0].style.display = 'none'
      selected.selectedIndex = -1; 
     }
     else if(value =="Degrau - Cascas"){
      formRugasL[0].style.display = 'none'
      formRugasT[0].style.display = 'none'
      formRugasAlma[0].style.display = 'none'
      formGapAusCore[0].style.display = 'none'
      formDegrauC[0].style.display = 'block'
      formTecSuperC[0].style.display = 'none'
      formSemiSec[0].style.display = 'none'
      formBolhasC[0].style.display = 'none'
      formCpCascaECol[0].style.display = 'none' 
      formTrincasTrans[0].style.display = 'none'
      formTrincasLong[0].style.display = 'none'
      formTrincasTransCol[0].style.display = 'none'
      formTrincasLongCol[0].style.display =  'none'
      formDescola[0].style.display = 'none'
      formTrincasInsBf[0].style.display = 'none'
      formLinhasDeColBABF[0].style.display = 'none' 
      formVazioAreaColSque[0].style.display = 'none'
      formVazioColPestBABF[0].style.display = 'none'
      formMateriaisSoltos[0].style.display = 'none'
      formDelamCA[0].style.display = 'none'
      formDelamTpul[0].style.display = 'none'
      formLPSLCTU[0].style.display = 'none'
      formDanosRaios[0].style.display = 'none'
      formCamadaRomp[0].style.display = 'none'
      formFurosLamC[0].style.display = 'none'
      formFurosLamBF[0].style.display = 'none'
      formAusencia[0].style.display = 'none'
      camadaCont[0].style.display = 'none'
      selected.selectedIndex = -1; 
     }
     else if(value =="Tecido Seco na superfície - Cascas"){
      formRugasL[0].style.display = 'none'
      formRugasT[0].style.display = 'none'
      formRugasAlma[0].style.display = 'none'
      formGapAusCore[0].style.display = 'none'
      formDegrauC[0].style.display = 'none'
      formTecSuperC[0].style.display = 'block'
      formSemiSec[0].style.display = 'none'
      formBolhasC[0].style.display = 'none'
      formCpCascaECol[0].style.display = 'none' 
      formTrincasTrans[0].style.display = 'none'
      formTrincasLong[0].style.display = 'none'
      formTrincasTransCol[0].style.display = 'none'
      formTrincasLongCol[0].style.display =  'none'
      formDescola[0].style.display = 'none'
      formTrincasInsBf[0].style.display = 'none'
      formLinhasDeColBABF[0].style.display = 'none' 
      formVazioAreaColSque[0].style.display = 'none'
      formVazioColPestBABF[0].style.display = 'none'
      formMateriaisSoltos[0].style.display = 'none'
      formDelamCA[0].style.display = 'none'
      formDelamTpul[0].style.display = 'none'
      formLPSLCTU[0].style.display = 'none'
      formDanosRaios[0].style.display = 'none'
      formCamadaRomp[0].style.display = 'none'
      formFurosLamC[0].style.display = 'none'
      formFurosLamBF[0].style.display = 'none'
      formAusencia[0].style.display = 'none'
      camadaCont[0].style.display = 'none'
      selected.selectedIndex = -1; 
     }
     else if(value =="Tecido Semi-Seco - Cascas e Almas"){
      formRugasL[0].style.display = 'none'
      formRugasT[0].style.display = 'none'
      formRugasAlma[0].style.display = 'none'
      formGapAusCore[0].style.display = 'none'
      formDegrauC[0].style.display = 'none'
      formTecSuperC[0].style.display = 'none'
      formSemiSec[0].style.display = 'block'
      formBolhasC[0].style.display = 'none'
      formCpCascaECol[0].style.display = 'none' 
      formTrincasTrans[0].style.display = 'none'
      formTrincasLong[0].style.display = 'none'
      formTrincasTransCol[0].style.display = 'none'
      formTrincasLongCol[0].style.display =  'none'
      formDescola[0].style.display = 'none'
      formTrincasInsBf[0].style.display = 'none'
      formLinhasDeColBABF[0].style.display = 'none' 
      formVazioAreaColSque[0].style.display = 'none'
      formVazioColPestBABF[0].style.display = 'none'
      formMateriaisSoltos[0].style.display = 'none'
      formDelamCA[0].style.display = 'none'
      formDelamTpul[0].style.display = 'none'
      formLPSLCTU[0].style.display = 'none'
      formDanosRaios[0].style.display = 'none'
      formCamadaRomp[0].style.display = 'none'
      formFurosLamC[0].style.display = 'none'
      formFurosLamBF[0].style.display = 'none'
      formAusencia[0].style.display = 'none'
      camadaCont[0].style.display = 'none'
      selected.selectedIndex = -1; 
     }
     else if(value =="Bolhas - Casca"){
      formRugasL[0].style.display = 'none'
      formRugasT[0].style.display = 'none'
      formRugasAlma[0].style.display = 'none'
      formGapAusCore[0].style.display = 'none'
      formDegrauC[0].style.display = 'none'
      formTecSuperC[0].style.display = 'none'
      formSemiSec[0].style.display = 'none'
      formBolhasC[0].style.display = 'block'
      formCpCascaECol[0].style.display = 'none' 
      formTrincasTrans[0].style.display = 'none'
      formTrincasLong[0].style.display = 'none'
      formTrincasTransCol[0].style.display = 'none'
      formTrincasLongCol[0].style.display =  'none'
      formDescola[0].style.display = 'none'
      formTrincasInsBf[0].style.display = 'none'
      formLinhasDeColBABF[0].style.display = 'none' 
      formVazioAreaColSque[0].style.display = 'none'
      formVazioColPestBABF[0].style.display = 'none'
      formMateriaisSoltos[0].style.display = 'none'
      formDelamCA[0].style.display = 'none'
      formDelamTpul[0].style.display = 'none'
      formLPSLCTU[0].style.display = 'none'
      formDanosRaios[0].style.display = 'none'
      formCamadaRomp[0].style.display = 'none'
      formFurosLamC[0].style.display = 'none'
      formFurosLamBF[0].style.display = 'none'
      formAusencia[0].style.display = 'none'
      camadaCont[0].style.display = 'none'
      selected.selectedIndex = -1; 
     }
     else if(value =="Corpo Estranho - Cascas e área de colagem (para laminados infudidos ou áreas de colagem)"){
      formRugasL[0].style.display = 'none'
      formRugasT[0].style.display = 'none'
      formRugasAlma[0].style.display = 'none'
      formGapAusCore[0].style.display = 'none'
      formDegrauC[0].style.display = 'none'
      formTecSuperC[0].style.display = 'none'
      formSemiSec[0].style.display = 'none'
      formBolhasC[0].style.display = 'none'
      formCpCascaECol[0].style.display = 'block' 
      formTrincasTrans[0].style.display = 'none'
      formTrincasLong[0].style.display = 'none'
      formTrincasTransCol[0].style.display = 'none'
      formTrincasLongCol[0].style.display =  'none'
      formDescola[0].style.display = 'none'
      formTrincasInsBf[0].style.display = 'none'
      formLinhasDeColBABF[0].style.display = 'none' 
      formVazioAreaColSque[0].style.display = 'none'
      formVazioColPestBABF[0].style.display = 'none'
      formMateriaisSoltos[0].style.display = 'none'
      formDelamCA[0].style.display = 'none'
      formDelamTpul[0].style.display = 'none'
      formLPSLCTU[0].style.display = 'none'
      formDanosRaios[0].style.display = 'none'
      formCamadaRomp[0].style.display = 'none'
      formFurosLamC[0].style.display = 'none'
      formFurosLamBF[0].style.display = 'none'
      formAusencia[0].style.display = 'none'
      camadaCont[0].style.display = 'none'
      selected.selectedIndex = -1; 
     }
     else if(value =="Trincas transversais - Cascas e Almas"){
      formRugasL[0].style.display = 'none'
      formRugasT[0].style.display = 'none'
      formRugasAlma[0].style.display = 'none'
      formGapAusCore[0].style.display = 'none'
      formDegrauC[0].style.display = 'none'
      formTecSuperC[0].style.display = 'none'
      formSemiSec[0].style.display = 'none'
      formBolhasC[0].style.display = 'none'
      formCpCascaECol[0].style.display = 'none' 
      formTrincasTrans[0].style.display ='block'
      formTrincasLong[0].style.display = 'none'
      formTrincasTransCol[0].style.display = 'none'
      formTrincasLongCol[0].style.display =  'none'
      formDescola[0].style.display = 'none'
      formTrincasInsBf[0].style.display = 'none'
      formLinhasDeColBABF[0].style.display = 'none' 
      formVazioAreaColSque[0].style.display = 'none'
      formVazioColPestBABF[0].style.display = 'none'
      formMateriaisSoltos[0].style.display = 'none'
      formDelamCA[0].style.display = 'none'
      formDelamTpul[0].style.display = 'none'
      formLPSLCTU[0].style.display = 'none'
      formDanosRaios[0].style.display = 'none'
      formCamadaRomp[0].style.display = 'none'
      formFurosLamC[0].style.display = 'none'
      formFurosLamBF[0].style.display = 'none'
      formAusencia[0].style.display = 'none'
      camadaCont[0].style.display = 'none'
      selected.selectedIndex = -1; 
     }
     else if(value =="Trincas Longitudinais - Cascas e Almas"){
      formRugasL[0].style.display = 'none'
      formRugasT[0].style.display = 'none'
      formRugasAlma[0].style.display = 'none'
      formGapAusCore[0].style.display = 'none'
      formDegrauC[0].style.display = 'none'
      formTecSuperC[0].style.display = 'none'
      formSemiSec[0].style.display = 'none'
      formBolhasC[0].style.display = 'none'
      formCpCascaECol[0].style.display = 'none' 
      formTrincasTrans[0].style.display = 'none'
      formTrincasLong[0].style.display = 'block'
      formTrincasTransCol[0].style.display = 'none'
      formTrincasLongCol[0].style.display =  'none'
      formDescola[0].style.display = 'none'
      formTrincasInsBf[0].style.display = 'none'
      formLinhasDeColBABF[0].style.display = 'none' 
      formVazioAreaColSque[0].style.display = 'none'
      formVazioColPestBABF[0].style.display = 'none'
      formMateriaisSoltos[0].style.display = 'none'
      formDelamCA[0].style.display = 'none'
      formDelamTpul[0].style.display = 'none'
      formLPSLCTU[0].style.display = 'none'
      formDanosRaios[0].style.display = 'none'
      formCamadaRomp[0].style.display = 'none'
      formFurosLamC[0].style.display = 'none'
      formFurosLamBF[0].style.display = 'none'
      formAusencia[0].style.display = 'none'
      camadaCont[0].style.display = 'none'
      selected.selectedIndex = -1; 
     }
     else if(value =="Trincas Transversais - linhas de colagem"){
      formRugasL[0].style.display = 'none'
      formRugasT[0].style.display = 'none'
      formRugasAlma[0].style.display = 'none'
      formGapAusCore[0].style.display = 'none'
      formDegrauC[0].style.display = 'none'
      formTecSuperC[0].style.display = 'none'
      formSemiSec[0].style.display = 'none'
      formBolhasC[0].style.display = 'none'
      formCpCascaECol[0].style.display = 'none' 
      formTrincasTrans[0].style.display = 'none'
      formTrincasLong[0].style.display = 'none'
      formTrincasTransCol[0].style.display = 'block'
      formTrincasLongCol[0].style.display =  'none'
      formDescola[0].style.display = 'none'
      formTrincasInsBf[0].style.display = 'none'
      formLinhasDeColBABF[0].style.display = 'none' 
      formVazioAreaColSque[0].style.display = 'none'
      formVazioColPestBABF[0].style.display = 'none'
      formMateriaisSoltos[0].style.display = 'none'
      formDelamCA[0].style.display = 'none'
      formDelamTpul[0].style.display = 'none'
      formLPSLCTU[0].style.display = 'none'
      formDanosRaios[0].style.display = 'none'
      formCamadaRomp[0].style.display = 'none'
      formFurosLamC[0].style.display = 'none'
      formFurosLamBF[0].style.display = 'none'
      formAusencia[0].style.display = 'none'
      camadaCont[0].style.display = 'none'
      selected.selectedIndex = -1; 
     }
     else if(value =="Trincas Longitudinais - linhas de colagem"){
      formRugasL[0].style.display = 'none'
      formRugasT[0].style.display = 'none'
      formRugasAlma[0].style.display = 'none'
      formGapAusCore[0].style.display = 'none'
      formDegrauC[0].style.display = 'none'
      formTecSuperC[0].style.display = 'none'
      formSemiSec[0].style.display = 'none'
      formBolhasC[0].style.display = 'none'
      formCpCascaECol[0].style.display = 'none' 
      formTrincasTrans[0].style.display = 'none'
      formTrincasLong[0].style.display = 'none'
      formTrincasTransCol[0].style.display = 'none'
      formTrincasLongCol[0].style.display = 'block'
      formDescola[0].style.display = 'none'
      formTrincasInsBf[0].style.display = 'none'
      formLinhasDeColBABF[0].style.display = 'none' 
      formVazioAreaColSque[0].style.display = 'none'
      formVazioColPestBABF[0].style.display = 'none'
      formMateriaisSoltos[0].style.display = 'none'
      formDelamCA[0].style.display = 'none'
      formDelamTpul[0].style.display = 'none'
      formLPSLCTU[0].style.display = 'none'
      formDanosRaios[0].style.display = 'none'
      formCamadaRomp[0].style.display = 'none'
      formFurosLamC[0].style.display = 'none'
      formFurosLamBF[0].style.display = 'none'
      formAusencia[0].style.display = 'none'
      camadaCont[0].style.display = 'none'
      selected.selectedIndex = -1; 
     }
     else if(value =="Descolamentos  - Danos na alma/T-pultrudado"){
      formRugasL[0].style.display = 'none'
      formRugasT[0].style.display = 'none'
      formRugasAlma[0].style.display = 'none'
      formGapAusCore[0].style.display = 'none'
      formDegrauC[0].style.display = 'none'
      formTecSuperC[0].style.display = 'none'
      formSemiSec[0].style.display = 'none'
      formBolhasC[0].style.display = 'none'
      formCpCascaECol[0].style.display = 'none' 
      formTrincasTrans[0].style.display = 'none'
      formTrincasLong[0].style.display = 'none'
      formTrincasTransCol[0].style.display = 'none'
      formTrincasLongCol[0].style.display =  'none'
      formDescola[0].style.display = 'block'
      formTrincasInsBf[0].style.display = 'none'
      formLinhasDeColBABF[0].style.display = 'none' 
      formVazioAreaColSque[0].style.display = 'none'
      formVazioColPestBABF[0].style.display = 'none'
      formMateriaisSoltos[0].style.display = 'none'
      formDelamCA[0].style.display = 'none'
      formDelamTpul[0].style.display = 'none'
      formLPSLCTU[0].style.display = 'none'
      formDanosRaios[0].style.display = 'none'
      formCamadaRomp[0].style.display = 'none'
      formFurosLamC[0].style.display = 'none'
      formFurosLamBF[0].style.display = 'none'
      formAusencia[0].style.display = 'none'
      camadaCont[0].style.display = 'none'
      selected.selectedIndex = -1; 
     }
     else if(value =="Trincas - Inserto do BF"){
      formRugasL[0].style.display = 'none'
      formRugasT[0].style.display = 'none'
      formRugasAlma[0].style.display = 'none'
      formGapAusCore[0].style.display = 'none'
      formDegrauC[0].style.display = 'none'
      formTecSuperC[0].style.display = 'none'
      formSemiSec[0].style.display = 'none'
      formBolhasC[0].style.display = 'none'
      formCpCascaECol[0].style.display = 'none' 
      formTrincasTrans[0].style.display = 'none'
      formTrincasLong[0].style.display = 'none'
      formTrincasTransCol[0].style.display = 'none'
      formTrincasLongCol[0].style.display =  'none'
      formDescola[0].style.display = 'none'
      formTrincasInsBf[0].style.display = 'block'
      formLinhasDeColBABF[0].style.display = 'none' 
      formVazioAreaColSque[0].style.display = 'none'
      formVazioColPestBABF[0].style.display = 'none'
      formMateriaisSoltos[0].style.display = 'none'
      formDelamCA[0].style.display = 'none'
      formDelamTpul[0].style.display = 'none'
      formLPSLCTU[0].style.display = 'none'
      formDanosRaios[0].style.display = 'none'
      formCamadaRomp[0].style.display = 'none'
      formFurosLamC[0].style.display = 'none'
      formFurosLamBF[0].style.display = 'none'
      formAusencia[0].style.display = 'none'
      camadaCont[0].style.display = 'none'
      selected.selectedIndex = -1; 
     }
     else if(value =="Linhas de colagem - BA/BF"){
      formRugasL[0].style.display = 'none'
      formRugasT[0].style.display = 'none'
      formRugasAlma[0].style.display = 'none'
      formGapAusCore[0].style.display = 'none'
      formDegrauC[0].style.display = 'none'
      formTecSuperC[0].style.display = 'none'
      formSemiSec[0].style.display = 'none'
      formBolhasC[0].style.display = 'none'
      formCpCascaECol[0].style.display = 'none' 
      formTrincasTrans[0].style.display = 'none'
      formTrincasLong[0].style.display = 'none'
      formTrincasTransCol[0].style.display = 'none'
      formTrincasLongCol[0].style.display =  'none'
      formDescola[0].style.display = 'none'
      formTrincasInsBf[0].style.display = 'none'
      formLinhasDeColBABF[0].style.display = 'block'
      formVazioAreaColSque[0].style.display = 'none'
      formVazioColPestBABF[0].style.display = 'none'
      formMateriaisSoltos[0].style.display = 'none'
      formDelamCA[0].style.display = 'none'
      formDelamTpul[0].style.display = 'none'
      formLPSLCTU[0].style.display = 'none'
      formDanosRaios[0].style.display = 'none'
      formCamadaRomp[0].style.display = 'none'
      formFurosLamC[0].style.display = 'none'
      formFurosLamBF[0].style.display = 'none'
      formAusencia[0].style.display = 'none'
      camadaCont[0].style.display = 'none'
      selected.selectedIndex = -1; 
     }
     else if(value =="Vazio área de colagem ou Squeeze Out Pobre -Almas"){
      formRugasL[0].style.display = 'none'
      formRugasT[0].style.display = 'none'
      formRugasAlma[0].style.display = 'none'
      formGapAusCore[0].style.display = 'none'
      formDegrauC[0].style.display = 'none'
      formTecSuperC[0].style.display = 'none'
      formSemiSec[0].style.display = 'none'
      formBolhasC[0].style.display = 'none'
      formCpCascaECol[0].style.display = 'none' 
      formTrincasTrans[0].style.display = 'none'
      formTrincasLong[0].style.display = 'none'
      formTrincasTransCol[0].style.display = 'none'
      formTrincasLongCol[0].style.display =  'none'
      formDescola[0].style.display = 'none'
      formTrincasInsBf[0].style.display = 'none'
      formLinhasDeColBABF[0].style.display = 'none' 
      formVazioAreaColSque[0].style.display ='block'
      formVazioColPestBABF[0].style.display = 'none'
      formMateriaisSoltos[0].style.display = 'none'
      formDelamCA[0].style.display = 'none'
      formDelamTpul[0].style.display = 'none'
      formLPSLCTU[0].style.display = 'none'
      formDanosRaios[0].style.display = 'none'
      formCamadaRomp[0].style.display = 'none'
      formFurosLamC[0].style.display = 'none'
      formFurosLamBF[0].style.display = 'none'
      formAusencia[0].style.display = 'none'
      camadaCont[0].style.display = 'none'
      selected.selectedIndex = -1; 
     }
     else if(value =="Vazio área de colagem - Pestanas BA e BF - até 2.000 mm da face da raiz"){
      formRugasL[0].style.display = 'none'
      formRugasT[0].style.display = 'none'
      formRugasAlma[0].style.display = 'none'
      formGapAusCore[0].style.display = 'none'
      formDegrauC[0].style.display = 'none'
      formTecSuperC[0].style.display = 'none'
      formSemiSec[0].style.display = 'none'
      formBolhasC[0].style.display = 'none'
      formCpCascaECol[0].style.display = 'none' 
      formTrincasTrans[0].style.display = 'none'
      formTrincasLong[0].style.display = 'none'
      formTrincasTransCol[0].style.display = 'none'
      formTrincasLongCol[0].style.display =  'none'
      formDescola[0].style.display = 'none'
      formTrincasInsBf[0].style.display = 'none'
      formLinhasDeColBABF[0].style.display = 'none' 
      formVazioAreaColSque[0].style.display = 'none'
      formVazioColPestBABF[0].style.display = 'block'
      formMateriaisSoltos[0].style.display = 'none'
      formDelamCA[0].style.display = 'none'
      formDelamTpul[0].style.display = 'none'
      formLPSLCTU[0].style.display = 'none'
      formDanosRaios[0].style.display = 'none'
      formCamadaRomp[0].style.display = 'none'
      formFurosLamC[0].style.display = 'none'
      formFurosLamBF[0].style.display = 'none'
      formAusencia[0].style.display = 'none'
      camadaCont[0].style.display = 'none'
      selected.selectedIndex = -1; 
     }
     else if(value =="Materiais soltos em geral - Interno da pá"){
      formRugasL[0].style.display = 'none'
      formRugasT[0].style.display = 'none'
      formRugasAlma[0].style.display = 'none'
      formGapAusCore[0].style.display = 'none'
      formDegrauC[0].style.display = 'none'
      formTecSuperC[0].style.display = 'none'
      formSemiSec[0].style.display = 'none'
      formBolhasC[0].style.display = 'none'
      formCpCascaECol[0].style.display = 'none' 
      formTrincasTrans[0].style.display = 'none'
      formTrincasLong[0].style.display = 'none'
      formTrincasTransCol[0].style.display = 'none'
      formTrincasLongCol[0].style.display =  'none'
      formDescola[0].style.display = 'none'
      formTrincasInsBf[0].style.display = 'none'
      formLinhasDeColBABF[0].style.display = 'none' 
      formVazioAreaColSque[0].style.display = 'none'
      formVazioColPestBABF[0].style.display = 'none'
      formMateriaisSoltos[0].style.display = 'block'
      formDelamCA[0].style.display = 'none'
      formDelamTpul[0].style.display = 'none'
      formLPSLCTU[0].style.display = 'none'
      formDanosRaios[0].style.display = 'none'
      formCamadaRomp[0].style.display = 'none'
      formFurosLamC[0].style.display = 'none'
      formFurosLamBF[0].style.display = 'none'
      formAusencia[0].style.display = 'none'
      camadaCont[0].style.display = 'none'
      selected.selectedIndex = -1; 
     }
     else if(value =="Delaminações - Cascas e Almas"){
      formRugasL[0].style.display = 'none'
      formRugasT[0].style.display = 'none'
      formRugasAlma[0].style.display = 'none'
      formGapAusCore[0].style.display = 'none'
      formDegrauC[0].style.display = 'none'
      formTecSuperC[0].style.display = 'none'
      formSemiSec[0].style.display = 'none'
      formBolhasC[0].style.display = 'none'
      formCpCascaECol[0].style.display = 'none' 
      formTrincasTrans[0].style.display = 'none'
      formTrincasLong[0].style.display = 'none'
      formTrincasTransCol[0].style.display = 'none'
      formTrincasLongCol[0].style.display =  'none'
      formDescola[0].style.display = 'none'
      formTrincasInsBf[0].style.display = 'none'
      formLinhasDeColBABF[0].style.display = 'none' 
      formVazioAreaColSque[0].style.display = 'none'
      formVazioColPestBABF[0].style.display = 'none'
      formMateriaisSoltos[0].style.display = 'none'
      formDelamCA[0].style.display = 'block'
      formDelamTpul[0].style.display = 'none'
      formLPSLCTU[0].style.display = 'none'
      formDanosRaios[0].style.display = 'none'
      formCamadaRomp[0].style.display = 'none'
      formFurosLamC[0].style.display = 'none'
      formFurosLamBF[0].style.display = 'none'
      formAusencia[0].style.display = 'none'
      camadaCont[0].style.display = 'none'
      selected.selectedIndex = -1; }
     else if(value =="Delaminações - T-pultrudado"){
      formRugasL[0].style.display = 'none'
      formRugasT[0].style.display = 'none'
      formRugasAlma[0].style.display = 'none'
      formGapAusCore[0].style.display = 'none'
      formDegrauC[0].style.display = 'none'
      formTecSuperC[0].style.display = 'none'
      formSemiSec[0].style.display = 'none'
      formBolhasC[0].style.display = 'none'
      formCpCascaECol[0].style.display = 'none' 
      formTrincasTrans[0].style.display = 'none'
      formTrincasLong[0].style.display = 'none'
      formTrincasTransCol[0].style.display = 'none'
      formTrincasLongCol[0].style.display =  'none'
      formDescola[0].style.display = 'none'
      formTrincasInsBf[0].style.display = 'none'
      formLinhasDeColBABF[0].style.display = 'none' 
      formVazioAreaColSque[0].style.display = 'none'
      formVazioColPestBABF[0].style.display = 'none'
      formMateriaisSoltos[0].style.display = 'none'
      formDelamCA[0].style.display = 'none'
      formDelamTpul[0].style.display = 'block'
      formLPSLCTU[0].style.display = 'none'
      formDanosRaios[0].style.display = 'none'
      formCamadaRomp[0].style.display = 'none'
      formFurosLamC[0].style.display = 'none'
      formFurosLamBF[0].style.display = 'none'
      formAusencia[0].style.display = 'none'
      camadaCont[0].style.display = 'none'
      selected.selectedIndex = -1; 
     }
     else if(value =="LPS/LCTU - Root Chamber"){
      formRugasL[0].style.display = 'none'
      formRugasT[0].style.display = 'none'
      formRugasAlma[0].style.display = 'none'
      formGapAusCore[0].style.display = 'none'
      formDegrauC[0].style.display = 'none'
      formTecSuperC[0].style.display = 'none'
      formSemiSec[0].style.display = 'none'
      formBolhasC[0].style.display = 'none'
      formCpCascaECol[0].style.display = 'none' 
      formTrincasTrans[0].style.display = 'none'
      formTrincasLong[0].style.display = 'none'
      formTrincasTransCol[0].style.display = 'none'
      formTrincasLongCol[0].style.display =  'none'
      formDescola[0].style.display = 'none'
      formTrincasInsBf[0].style.display = 'none'
      formLinhasDeColBABF[0].style.display = 'none' 
      formVazioAreaColSque[0].style.display = 'none'
      formVazioColPestBABF[0].style.display = 'none'
      formMateriaisSoltos[0].style.display = 'none'
      formDelamCA[0].style.display = 'none'
      formDelamTpul[0].style.display = 'none'
      formLPSLCTU[0].style.display = 'block'
      formDanosRaios[0].style.display = 'none'
      formCamadaRomp[0].style.display = 'none'
      formFurosLamC[0].style.display = 'none'
      formFurosLamBF[0].style.display = 'none'
      formAusencia[0].style.display = 'none'
      camadaCont[0].style.display = 'none'
      selected.selectedIndex = -1; 
     }
     else if(value =="Danos ocasionados por raios/queimados/Flashover"){
      formRugasL[0].style.display = 'none'
      formRugasT[0].style.display = 'none'
      formRugasAlma[0].style.display = 'none'
      formGapAusCore[0].style.display = 'none'
      formDegrauC[0].style.display = 'none'
      formTecSuperC[0].style.display = 'none'
      formSemiSec[0].style.display = 'none'
      formBolhasC[0].style.display = 'none'
      formCpCascaECol[0].style.display = 'none' 
      formTrincasTrans[0].style.display = 'none'
      formTrincasLong[0].style.display = 'none'
      formTrincasTransCol[0].style.display = 'none'
      formTrincasLongCol[0].style.display =  'none'
      formDescola[0].style.display = 'none'
      formTrincasInsBf[0].style.display = 'none'
      formLinhasDeColBABF[0].style.display = 'none' 
      formVazioAreaColSque[0].style.display = 'none'
      formVazioColPestBABF[0].style.display = 'none'
      formMateriaisSoltos[0].style.display = 'none'
      formDelamCA[0].style.display = 'none'
      formDelamTpul[0].style.display = 'none'
      formLPSLCTU[0].style.display = 'none'
      formDanosRaios[0].style.display = 'block'
      formCamadaRomp[0].style.display = 'none'
      formFurosLamC[0].style.display = 'none'
      formFurosLamBF[0].style.display = 'none'
      formAusencia[0].style.display = 'none'
      camadaCont[0].style.display = 'none'
      selected.selectedIndex = -1; 
     }
     else if(value =="Camada rompida devido lixamento ou remocao de nylon"){
      formRugasL[0].style.display = 'none'
      formRugasT[0].style.display = 'none'
      formRugasAlma[0].style.display = 'none'
      formGapAusCore[0].style.display = 'none'
      formDegrauC[0].style.display = 'none'
      formTecSuperC[0].style.display = 'none'
      formSemiSec[0].style.display = 'none'
      formBolhasC[0].style.display = 'none'
      formCpCascaECol[0].style.display = 'none' 
      formTrincasTrans[0].style.display = 'none'
      formTrincasLong[0].style.display = 'none'
      formTrincasTransCol[0].style.display = 'none'
      formTrincasLongCol[0].style.display =  'none'
      formDescola[0].style.display = 'none'
      formTrincasInsBf[0].style.display = 'none'
      formLinhasDeColBABF[0].style.display = 'none' 
      formVazioAreaColSque[0].style.display = 'none'
      formVazioColPestBABF[0].style.display = 'none'
      formMateriaisSoltos[0].style.display = 'none'
      formDelamCA[0].style.display = 'none'
      formDelamTpul[0].style.display = 'none'
      formLPSLCTU[0].style.display = 'none'
      formDanosRaios[0].style.display = 'none'
      formCamadaRomp[0].style.display = 'block'
      formFurosLamC[0].style.display = 'none'
      formFurosLamBF[0].style.display = 'none'
      formAusencia[0].style.display = 'none'
      camadaCont[0].style.display = 'none'
      selected.selectedIndex = -1; 
     }
     else if(value =="Furos no laminado - Casca"){
      formRugasL[0].style.display = 'none'
      formRugasT[0].style.display = 'none'
      formRugasAlma[0].style.display = 'none'
      formGapAusCore[0].style.display = 'none'
      formDegrauC[0].style.display = 'none'
      formTecSuperC[0].style.display = 'none'
      formSemiSec[0].style.display = 'none'
      formBolhasC[0].style.display = 'none'
      formCpCascaECol[0].style.display = 'none' 
      formTrincasTrans[0].style.display = 'none'
      formTrincasLong[0].style.display = 'none'
      formTrincasTransCol[0].style.display = 'none'
      formTrincasLongCol[0].style.display =  'none'
      formDescola[0].style.display = 'none'
      formTrincasInsBf[0].style.display = 'none'
      formLinhasDeColBABF[0].style.display = 'none' 
      formVazioAreaColSque[0].style.display = 'none'
      formVazioColPestBABF[0].style.display = 'none'
      formMateriaisSoltos[0].style.display = 'none'
      formDelamCA[0].style.display = 'none'
      formDelamTpul[0].style.display = 'none'
      formLPSLCTU[0].style.display = 'none'
      formDanosRaios[0].style.display = 'none'
      formCamadaRomp[0].style.display = 'none'
      formFurosLamC[0].style.display = 'block'
      formFurosLamBF[0].style.display = 'none'
      formAusencia[0].style.display = 'none'
      camadaCont[0].style.display = 'none'
      selected.selectedIndex = -1; 
     }
     else if(value =="Furos - Inserto do BF"){
      formRugasL[0].style.display = 'none'
      formRugasT[0].style.display = 'none'
      formRugasAlma[0].style.display = 'none'
      formGapAusCore[0].style.display = 'none'
      formDegrauC[0].style.display = 'none'
      formTecSuperC[0].style.display = 'none'
      formSemiSec[0].style.display = 'none'
      formBolhasC[0].style.display = 'none'
      formCpCascaECol[0].style.display = 'none' 
      formTrincasTrans[0].style.display = 'none'
      formTrincasLong[0].style.display = 'none'
      formTrincasTransCol[0].style.display = 'none'
      formTrincasLongCol[0].style.display =  'none'
      formDescola[0].style.display = 'none'
      formTrincasInsBf[0].style.display = 'none'
      formLinhasDeColBABF[0].style.display = 'none' 
      formVazioAreaColSque[0].style.display = 'none'
      formVazioColPestBABF[0].style.display = 'none'
      formMateriaisSoltos[0].style.display = 'none'
      formDelamCA[0].style.display = 'none'
      formDelamTpul[0].style.display = 'none'
      formLPSLCTU[0].style.display = 'none'
      formDanosRaios[0].style.display = 'none'
      formCamadaRomp[0].style.display = 'none'
      formFurosLamC[0].style.display = 'none'
      formFurosLamBF[0].style.display = 'block'
      formAusencia[0].style.display = 'none'
      camadaCont[0].style.display = 'none'
     }else if(value =="Ausência de camada (Preform) - LE/TE - Casca"){
      formRugasL[0].style.display = 'none'
      formRugasT[0].style.display = 'none'
      formRugasAlma[0].style.display = 'none'
      formGapAusCore[0].style.display = 'none'
      formDegrauC[0].style.display = 'none'
      formTecSuperC[0].style.display = 'none'
      formSemiSec[0].style.display = 'none'
      formBolhasC[0].style.display = 'none'
      formCpCascaECol[0].style.display = 'none' 
      formTrincasTrans[0].style.display = 'none'
      formTrincasLong[0].style.display = 'none'
      formTrincasTransCol[0].style.display = 'none'
      formTrincasLongCol[0].style.display =  'none'
      formDescola[0].style.display = 'none'
      formTrincasInsBf[0].style.display = 'none'
      formLinhasDeColBABF[0].style.display = 'none' 
      formVazioAreaColSque[0].style.display = 'none'
      formVazioColPestBABF[0].style.display = 'none'
      formMateriaisSoltos[0].style.display = 'none'
      formDelamCA[0].style.display = 'none'
      formDelamTpul[0].style.display = 'none'
      formLPSLCTU[0].style.display = 'none'
      formDanosRaios[0].style.display = 'none'
      formCamadaRomp[0].style.display = 'none'
      formFurosLamC[0].style.display = 'none'
      formFurosLamBF[0].style.display = 'none'
      formAusencia[0].style.display = 'block'
      camadaCont[0].style.display = 'none'
      selected.selectedIndex = -1; 
     } 
     
     else if(value =="Camada contaminada"){
      formRugasL[0].style.display = 'none'
      formRugasT[0].style.display = 'none'
      formRugasAlma[0].style.display = 'none'
      formGapAusCore[0].style.display = 'none'
      formDegrauC[0].style.display = 'none'
      formTecSuperC[0].style.display = 'none'
      formSemiSec[0].style.display = 'none'
      formBolhasC[0].style.display = 'none'
      formCpCascaECol[0].style.display = 'none' 
      formTrincasTrans[0].style.display = 'none'
      formTrincasLong[0].style.display = 'none'
      formTrincasTransCol[0].style.display = 'none'
      formTrincasLongCol[0].style.display =  'none'
      formDescola[0].style.display = 'none'
      formTrincasInsBf[0].style.display = 'none'
      formLinhasDeColBABF[0].style.display = 'none' 
      formVazioAreaColSque[0].style.display = 'none'
      formVazioColPestBABF[0].style.display = 'none'
      formMateriaisSoltos[0].style.display = 'none'
      formDelamCA[0].style.display = 'none'
      formDelamTpul[0].style.display = 'none'
      formLPSLCTU[0].style.display = 'none'
      formDanosRaios[0].style.display = 'none'
      formCamadaRomp[0].style.display = 'none'
      formFurosLamC[0].style.display = 'none'
      formFurosLamBF[0].style.display = 'none'
      formAusencia[0].style.display = 'none'
      camadaCont[0].style.display = 'block'
      selected.selectedIndex = -1; 
     }}
    
     
  /*Condicionais para Rugas - Longitudinal*/
  function carregar0(){
    var faltura1 = document.getElementsByName('altura1')
    var fprop1 = document.getElementsByName('propagacao3')
    var ftempo1 = document.getElementsByName('operacao3')
    var ftam1 = document.getElementsByName('tamanho1')
    var fluz1 = document.getElementsByName('luz1')

    if(faltura1[0].checked && fprop1[1].checked){
      selectElement.selectedIndex = indiceOpition1
     }else if(ftempo1[0].checked && fprop1[1].checked){
      selectElement.selectedIndex = indiceOpition2
     } else if(ftempo1[0].checked && ftam1[0].checked && fprop1[0].checked ){
      selectElement.selectedIndex = indiceOpition3
     }else if(ftempo1[1].checked && ftam1[0].checked ){
      selectElement.selectedIndex = indiceOpition4
     } else if(fprop1[0].checked && ftam1[0].checked && fluz1[1].checked){
      selectElement.selectedIndex = indiceOpition5
     } else if(fprop1[0].checked && ftam1[1].checked || fluz1[0].checked){
      selectElement.selectedIndex = indiceOpition6}
      else if(fprop1[0].checked){
        selectElement.selectedIndex = indiceOpition4
       }
    }

 /*Condicionais para rugas  Transversais*/     
function carregar1(){
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
     }else if(ftempo[1].checked && ftam[0].checked){
      selectElement.selectedIndex = indiceOpition4
     } else if(fprop[0].checked && ftam[0].checked && fluz[1].checked){
      selectElement.selectedIndex = indiceOpition5
     } else if(fprop[0].checked && ftam[1].checked || fluz[0].checked){
      selectElement.selectedIndex = indiceOpition6  
  } else if(fprop[0].checked){
  selectElement.selectedIndex = indiceOpition4
 }}
/*Condicionais para Rugas - Almas*/
function carregar2(){
  var faltura = document.getElementsByName('altura2')
  var fprop = document.getElementsByName('propagacao4')
  var ftempo = document.getElementsByName('operacao4')
  var ftam = document.getElementsByName('tamanho2')
  var fcore = document.getElementsByName('danoCore')
  var fh = document.getElementsByName('H')

  if(fh[0].checked || faltura[0].checked && ftam[0].checked  && fprop[1].checked){
    selectElement.selectedIndex = indiceOpition1
   }else if(ftempo[0].checked && ftam[1].checked && fprop[1].checked ){
    selectElement.selectedIndex = indiceOpition3
  }
   else if(ftempo[0].checked && fprop[1].checked){
    selectElement.selectedIndex = indiceOpition2
  } 
   else if(ftempo[1].checked && ftam[1].checked && fprop[0].checked){
    selectElement.selectedIndex = indiceOpition4
   } 
   else if(fprop[0].checked && ftam[1].checked && fcore[0].checked){
    selectElement.selectedIndex = indiceOpition5
   } 
   else if(fprop[0].checked && ftam[2].checked || fcore[1].checked){
    selectElement.selectedIndex = indiceOpition6  
} 
}

/*Condicionais para Gap ou Ausência de Core - Cascas e Almas*/
function carregar3(){
var fgap = document.getElementsByName('gap')
var fresina = document.getElementsByName('resina')
var fcolisao = document.getElementsByName('colisao')
var ftempo = document.getElementsByName('operacao5')
var fprop = document.getElementsByName('propagacao5')
var fluz = document.getElementsByName('luz2')
var fdelam = document.getElementsByName('delaPass')

if(fgap[0].checked && fresina[0].checked && fcolisao[1].checked){
  selectElement.selectedIndex = indiceOpition1
} else if(ftempo[0].checked && fprop[1].checked){
  selectElement.selectedIndex = indiceOpition2
} else if(fprop[0].checked && fdelam[1].checked){
  selectElement.selectedIndex = indiceOpition5
} else if(fluz[0].checked && fprop[0].checked){
  selectElement.selectedIndex = indiceOpition6 
}}
/*Condicionais paraDegrau - Cascas*/
function carregar4(){
var ftempo = document.getElementsByName('operacao6')
var fprop = document.getElementsByName('propagacao6')
var fluz = document.getElementsByName('luz3')
var fHD = document.getElementsByName('alturaD')
var fcompri = document.getElementsByName('compD')

if(fHD[0].checked && fprop[1].checked){
  selectElement.selectedIndex = indiceOpition1
} else if(ftempo[0].checked && fcompri[0].checked && fprop[1].checked){
  selectElement.selectedIndex = indiceOpition2
} else if(ftempo[0].checked && fcompri[0].checked && fprop[0].checked){
  selectElement.selectedIndex = indiceOpition3
} else if(ftempo[1].checked && fcompri[0].checked && fprop[0].checked){
  selectElement.selectedIndex = indiceOpition4
}else if(fprop[0].checked && fcompri[0].checked && fluz[1].checked){
  selectElement.selectedIndex = indiceOpition5
}
else if(fprop[0].checked && fcompri[1].checked || fluz[0].checked){
  selectElement.selectedIndex = indiceOpition6
}
}

/*Condicionais para Tecido Seco na superfície - Cascas*/
function carregar5(){
var fcompri = document.getElementsByName("compT")
if(fcompri[0].checked){
  selectElement.selectedIndex = indiceOpition4
} else if(fcompri[1].checked){
  selectElement.selectedIndex = indiceOpition5
} else if (fcompri[2].checked){
  selectElement.selectedIndex = indiceOpition6
}}
/*Condicionais para Tecido Semi-Seco - Cascas e Almas*/

function carregar6(){

  var ftempo = document.getElementsByName('operacao7')
  var fprop = document.getElementsByName('propagacao7')
  var fcompri = document.getElementsByName('compTS')

  if(fcompri[0].checked){
    selectElement.selectedIndex = indiceOpition1
  } else if(ftempo[0].checked && fcompri[1].checked && fprop[1].checked){
    selectElement.selectedIndex = indiceOpition2
  } else if(ftempo[1].checked && fcompri[1]){
    selectElement.selectedIndex = indiceOpition4
  }
}
/*Condicionais para Bolhas - Casca*/
function carregar7(){
  var ftamB = document.getElementsByName('tamB')
  var ftempo = document.getElementsByName('operacao8')
  var fprop = document.getElementsByName('propagacao8')
  var fprop1 = document.getElementsByName('propagacao9')
  var fluzP = document.getElementsByName('luz4')
  var fluz = document.getElementsByName('luz5')
  var fcompri = document.getElementsByName('compB')

  if(ftamB[0].checked || ftamB[1].checked){
    selectElement.selectedIndex = indiceOpition1 
  } else if(ftempo[0] && fcompri[0] && fprop[1].checked){
    selectElement.selectedIndex = indiceOpition3
  } else if(ftempo[1].checked && fcompri[0].checked){
    selectElement.selectedIndex = indiceOpition4
  }else if(fcompri[0].checked && fprop[0].checked){
    selectElement.selectedIndex = indiceOpition4
  } else if(fprop1[0].checked && fcompri[0].checked && fluzP[0]){
    selectElement.selectedIndex = indiceOpition5
  } else if(fprop1[0].checked && fcompri[1].checked || fluz[0].checked){
    selectElement.selectedIndex = indiceOpition6
  }}

/*Condicionais para Corpo Estranho - Cascas e área de colagem (Somente aplicável para laminados infudidos ou áreas de colagem)*/
function carregar8(){
  var ftam = document.getElementsByName('tamC')
  var fprop = document.getElementsByName('propagacao10')
  var ftempo = document.getElementsByName('operacao9')
  var fmat = document.getElementsByName('mat')

  if(fmat[0].checked && ftempo[0].checked && fprop[1].checked){
    selectElement.selectedIndex = indiceOpition2
  } else if(fmat[0].checked && ftempo[0].checked && fprop[0].checked && ftam[0].checked){
    selectElement.selectedIndex = indiceOpition3
  } else if (fmat[0].checked && fprop[1].checked && ftam[1].checked ){
    selectElement.selectedIndex = indiceOpition4
  }else if(fmat[0].checked){
    selectElement.selectedIndex = indiceOpition5

  }



}
/*Condicionais para Trincas transversais - Cascas e Almas*/
/*Condicionais para Trincas Longitudinais - Cascas e Almas*/
/*Condicionais para Trincas Transversais - linhas de colagem*/
/*Condicionais para Trincas Longitudinais - linhas de colagem*/
/*Condicionais paraDescolamentos  - Danos na alma/T-pultrudado*/
/*Condicionais para Trincas - Inserto do BF*/
/*Condicionais para Linhas de colagem - BA/BF*/
/*Condicionais para Vazio área de colagem ou Squeeze Out Pobre -Almas	*/
/*Condicionais para Vazio área de colagem - Pestanas BA e BF - até 2.000 mm da face da raiz	*/
/*Condicionais para Materiais soltos em geral - Interno da pá	*/
/*Condicionais para Delaminações - Cascas e Almas	*/
/*Condicionais para Delaminações - T-pultrudado	*/
/*Condicionais para LPS/LCTU - Root Chamber	*/
/*Condicionais para Danos ocasionados por raios/queimados/Flashover	*/
/*Condicionais para Camada rompida devido lixamento ou remoção de nylon	*/
/*Condicionais para Furos no laminado - Casca*/	
/*Condicionais para Furos no laminado - Inserto do BF	*/
/*Condicionais para Ausência de camada (Preform) - LE/TE - Casca*/
function carregar26(){
  var fprop = document.getElementsByName('propagacao1')
  var ftempo = document.getElementsByName('operacao1')
    if(ftempo[0].checked && fprop[1]){ 
      selectElement.selectedIndex = indiceOpition3
    }
  }
/*Condicionais para Camada contaminada	*/
function carregar27(){
  var fprop = document.getElementsByName('propagacao2')
  var ftempo = document.getElementsByName('operacao2')
    if(ftempo[0].checked && fprop[1]){
      selectElement.selectedIndex = indiceOpition3
    }else if(ftempo[0].checked && fprop[0]){
      selectElement.selectedIndex = indiceOpition4
    }
  }


 

    