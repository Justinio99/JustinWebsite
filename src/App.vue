<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
import aboutme from './components/AboutMe/AboutMe';
import home from './components/Home/Home';
export default {
  name: 'App',
  created() {
    const isIE = /*@cc_on!@*/ false || !!document.documentMode;
    //  if(isIE){
    //    this.$route.push('error')
    //  }
  },
  methods: {
    someMethod: function(event) {
      var x = event.pageX;
      var y = event.pageY;
    }
  }
};
</script>


