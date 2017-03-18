







'quit'


*----------------------------------------------------------------------
*
*  verifica se o arquivo esta aberto 
*
*----------------------------------------------------------------------
function verifica()
'q files'
var=sublin(result,1)
token=subwrd(var,1)
if (token = "No") 
status=-1
else 
status=1
endif 
return status



function baixagfs(config,model)
if (model = "1p0") 
say "modleo gfs 1 grau"
'sdfopen http://nomads.ncep.noaa.gov:9090/dods/gfs_1p00/gfs'config'/gfs_1p00_00z'
'set lon 280 330'
'set lat -40 10'
t=1
k=1
status=-1
status=verifica()
if (status = 1)
'set fwrite 'config'_1P0.bin'
'set gxout fwrite'
while (t<=33)
'set t 't
if (t =1 )
'd pratesfc(t=2)*12*3600'
else
'd pratesfc(t='t')*12*3600+pratesfc(t='t+1')*12*3600'
endif
t=t+2
k=k+1
endwhile
'disable fwrite'
'set gxout shaded'
say k' 't
'close 1'
endif 
endif




if (model = "0p25") 
say "modleo gfs 0.25 de grau"
'sdfopen http://nomads.ncep.noaa.gov:9090/dods/gfs_0p25/gfs'config'/gfs_0p25_00z'
'set lon 280 330'
'set lat -40 10'
t=1
k=1
status=-1
status=verifica()
if (status = 1)
'set fwrite 'config'_0P25.bin'
'set gxout fwrite'
while (t<=81)
'set t 't

if (t=1) 
'd sum(pratesfc*3*3600,t=2,t=8)' 
else
'd sum(pratesfc*3*3600,t='t',t='t+7')' 
endif 

t=t+8
k=k+1
'q time'
say t' 'k' 'result
endwhile
'disable fwrite'
'set gxout shaded'
say k' 't
'close 1'
endif 
endif






if (model = "0p25h") 
say "modleo gfs 0.25 de grau horario"
***http://nomads.ncep.noaa.gov:9090/dods/gfs_0p25_1hr/gfs20170209/gfs_0p25_1hr_00z
'sdfopen http://nomads.ncep.noaa.gov:9090/dods/gfs_0p25_1hr/gfs'config'/gfs_0p25_1hr_00z'
'set lon 280 330'
'set lat -40 10'
t=1
k=1
status=-1
status=verifica()
if (status = 1)
'set fwrite 'config'_0P25h.bin'
'set gxout fwrite'
while (t<=121)
'set t 't

if (t=1) 
'd sum(pratesfc*3*3600,t=2,t=24)' 
else
'd sum(pratesfc*3*3600,t='t',t='t+23')' 
endif 

t=t+24
k=k+1
'q time'
say t' 'k' 'result
endwhile
'disable fwrite'
'set gxout shaded'
say k' 't
'close 1'
endif 
endif 



if (model = "0p50") 
say "modleo gfs meio grau"
'sdfopen http://nomads.ncep.noaa.gov:9090/dods/gfs_0p50/gfs'config'/gfs_0p50_00z'
'set lon 280 330'
'set lat -40 10'
t=1
k=1
status=-1
status=verifica()
if (status = 1)
'set fwrite 'config'_0P50.bin'
'set gxout fwrite'
while (t<=81)
'set t 't
if (t =1)
'd sum(pratesfc*3*3600,t=2,t=8)' 
else
'd sum(pratesfc*3*3600,t='t',t='t+7')' 
endif 
t=t+8
k=k+1
'q time'
say t' 'k' 'result
endwhile
'disable fwrite'
'set gxout shaded'
say k' 't
'close 1'
endif 
endif


return
