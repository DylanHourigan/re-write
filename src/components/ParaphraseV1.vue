<template>
  <div class="bg-gray-100 min-h-screen">
    <div class="container mx-auto">
      <h1 class="text-4xl font-bold pt-4 mb-4">Paraphrasing Tool</h1>
      <p class="text-lg">Welcome to our paraphrasing tool! Enter a sentence, and our machine learning model will generate
        a paraphrased version of it. Try it now!</p>
    </div>

    <main class="container mx-auto py-8 px-8">
      <div class="max-w-md mx-auto bg-white rounded-lg shadow-md p-6">
        <h2 class="text-xl font-semibold mb-4">Enter Your Sentence:</h2>
        <textarea v-model="inputText" class="w-full h-40 p-4 border rounded-md resize-none"
          placeholder="Enter your sentence here..."></textarea>

        <button @click="paraphrase"
          class="mt-4 py-2 px-4 bg-blue-600 text-white rounded hover:bg-blue-700 focus:outline-none">
          Paraphrase
        </button>

        <h2 class="text-xl font-semibold mt-6 mb-2">Paraphrased Sentence:</h2>
        <div class="border p-4 rounded-md" v-if="paraphrasedText">{{ paraphrasedText }}</div>
      </div>
    </main>
  </div>
</template>

<script>
import apiService from "@server/apiService";

export default {
  data() {
    return {
      inputText: "",
      paraphrasedText: "",
    };
  },
  methods: {
    async paraphrase() {
        try {
          const data = { input: this.inputText };
          const response = await apiService.paraphrase(data);
          this.paraphrasedText = response.data.paraphrase;
        } catch (error) {
          console.error(error);
        }
      }
    },
};
</script>
