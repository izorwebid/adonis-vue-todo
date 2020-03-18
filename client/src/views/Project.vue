<template>
  <v-container>
    <v-layout>
      <v-flex xs4>
        <Project></Project>
      </v-flex>

      <v-flex
        xs8
        class="pl-4"
      >
        <div class="home">
          <Panel title="Projects">
            <h1>Testing</h1>
          </Panel>
        </div>
      </v-flex>

    </v-layout>
  </v-container>
</template>

<script>
import { mapGetters } from 'vuex'
import Project from '@/components/Project.vue'
import router from '../router/index'

export default {
  components: {
    Project
  },
  mounted () {
    if (!this.isLoggedIn) {
      return router.push('/login')
    }
  },
  computed: {
    ...mapGetters('authentication', [
      'isLoggedIn'
    ])
  }
}
</script>
