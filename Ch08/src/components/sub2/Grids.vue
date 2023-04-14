<template>
  <h3>Grids</h3>

  <h4>그리드 기본</h4>

  <v-container fluid>
    <v-row>
      <v-col class="border text-center" cols="12">12</v-col>
    </v-row>
    <v-row class="mt-4">
      <v-col class="border text-center" cols="6">6</v-col>
      <v-col class="border text-center" cols="6">6</v-col>
    </v-row>
    <v-row class="mt-4">
      <v-col class="border text-center" cols="4">4</v-col>
      <v-col class="border text-center" cols="4">4</v-col>
      <v-col class="border text-center" cols="4">4</v-col>
    </v-row>
    <v-row class="mt-4">
      <v-col class="border text-center" cols="3">3</v-col>
      <v-col class="border text-center" cols="3">3</v-col>
      <v-col class="border text-center" cols="3">3</v-col>
      <v-col class="border text-center" cols="3">3</v-col>
    </v-row>
    <v-row class="mt-4">
      <v-col class="border text-center" cols="5">5</v-col>
      <v-col class="border text-center" cols="5">5</v-col>
      <v-col class="border text-center" cols="2">2</v-col>
    </v-row>
    <v-row class="mt-4">
      <v-col class="border text-center" cols="1">1</v-col>
      <v-col class="border text-center" cols="1">1</v-col>
      <v-col class="border text-center" cols="1">1</v-col>
      <v-col class="border text-center" cols="1">1</v-col>
      <v-col class="border text-center" cols="1">1</v-col>
      <v-col class="border text-center" cols="1">1</v-col>
      <v-col class="border text-center" cols="1">1</v-col>
      <v-col class="border text-center" cols="1">1</v-col>
      <v-col class="border text-center" cols="1">1</v-col>
      <v-col class="border text-center" cols="1">1</v-col>
      <v-col class="border text-center" cols="1">1</v-col>
      <v-col class="border text-center" cols="1">1</v-col>
    </v-row>
    <v-row class="mt-4">
      <v-col sm="12" md="4" class="border text-center">md1</v-col>
      <v-col sm="12" md="4" class="border text-center">md2</v-col>
      <v-col sm="12" md="4" class="border text-center">md3</v-col>
    </v-row>
  </v-container>
</template>
<script setup>
// 반응형 웹에 이용, 1280px > < 1920px : Large (small, large , medium이 기본)
</script>
<style scoped></style>
