<template native>
  <GridLayout
    columns="48, *"
    :class="
      isSelected ? 'nt-drawer__list-item -selected' : 'nt-drawer__list-item'
    "
    @tap="onNavigationItemTap(route)"
  >
    <Label col="1" :text="name" class="p-r-10"></Label>
    <Label col="1" :text="component" class="p-r-10"></Label>
  </GridLayout>
</template>

<script>
import * as utils from '~/shared/utils'
import SelectedPageService from '~/shared/selected-page-service'
import { routes } from '~/routes'

export default {
  data() {
    return {
      selectedPage: '',
    }
  },
  props: {
    props: { type: Object, required: false }, // navigator props
    route: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
  },
  computed: {
    component() {
      return routes[this.route].meta.name
    },
    isSelected() {
      return this.selectedPage === this.component
    },
  },
  methods: {
    onNavigationItemTap(route) {
      this.$navigator.navigate(route, {
        props: this.props,
        clearHistory: true,
      })
      utils.closeDrawer()
    },
  },
  mounted() {
    SelectedPageService.getInstance().selectedPage$.subscribe(
      (selectedPage) => (this.selectedPage = selectedPage)
    )
  },
}
</script>
