<template>
    <div class="login">
        <h1>alvarokoke CMS</h1>
        <form>
            <v-text-field
                v-model="email"
                label="E-mail"
                required
                :rules="emailRules"
                @click="removeError"
            ></v-text-field>
            <v-text-field
                :type="'password'"
                v-model="password"
                label="password"
                required
                @click="removeError"
            ></v-text-field>
            <v-btn 
                style="backgroundColor: #013E5C; color: white; width: 100%; font-weight: bold" 
                v-bind:class="{ errorButton: iserrorButton }" 
                @click="login">
                    {{ buttonText }}
                </v-btn>
        </form>
    </div>
</template>
<script>
    import login from '../authConfig';
    export default {
        name: 'login',
        data(){
            return {
                iserrorButton: false,
                valid: false,
                email: null,
                password: null,
                buttonText: "GO!",
                emailRules: [
                    v => !!v || 'E-mail is required',
                    v => /.+@.+/.test(v) || 'E-mail must be valid',
                ],
            };
        },
        methods: {
            removeError: function(){
                this.iserrorButton= false;
                this.buttonText = "GO!"
            },
            login: function(){
                login.auth().signInWithEmailAndPassword(this.email, this.password).then(
                    (user) => {
                        this.$router.replace('home');
                    },
                    (err) => {
                        this.password = '';
                        this.iserrorButton = true;
                        this.buttonText = "SOMETHING WENT WRONG"
                    }
                )
            }
        }
    }
</script>
<style scooped>
    h1{
        color: #013E5C;
        margin-bottom: 50px;
    }
    body{
        margin: 0;
    }
    form{
        width: 30vw;
        border-radius: 3px;
        padding: 40px;
    }
    .login{
        height: 100vh;
        width: 100vw;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
    .v-input{
        margin-bottom: 30px;
    }
    .errorButton{
        transition: all .3s;
        background-color: red !important;

    }
</style>