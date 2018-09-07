import homeData from '../../Data/homeData.json';
export default {
  name: 'AverageFooter',
  data() {
    return {
      x: null,
      y: null,
      data: homeData
    };
  },
  methods: {
    getPosition(event) {
      this.x = event.screenX / 400;
      this.y = event.screenY / 200;
    },
    redirect(path) {
      this.$router.push(path);
    }
  }
};
