<script setup lang="ts">
  import { storeToRefs } from 'pinia'
  import { useConfirmActionStore } from '../store/confirmAction'

  const store = useConfirmActionStore()
  const { userAction } = storeToRefs(store)
  const { resolveConfirmUserAction } = store

  function handlerClickConfirm(isConfirm: boolean) {
    resolveConfirmUserAction(isConfirm)
  }
</script>

<template>
  <v-bottom-sheet :value="!!userAction" persistent inset>
    <v-sheet class="text-center py-8">
      <p v-if="userAction" class="text-h6">
        {{ userAction.text }}
      </p>
      <v-btn width="120px" class="mx-2" color="secondary" @click="handlerClickConfirm(true)">
        да
      </v-btn>
      <v-btn width="120px" class="mx-2" outlined color="error" @click="handlerClickConfirm(false)">
        нет
      </v-btn>
    </v-sheet>
  </v-bottom-sheet>
</template>
