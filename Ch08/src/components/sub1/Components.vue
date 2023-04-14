<template>
  <h3>Components</h3>

  <div>
    <h4>Icons</h4>
    <v-icon color="success" icon="mdi:mdi-laptop"></v-icon>
    <v-icon icon="fas fa-plus" />
    <v-icon icon="mdi:mdi-minus" />
    <v-divider class="my-5"></v-divider>
    <!--my-5 : 위 아래로 마진 5px-->
    <h4>Images</h4>
    <v-img
      :width="300"
      aspect-ratio="16/9"
      cover
      src="https://cdn.vuetifyjs.com/images/parallax/material.jpg"
    ></v-img>
    <v-img
      :width="300"
      :height="200"
      aspect-ratio="16/9"
      cover
      src="https://picsum.photos/id/237/200/300"
    ></v-img>

    <v-divider class="my-5"></v-divider>
    <h4>Buttons</h4>
    <v-btn>Button1</v-btn>
    <v-btn color="primary">Button2</v-btn>
    <v-btn color="secondary">Button3</v-btn>
    <v-btn prepend-icon="mdi-vuetify">Button4</v-btn>
    <v-btn side="small">Button5</v-btn>
    <v-btn color="grey" block>Button6</v-btn>
    <v-divider class="my-5"></v-divider>
    <h4>Cards</h4>
    <v-card
      class="my-2"
      loading
      title="This is title"
      subtitle="여기는 부제목입니다."
      text="여기는 내용입니다."
    >
      <v-card-actions>
        <v-btn>누르세요.</v-btn>
      </v-card-actions>
    </v-card>
    <v-card width="400px" class="my-2" loading>
      <v-img
        height="200"
        src="https://cdn.pixabay.com/photo/2020/07/12/07/47/bee-5396362_1280.jpg"
        cover
        class="text-white"
        ><v-card-item>
          <v-card-title>Top 10 Australian beaches</v-card-title>

          <v-card-subtitle class="pt-4"> Number 10 </v-card-subtitle>

          <v-card-text>
            <div>Whitehaven Beach</div>

            <div>Whitsunday Island, Whitsunday Islands</div>
          </v-card-text>
        </v-card-item></v-img
      >

      <v-card-actions>
        <v-btn>누르세요.</v-btn>
      </v-card-actions>
    </v-card>
    <v-divider class="my-5"></v-divider>
  </div>
</template>
<script setup></script>
<style scoped></style>
