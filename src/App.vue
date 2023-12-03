<template>
	<main>
		<h1>Welcome to Codex</h1>
		<CdxButton action="progressive" weight="primary">
			Click me!
		</CdxButton>
	</main>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { CdxButton } from '@wikimedia/codex';

export default defineComponent( {
	components: { CdxButton }
} );

</script>

<style scoped>
main {
  margin: 64px;
}
</style>
