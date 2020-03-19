<template>
  <v-container>
    <v-layout>
      <v-flex xs4>
        <Project></Project>
      </v-flex>

      <v-flex
        xs8
        class="pl-4"
        v-if="currentProject"
      >
        <Task :title="currentProject.title"></Task>
      </v-flex>

    </v-layout>
  </v-container>
</template>

<script>
import { mapGetters, mapState } from 'vuex'
import Project from '@/components/Project.vue'
import Task from '@/components/Task.vue'
import router from '../router/index'

export default {
  components: {
    Project,
    Task
  },
  mounted () {
    if (!this.isLoggedIn) {
      return router.push('/login')
    }
  },
  computed: {
    ...mapState('projects', [
      'currentProject'
    ]),
    ...mapGetters('authentication', [
      'isLoggedIn'
    ])
  }
}
</script>
