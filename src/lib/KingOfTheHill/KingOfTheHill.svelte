<script>
    import DataTable, { Head, Body, Row, Cell } from '@smui/data-table';
    import KothManagerRow from './KothManagerRow.svelte';
    import KothWeeklyResultRow from './KothWeeklyResultRow.svelte';
    import { onMount } from 'svelte';
    import LinearProgress from '@smui/linear-progress';
    
    export let leagueTeamManagers, managers, kothLeagueMatchups, currentState;
    
    let loading = true;
    let innerWidth;
    let kothTeams = [];
    let strikes = [4, 4, 3, 3, 3, 2, 2, 2, 1, 1, 1, 1, 1, 1]
    let matchupWeeks = [];

    onMount(async () => {
        const matchupsInfo = await kothLeagueMatchups;
        matchupWeeks = matchupsInfo.matchupsData
        setTeams();
        setKothTeams();
        loading = false;
    });

    const setTeams = () => {
        managers.forEach(element => {
            kothTeams.push({"manager":element.roster, "strikes":0, "weeklyResults":[]})
        });
        console.log('week:' + currentState.week)
        console.log(kothTeams)
    }
    // currentState.week = 14

    const setKothTeams = () =>{
        if ( currentState.week > 0) {
            for( let i = 0; i<currentState.week; i++){
                let thisWeeksResults = [];

                for (const team in kothTeams){
                    let managersPoints = matchupWeeks[i][kothTeams[team].manager - 1].points
                    
                    thisWeeksResults.push({"manager":kothTeams[team].manager, "points":managersPoints})
                    
                    kothTeams[team].weeklyResults.push({"strikes": kothTeams[team].strikes, "points": managersPoints})
                }
                
                thisWeeksResults.sort((a, b) => a.points - b.points);
                let teamsWithThreeStrikes = kothTeams.filter( el => el.strikes >= 3)
                for( let j = 0; j < teamsWithThreeStrikes.length; j++) {
                    thisWeeksResults = thisWeeksResults.filter( el => el.manager != teamsWithThreeStrikes[j].manager)
                }
                
                console.log("WEEK " + i )
                console.log(thisWeeksResults)
                console.log(teamsWithThreeStrikes)

                for ( let k = 0; k < strikes[i]; k++){
                    let rosterToAddStrike = thisWeeksResults[k].manager
                    kothTeams[kothTeams.findIndex(el=> el.manager == rosterToAddStrike)].strikes++
                    kothTeams[kothTeams.findIndex(el=> el.manager == rosterToAddStrike)].weeklyResults[i].strikes++
                }

                console.log(kothTeams)
            }
        }
    }
</script>

<svelte:window bind:innerWidth={innerWidth} />

<style>

    .team {
        text-align: center;
        display: inline-block;
        font-style: italic;
        color: var(--g555);
        font-weight: 150;
    }

    #main {
        flex-grow: 1;
        min-width: 320px;
        margin: 0 auto;
        padding: 60px 0;
    }

    .text {
        padding: 0 30px;
        max-width: 620px;
        margin: 0 auto;
    }

    :global(.draftBoard table) {
        border-collapse: collapse;
        table-layout: fixed;
        width: 100%;
        min-width: 1200px;
	}
</style>

{#if loading}
    <!-- promise is pending -->
    <div class="message">
        <p>Loading league matchups...</p>
        <LinearProgress indeterminate />
    </div>
{:else}
      
        <div id="main">
            <div class="text">
                KING OF THE HILL
                <br><br>
                A game within the game, survivor of the strongest manager. King of the Hill is a last team standing game where each team tries to outlast everyone else.
                <br><br>
                Each week, strikes are issued to the league based on point totals. The lower your point total, the more you risk getting a strike. Three strikes and you're out.
            </div>
        </div>
        <DataTable style="width: 100%">
            <Head>
                <Row>
                    <Cell>
                        <p class="team">Team</p>
                    </Cell>
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
                {#each managers as manager, key}
                    <Row>
                        <Cell>
                            <KothManagerRow {manager} {leagueTeamManagers} {key} />  
                        </Cell>
                        {#if matchupWeeks.length}
                            {#each kothTeams[manager.roster-1].weeklyResults as weeklyResult, key}
                                <Cell>
                                    <KothWeeklyResultRow {leagueTeamManagers} {kothTeams} {weeklyResult} {manager} {key}/>
                                </Cell>
                            {/each}
                        {/if}
                    </Row>
                {/each}
            </Body>
        </DataTable>
{/if}