<template>
	<header class="header">
		<h1 class="header__logo" aria-label="bi">
			<SvgImage name="logo" />
		</h1>
	</header>
</template>

<script setup></script>

<style lang="scss" scoped>
.header {
	display: flex;
	align-items: center;
	height: 5rem;
}

.header__logo {
	display: inline-flex;
	padding: 0.5rem 0;

	svg {
		width: 4rem;
		height: 4rem;
	}
}
</style>
