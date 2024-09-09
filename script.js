const { createApp } = Vue


createApp({
    data() {
        return {
            todoList: [],
            url: 'server.php',
        }
    },
    methods: {
        getTodoList(){
            axios.get(this.url).then((resp) => {
                console.log(resp.data);
                this.todoList = resp.data;
            });
        },
        changeStatus(index) {
            this.todoList[index].done = !this.todoList[index].done;
            axios.post(this.url, this.todoList)
                .then((resp) => {
                    console.log('Stato aggiornato:', resp.data);
                })
                .catch((err) => {
                    console.error('Errore durante l\'aggiornamento:', err);
            });
        }
    },
    mounted() {
        this.getTodoList();
    },
}).mount('#app');