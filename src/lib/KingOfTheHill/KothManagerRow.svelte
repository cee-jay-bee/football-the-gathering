<script>
    import { goto } from "$app/navigation";
	import { getDatesActive, getRosterIDFromManagerID, getTeamNameFromTeamManagers, getAvatarFromTeamManagers, getAvatar } from "$lib/utils/helperFunctions/universalFunctions";

    export let manager, leagueTeamManagers, key;

    let retired = false;

    // manager.roster is deprecated, pages should be using managerID now
    let rosterID = manager.roster;
    let year = null;

    if(manager.managerID) {
        const dates = getDatesActive(leagueTeamManagers, manager.managerID);
        if(dates.end) retired = true;

        ({rosterID, year} = getRosterIDFromManagerID(leagueTeamManagers, manager.managerID) || {rosterID, year});
    }
</script>

<style>
    .manager {
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 1em 0.5em;
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
        box-shadow: 0 0 2px 1px var(--bbb);
    }

    /* Tooltip text */
    .avatarHolder .tooltiptext {
        visibility: hidden;
        background-color: black;
        color: #fff;
        text-align: center;
        border-radius: 6px;
        width: 60px;
        bottom: 25%;
        left: 50%;
        margin-left: -30px;
        
        /* Position the tooltip text - see examples below! */
        position: absolute;
        z-index: 1;
    }

    /* Show the tooltip text when you mouse over the tooltip container */
    .avatarHolder:hover .tooltiptext {
        visibility: visible;
    }

    .name {
        text-align: center;
        display: inline-block;
        color: var(--g555);
        line-height: 1.2em;
        margin-left: 1em;
        font-weight: 700;
    }

    .team {
        text-align: center;
        display: inline-block;
        font-style: italic;
        line-height: 1.2em;
        color: var(--g555);
        font-weight: 150;
        margin-left: .2em;
    }

    .avatarHolder {
        display: inline-flex;
        position: relative;
    }

	@media (max-width: 665px) {
        .name {
            font-size: 0.9em;
            margin-left: 0.5em;
        }

        .team {
            font-size: 0.8em;
            margin-left: 0.5em;
        }
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

    @media (max-width: 475px) {
        .name {
            font-size: 0.8em;
            margin-left: 0.4em;
        }

        .team {
            font-size: 0.7em;
            margin-left: 0.4em;
        }

        .photo {
            height: 25px;
            width: 25px;
        }
    }

    @media (max-width: 370px) {
        .infoTeam {
            display: none;
        }
    }

</style>

<div class="manager" on:click={() => goto(`/manager?manager=${key}`)}>
    <div class="avatarHolder"> 
        <img class="photo" src="{manager.photo ? manager.photo : getAvatarFromTeamManagers(leagueTeamManagers, rosterID, year)}" />
        <p class="tooltiptext">{manager.name.substr(0, manager.name.indexOf(' '))}</p>
    </div>
</div>