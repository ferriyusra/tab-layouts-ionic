<template>
	<ion-page>
		<ion-tabs>
			<ion-router-outlet></ion-router-outlet>
			<ion-tab-bar slot="bottom">
				<ion-tab-button tab="home" href="/home">
					<ion-icon :icon="home" />
					<ion-label>Home</ion-label>
				</ion-tab-button>

				<ion-tab-button tab="settings" href="/settings">
					<ion-icon :icon="settings" />
					<ion-label>Settings</ion-label>
				</ion-tab-button>
			</ion-tab-bar>
		</ion-tabs>
	</ion-page>
</template>

<script lang="ts">
import {
	IonPage,
	IonTabs,
	IonRouterOutlet,
	IonTabBar,
	IonTabButton,
	IonLabel,
	IonIcon,
} from '@ionic/vue';

import { home, settings } from 'ionicons/icons';

export default {
	components: {
		IonPage,
		IonTabs,
		IonRouterOutlet,
		IonTabBar,
		IonTabButton,
		IonLabel,
		IonIcon,
	},
	data() {
		return {
			home,
			settings,
		};
	},
};
</script>
