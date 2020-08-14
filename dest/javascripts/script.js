Vue.component("app-fitneses", {
  data: function () {
    return {
      fitneses: [
        { name: "Alex" },
        { name: "Onyx" },
        { name: "Lime" }
      ]
    }
  },
  template: '<div><div class="fitnes" v-for="fitnes in fitneses"><p>{{fitnes.name}}</p></div></div>'
});

new Vue({
  el: '#app',
  data: {
    title: "Hello World!",
    info: {
      text: "message",
      count: 1
    },
    color: '',
    value: 1,
    show: true,
    cars: [
      { model: 'ford', speed: 200 },
      { model: 'audi', speed: 300 },
      { model: 'mers', speed: 400 }
    ],
    message: ''
  },
  methods: {
    count(v) {
      this.info.count += 1;
      this.value = v;
    }
  },
  computed: {
    double() {
      return this.value * 2;
    }
  },
  filters: {
    lowercase(v) {
      return v.toLowerCase();
    }
  }
});