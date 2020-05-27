<template lang="html">
  <GridLayout rows="auto, *" class="nt-drawer__content">
    <StackLayout row="0" class="nt-drawer__header">
      <Image
        class="nt-drawer__header-image fas t-36"
        src.decode="font://&#xf2bd;"
      ></Image>
      <Label class="nt-drawer__header-brand" text="User Name"></Label>
      <Label
        class="nt-drawer__header-footnote"
        text="username@mail.com"
      ></Label>
    </StackLayout>

    <ScrollView row="1" class="nt-drawer__body">
      <StackLayout>
        <DrawerContentMenuItem route="/home" name="Home dayo" />
        <DrawerContentMenuItem
          route="/browse"
          :props="{ query: 'books' }"
          name="Browse Books"
        />
        <DrawerContentMenuItem
          route="/browse"
          :props="{ query: 'movies' }"
          name="Browse Movies"
        />
      </StackLayout>
    </ScrollView>
  </GridLayout>
</template>

<script>
import DrawerContentMenuItem from '~/components/DrawerContentMenuItem'
export default {
  components: {
    DrawerContentMenuItem,
  },
}
</script>

<style scoped lang="scss">
@import '~@nativescript/theme/scss/variables/blue';
</style>
