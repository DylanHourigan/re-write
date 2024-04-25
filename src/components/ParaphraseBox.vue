<template>
  <div class="max-w-md mx-auto bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 my-4">
    <p class="text-lg text-gray-900 dark:text-white">{{ paraphrase }}</p>
    <button @click="storeData"
      class="mt-4 py-2 px-4 bg-blue-600 text-white rounded hover:bg-blue-700 focus:outline-none dark:hover:bg-blue-800">
      Store Data
    </button>
  </div>
</template>

<script>
import apiService from "@server/apiService";

export default {
  props: {
    paraphrase: {
      type: String,
      required: true,
    },
    reference: {
      type: String,
      required: true,
    },
  },
  methods: {
    async storeData() {
      try {
        const response = await apiService.storeData({
          referenceText: this.reference,
          generatedText: this.paraphrase,
        });
        console.log(response);
      } catch (error) {
        console.error(error);
      }
    },
  },
};
</script>
