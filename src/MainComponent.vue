<!-- src/MainComponent.vue -->
<template>
    <div id="app" class="app">
      <TitleRow />
      <InputText v-model="inputText" />
      <DetectButton @click="onSubmit" />
      <AlertMessage v-if="showAlert" :containsSensitiveWord="containsSensitiveWord" :modifiedText="modifiedText" />
      <AppFooter />
    </div>
  </template>
  
  <script>
  import { ref } from 'vue';
  import { sensitiveWords } from './assets/sensitiveWords'; // 确保路径正确
  import TitleRow from './components/TitleRow.vue';
  import InputText from './components/InputText.vue';
  import DetectButton from './components/DetectButton.vue';
  import AlertMessage from './components/AlertMessage.vue';
  import AppFooter from './components/AppFooter.vue';
  
  export default {
    components: {
      TitleRow,
      InputText,
      DetectButton,
      AlertMessage,
      AppFooter
    },
    setup() {
      const inputText = ref('');
      const modifiedText = ref('');
      const containsSensitiveWord = ref(false);
      const showAlert = ref(false);
  
      const regexes = sensitiveWords.map(word => new RegExp(word.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'gi'));
  
      const detectAndReplaceSensitiveWords = (text) => {
        let resultText = text;
        let foundSensitiveWord = false;
        try {
          for (const regex of regexes) {
            if (regex.test(resultText)) {
              foundSensitiveWord = true;
              resultText = resultText.replace(regex, match => '*'.repeat(match.length));
            }
          }
        } catch (error) {
          console.error('Error detecting sensitive words:', error);
        }
        return { foundSensitiveWord, resultText };
      };
  
      const onSubmit = () => {
        showAlert.value = true;
        const { foundSensitiveWord, resultText } = detectAndReplaceSensitiveWords(inputText.value);
        containsSensitiveWord.value = foundSensitiveWord;
        modifiedText.value = resultText;
      };
  
      return { inputText, modifiedText, containsSensitiveWord, onSubmit, showAlert };
    }
  };
  </script>
  