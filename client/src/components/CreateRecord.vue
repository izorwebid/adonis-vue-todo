<template>
  <v-layout
    row
    wrap
  >
    <v-flex
      xs8
      class="pl-4"
    >
      <v-text-field
        :placeholder="placeholder"
        :value="value"
        @input="$emit('onInput', $event)"
        @keyup.enter="$emit('create')"
      ></v-text-field>
    </v-flex>
    <v-flex
      xs4
      class="text-xs-right"
    >
      <v-btn
        color="blue"
        dark
        @click="$emit('create')"
      >
        <v-icon>add_circle</v-icon>Create
      </v-btn>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  props: ['placeholder', 'value']
}
</script>

<style lang="scss" scoped>
</style>
