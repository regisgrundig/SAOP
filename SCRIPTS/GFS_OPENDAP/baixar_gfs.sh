#!/bin/bash
#----------------------------------------------------------------------------------------------
#
#   SISTEMA DE PREVISAO DO TEMPO BASEADO NO GFS E OUTROS MODELOS FREE ACCESS
#   E OBTEM CHUVA OBSERVADA EM GRADE
#   
#  função: baixar os dados do modelo GFS opendap e criar arquivo local de chuva 
#  BY rEGIS (REGINALDO VENTURA DE SA)
#   ------------------------
#
#  
#
#---------------------------------------------------------------------------------------------


#
# define local de trabalhos
# onde tudo acontece
#
cd ../../WORKDISK            >>./LOG_BAIXAR_GFS.PRN 2>&1 
# 
# data de hoje
#
if [ "$1" =  "" ];then 
datadehoje=`date +"%Y%m%d"`
else
datadehoje=$1
fi
echo " -------- "$datadehoje"-------------------"


#
# baixa os dados de hoje
#
file1p0=$datadehoje"_1P0.bin"
file0p50=$datadehoje"_0P50.bin"
file0p25=$datadehoje"_0P25.bin"
file0p25h=$datadehoje"_0P25h.bin"


echo " ----------------- BAIXANDO DADOS GFS -------------"
#
#  verifica se já foi baixado o dado
#
echo "* script autogerado em "`date` >script.gs

if [ -e "../../CICC/OPENDAP/1P0/$file1p0" ];then
echo "1P0 ---> ja foi baixado"
else
echo "pi=baixagfs($datadehoje,1p0)" >>   script.gs
fi 
if [ -e "../../CICC/OPENDAP/0P50/$file0p50" ];then
echo "0P50 ---> ja foi baixado"
else
echo "pi=baixagfs($datadehoje,0p50)" >>   script.gs
fi 
if [ -e "../../CICC/OPENDAP/0P25/$file0p25" ];then
echo "0P25 ---> ja foi baixado"
else
echo "pi=baixagfs($datadehoje,0p25)" >>   script.gs
fi 
if [ -e "../../CICC/OPENDAP/0P25h/$file0p25h" ];then
echo "0P25 ---> ja foi baixado"
else
echo "pi=baixagfs($datadehoje,0p25h)" >>   script.gs
fi 
cat ../SCRIPTS/baixar_gfs.gs >>script.gs
echo "BAIXANDO......."
grads -lbc "script.gs"   >>./LOG.prn 2>&1   
#
# coloca os arquivos baixados no lugar certo 
#
mkdir ../CICC                              >>./LOG.prn 2>&1 
mkdir  ../CICC/OPENDAP                            >>./LOG.prn 2>&1
mkdir  ../CICC/OPENDAP/1P0                            >>./LOG.prn 2>&1
mkdir  ../CICC/OPENDAP/0P50                            >>./LOG.prn 2>&1
mkdir  ../CICC/OPENDAP/0P25                            >>./LOG.prn 2>&1
mkdir  ../CICC/OPENDAP/0P25h                            >>./LOG.prn 2>&1

#
# copia 
#
mv $datadehoje"_1P0.bin" ../CICC/OPENDAP/1P0/                            >>./LOG.prn 2>&1
mv $datadehoje"_0P25.bin" ../CICC/OPENDAP/0P25/                            >>./LOG.prn 2>&1
mv $datadehoje"_0P50.bin" ../CICC/OPENDAP/0P50/                            >>./LOG.prn 2>&1
mv $datadehoje"_0P25h.bin" ../CICC/OPENDAP/0P25h/                            >>./LOG.prn 2>&1




