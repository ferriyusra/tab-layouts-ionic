<template>
	<ion-app>
		<TabHeader />
		<TabPage />
	</ion-app>
</template>

<script lang="ts">
import { IonApp } from '@ionic/vue';
import TabHeader from './TabHeader.vue';
import TabPage from './TabPage.vue';

export default {
	components: { IonApp, TabHeader, TabPage },
};
</script>
