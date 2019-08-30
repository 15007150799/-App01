<template>
  <div id="App">
    <div  class="wrap clear">
    <Header v-show="headerShow"></Header>
   	<router-view/>
    <Footer></Footer>
    </div>
  </div>
</template>
<script>
import Header from './components/Header'
import Footer from './components/Footer'

import {mapGetters} from 'vuex'

export default {
   name: 'App',
  data () {
    return {
      headerShow: true
    }
  },
  //  computed:
  //    mapGetters([
  //      'headerShow'
  //      ]),
   
  // watch:{
  //           $route(to){
  //            var path=to.path.substring(1);
  //            this.changePath(path);
  //           }
            
  //       },
  components:{
    Header,
    Footer
  },
  methods:{
    changePath(path){
            if(path.indexOf('detail')>0){
                this.$store.dispatch('HomeHide');
            }else{
              this.$store.dispatch('HomeShow');
            }
        }
  }
}
</script>

<style scope>
*{margin: 0px;padding: 0px}




</style>
