
/*Automatização das Layer's propostas*/
var selectElement = document.getElementById("layer_id")
var selectElement1 = document.getElementById('severity')
var indiceOpition0 = 0;
var indiceOpition1 = 1; /*no Issues / sev0*/
var indiceOpition2 = 2; /*Light Structural / sev1*/
var indiceOpition3 = 3; /*Minor Structural / sev2*/
var indiceOpition4 = 4;  /*Medium Structural / sev3*/
var indiceOpition5 = 5; /*High Structural / sev4*/
var indiceOpition6 = 6; /*Critical Structural sev5*/
/*Automatização das severidades propostas*/







function selected(value){
  var radios = document.getElementsByClassName('grupo')
  var formRugasT = document.getElementsByName('form1RugasT')
  var formAusencia = document.getElementsByName('formAusencia')
  var formcamadaCont = document.getElementsByName('camadaCont')
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
      formcamadaCont[0].style.display = 'none'
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
      formcamadaCont[0].style.display = 'block'
      selected.selectedIndex = -1; 
     }}
    
     
  /*Condicionais para Rugas - Longitudinal*/
  function carregar0(){
    var form = document.getElementById('form0')
    var faltura1 = document.getElementsByName('altura1')
    var fprop1 = document.getElementsByName('propagacao3')
    var ftempo1 = document.getElementsByName('operacao3')
    var ftam1 = document.getElementsByName('tamanho1')
    var fluz1 = document.getElementsByName('luz1')

    if(fprop1[0].checked && ftam1[1].checked || fluz1[0].checked){
      selectElement.selectedIndex = indiceOpition6
      selectElement1.selectedIndex = indiceOpition6
      form.style.display = 'none';
      }
      
    else if(fprop1[0].checked && ftam1[0].checked && fluz1[1].checked){
        selectElement1.selectedIndex = indiceOpition5
        selectElement.selectedIndex = indiceOpition5
        form.style.display = 'none';}
    else if(fprop1[0].checked){
      selectElement.selectedIndex = indiceOpition4
      selectElement1.selectedIndex = indiceOpition4
      form.style.display = 'none';}
    else if(ftempo1[1].checked && ftam1[0].checked ){
        selectElement.selectedIndex = indiceOpition4
        selectElement1.selectedIndex = indiceOpition4
        form.style.display = 'none';} 
    else if(ftempo1[0].checked && ftam1[0].checked && fprop1[1].checked ){
          selectElement.selectedIndex = indiceOpition3 
          selectElement1.selectedIndex = indiceOpition3 
          form.style.display = 'none';} 
    else if(ftempo1[0].checked && fprop1[1].checked){
          selectElement.selectedIndex = indiceOpition2
          selectElement1.selectedIndex = indiceOpition2
          form.style.display = 'none';}
    else if(faltura1[0].checked && fprop1[1].checked){
      selectElement.selectedIndex = indiceOpition1
      selectElement1.selectedIndex = indiceOpition1
      form.style.display = 'none';} 
    else if(faltura1[1].checked && fprop1[1].checked){
      selectElement.selectedIndex = indiceOpition1
      selectElement1.selectedIndex = indiceOpition1
      form.style.display = 'none';} 
  }

 /*Condicionais para rugas  Transversais*/     
function carregar1(){
  var form = document.getElementById('form1')
  var faltura = document.getElementsByName('altura')
  var fprop = document.getElementsByName('propagacao')
  var ftempo = document.getElementsByName('operacao')
  var ftam = document.getElementsByName('tamanho')
  var fluz = document.getElementsByName('luz')
    
  if(fprop[0].checked && ftam[1].checked || fluz[0].checked){
    selectElement.selectedIndex = indiceOpition6
    selectElement1.selectedIndex = indiceOpition6
    form.style.display = 'none';}
  else if(fprop[0].checked && ftam[0].checked && fluz[1].checked){
    selectElement.selectedIndex = indiceOpition5
    selectElement1.selectedIndex = indiceOpition5
    form.style.display = 'none';}
  else if(ftempo[1].checked && ftam[0].checked){
    selectElement.selectedIndex = indiceOpition4
    selectElement1.selectedIndex = indiceOpition4
    form.style.display = 'none';} 
  else if(fprop[0].checked){
    selectElement.selectedIndex = indiceOpition4
    selectElement1.selectedIndex = indiceOpition4
    form.style.display = 'none';}
  else if(ftempo[0].checked && ftam[0].checked && fprop[0].checked ){
    selectElement.selectedIndex = indiceOpition3
    selectElement1.selectedIndex = indiceOpition3
    form.style.display = 'none';}
  else if(ftempo[0].checked && fprop[1].checked){
    selectElement.selectedIndex = indiceOpition2
    selectElement1.selectedIndex = indiceOpition2
    form.style.display = 'none';} 
  else if(faltura[0].checked && fprop[1].checked){
    selectElement.selectedIndex = indiceOpition1
    selectElement1.selectedIndex = indiceOpition1
    
    form.style.display = 'none';}
    }
/*Condicionais para Rugas - Almas*/
function carregar2(){
  var form = document.getElementById('form2')
  var faltura = document.getElementsByName('altura2')
  var fprop = document.getElementsByName('propagacao4')
  var ftempo = document.getElementsByName('operacao4')
  var ftam = document.getElementsByName('tamanho2')
  var fcore = document.getElementsByName('danoCore')
  var fh = document.getElementsByName('H')


  if(fprop[0].checked && ftam[2].checked || fcore[1].checked){
    selectElement.selectedIndex = indiceOpition6
    selectElement1.selectedIndex = indiceOpition6
    form.style.display = 'none';}
  else if(fprop[0].checked && ftam[1].checked && fcore[0].checked){
    selectElement.selectedIndex = indiceOpition5
    selectElement1.selectedIndex = indiceOpition5
    form.style.display = 'none';}
  else if(ftempo[1].checked && ftam[1].checked && fprop[0].checked){
    selectElement.selectedIndex = indiceOpition4
    selectElement1.selectedIndex = indiceOpition4
    form.style.display = 'none';}
  else if(ftempo[0].checked && ftam[1].checked && fprop[1].checked ){
    selectElement.selectedIndex = indiceOpition3
    selectElement1.selectedIndex = indiceOpition3
    form.style.display = 'none';}
  else if(ftempo[0].checked && fprop[1].checked){
    selectElement.selectedIndex = indiceOpition2
    selectElement1.selectedIndex = indiceOpition2
    form.style.display = 'none';}
    else if(fh[0].checked || faltura[0].checked && ftam[0].checked  && fprop[1].checked){
    selectElement.selectedIndex = indiceOpition1
    selectElement1.selectedIndex = indiceOpition1
    form.style.display = 'none';}
}

/*Condicionais para Gap ou Ausência de Core - Cascas e Almas*/
function carregar3(){
var form = document.getElementById('form3')
var fgap = document.getElementsByName('gap')
var fresina = document.getElementsByName('resina')
var fcolisao = document.getElementsByName('colisao')
var ftempo = document.getElementsByName('operacao5')
var fprop = document.getElementsByName('propagacao5')
var fluz = document.getElementsByName('luz2')
var fdelam = document.getElementsByName('delaPass')

if(fluz[0].checked && fprop[0].checked){
  selectElement.selectedIndex = indiceOpition6
  selectElement1.selectedIndex = indiceOpition6
  form.style.display = 'none';}
else if(fprop[0].checked && fdelam[1].checked){
    selectElement.selectedIndex = indiceOpition5
    selectElement1.selectedIndex = indiceOpition5
    form.style.display = 'none';}
else if(ftempo[0].checked && fprop[1].checked){
  selectElement.selectedIndex = indiceOpition2
  selectElement1.selectedIndex = indiceOpition2
  form.style.display = 'none';}
  else if(fgap[0].checked && fresina[0].checked && fcolisao[1].checked){
  selectElement.selectedIndex = indiceOpition1
  selectElement1.selectedIndex = indiceOpition1
  form.style.display = 'none';}  
}
/*Condicionais paraDegrau - Cascas*/
function carregar4(){
  var form = document.getElementById('form4')
var ftempo = document.getElementsByName('operacao6')
var fprop = document.getElementsByName('propagacao6')
var fluz = document.getElementsByName('luz3')
var fHD = document.getElementsByName('alturaD')
var fcompri = document.getElementsByName('compD')


if(fprop[0].checked && fcompri[1].checked || fluz[0].checked){
  selectElement.selectedIndex = indiceOpition6
  selectElement1.selectedIndex = indiceOpition6
  form.style.display = 'none';
}
else if(fprop[0].checked && fcompri[0].checked && fluz[1].checked){
  selectElement.selectedIndex = indiceOpition5
  selectElement1.selectedIndex = indiceOpition5
  form.style.display = 'none';
}
else if(ftempo[1].checked && fcompri[0].checked && fprop[0].checked){
  selectElement.selectedIndex = indiceOpition4
  selectElement1.selectedIndex = indiceOpition4
  form.style.display = 'none';
}
else if(ftempo[0].checked && fcompri[0].checked && fprop[0].checked){
  selectElement.selectedIndex = indiceOpition3
  selectElement1.selectedIndex = indiceOpition3
  form.style.display = 'none';
}
else if(ftempo[0].checked && fcompri[0].checked && fprop[1].checked){
  selectElement.selectedIndex = indiceOpition2
  selectElement1.selectedIndex = indiceOpition2
  form.style.display = 'none';
} 
else if(fHD[0].checked && fprop[1].checked){
  selectElement.selectedIndex = indiceOpition1
  selectElement1.selectedIndex = indiceOpition1
  form.style.display = 'none';
} 

}

/*Condicionais para Tecido Seco na superfície - Cascas*/
function carregar5(){
  var form = document.getElementById('form5')
var fcompri = document.getElementsByName("compT")
if (fcompri[2].checked){
  selectElement.selectedIndex = indiceOpition6
  selectElement1.selectedIndex = indiceOpition6
  form.style.display = 'none';}
else if(fcompri[1].checked){
    selectElement.selectedIndex = indiceOpition5
    selectElement1.selectedIndex = indiceOpition5
    form.style.display = 'none';}
else if(fcompri[0].checked){
  selectElement.selectedIndex = indiceOpition4
  selectElement1.selectedIndex = indiceOpition4
  form.style.display = 'none';
}}
/*Condicionais para Tecido Semi-Seco - Cascas e Almas*/

function carregar6(){
  var form = document.getElementById('form6')

  var ftempo = document.getElementsByName('operacao7')
  var fprop = document.getElementsByName('propagacao7')
  var fcompri = document.getElementsByName('compTS')

  if(ftempo[1].checked && fcompri[1]){
    selectElement.selectedIndex = indiceOpition4
    selectElement1.selectedIndex = indiceOpition4
    form.style.display = 'none';
  }
  else if(ftempo[0].checked && fcompri[1].checked && fprop[1].checked){
    selectElement.selectedIndex = indiceOpition2
    selectElement1.selectedIndex = indiceOpition2
    form.style.display = 'none';
  } 
  else if(fcompri[0].checked){
    selectElement.selectedIndex = indiceOpition1
    selectElement1.selectedIndex = indiceOpition1
    form.style.display = 'none';
  } 
}
/*Condicionais para Bolhas - Casca*/
function carregar7(){
  var form = document.getElementById('form7')
  var ftamB = document.getElementsByName('tamB')
  var ftempo = document.getElementsByName('operacao8')
  var fprop = document.getElementsByName('propagacao8')
  var fprop1 = document.getElementsByName('propagacao9')
  var fluzP = document.getElementsByName('luz4')
  var fluz = document.getElementsByName('luz5')
  var fcompri = document.getElementsByName('compB')

  if(fprop1[0].checked && fcompri[1].checked || fluz[0].checked){
    selectElement.selectedIndex = indiceOpition6
    selectElement1.selectedIndex = indiceOpition6
    form.style.display = 'none';
  }
  else if(fprop1[0].checked && fcompri[0].checked && fluzP[0]){
    selectElement.selectedIndex = indiceOpition5
    selectElement1.selectedIndex = indiceOpition5
    form.style.display = 'none';
  }
  else if(fcompri[0].checked && fprop[0].checked){
    selectElement.selectedIndex = indiceOpition4
    selectElement1.selectedIndex = indiceOpition4
    form.style.display = 'none';
  }
  else if(ftempo[1].checked && fcompri[0].checked){
    selectElement.selectedIndex = indiceOpition4
    selectElement1.selectedIndex = indiceOpition4
    form.style.display = 'none';
  }
  else if(ftempo[0] && fcompri[0] && fprop[1].checked){
    selectElement.selectedIndex = indiceOpition3
    selectElement1.selectedIndex = indiceOpition3
    form.style.display = 'none';
  }
  else if(ftamB[0].checked || ftamB[1].checked){
    selectElement.selectedIndex = indiceOpition1 
    selectElement1.selectedIndex = indiceOpition1
    form.style.display = 'none';
  }}

/*Condicionais para Corpo Estranho - Cascas e área de colagem (Somente aplicável para laminados infudidos ou áreas de colagem)*/
function carregar8(){
  var form = document.getElementById('form8')
  var ftam = document.getElementsByName('tamC')
  var fprop = document.getElementsByName('propagacao10')
  var ftempo = document.getElementsByName('operacao9')
  var fmat = document.getElementsByName('mat')

  if(fmat[1].checked){
    selectElement.selectedIndex = indiceOpition5
    selectElement1.selectedIndex = indiceOpition5
    form.style.display = 'none';}
  else if (fmat[0].checked && fprop[1].checked && ftam[1].checked ){
      selectElement.selectedIndex = indiceOpition4
      selectElement1.selectedIndex = indiceOpition4
      form.style.display = 'none';}
  else if(fmat[0].checked && ftempo[0].checked && fprop[0].checked && ftam[0].checked){
        selectElement.selectedIndex = indiceOpition3
        selectElement1.selectedIndex = indiceOpition3
        form.style.display = 'none';} 
  else if(fmat[0].checked && ftempo[0].checked && fprop[1].checked){
    selectElement.selectedIndex = indiceOpition2
    selectElement1.selectedIndex = indiceOpition2
    form.style.display = 'none';} 
}
/*Condicionais para Trincas Longitudinais - Cascas e Almas*/
function carregar9(){
var form = document.getElementById('form9')
var fcompri = document.getElementsByName('compTl')
var fluz = document.getElementsByName('luz6')

if(fcompri[2].checked && fluz[0].checked){
  selectElement.selectedIndex = indiceOpition6
  selectElement1.selectedIndex = indiceOpition6
  form.style.display = 'none';}
else if(fcompri[1].checked && fluz[1].checked){
    selectElement.selectedIndex = indiceOpition5
    selectElement1.selectedIndex = indiceOpition5
    form.style.display = 'none';}
else if(fcompri[0].checked && fluz[1].checked){
  selectElement.selectedIndex = indiceOpition4
  selectElement1.selectedIndex = indiceOpition4
  form.style.display = 'none';
}}

/*Condicionais para Trincas transversais - Cascas e Almas*/
function carregar10(){
  var form = document.getElementById('form10')
  var fcompri = document.getElementsByName('compTT')
  var fluz = document.getElementsByName('luz7')

if(fcompri[2].checked || fluz[0].checked){
  selectElement.selectedIndex = indiceOpition6
  selectElement1.selectedIndex = indiceOpition6
  form.style.display = 'none';}
else if(fcompri[1].checked && fluz[1].checked){
    selectElement.selectedIndex = indiceOpition5
    selectElement1.selectedIndex = indiceOpition5
    form.style.display = 'none';}
else if(fcompri[0].checked && fluz[1].checked){
  selectElement.selectedIndex = indiceOpition4
  selectElement1.selectedIndex = indiceOpition4
  form.style.display = 'none';}
}

/*Condicionais para Trincas Transversais - linhas de colagem*/
function carregar11(){
  var form = document.getElementById('form11')
  var flarg = document.getElementsByName('largT')
  var fdano = document.getElementsByName('danoAss')

  if(flarg[1].checked ){
    selectElement.selectedIndex = indiceOpition4
    selectElement1.selectedIndex = indiceOpition4
    form.style.display = 'none';}
  else if(flarg[0].checked && fdano[0].checked){
    selectElement.selectedIndex = indiceOpition3
    selectElement1.selectedIndex = indiceOpition3
    form.style.display = 'none';
  } 
}
/*Condicionais para Trincas Longitudinais - linhas de colagem*/
function carregar12(){
  var form = document.getElementById('form12')
 var compriT = document.getElementsByName('largTc')

if(compriT[1].checked){
  selectElement.selectedIndex = indiceOpition6
  selectElement1.selectedIndex = indiceOpition6
  form.style.display = 'none';}
else if(compriT[0].checked){
  selectElement.selectedIndex = indiceOpition4
  selectElement1.selectedIndex = indiceOpition4
 } 
}
/*Condicionais paraDescolamentos  - Danos na alma/T-pultrudado*/

function carregar13(){
  var form = document.getElementById('form13')
  var prop = document.getElementsByName('propagação11')
  var tempo = document.getElementsByName('operacao10')
  var tam = document.getElementsByName('tamT')
  var desloc =  document.getElementsByName('desl') 
 if(desloc[0].checked){
    selectElement.selectedIndex = indiceOpition6
    selectElement1.selectedIndex = indiceOpition6
    form.style.display = 'none';
  } else if(prop[1].checked && tam[1].checked){
    selectElement.selectedIndex = indiceOpition5
    selectElement1.selectedIndex = indiceOpition5
    form.style.display = 'none';} 
  else if(prop[1].checked && tam[0].checked){
    selectElement.selectedIndex = indiceOpition4
    selectElement1.selectedIndex = indiceOpition4
    form.style.display = 'none';}
  else if(prop[0].checked && tempo[0].checked){
    selectElement.selectedIndex = indiceOpition3
    selectElement1.selectedIndex = indiceOpition3
    form.style.display = 'none';} 
  }
/*Condicionais para Trincas - Inserto do BF*/
function carregar14(){
  var form = document.getElementById('form14')
  var comp = document.getElementsByName('tamBF')
  var abert = document.getElementsByName('abert')

  if(abert[0].checked || comp[2].checked){
    selectElement.selectedIndex = indiceOpition6
    selectElement1.selectedIndex = indiceOpition6
    form.style.display = 'none';
  } else if (comp[1].checked){
    selectElement.selectedIndex = indiceOpition5
    selectElement1.selectedIndex = indiceOpition5
    form.style.display = 'none';
  } else if(comp[0].checked){
    selectElement.selectedIndex = indiceOpition4
    selectElement1.selectedIndex = indiceOpition4
    form.style.display = 'none';
  } 

}
/*Condicionais para Linhas de colagem - BA/BF*/
function carregar15(){
  var form = document.getElementById('form15')
  var squezz = document.getElementsByName('squez1')
  var esp = document.getElementsByName('espL')
  var prop = document.getElementsByName('propagação12')


  if(prop[1].checked || esp[3].checked){
    selectElement.selectedIndex = indiceOpition4
    selectElement1.selectedIndex = indiceOpition4
    form.style.display = 'none';}
  else if(prop[0].checked || esp[2].checked){
    selectElement.selectedIndex = indiceOpition3
    selectElement1.selectedIndex = indiceOpition3
    form.style.display = 'none';}
  else if(esp[1].checked){
    selectElement.selectedIndex = indiceOpition2
    selectElement1.selectedIndex = indiceOpition2
    form.style.display = 'none';}
  else if(squezz[0].checked || esp[0].checked){
    selectElement.selectedIndex = indiceOpition1
    selectElement1.selectedIndex = indiceOpition1
    form.style.display = 'none'; 
  }}  
/*Condicionais para Vazio área de colagem ou Squeeze Out Pobre -Almas	*/
function carregar16(){
  var form = document.getElementById('form16')
  var squezz = document.getElementsByName("squez2")
  var prop =document.getElementsByName('propagação13')
  var compfc = document.getElementsByName("compFC")
  var compout = document.getElementsByName("compOut")
  var tec = document.getElementsByName('tec')
  var despre = document.getElementsByName("desprend")

if (despre[1].checked){
  selectElement.selectedIndex = indiceOpition6
  selectElement1.selectedIndex = indiceOpition6
  form.style.display = 'none';}
else if(compfc[1].checked && compout[1].checked){
  selectElement.selectedIndex = indiceOpition5
  selectElement1.selectedIndex = indiceOpition5
  form.style.display = 'none';}
else if(prop[1].checked){
  selectElement.selectedIndex = indiceOpition4
  selectElement1.selectedIndex = indiceOpition4
  form.style.display = 'none';} 
else if(prop[0].checked && tec[1].checked){
  selectElement.selectedIndex = indiceOpition3
  selectElement1.selectedIndex = indiceOpition3
  form.style.display = 'none';}
else if(compfc[0].checked && compout[0].checked){
  selectElement.selectedIndex = indiceOpition2
  selectElement1.selectedIndex = indiceOpition2
  form.style.display = 'none';}
else if(squezz[0].checked){
  selectElement.selectedIndex = indiceOpition1
  selectElement1.selectedIndex = indiceOpition1
  form.style.display = 'none';
} 
}

/*Condicionais para Vazio área de colagem - Pestanas BA e BF - até 2.000 mm da face da raiz	*/
function carregar17(){
  var form = document.getElementById('form17')
  var larg = document.getElementsByName('largPest')
  var comp = document.getElementsByName('compPest')

if(comp[1].checked || larg[2].checked){
  selectElement.selectedIndex = indiceOpition6
  selectElement1.selectedIndex = indiceOpition6
  form.style.display = 'none';}
else if(comp[0].checked && larg[1].checked){
  selectElement.selectedIndex = indiceOpition5
  selectElement1.selectedIndex = indiceOpition5
  form.style.display = 'none';} 
else if(larg[0].checked && comp[0].checked){
  selectElement.selectedIndex = indiceOpition4
  selectElement1.selectedIndex = indiceOpition4
  form.style.display = 'none';
} 
}
/*Condicionais para Materiais soltos em geral - Interno da pá	*/
function carregar18(){
  var form = document.getElementById('form18')
  var mat = document.getElementsByName('MatSol')

  if(mat[0].checked || mat[1].checked){
    selectElement.selectedIndex = indiceOpition4
    selectElement1.selectedIndex = indiceOpition4
    form.style.display = 'none';
  }
}
/*Condicionais para Delaminações - Cascas e Almas	*/
function carregar19(){
  var form = document.getElementById('form19')
  var tam = document.getElementsByName('tamDC')
  var prop = document.getElementsByName('propagação14')



  if(prop[1].checked && tam[1].checked){
    selectElement.selectedIndex = indiceOpition6
    selectElement1.selectedIndex = indiceOpition6
    form.style.display = 'none';
  } else if(tam[2].checked){
    selectElement.selectedIndex = indiceOpition6
    selectElement1.selectedIndex = indiceOpition6
    form.style.display = 'none';}
  else if(prop[0].checked && tam[1].checked){
    selectElement.selectedIndex = indiceOpition5
    selectElement1.selectedIndex = indiceOpition5
    form.style.display = 'none';}
  else if(tam[0].checked){
    selectElement.selectedIndex = indiceOpition4
    selectElement1.selectedIndex = indiceOpition4
    form.style.display = 'none';
  }
   }
/*Condicionais para Delaminações - T-pultrudado	*/
function carregar20(){
  var form = document.getElementById('form20')
  var tempo = document.getElementsByName('operacao11')
  var prop = document.getElementsByName('propagação16')
  var comp = document.getElementsByName('compDC1')
  
  if(prop[2].checked){
    selectElement.selectedIndex = indiceOpition6
    selectElement1.selectedIndex = indiceOpition6
    form.style.display = 'none';}
  else if(prop[1].checked || comp[1].checked){
      selectElement.selectedIndex = indiceOpition5
      selectElement1.selectedIndex = indiceOpition5
      form.style.display = 'none';} 
  else if(comp[0].checked){
        selectElement.selectedIndex = indiceOpition4
        selectElement1.selectedIndex = indiceOpition4
        form.style.display = 'none';} 
  else if(prop[0].checked && tempo[0].checked){
    selectElement.selectedIndex = indiceOpition3
    selectElement1.selectedIndex = indiceOpition3
    form.style.display = 'none';
  } 
}

/*Condicionais para LPS/LCTU - Root Chamber	*/
function carregar21(){
  var form = document.getElementById('form21')
  var  caboDesf = document.getElementsByName('caboDesf')
  var porConec = document.getElementsByName('porConec')
  var caboDan = document.getElementsByName('caboDan')

if(caboDan[0].checked){
  selectElement.selectedIndex = indiceOpition5
  selectElement1.selectedIndex = indiceOpition5
  form.style.display = 'none';
}else if(porConec[0].checked){
  selectElement.selectedIndex = indiceOpition4
  selectElement1.selectedIndex = indiceOpition4
  form.style.display = 'none';
}else if(caboDesf[0].checked){
  selectElement.selectedIndex = indiceOpition3
  selectElement1.selectedIndex = indiceOpition3
  form.style.display = 'none';
}
}
/*Condicionais para Danos ocasionados por raios/queimados/Flashover	*/
function carregar22(){
  var form = document.getElementById('form22')
  var danoR = document.getElementsByName("danoR")
  var compRaio = document.getElementsByName("compRaio" )
  var danoArea = document.getElementsByName('danoArea')
  var distanC = document.getElementsByName('distanC')
  
  if(danoR[0].checked){
    selectElement.selectedIndex = indiceOpition6
    selectElement1.selectedIndex = indiceOpition
    form.style.display = 'none';
  } else if( compRaio[2].checked && danoR[1].checked){
    selectElement.selectedIndex = indiceOpition6
    selectElement1.selectedIndex = indiceOpition6
    form.style.display = 'none';
  } else if(danoArea[1].checked && distanC[1].checked){
    selectElement.selectedIndex = indiceOpition6
    selectElement1.selectedIndex = indiceOpition6
    form.style.display = 'none';
  } else if(danoR[1].checked && compRaio[1].checked){
    selectElement.selectedIndex = indiceOpition5
    selectElement1.selectedIndex = indiceOpition5
    form.style.display = 'none';
  } else if(danoArea[0].checked && distanC[0].checked && compRaio[0].checked && danoR[1].checked){
    selectElement.selectedIndex = indiceOpition4
    selectElement1.selectedIndex = indiceOpition4
    form.style.display = 'none';
  }else if(danoArea[0].checked && distanC[0].checked){
    selectElement.selectedIndex = indiceOpition5
    selectElement1.selectedIndex = indiceOpition5
    form.style.display = 'none';
}}




/*Condicionais para Camada rompida devido lixamento ou remoção de nylon	*/
function carregar23(){
  var form = document.getElementById('form23')
  var tempo = document.getElementsByName('operacao12')
  var prop = document.getElementsByName('propagação17')
 if(tempo[1].checked && prop[0].checked){
  selectElement.selectedIndex = indiceOpition4
  selectElement1.selectedIndex = indiceOpition4
  form.style.display = 'none';
 } else if(tempo[0].checked && prop[0].checked){
  selectElement.selectedIndex = indiceOpition2
  selectElement1.selectedIndex = indiceOpition2
  form.style.display = 'none';
 }
}
/*Condicionais para Furos no laminado - Casca*/	
function carregar24(){
  var form = document.getElementById('form24')
  var tempo = document.getElementsByName('operacao13')
  var prop = document.getElementsByName('propagação18')
 if(tempo[1].checked && prop[0].checked){
  selectElement.selectedIndex = indiceOpition4
  selectElement1.selectedIndex = indiceOpition4
  form.style.display = 'none';
 } else if(tempo[0].checked && prop[0].checked){
  selectElement.selectedIndex = indiceOpition3
  selectElement1.selectedIndex = indiceOpition3
  form.style.display = 'none';
 }
}


/*Condicionais para Furos no laminado - Inserto do BF	*/
function carregar25(){
  var form = document.getElementById('form25')
  var tempo = document.getElementsByName('operacao14')
  var prop = document.getElementsByName('propagação19')
 if(prop[1].checked){
  selectElement.selectedIndex = indiceOpition4
  selectElement1.selectedIndex = indiceOpition4
  form.style.display = 'none';
 } else if(tempo[0].checked && prop[0].checked){
  selectElement.selectedIndex = indiceOpition3
  selectElement1.selectedIndex = indiceOpition3
  form.style.display = 'none';
 }
}
/*Condicionais para Ausência de camada (Preform) - LE/TE - Casca*/
function carregar26(){
  var form = document.getElementById('form26')
  var fprop = document.getElementsByName('propagacao1')
  var ftempo = document.getElementsByName('operacao1')
    if(ftempo[0].checked && fprop[1]){ 
      selectElement.selectedIndex = indiceOpition3
      selectElement1.selectedIndex = indiceOpition3
      form.style.display = 'none';
    }
  }
/*Condicionais para Camada contaminada	*/
function carregar27(){
  var form = document.getElementById('form27')
  var fprop = document.getElementsByName('propagacao2')
  var ftempo = document.getElementsByName('operacao2')
  if(ftempo[0].checked && fprop[0]){
    selectElement.selectedIndex = indiceOpition4
    selectElement1.selectedIndex = indiceOpition4
    form.style.display = 'none';
  }
  else if(ftempo[0].checked && fprop[1]){
      selectElement.selectedIndex = indiceOpition3
      selectElement1.selectedIndex = indiceOpition3
      form.style.display = 'none';}
  }


 

    