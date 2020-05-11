var Gemas = Vue.component('Gemas', {
    template:
        `
    <div class="contenedor-vengadores">
        <div class="title-vengadores_2">
            <h1>Gemas del infinito</h1>
            <img src="img/guantelete.png" class="av" alt="gemas del infinito">
        </div>

        <a href="/crear_gema"></a>
        <router-link class="nav-link" to="/crear_gema"> <button class="btn-tabla">Agregar Gema</button></router-link>

        <table class="tabla-gemas">
            <thead>
                <tr>
                    <th class="th_1">Nombre</th>
                    <th>Poder</th>
                    <th>Portador</th>
                    <th>Ubicacón</th>
                    <th class="th_2">Acciónes</th>
                </tr>
            </thead>

            <tbody>
                <tr v-for="(item, index) in gemas">
                    <td>{{ item.nombre }}</td>
                    <td>{{ item.poder }}</td>
                    <td>{{ item.portador }}</td>
                    <td>{{ item.ubicacion }}</td>
                    <td><a href="/cambiar_vengador"></a>
                        <router-link class="nav-link":to="{ name: 'cambiar_gema', params: { id:index }}"> 
                        <button class="btn-editar">Editar</button> </router-link>
                        <button v-on:click="eliminar_gema(index)" class="btn-eliminar" style="margin-top: 4px">Eliminar</button>
                    </td>
                </tr>
            </tbody>
        </table>
        <a href="/crear_gema"></a>
        <router-link class="nav-link" to="/crear_gema"> <button class="btn-tabla">Agregar Gema</button></router-link>
    </div>
    `,

    data: function () {
        return {
            gemas: [],
        }
    },

    mounted() {
        let self = this;
        fetch('https://api-avengers.firebaseio.com/gemas.json')
            .then(r => r.json())
            .then(json => {
                self.gemas = json;
            });
    },

    methods: { //Inician los Métodos
        eliminar_gema: function (id){
            let self = this;
            axios.delete('https://api-avengers.firebaseio.com/gemas/'+ id + '.json')
            .then((response) =>{
                alert("Gema fue eliminado");
                location.reload();
            }).catch((err) =>{
                self.loading = false; console.log(err);
            });
        } //fin metodo eliminar alumno
    }

});