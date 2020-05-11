var CambiarVengador = Vue.component('CambiarVengador', {
    data: function () {
        return {
            errores: [],
            nombres: null,
            apellidos: null,
            nombre_superheroe: null,
            superpoder: null,
            trabajo_actual: null,
            telefono: null,
            email: null
        }
    },

    //Inicio de Template
    template:
        `
    <div class="formulario">

    <div v-if="errores.length">
        <b style="font-family: 'Questrial', sans-serif; font-size: 1.8rem;">Por favor, corrija el(los) siguiente(s) error(es): </b>
        <ul class="errores">
            <li v-for="error in errores" style="color: red;">{{ error }}</li>
        </ul>
    </div>

    <div class="form-div">
        <label for="nombres" class="label-form">Nombres</label></br>
        <input id="nombres" v-model="nombres" type="text" class="input-form">
    </div>

    <div class="form-div">
        <label for="apellidos" class="label-form">Apellidos</label></br>
        <input id="apellidos" v-model="apellidos" type="text" class="input-form">
    </div>

    <div class="form-div">
        <label for="nombre_superheroe" class="label-form">Nombres de Superheroe</label></br>
        <input id="nombre_superheroe" v-model="nombre_superheroe" type="text" class="input-form">
    </div>

    <div class="form-div">
        <label for="superpoder" class="label-form">Super Poder</label></br>
        <input id="superpoder" v-model="superpoder" type="text" class="input-form">
    </div>

    <div class="form-div">
        <label for="trabajo_actual" class="label-form">Trabajo Actual</label></br>
        <input id="trabajo_actual" v-model="trabajo_actual" type="text" class="input-form">
    </div>

    <div class="form-div">
        <label for="telefono" class="label-form">Telefono</label></br>
        <input id="telefono" v-model="telefono" type="text" class="input-form">
    </div>

    <div class="form-div">
        <label for="email" class="label-form">Correo Electronico</label></br>
        <input id="email" v-model="email" type="text" class="input-form">
    </div>

    <div>
        <button v-on:click="validarFormulario(), cambiar_vengador(nombres, apellidos, nombre_superheroe, superpoder, trabajo_actual, telefono, email)" class="btn-form">Editar Vengador </button>
    </div>

    </div>
    `,//Fin de Template

    mounted() {
        let self = this;
        fetch('https://api-avengers.firebaseio.com/avengers/'+ this.$route.params.id + '.json')
        .then(r => r.json())
        .then(json => {
            self.nombres = json.nombres,
            self.apellidos = json.apellidos,
            self.nombre_superheroe = json.nombre_superheroe,
            self.superpoder = json.superpoder,
            self.trabajo_actual = json.trabajo_actual,
            self.telefono = json.telefono,
            self.email = json.email
        });
    },


    methods: { //Inician los Métodos
        validarFormulario: function (e) { //inician la función que valida el formulario
            this.errores = [];

            if (!this.nombres) {
                this.errores.push("Los nombres es obligatorio.");
            }

            if (!this.apellidos) {
                this.errores.push("Los apellidos es obligatorio.");
            }

            if (!this.nombre_superheroe) {
                this.errores.push("Nombre de Superheroe es obligatorio.");
            }

            if (!this.superpoder) {
                this.errores.push("Superpoder es obligatorio.");
            }

            if (!this.trabajo_actual) {
                this.errores.push("Trabajo Actual es obligatorio.");
            }

            if (!this.telefono) {
                this.errores.push("Telefono es obligatorio.");
            }

            if (!this.email) {
                this.errores.push("El correo electronico es obligatorio.");
            }

            if (!this.errores.length) {
                return true;
            }
        },

        cambiar_vengador: function (nombres, apellidos, nombre_superheroe,  superpoder, trabajo_actual, telefono, email) {
            if (!(Array.isArray(this.errores) && this.errores.length)) {
                let self = this;
                axios.put('https://api-avengers.firebaseio.com/avengers/'+ this.$route.params.id + '.json', {
                    nombres: nombres,
                    apellidos: apellidos,
                    nombre_superheroe: nombre_superheroe,
                    superpoder: superpoder,
                    trabajo_actual: trabajo_actual,
                    telefono: telefono,
                    email: email
                })
                    .then((response) => {
                        alert("Vengador modificado correctamente");
                        router.push({ name: "Vengadores" });
                    }
                    ).catch((err) => {
                        self.loading = false;
                        console.log(err);
                    });
            }
        } // fin metodo cambiar_alumno
    } // Terminan los Métodos

});