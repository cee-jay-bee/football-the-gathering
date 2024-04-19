<script>
    import DataTable, { Head, Body, Row, Cell } from '@smui/data-table';
    import KothManagerRow from './KothManagerRow.svelte';
    import KothWeeklyResultRow from './KothWeeklyResultRow.svelte';
    
    export let leagueTeamManagers, managers, currentYear;
    
    let innerWidth;

    let strikes = [4, 4, 3, 3, 3, 2, 2, 2, 1, 1, 1, 1, 1, 1]
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

    .team {
        text-align: center;
        display: inline-block;
        font-style: italic;
        line-height: 1.2em;
        color: var(--g555);
        font-weight: 150;
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

    .banner {
		display: flex;
		align-items: center;
		justify-content: center;
		height: 300px;
		width: 600px;
		border-radius: 40px;
		margin: 10px auto;
		background-repeat: no-repeat;
		background-size: auto 140px;
	}

    .banner {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        height: 350px;
        width: 600px;
        border-radius: 0 0 0 40px;
        border: 1px solid var(--ddd);
        border-left: 2px solid var(--blueTwo);
        border-bottom: none;
        background-color: var(--fff);
    }

    .info {
		flex-grow: 1;
		padding: 0 15px;
	}

    h5 {
		text-align: center;
		margin: 30px auto 16px;
        color: var(--g555);
        font-weight: 300;
	}

    .weekRow{
        border-radius: 2em;
        border: 1px solid var(--ccc);
        box-shadow: 0 0 6px 0 var(--bbb);
    }

    :global(.draftBoard table) {
        border-collapse: collapse;
        table-layout: fixed;
        width: 100%;
        min-width: 1200px;
	}
</style>

<div class="banner">
    <h5>
        KING OF THE HILL
        <br><br>
        A game within the game, survivor of the strongest manager. King of the Hill is a last team standing game where each team tries to outlast everyone else.
        <br><br>
        Each week, strikes are issued to the league based on point totals. The lower your point total, the more you risk getting a strike. Three strikes and you're out.
    </h5>
</div>
<DataTable class="draftBoard">
    <Head>
        <Row>
            <Cell style="width: 10%;">Team</Cell>
            {#each strikes as strike, index}
                <Cell>
                    <div>
                        <p class="team"> Week {index + 1}
                            <br>
                            {strike} Strikes
                        </p>
                    </div>
                </Cell>
            {/each}
        </Row>
    </Head>
    <Body>
        <Row>
            <Cell>
                {#each managers as manager, key}
                    <KothManagerRow {manager} {leagueTeamManagers} {key} />  
                {/each}
            </Cell>
            <Cell>
                {#each managers as manager, key}
                    <KothWeeklyResultRow {manager} {leagueTeamManagers} {key} />
                {/each}
            </Cell>
            <Cell>
                {#each managers as manager, key}
                    <KothWeeklyResultRow {manager} {leagueTeamManagers} {key} />
                {/each}
            </Cell>
            <Cell>
                {#each managers as manager, key}
                    <KothWeeklyResultRow {manager} {leagueTeamManagers} {key} />
                {/each}
            </Cell>
            <Cell>
                {#each managers as manager, key}
                    <KothWeeklyResultRow {manager} {leagueTeamManagers} {key} />
                {/each}
            </Cell>
            <Cell>
                {#each managers as manager, key}
                    <KothWeeklyResultRow {manager} {leagueTeamManagers} {key} />
                {/each}
            </Cell>
            <Cell>
                {#each managers as manager, key}
                    <KothWeeklyResultRow {manager} {leagueTeamManagers} {key} />
                {/each}
            </Cell>
            <Cell>
                {#each managers as manager, key}
                    <KothWeeklyResultRow {manager} {leagueTeamManagers} {key} />
                {/each}
            </Cell>
            <Cell>
                {#each managers as manager, key}
                    <KothWeeklyResultRow {manager} {leagueTeamManagers} {key} />
                {/each}
            </Cell>
            <Cell>
                {#each managers as manager, key}
                    <KothWeeklyResultRow {manager} {leagueTeamManagers} {key} />
                {/each}
            </Cell>
            <Cell>
                {#each managers as manager, key}
                    <KothWeeklyResultRow {manager} {leagueTeamManagers} {key} />
                {/each}
            </Cell>
            <Cell>
                {#each managers as manager, key}
                    <KothWeeklyResultRow {manager} {leagueTeamManagers} {key} />
                {/each}
            </Cell>
            <Cell>
                {#each managers as manager, key}
                    <KothWeeklyResultRow {manager} {leagueTeamManagers} {key} />
                {/each}
            </Cell>
            <Cell>
                {#each managers as manager, key}
                    <KothWeeklyResultRow {manager} {leagueTeamManagers} {key} />
                {/each}
            </Cell>
            <Cell>
                {#each managers as manager, key}
                    <KothWeeklyResultRow {manager} {leagueTeamManagers} {key} />
                {/each}
            </Cell>
        </Row>
    </Body>
</DataTable>