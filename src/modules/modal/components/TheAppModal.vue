<script setup lang="ts">
  const props = withDefaults(defineProps<{ value: boolean }>(), {
    value: false
  })

  const emit = defineEmits<{
    (e: 'cancel'): void
    // (event: 'update', id: number): void
  }>()

  function handlerClickCancel() {
    emit('cancel')
  }
  // const props = defineProps({
  //   value: { type: Boolean, required: true, default: false },
  // })
</script>

<template>
  <v-dialog
    :value="props.value"
    :max-width="800"
    @click:outside="handlerClickCancel"
    @keydown.esc="handlerClickCancel"
  >
    <v-card class="elevation-12">
      <!--      <v-btn-->
      <!--        fab-->
      <!--        small-->
      <!--        class="d-block ml-auto mr-lg-n8"-->
      <!--        text-->
      <!--        @click="handlerClickCancel"-->
      <!--      >-->
      <!--        <v-icon x-large>close</v-icon>-->
      <!--      </v-btn>-->
      <slot />
    </v-card>
  </v-dialog>
</template>

<style lang="scss" scoped></style>
