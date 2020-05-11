var CambiarVillano = Vue.component('CambiarVillano', {
    data: function () {
        return {
            errores: [],
            nombre: null,
            superpoder: null,
            origen: null,
            derrotado_por: null
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
            <label for="superpoder" class="label-form">Superpoder</label></br>
            <input id="superpoder" v-model="superpoder" type="text" class="input-form">
        </div>
    
        <div class="form-div_2">
            <label for="origen" class="label-form">Origen</label></br>
            <input id="origen" v-model="origen" type="text" class="input-form">
        </div>
    
        <div class="form-div_2">
            <label for="derrotado_por" class="label-form">Vencido por</label></br>
            <input id="derrotado_por" v-model="derrotado_por" type="text" class="input-form">
        </div>
    
        <div>
            <button v-on:click="validarFormulario(), cambiar_villano(nombre, superpoder, origen, derrotado_por)" class="btn-form">Editar Villano</button>
        </div>
    
        </div>
    `,//Fin de Template

    mounted() {
        let self = this;
        fetch('https://api-avengers.firebaseio.com/villanos/'+ this.$route.params.id + '.json')
        .then(r => r.json())
        .then(json => {
            self.nombre = json.nombre,
            self.superpoder = json.superpoder,
            self.origen = json.origen,
            self.derrotado_por = json.derrotado_por
        });
    },


    methods: { //Inician los Métodos
        validarFormulario: function (e) { //inician la función que valida el formulario
            this.errores = [];

            if (!this.nombre) {
                this.errores.push("El nombre del Villano es obligatorio.");
            }

            if (!this.superpoder) {
                this.errores.push("El superpoder del Villano es obligatorio.");
            }

            if (!this.origen) {
                this.errores.push("El origen del Villano es obligatorio");
            }

            if (!this.derrotado_por) {
                this.errores.push("Quien lo vencio es obligatorio.");
            }

            if (!this.errores.length) {
                return true;
            }
        },

        cambiar_villano: function (nombre, superpoder, origen, derrotado_por) {
            if (!(Array.isArray(this.errores) && this.errores.length)) {
                let self = this;
                axios.put('https://api-avengers.firebaseio.com/villanos/'+ this.$route.params.id + '.json', {
                    nombre: nombre,
                    superpoder: superpoder,
                    origen: origen,
                    derrotado_por: derrotado_por
                })
                    .then((response) => {
                        alert("Villano modificado correctamente");
                        router.push({ name: "Villanos" });
                    }
                    ).catch((err) => {
                        self.loading = false;
                        console.log(err);
                    });
            }
        } // fin metodo crear_alumno
    } // Terminan los Métodos

});