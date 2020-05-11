var CambiarGema = Vue.component('CambiarGema', {
    data: function () {
        return {
            errores: [],
            nombre: null,
            poder: null,
            portador: null,
            ubicacion: null
        }
    },

    //Inicio de Template
    template:
        `
    <div class="formulario_2">

    <div v-if="errores.length">
        <b style="font-family: 'Questrial', sans-serif; font-size: 1.8rem;">Por favor, corrija el(los) siguiente(s) error(es): </b>
        <ul class="errores">
            <li v-for="error in errores" style="color: red;">{{ error }}</li>
        </ul>
    </div>

    <div class="form-div_2">
        <label for="nombre" class="label-form">Nombre</label></br>
        <input id="nombre" v-model="nombre" type="text" class="input-form">
    </div>

    <div class="form-div_2">
        <label for="poder" class="label-form">Poder</label></br>
        <input id="poder" v-model="poder" type="text" class="input-form">
    </div>

    <div class="form-div_2">
        <label for="portador" class="label-form">Portador</label></br>
        <input id="portador" v-model="portador" type="text" class="input-form">
    </div>

    <div class="form-div_2">
        <label for="ubicacion" class="label-form">Ubicación</label></br>
        <input id="ubicacion" v-model="ubicacion" type="text" class="input-form">
    </div>

    <div>
        <button v-on:click="validarFormulario(), cambiar_gema(nombre, poder, portador, ubicacion)" class="btn-form">Editar Gema</button>
    </div>

    </div>
    `,//Fin de Template

    mounted() {
        let self = this;
        fetch('https://api-avengers.firebaseio.com/gemas/'+ this.$route.params.id + '.json')
        .then(r => r.json())
        .then(json => {
            self.nombre = json.nombre,
            self.poder = json.poder,
            self.portador = json.portador,
            self.ubicacion = json.ubicacion
        });
    },


    methods: { //Inician los Métodos
        validarFormulario: function (e) { //inician la función que valida el formulario
            this.errores = [];

            if (!this.nombre) {
                this.errores.push("El nombre de la gema es obligatorio.");
            }

            if (!this.poder) {
                this.errores.push("El poder de la gema es obligatorio.");
            }

            if (!this.portador) {
                this.errores.push("El nombre del portador es obligatorio.");
            }

            if (!this.ubicacion) {
                this.errores.push("La ubicación es obligatoria.");
            }

            if (!this.errores.length) {
                return true;
            }
        },

        cambiar_gema: function (nombre, poder, portador, ubicacion) {
            if (!(Array.isArray(this.errores) && this.errores.length)) {
                let self = this;
                axios.put('https://api-avengers.firebaseio.com/gemas/'+ this.$route.params.id + '.json', {
                    nombre: nombre,
                    poder: poder,
                    portador: portador,
                    ubicacion: ubicacion
                })
                    .then((response) => {
                        alert("Gema modificada correctamente");
                        router.push({ name: "Gemas" });
                    }
                    ).catch((err) => {
                        self.loading = false;
                        console.log(err);
                    });
            }
        } // fin metodo crear_alumno
    } // Terminan los Métodos

});