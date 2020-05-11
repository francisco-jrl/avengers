var QuienesSomos = Vue.component('QuienesSomos', {
    template: 
    `
        <div class="quienes_somos">
            <h1 class="title-h1">¿Quienes Somos?</h1>
            
            <p class="parrafo">
                Los Vengadores es una iniciativa creada por 
                <strong>S.H.I.E.L.D.</strong> y dirigida por 
                Nick Fury, encargado de reclutar a un grupo de 
                personas con habilidades especiales, los cuales 
                lucharan contra las fuerzas que ellos no pueden controlar.
            </p>

            </br>

            <h1 class="title-h1">Comienzo</h1>

            <p class="parrafo">
            Cuando el dios asgardiano Loki busca venganza contra su hermano 
            Thor, sus maquinaciones involuntariamente llevan al adolescente 
            Rick Jones a recoger Ant-Man, Avispa y Iron Man para ayudar a Thor y 
            Hulk, a quien Loki usó como peón. Después de que el grupo derrotó a Loki, 
            Ant-Man declaró que los cinco trabajaron bien juntos y sugirieron que formaran un equipo; 
            Avispa llamó al grupo, Vengadores.
            </p>

            <h1 class="title-h1" style="text-align: justify; border-bottom: 1px solid #000000;">
                Integrantes
            </h1>
            
            <h1 class="title-h1" style="text-align: justify; font-size: 2rem;">
                Anthony "Tony" Stark" - Iron Man
            </h1>
            <p class="parrafo">
                El genio, multimillonario inventor, industrial y CEO de Stark Industries, 
                Tony Stark fue herido de muerte en una zona de guerra en Afganistán poco antes de ser 
                secuestrado por terroristas. Stark construyó un traje blindado para escapar del cautiverio, 
                que tuvo una doble función como un dispositivo para mantener el latido de su corazón 
                manteniéndolo vivo. Una vez que regresó a Estados Unidos, Stark se reinventó a sí mismo como 
                el superhéroe revestido con armadura Iron Man.
                En los tiempos en que Tony Stark estaba indispuesto, 
                otros hombres han continuado con el legado de Iron Man. Dos veces lo hizo el mejor amigo 
                de Tony, Jim Rhodes, y más recientemente, el deber cayó en manos del villano 
                reformado Victor von Doom. 
            </p>

            <div style="margin: auto; width: 100%; display: flex; justify-content: center;">
                <img src="img/iron_man.png" class="imagenes" alt="Iron Man">
            </div>

            <h1 class="title-h1" style="text-align: justify; font-size: 2rem;">
            Peter Parker - Spiderman
            </h1>
            <p class="parrafo">
                Durante una visita que el brillante estudiante hacía a la Facultad 
                de Ciencias Exactas y Naturales de la UBA, fue picado por una araña que había sido
                expuesta a los experimentos radiactivos que allí se llevaban a cabo. Esto provocó que
                paulatinamente Parker adquiriera poderes sobrehumanos: la velocidad, fuerza y agilidad 
                proporcionales a las de una araña de su tamaño; un "sentido arácnido" que le avisa de peligros 
                y la habilidad de adherirse y desplazarse por cualquier muro o pared, independientemente de su 
                horizontalidad. Se las ingenia además para construir un mecanismo que le permite lanzar un viscoso 
                producto químico a manera de telaraña.
            </p>

            <div style="margin: auto; width: 100%; display: flex; justify-content: center;">
                <img src="img/spiderman.jpg" class="imagenes" alt="Spiderman">
            </div>

            <h1 class="title-h1" style="text-align: justify; font-size: 2rem;">
                Doctor Stephen Strange
            </h1>
            <p class="parrafo">
                El Doctor Stephen Strange era un medico que solo le importaba el 
                dinero hasta que un accidente hirió gravemente sus manos. El con lo 
                poco que tenia busco ayuda de un anciano quien lo a curar sus heridas y convertirse 
                en el hechicero en uno de los hechiceros más poderosos de la Tierra.
            </p>

            <div style="margin: auto; width: 100%; display: flex; justify-content: center;">
                <img src="img/doctor.jpg" class="imagenes" alt="Doctor Strange">
            </div>

            <h1 class="title-h1" style="text-align: justify; font-size: 2rem;">
                Robert Bruce Banner - Hulk
            </h1>
            <p class="parrafo">
                Robert Bruce Banner (hulk) era un científico que trabajaba en una bomba de radiación 
                Gamma para el ejercito estadounidense. Entonces, Bruce se dió cuenta de que un joven 
                llamado Rick Jones había entrado al campo de pruebas. Banner salió corriendo para salvar al 
                muchacho y heroicamente lo empujó a una zanja de protección que le salvó la vida a Rick, pero 
                Bruce quedó expuesto a cantidades extremas de radiación Gamma que alteraron la estructura de su ADN.
                Cuando Bruce se enojaba, éste se transformaba en una criatura de color verde (a veces gris) con poderes 
                increíbles que aumentaban su capacidad fisica al que le apodaron Hulk. Su interés amoroso, Betty Ross, 
                parecía ser la única persona que podía volverlo a la normalidad, pero ella era la hija del General Thunderbolt 
                Ross, quien busca la manera de detener a Hulk, con la esperanza de entregarlo a la justicia o destruirlo 
                por completo. Debido a eso, Bruce siempre busca la cura para su transformación y mantener la calma lo más 
                que pueda. Es una de las criaturas más poderosas que existe, y la más fuerte.</br>
                El nombre de The Hulk al traducirlo significa La Masa que al enfurecerse se vuelve mas 
                fuerte de lo normal es verde y muy musculoso pude levantar entre 70 y 100  toneladas
            </p>

            <div style="margin: auto; width: 100%; display: flex; justify-content: center;">
                <img src="img/hulk.jpg" class="imagenes" alt="Hulk">
            </div>

            <h1 class="title-h1" style="text-align: justify; font-size: 2rem;">
                Steven Rogers - Capitán America 
            </h1>
            <p class="parrafo">
            Rogers aceptó y fue llevado a un laboratorio secreto en Washington, D.C., donde conoció al Doctor 
            Abraham Erskine (Alias profesor Joseph Reinstein), el creador del suero super-soldado.
            </br>
            Después de semanas de pruebas, a Rogers finalmente le administraron el suero del super-soldado. Administrándole 
            por vía intravenosa parte del compuesto y otra parte por vía oral, Rogers fue luego expuesto a Vita-rayos, 
            una exótica combinación especial de longitudes de ondas de radiación diseñadas para acelerar y estabilizar el 
            efecto del suero en su cuerpo. Steve Rogers salió de la cámara de vita-rayos con un cuerpo humano perfecto. Un 
            espía Nazi, quien observaba el experimento, asesinó a escasos minutos al Dr. Erskine después de concluir el 
            experimento. El Dr. Erskine murió sin escribir completamente la fórmula del Super-Soldado en un papel, dejando a 
            Rogers como el único beneficiario de su genio.
            </p>

            <div style="margin: auto; width: 100%; display: flex; justify-content: center;">
                <img src="img/capi.jpg" class="imagenes" alt="Capitan America">
            </div>
        </div>
    `
});