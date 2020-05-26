<template>
  <Page class="page">
    <ActionBar class="action-bar">
      <!-- 
            Use the NavigationButton as a side-drawer button in Android
            because ActionItems are shown on the right side of the ActionBar
            -->
      <NavigationButton
        ios:visibility="collapsed"
        icon="res://menu"
        @tap="onDrawerButtonTap"
      ></NavigationButton>
      <!-- 
            Use the ActionItem for IOS with position set to left. Using the
            NavigationButton as a side-drawer button in iOS is not possible,
            because its function is to always navigate back in the application.
            -->
      <ActionItem
        icon="res://menu"
        android:visibility="collapsed"
        @tap="onDrawerButtonTap"
        ios.position="left"
      >
      </ActionItem>
      <Label class="action-bar-title" text="Featured"></Label>
    </ActionBar>

    <Tabs>
      <TabStrip>
        <TabStripItem>
          <Label text="Tab 1"></Label>
        </TabStripItem>
        <TabStripItem>
          <Label text="Tab 2"></Label>
        </TabStripItem>
        <TabStripItem>
          <Label text="Tab 3"></Label>
        </TabStripItem>
      </TabStrip>

      <TabContentItem>
        <Label
          text="111111111111111111111111111111111111111111111111111111"
        ></Label>
      </TabContentItem>

      <TabContentItem>
        <StackLayout>
          <Label
            text="22222222222222222222222222222222222222222222222222222222222222222222222"
          ></Label>
        </StackLayout>
      </TabContentItem>

      <TabContentItem>
        <StackLayout>
          <Label
            text="33333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333"
          ></Label>
        </StackLayout>
      </TabContentItem>
    </Tabs>
  </Page>
</template>

<script>
import * as utils from '~/shared/utils'
import SelectedPageService from '../shared/selected-page-service'

export default {
  mounted() {
    SelectedPageService.getInstance().updateSelectedPage('Featured')
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
// Start custom common variables
@import '~@nativescript/theme/scss/variables/blue';
// End custom common variables

// Custom styles
</style>
