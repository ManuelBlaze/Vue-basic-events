const app = Vue.createApp({
  data() {
    return {
      counter: 10,
      name: 'Manuel Escobar',
      confirmedName: '',
    };
  },
  methods: {
    submitForm() {
      alert('submitted!');
    },
    setName({
      target: {
        value, 
      } 
    }) {
      this.name = value;
    },
    confirmInput({
      target: {
        value, 
      } 
    }) {
      this.confirmedName = value;
    },
    add(num) {
      this.counter = this.counter + num;
    },
    reduce(num) {
      this.counter = this.counter - num;
    },
    reset() {
      this.counter = 0;
    },
  },
});

app.mount("#events");
