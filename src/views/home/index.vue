<template>
  <div class="home-container">
    <div class="left">
      <Top />
      <cost-center style="margin-top:20px;" balance="95679.60" />
    </div>
    <div class="right">
      <activity />
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Top from './components/top'
import costCenter from './components/cost-center'
import activity from './components/activity'
export default {
  name: 'Dashboard',
  components:{
    Top,
    'cost-center': costCenter,
    activity
  },
  computed: {
    ...mapGetters([
      'name'
    ])
  }
}
</script>

<style lang="scss" scoped>
.home-container{
  padding: 30px 20px;
  display: flex;
  min-width: 1200px;
  background: #f6f6f6;
  .left{
    flex-basis: 1150px;
    margin-right: 10px;
  }
  .right{
    flex-grow:1;
  }
}
</style>
