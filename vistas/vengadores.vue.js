var Vengadores = Vue.component('Vengadores', {
    template: 
    `
    <div class="contenedor-vengadores">
        <div class="title-vengadores">
            <h1>VENGADORES</h1>
            <img src="img/vengadores-logo.png" class="av" alt="Vengadores">
        </div>
        <a href="/crear_vengador"></a>
        <router-link class="nav-link" to="/crear_vengador"> <button class="btn-tabla">Agregar Vengador</button></router-link>

        <table class="tabla-vengadores">
            <thead>
                <tr>
                    <th class="th_1">Nombres</th>
                    <th>Apellidos</th>
                    <th>Nombre de Superheroe</th>
                    <th>Superpoder</th>
                    <th>Trabajo Actual</th>
                    <th>Teléfono</th>
                    <th>Correo Electronico</th>
                    <th class="th_2">Acciónes</th>
                </tr>
            </thead>

            <tbody>
                <tr v-for="(item, index) in avengers">
                    <td>{{ item.nombres }}</td>
                    <td>{{ item.apellidos }}</td>
                    <td>{{ item.nombre_superheroe }}</td>
                    <td>{{item.superpoder}}</td>
                    <td>{{ item.trabajo_actual }}</td>
                    <td>{{ item.telefono }}</td>
                    <td>{{ item.email }}</td>
                    <td><a href="/cambiar_vengador"></a>
                        <router-link class="nav-link":to="{ name: 'cambiar_vengador', params: { id:index }}"> 
                        <button class="btn-editar">Editar</button> </router-link>
                        <button v-on:click="eliminar_vengador(index)" class="btn-eliminar" style="margin-top: 4px">Eliminar</button>
                    </td>
                </tr>
            </tbody>
        </table>

        <a href="/crear_vengador"></a>
        <router-link class="nav-link" to="/crear_vengador"> <button class="btn-tabla">Agregar Vengador</button></router-link>
    </div>
    `,

    data: function () {
        return {
            avengers: [],
        }
    },

    mounted() {
        let self = this;
        fetch('https://api-avengers.firebaseio.com/avengers.json')
            .then(r => r.json())
            .then(json => {
                self.avengers = json;
            });
    },

    methods: { //Inician los Métodos
        eliminar_vengador: function (id){
            let self = this;
            axios.delete('https://api-avengers.firebaseio.com/avengers/'+ id + '.json')
            .then((response) =>{
                alert("Vengador fue eliminado");
                location.reload();
            }).catch((err) =>{
                self.loading = false; console.log(err);
            });
        } //fin metodo eliminar alumno
    }
});