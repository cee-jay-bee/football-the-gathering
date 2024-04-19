<script>
    import DataTable, { Head, Body, Row, Cell } from '@smui/data-table';
    import KothManagerRow from './KothManagerRow.svelte';
    
    export let leagueTeamManagers, managers, currentYear;
    
    let innerWidth;
</script>

<svelte:window bind:innerWidth={innerWidth} />

<style>
    .managerContainer {
        width: 100%;
        margin: 2em 0 5em;
    }

    .managerConstrained {
        width: 97%;
        max-width: 800px;
        margin: 0 auto;
    }

    h2 {
        text-align: center;
        font-size: 2.8em;
        margin: 2em 0 1.5em;
        line-height: 1em;
    }

    @media (max-width: 520px) {
        h2 {
            text-align: center;
            font-size: 2em;
            margin: 1.5em 0 1em;
            line-height: 1em;
        }
    }

    :global(.draftBoard table) {
        border-collapse: collapse;
        table-layout: fixed;
        width: 100%;
        min-width: 1200px;
	}
</style>

<DataTable class="draftBoard">
    <Head>
        <Row>
            <Cell style="width: 10%;">Team</Cell>
            <Cell>Week 1</Cell>
            <Cell>Week 2</Cell>
            <Cell>Week 3</Cell>
            <Cell>Week 4</Cell>
            <Cell>Week 5</Cell>
            <Cell>Week 6</Cell>
            <Cell>Week 7</Cell>
            <Cell>Week 8</Cell>
            <Cell>Week 9</Cell>
            <Cell>Week 10</Cell>
            <Cell>Week 11</Cell>
            <Cell>Week 12</Cell>
            <Cell>Week 13</Cell>
            <Cell>Week 14</Cell>     
        </Row>
    </Head>
    <Body>
        {#each managers as manager, key}
            <KothManagerRow {manager} {leagueTeamManagers} {key} />
        {/each}
    </Body>
</DataTable>