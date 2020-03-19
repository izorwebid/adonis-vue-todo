<template>
  <Panel title="Projects">
    <div
      class="mb-2"
      v-for="project in projects"
      :key="project.id"
    >
      <EditableRecord
        :isEditMode="project.isEditMode"
        :title="project.title"
        @onInput="setProjectTitle({project, title: $event})"
        @onEdit="setEditMode(project)"
        @onSave="saveProject(project)"
        @onDelete="deleteProject(project)"
      ></EditableRecord>
    </div>
    <CreateRecord
      placeholder="My Project bla bla"
      @onInput="setNewProjectName"
      :value="newProjectName"
      @create="createProject"
    ></CreateRecord>
  </Panel>
</template>

<script>
import { mapState, mapMutations, mapActions } from 'vuex'
import CreateRecord from '@/components/CreateRecord'
import EditableRecord from '@/components/EditableRecord'
export default {
  mounted () {
    this.fetchProject()
  },
  components: {
    CreateRecord,
    EditableRecord
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
