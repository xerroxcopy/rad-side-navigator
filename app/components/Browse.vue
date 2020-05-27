<template>
  <Page class="page">
    <ActionBar class="action-bar">
      <NavigationButton
        ios:visibility="collapsed"
        icon="res://menu"
        @tap="onDrawerButtonTap"
      ></NavigationButton>
      <ActionItem
        icon="res://menu"
        android:visibility="collapsed"
        @tap="onDrawerButtonTap"
        ios.position="left"
      >
      </ActionItem>
      <Label class="action-bar-title" text="Browse"></Label>
    </ActionBar>
    <GridLayout class="page__content">
      <Label class="page__content-icon far" text.decode="&#xf1ea;"></Label>
      <Label
        class="page__content-placeholder"
        :text="`Query is ${query}`"
      ></Label>
    </GridLayout>
  </Page>
</template>

<script>
import * as utils from '~/shared/utils'
import SelectedPageService from '../shared/selected-page-service'

export default {
  props: {
    query: String,
  },
  mounted() {
    SelectedPageService.getInstance().updateSelectedPage('Browse')
  },
  computed: {
    message() {
      return '<!-- Page content goes here -->'
    },
  },
  methods: {
    onDrawerButtonTap() {
      utils.showDrawer()
    },
  },
}
</script>

<style scoped lang="scss">
@import '~@nativescript/theme/scss/variables/blue';
</style>
