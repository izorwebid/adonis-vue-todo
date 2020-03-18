<template>
  <div>

    <v-toolbar
      dense
      color="blue"
      dark
    >
      <v-app-bar-nav-icon></v-app-bar-nav-icon>
      <v-toolbar-title class="mr-4">Vue TODO</v-toolbar-title>
      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn
          text
          to="/projects"
          v-if="isLoggedIn"
        >
          <v-icon
            left
            class="mr-3"
          >playlist_add_check</v-icon> Project
        </v-btn>
      </v-toolbar-items>
      <v-spacer></v-spacer>
      <v-btn
        text
        to="/register"
        v-if="!isLoggedIn"
      >
        <v-icon
          left
          class="mr-3"
        >account_box</v-icon> Register
      </v-btn>
      <v-btn
        text
        to="/login"
        v-if="!isLoggedIn"
      >
        <v-icon
          left
          class="mr-3"
        >fingerprint</v-icon> Login
      </v-btn>
      <v-btn
        text
        to="/logout"
        v-if="isLoggedIn"
        @click="setToken(null)"
      >
        <v-icon
          left
          class="mr-3"
        >exit_to_app</v-icon> Logout
      </v-btn>
    </v-toolbar>
  </div>
</template>

<script>
import { mapGetters, mapMutations, mapActions } from 'vuex'
export default {
  computed: {
    ...mapGetters('authentication', [
      'isLoggedIn'
    ])
  },
  methods: {
    ...mapMutations('authentication', [
      'setToken'
    ]),
    ...mapActions('authentication', [
      'logout'
    ])
  }
}
</script>
