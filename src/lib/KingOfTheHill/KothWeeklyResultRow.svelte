<script>
    import { goto } from "$app/navigation";
	import { getTeamNameFromTeamManagers } from "$lib/utils/helperFunctions/universalFunctions";

    export let kothTeams, leagueTeamManagers, key, manager, score;

    let year = null;
</script>

<style>
    .manager {
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: var(--fff);
        background-repeat: no-repeat;
        background-position: 15% 50%;
        border-radius: 2em;
        border: 1px solid var(--ccc);
        box-shadow: 0 0 6px 0 var(--bbb);
        cursor: pointer;
    }

    .manager:hover {
        box-shadow: 0 0 10px 0 bar(--g999);
        background-color: bar(--eee);
    }

    .photo {
        height: 70px;
        width: 70px;
        border-radius: 100%;
        vertical-align: middle;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    /* Tooltip text */
    .photo .tooltiptext {
        visibility: hidden;
        background-color: black;
        color: #fff;
        text-align: center;
        padding: 5px 0;
        border-radius: 6px;
        
        /* Position the tooltip text - see examples below! */
        position: absolute;
        z-index: 1;
    }

    /* Show the tooltip text when you mouse over the tooltip container */
    .photo:hover .tooltiptext {
        visibility: visible;
    }

	@media (max-width: 595px) {
        .manager {
            padding: 0.5em 0;
            margin: 0.3em 0;
            border-radius: 1.5em;
        }

        .photo {
            height: 30px;
            width: 30px;
            margin-left: 0.5em;
        }
    }
</style>

<div class="manager" on:click={() => goto(`/manager?manager=${key}`)}>
    <div> 
        <p class="photo">{score}
            <span class="tooltiptext">{getTeamNameFromTeamManagers(leagueTeamManagers, kothTeams[manager.roster-1].manager, year)}</span>
        </p>
    </div>
</div>