import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import Tab1Page from '../views/Tab1Page.vue';
import Tab2Page from '../views/Tab2Page.vue';

const routes: Array<RouteRecordRaw> = [
	{
		path: '/',
		redirect: '/home',
	},
	{
		path: '/home',
		name: 'Home',
		component: Tab1Page,
		meta: {
			tab: 'home',
		},
	},
	{
		path: '/settings',
		name: 'Settings',
		component: Tab2Page,
		meta: {
			tab: 'settings',
		},
	},
];

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes,
});

// set the active tab based on the current route
router.beforeEach((to, from, next) => {
	const activeTab = to.meta.tab;
	const ionTabs = document.querySelector('ion-tabs');

	if (activeTab && ionTabs) {
		const ionTabButton = ionTabs.querySelector(
			`ion-tab-button[tab=${activeTab}]`
		);

		if (ionTabButton) {
			ionTabButton.click();
		}
	}

	next();
});

export default router;
