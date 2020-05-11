var Villanos = Vue.component('Villanos', {
    template:
        `
    <div class="contenedor-vengadores">
        <div class="title-vengadores">
            <h1>Villanos</h1>
            <img src="img/thanos-logo-png-7.png" class="av" alt="Villanos Marvel">
        </div>

        <a href="/crear_villano"></a>
        <router-link class="nav-link" to="/crear_villano"> <button class="btn-tabla">Agregar Villano</button></router-link>

        <table class="tabla-villanos">
            <thead>
                <tr>
                    <th class="th_1">Nombre</th>
                    <th>Superpoder</th>
                    <th>Origen</th>
                    <th>Vencido por</th>
                    <th class="th_2">Acciones</th>
                </tr>
            </thead>

            <tbody>
                <tr v-for="(item, index) in villanos">
                    <td>{{ item.nombre }}</td>
                    <td>{{ item.superpoder }}</td>
                    <td>{{ item.origen }}</td>
                    <td>{{ item.derrotado_por }}</td>
                    <td><a href="/cambiar_villano"></a>
                        <router-link class="nav-link":to="{ name: 'cambiar_villano', params: { id:index }}"> 
                        <button class="btn-editar">Editar</button> </router-link>
                        <button v-on:click="eliminar_villano(index)" class="btn-eliminar" style="margin-top: 4px">Eliminar</button>
                    </td>
                </tr>
            </tbody>
        </table>
        <a href="/crear_villano"></a>
        <router-link class="nav-link" to="/crear_villano"> <button class="btn-tabla">Agregar Villano</button></router-link>
    </div>
    `,
    data: function () {
        return {
            villanos: [],
        }
    },

    mounted() {
        let self = this;
        fetch('https://api-avengers.firebaseio.com/villanos.json')
            .then(r => r.json())
            .then(json => {
                self.villanos = json;
            });
    },

    methods: { //Inician los Métodos
        eliminar_villano: function (id){
            let self = this;
            axios.delete('https://api-avengers.firebaseio.com/villanos/'+ id + '.json')
            .then((response) =>{
                alert("Villano fue eliminado");
                location.reload();
            }).catch((err) =>{
                self.loading = false; console.log(err);
            });
        } //fin metodo eliminar alumno
    }

});