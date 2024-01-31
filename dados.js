
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
     }else if(ftempo[1].checked && ftam[0].checked && fprop[0].checked){
      selectElement.selectedIndex = indiceOpition4
     } else if(fprop[0].checked && ftam[0].checked && fluz[1].checked){
      selectElement.selectedIndex = indiceOpition5
     } else if(fprop[0].checked && ftam[1].checked || fluz[0].checked){
      selectElement.selectedIndex = indiceOpition6  
  }

  }
function carregar26(){
  var fprop = document.getElementsByName('propagacao1')
  var ftempo = document.getElementsByName('operacao1')
    if(ftempo[0].checked && fprop[1]){ 
      selectElement.selectedIndex = indiceOpition3
    }
  }

/*Condicionais para Rugas - Longitudinal*/
/*Condicionais para rugas  Transversais*/
/*Condicionais para Rugas - Almas*/
/*Condicionais para Gap ou Ausência de Core - Cascas e Almas*/
/*Condicionais paraDegrau - Cascas*/
/*Condicionais para Tecido Seco na superfície - Cascas*/
/*Condicionais para Tecido Semi-Seco - Cascas e Almas*/
/*Condicionais para Bolhas - Casca*/
/*Condicionais para Corpo Estranho - Cascas e área de colagem (Somente aplicável para laminados infudidos ou áreas de colagem)			*/
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


 

    