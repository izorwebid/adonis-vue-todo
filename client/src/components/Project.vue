<template>
  <Panel title="Projects">
    <div
      class="mb-2"
      v-for="project in projects"
      :key="project.id"
    >
      <v-layout
        row
        wrap
      >
        <v-flex
          xs9
          class="text-left pl-4"
        >
          <span v-if="!project.isEditMode">{{project.title}}</span>
          <v-text-field
            autofocus
            v-if="project.isEditMode"
            :value="project.title"
            @input="setProjectTitle({project, title: $event})"
            @keyup.enter="saveProject(project)"
          ></v-text-field>
        </v-flex>

        <v-flex xs3>
          <v-icon
            v-if="!project.isEditMode"
            @click="setEditMode(project)"
          >edit</v-icon>
          <v-icon
            v-if="project.isEditMode"
            @click="saveProject(project)"
          >check</v-icon>
          <v-icon @click="deleteProject(project)">delete</v-icon>
        </v-flex>
      </v-layout>

    </div>
    <v-layout
      row
      wrap
    >
      <v-flex
        xs8
        class="pl-4"
      >
        <v-text-field
          placeholder="My project name"
          :value="newProjectName"
          @input="setNewProjectName"
          @keyup.enter="createProject"
        ></v-text-field>
      </v-flex>
      <v-flex xs4>
        <v-btn
          color="blue"
          dark
          @click="createProject"
        >
          <v-icon>add_circle</v-icon>Create
        </v-btn>
      </v-flex>
    </v-layout>
  </Panel>
</template>

<script>
import { mapState, mapMutations, mapActions } from 'vuex'
export default {
  mounted () {
    this.fetchProject()
  },
  computed: {
    ...mapState('projects', [
      'newProjectName',
      'projects'
    ])
  },
  methods: {
    ...mapMutations('projects', [
      'setNewProjectName',
      'setEditMode',
      'setProjectTitle'
    ]),
    ...mapActions('projects', [
      'createProject',
      'fetchProject',
      'saveProject',
      'deleteProject'
    ])
  }
}
</script>
