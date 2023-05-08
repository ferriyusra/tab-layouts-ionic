<template>
	<IonAppVue />
</template>

<script lang="ts">
import { IonApp } from '@ionic/vue';
import IonAppVue from './components/IonApp.vue';
import { defineComponent } from 'vue';

export default defineComponent({
	components: { IonApp, IonAppVue },
});
</script>
