Vue.component('formula', {
    data: function () { //Declaración de la Data
        return {
            errores: [],
            avengers: [],
            seleccionado: null,
            descripcion: null,
            telefono: null,
            email: null
        }
    },
    // Aquí comienza nuestro template
    template: `
    <div class="formulario-contact">
            <div v-if="errores.length">

            <b style="font-family: 'Questrial', sans-serif; font-size: 1.8rem;">Por favor, corrija el(los) siguiente(s) error(es): </b>
            <ul class="errores">
                <li v-for="error in errores" style="color: red;">{{ error }}</li>
            </ul>
            </div>
            
            <div class="form-cont">
                <label for="seleccionado" class="lbl-form">Seleccione el Superheroe</label><br>
                <select id="seleccionado" v-model="seleccionado" nombre="seleccionado" class="form-controles">
                    <option v-for="option in avengers" :value="option.nombres">{{option.nombres}}</option>
                </select>
            </div>

            <div class="form-cont">
                <label for="descripcion" class="lbl-form">Descripción del Trabajo</label><br>
                <input id="descripcion" v-model="descripcion" type="text" nombre="descripcion" class="form-controles">
            </div>

            <div class="form-cont">
               <label for="telefono" class="lbl-form">Teléfono</label><br>
               <input id="telefono" v-model="telefono" type="text" nombre="telefono" class="form-controles">
            </div>

            <div class="form-cont">
               <label for="email" class="lbl-form">Email</label><br>
               <input id="email" v-model="email" type="text" nombre="email" class="form-controles">
            </div>

            <div class="form-cont">
                <button  type="submit" v-on:click="validarFormulario(), crear_contacto(seleccionado, descripcion, telefono, email)" class="btn-form" style="margin-bottom: 10px;">Ingresar datos de contacto</button>
            </div>
    </div>`,
    // Aca termina nuestro Template

    mounted() {
        let self = this;
        fetch('https://api-avengers.firebaseio.com/avengers.json')
            .then(r => r.json())
            .then(json => {
                self.avengers = json;
            });
    },

    methods: { //Inician los Métodos
        validarFormulario: function (e) { //inician la función que valida el formulario
            this.errores = [];

            if (!this.seleccionado) {
                this.errores.push("Debe elegir un Superheroe.");
            }

            if (!this.descripcion) {
                this.errores.push("Debe escribir una pequeña descripción.");
            }

            if (!this.telefono) {
                this.errores.push("El telefono es obligatorio.");
            }

            if (!this.email) {
                this.errores.push("El correo es obligatorio.");
            }

            if (!this.errores.length) {
                return true;
            }
        },

        crear_contacto: function (seleccionado, descripcion, telefono, email) {
            if (!(Array.isArray(this.errores) && this.errores.length)) {
                let self = this;
                axios.post('https://api-avengers.firebaseio.com/contacto.json', {
                    seleccionado: seleccionado,
                    descripcion: descripcion,
                    telefono: telefono,
                    email: email
                })
                    .then((response) => {
                        alert("Dentro de poco nos pondremos en contacto contigo");
                        router.push({ name: "Inicio" });
                    }
                    ).catch((err) => {
                        self.loading = false;
                        console.log(err);
                    });
            }
        } // fin metodo crear_alumno
    } // Terminan los Métodos

});
