<template>
	<svg :aria-label="name">
		<use :href="symbolId" :fill="color" />
	</svg>
</template>

<script setup>
import { computed } from 'vue';

const props = defineProps({
	prefix: {
		type: String,
		default: 'icon',
	},
	name: {
		type: String,
		required: true,
	},
	color: String,
});

const symbolId = computed(() => `#${props.prefix}-${props.name}`);
</script>
