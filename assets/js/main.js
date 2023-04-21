const { createApp } = Vue

createApp({
    data() {
        return {
           
        }
    },
    methods:{
        generator(){
            for (){
                axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
                .then((response) => {
                    let email = response.data.response;
                    this.emails.unshift(email);
                })
            }
        }
  
    }
}).mount('#app')