<template lang="html">
  <RadSideDrawer
    ref="drawer"
    drawerLocation="Left"
    gesturesEnabled="true"
    :drawerTransition="transition"
  >
    <StackLayout ~drawerContent backgroundColor="#ffffff">
      <slot name="drawerContent"></slot>
    </StackLayout>
    <Navigator :defaultRoute="'/home'" ~mainContent ref="drawerMainContent">
      <slot name="mainContent"></slot>
    </Navigator>
  </RadSideDrawer>
</template>

<script>
import { SlideInOnTopTransition } from 'nativescript-ui-sidedrawer'

export default {
  data() {
    return {
      transition: new SlideInOnTopTransition(),
    }
  },
}
</script>

<style scoped lang="scss">
@import '~@nativescript/theme/scss/variables/blue';
</style>
