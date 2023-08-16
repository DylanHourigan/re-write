<template>
  <div class="bg-gray-100 dark:bg-gray-900 min-h-screen p-1">
    <div class="container mx-auto text-gray-900 dark:text-white">
      <h1 class="text-4xl font-bold pt-8 mb-4">Paraphrasing Tool</h1>
      <p class="text-lg">Welcome to my paraphrasing tool! Enter a sentence, and my machine learning model will generate
        a paraphrased version of it. Try it now!</p>
    </div>

    <main class="container mx-auto py-8 px-8">
      <div class="max-w-md mx-auto bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
        <label for="modelSelect" class="block mb-2 text-sm text-gray-900 dark:text-gray-200">Select a Model:</label>
        <select v-model="selectedModel" id="modelSelect" class="w-full p-2 border rounded-md mb-4 dark:bg-gray-700 dark:border-gray-600 dark:text-white">
          <option v-for="model in models" :key="model.id" :value="model.id">
            {{ model.name }}
          </option>
        </select>
        <h2 class="text-xl font-semibold mb-4 text-gray-900 dark:text-gray-200">Enter Your Sentence:</h2>
        <textarea v-model="inputText" class="w-full h-40 p-4 border rounded-md resize-none dark:bg-gray-700 dark:border-gray-600 dark:text-white"
          placeholder="Enter your sentence here..."></textarea>

        <button @click="paraphrase"
          class="mt-4 py-2 px-4 bg-blue-600 text-white rounded hover:bg-blue-700 focus:outline-none dark:hover:bg-blue-800">
          Paraphrase
        </button>

        <h2 class="text-xl font-semibold mt-6 mb-2 text-gray-900 dark:text-gray-200">Paraphrased Sentence:</h2>
        <div class="border p-4 rounded-md dark:bg-gray-700 dark:border-gray-600 dark:text-white" v-if="paraphrasedText">{{ paraphrasedText }}</div>
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
      selectedModel: 'rule-basedId',
      models: [
      { id: 'rule-basedId', name: 'Rule Based Model' },
      { id: 'mlModelId', name: 'Machine Learning Model' },
    ]
    };
  },
  methods: {
    async paraphrase() {
      try {
        const data = { input: this.inputText };
        const modelServices = {
          'rule-basedId': apiService.paraphraseV1,
          'mlModelId': apiService.paraphraseV2
        };

        const modelService = modelServices[this.selectedModel];
        if (!modelService) {
          throw new Error('Invalid model selected');
        }

        const response = await modelService(data);
        this.paraphrasedText = response.data.paraphrase;
      } catch (error) {
        console.error(error);
      }
    }
  },
};
</script>
