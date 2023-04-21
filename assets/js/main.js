const { createApp } = Vue

createApp({
    data() {
        return {
            quantity: 10,
            emails: [],
        }
    },
    mounted(){

    },
    methods:{
        activateApi(){
            for (let i = 1; i <= this.quantity; i++){
                axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
                .then((response) => {
                    let email = response.data.response;
                    this.emails.unshift(email);
                })
            }
        }
    }
}).mount('#app')