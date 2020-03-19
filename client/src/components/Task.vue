<template>
  <Panel :title="`Tasks of ${title}`">
    <div
      class="tsks mt-2"
      v-for="task in tasks"
      :key="task.id"
    >
      <EditableRecord
        :isEditMode="task.isEditMode"
        :title="task.description"
        @onInput="setTaskDescription({task, description: $event})"
        @onEdit="setEditMode(task)"
        @onSave="saveTask(task)"
        @onDelete="deleteTask(task)"
      ></EditableRecord>
    </div>

    <CreateRecord
      placeholder="I need to ..."
      @onInput="setNewTaskName"
      :value="newTaskName"
      @create="createTask"
    ></CreateRecord>

  </Panel>
</template>

<script>
import { mapState, mapActions, mapMutations } from 'vuex'
import CreateRecord from '@/components/CreateRecord'
import EditableRecord from '@/components/EditableRecord'

export default {
  props: ['title'],
  components: {
    CreateRecord,
    EditableRecord
  },
  computed: {
    ...mapState('tasks', [
      'tasks',
      'newTaskName'
    ])
  },
  methods: {
    ...mapActions('tasks', [
      'createTask',
      'saveTask',
      'deleteTask'
    ]),
    ...mapMutations('tasks', [
      'setNewTaskName',
      'setTaskDescription',
      'setEditMode'
    ])
  }
}
</script>

<style lang="scss" scoped>
</style>
