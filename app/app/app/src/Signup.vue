<template>
    <div>
        <input type='text' v-model='email'>
        <input type='password' v-model='password'>
        <button @click="signUp">Regist</button>
    </div>
</template>

<script>
import firebase from 'firebase'

export default {
    name: 'SignUP',
    data: function(){
        return{
            email:'',
            password:''
        }
    },
    methods: {
        signUp: function(){
            firebase.auth().createUserWithEmailAndPassword(this.email, this.password)
            .then(user => {
            alert('Create account: ', user.email)
            })
            .catch(error => {
            alert(error.message)
            })
        }       
    },
    

}
</script>