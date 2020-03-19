<template>
  <v-layout
    row
    wrap
  >
    <v-flex
      xs9
      class="text-left pl-4"
    >
      <span v-if="!isEditMode">{{title}}</span>
      <v-text-field
        autofocus
        v-if="isEditMode"
        :value="title"
        @keyup.enter="$emit('onSave')"
        @input="$emit('onInput', $event)"
      ></v-text-field>
    </v-flex>

    <v-flex xs3>
      <v-icon
        v-if="!isEditMode"
        @click="$emit('onEdit')"
      >edit</v-icon>
      <v-icon
        v-if="isEditMode"
        @click="$emit('onSave')"
      >check</v-icon>
      <v-icon @click="$emit('onDelete')">delete</v-icon>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  props: ['isEditMode', 'title', 'record']
}
</script>

<style lang="scss" scoped>
</style>
