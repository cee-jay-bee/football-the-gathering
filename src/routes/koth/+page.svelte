<script>
	import LinearProgress from '@smui/linear-progress';
	import { onMount } from 'svelte';
	import { goto } from '$app/navigation';
    import KingOfTheHill from '$lib/KingOfTheHill/KingOfTheHill.svelte';

	export let data;
	const {managers, leagueTeamManagersData, currentYear} = data;

    onMount(() => {
        if(!managers.length) {
            goto('/');
        }
    })
</script>

<style>
	.main {
		position: relative;
		z-index: 1;
	}
    .loading {
        display: block;
        width: 85%;
        max-width: 500px;
        margin: 80px auto;
    }
</style>

<div class="main">
    {#await leagueTeamManagersData}
        <!-- promise is pending -->
        <div class="loading">
            <p>Retrieving weekly results...</p>
            <LinearProgress indeterminate />
        </div>
    {:then leagueTeamManagers}
        {#if managers.length}
            <KingOfTheHill {managers}  {leagueTeamManagers} {currentYear}/>
        {/if}
    {:catch error}
        <!-- promise was rejected -->
        <p>Something went wrong: {error.message}</p>
    {/await}
</div>