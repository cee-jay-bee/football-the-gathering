<script>
    import { goto } from "$app/navigation";
	import { getTeamNameFromTeamManagers } from "$lib/utils/helperFunctions/universalFunctions";

    export let kothTeams, leagueTeamManagers, key, manager, weeklyResult;

    let year = null;

    const getClass = () => {
        switch(weeklyResult.strikes){
            case 0: return "manager0"
            case 1: return "manager1"
            case 2: return "manager2"
            case 3: return "manager3"
            default: "photo"
        }
    }
</script>

<style>

    .manager0 {
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: green;
        background-repeat: no-repeat;
        background-position: 15% 50%;
        border-radius: 2em;
        border: 1px solid var(--ccc);
        box-shadow: 0 0 6px 0 var(--bbb);
        cursor: pointer;
    }

    .manager1 {
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: rgb(228, 228, 141);
        color: black ;
        background-repeat: no-repeat;
        background-position: 15% 50%;
        border-radius: 2em;
        border: 1px solid var(--ccc);
        box-shadow: 0 0 6px 0 var(--bbb);
        cursor: pointer;
    }

    .manager2 {
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: rgb(218, 171, 84);
        color: black;
        background-repeat: no-repeat;
        background-position: 15% 50%;
        border-radius: 2em;
        border: 1px solid var(--ccc);
        box-shadow: 0 0 6px 0 var(--bbb);
        cursor: pointer;
    }

    .manager3 {
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: rgb(183, 62, 62);
        background-repeat: no-repeat;
        background-position: 15% 50%;
        border-radius: 2em;
        border: 1px solid var(--ccc);
        box-shadow: 0 0 6px 0 var(--bbb);
        cursor: pointer;
    }

    .manager0:hover {
        box-shadow: 0 0 10px 0 bar(--g999);
        background-color: bar(--eee);
    }

    .manager1:hover {
        box-shadow: 0 0 10px 0 bar(--g999);
        background-color: bar(--eee);
    }

    .manager2:hover {
        box-shadow: 0 0 10px 0 bar(--g999);
        background-color: bar(--eee);
    }

    .manager3:hover {
        box-shadow: 0 0 10px 0 bar(--g999);
        background-color: bar(--eee);
    }

    .photo3 .tooltiptext {
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
    .photo0:hover .tooltiptext {
        visibility: visible;
    }


	@media (max-width: 595px) {
        .manager0 {
            padding: 0.5em 0;
            margin: 0.3em 0;
            border-radius: 1.5em;
        }
        
        .manager1 {
            padding: 0.5em 0;
            margin: 0.3em 0;
            border-radius: 1.5em;
        }

        .manager2 {
            padding: 0.5em 0;
            margin: 0.3em 0;
            border-radius: 1.5em;
        }

        .manager3 {
            padding: 0.5em 0;
            margin: 0.3em 0;
            border-radius: 1.5em;
        }
        .photo3 {
            height: 30px;
            width: 30px;
            margin-left: 0.5em;
        }
    }
</style>

<div class={getClass()} on:click={() => goto(`/matchups?week=${key+1}`)}>
    <div> 
        <p>{weeklyResult.points}
            <!-- <span class="tooltiptext">{getTeamNameFromTeamManagers(leagueTeamManagers, kothTeams[manager.roster-1].manager, year)}</span> -->
        </p>
    </div>
</div>