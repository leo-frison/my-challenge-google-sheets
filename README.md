# Challenge torneos tenis

En [esta sheet](https://docs.google.com/spreadsheets/d/1GZu4w8_NiJS8I1--C-N5O2dPoj_Bv-ojekMRDS2ToMQ/edit#gid=1490274874) vas a encontrar todos los torneos de tenis que se jugaron desde 1877.

Usando la [api de google sheets](https://developers.google.com/sheets/api/) te pedimos que nos digas de cada [Grand Slam](https://es.wikipedia.org/wiki/Grand_Slam_(tenis)), quién es el jugador que mas veces lo ganó y cuando haces un click sobre el jugador te diga cuando fue la ultima vez que lo ganó.
El diseño te lo dejamos para vos :)
----------------------------------------RESPUESTA--------------------------------------------------
No pude lograr determinar al jugador que mas veces gano el Grand Slam haciendo uso de google sheets o js . Mis practicas con datasets han sido en python o MySQL . Al usar Mongodb o hacer consultas a Apis solo me enfoque en metodos basicos como get , post , put , delete  o find .. pero crear tablas o forjar nuevos datos a partir de otros para hacer machine learning con node js me descoloco y no encontre un tutorial claro al respecto .
Otro inconveniente de tuve fue con las normas de seguridad de Google que son muy altas y me limito un poco a la hora de experimentar (aun asi viendolo desde el punto de vista de la seguridad es entendible confiar en google).
Y finalmente el ultimo inconveniente fue no estar del todo seguro de haber entendido la dinamica del Gran Slam porque vi que son 4 campeonatos que al ganar uno de ellos seria como ganar un gran slam , asi que si en un año un tenista gana los 4 deberia contar la cantidad de repetidos de ese tenista en la lista de winners . Ademas de no estar seguro si tambien contar si aparece en doubles . Mi idea fue buscar la forma de contabilizar el id de cada tenista e ir armando otra tabla donde almacene el nombre y la cantidad de veces que aparecio su id , diciendome asi cuantos campeonatos gano en total . Luego finalmente hacer un ordenamiento .. Todo esto me es posible utilizando sentencias SQL o python o R . Seguramente haya muchas maneras pero es lo que eh usado o intentado hasta el momento.        

### Consignas y Tips

* Resolvelo desarrollando una API REST en Node Js.
  - Si este punto creo haberlo cumplido porque logre comunicarme por la api y usarla para mostrar datos

* La resolución debe ser un fork de este repo (Se evalúa el uso de GIT).
  - Si esto hice , como soy un desarrollador solitario que quisiera dejar de serlo pronto , nunca tuve muchos 
    inconvenientes con git y creo saberlo usar bien , aunque como dije ...no soy alguien que haya hecho muchos pull request en repositorios agenos ;) .

* El frontend nos gustaría verlo en React (o cualquier framework similar).
  - Este punto no llegue a hacerlo , preferi ser minimalista con la parte de frontend porque la parte de 
    back-end me resulto desafiante. Ademas pense que ya mostre algunos proyectos de front con react y podria mostrar muchos mas a futuro . Por esto mismo decidi utilizar Pug y meter todo el maquetado y los estilos en este tipo de archivos , obviamente esto hace que la aplicacion no sea responsiva y el diseño .... bue ..
    no me destaco por ser buen diseñador en cuanto a colores e imagenes se trate pero tengo creo q algunas nociones de un buen maquetado .... ( Suelo hacer uso y abuso de bootstrap XD ) 

* No uses el nombre del Grand Slam como indentificador. Si le prestas atención al excel hay otra forma :).
  - Este punto no lo capte ... basicamente no entendi. Aun asi no use ningun identificador q use el nombre 
    GrandSlam,gs,slamgrand ,etc

* Implementá un sistema de Logs que registre en base de datos tres tipos de mensajes (Error, Warning y Success) para la respuesta de nuestra API y de las peticiones que le realicemos al sheet que utilizamos.
  - Mmmmmm ... Este punto tampoco lo entendi ... y no me resulto interesante de implementar
    (Probablemente porque no lo entendi XD) 

### BONUS

* Desarrollá un script que permita ejecutar la aplicación (Back y Front) como si fuera un deploy y dar instrucciones de su ejecución.
  -En este caso directamente hice un deploy de la misma utilizando Heroku y puedo tener un seguimiento del repo utilizando Heroku-cli que tiene un mecanismo practicamente igual a github. Puedo pullear , commitear y pushear cambios como en git con la diferencia que los cambios se los aplica al deploy que esta hosteado en un dominio de produccion. 
          -------------------------------- >  link : https://gs-atp-1877-2017.herokuapp.com/

### El extra mile

Si se te ocurre alguna cosa piola para agregarle al challenge y queres hacerlo y mostrarnos nos ayudarías a mejorar este ejercicio.
* Respondo esto por mail