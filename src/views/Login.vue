<template>
    <div class="login">
        <h1>alvarokoke CMS</h1>
        <h3>Sign in</h3>
        <input type="text" v-model="email" placeholder="Email">
        <input type="password" v-model="password" placeholder="Password"/>
        <button @click="login">GO!</button>
    </div>
</template>
<script>
    import login from '../authConfig';
    export default {
        name: 'login',
        data(){
            return {
                email: '',
                password: ''
            };
        },
        methods: {
            login: function(){
                login.auth().signInWithEmailAndPassword(this.email, this.password).then(
                    (user) => {
                        this.$router.replace('home');
                    },
                    (err) => {
                        alert('Ooops....' + err.message)
                    }
                )
            }
        }
    }
</script>
<style scooped>
    body{
        margin: 0;
    }
    .login{
        height: 100vh;
        width: 100vw;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
    h1{
        margin: 0;
        text-transform: uppercase;
        color: #233d4d;
    }
    input{
        width: 20vw;
        height: 20px;
        font-size: 15px;
        margin-bottom: 20px;
    }
    button{
        width: 20vw;
        line-height: 20px;
        background-color: #233D4D;
        font-size: 15px;
        padding: 10px;
        border-radius: 3px;
        color: white;
        cursor: pointer;
    }
</style>