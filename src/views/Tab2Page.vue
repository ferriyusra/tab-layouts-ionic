<template>
	<ion-page>
		<ion-content class="ion-justify-content-center ion-align-items-center">
			<ion-card>
				<ion-card-header>
					<ion-card-title>Tab Settings</ion-card-title>
				</ion-card-header>

				<ion-card-content class="text-center">
					Ini adalah menu settings
				</ion-card-content>
			</ion-card>
		</ion-content>
	</ion-page>
</template>

<script lang="ts">
import {
	IonContent,
	IonCard,
	IonCardHeader,
	IonCardTitle,
	IonCardContent,
	IonPage,
} from '@ionic/vue';
import { defineComponent } from 'vue';

export default defineComponent({
	components: {
		IonContent,
		IonCard,
		IonCardHeader,
		IonCardTitle,
		IonCardContent,
		IonPage,
	},
});
</script>
