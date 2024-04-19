<script>
	import { getAvatarFromTeamManagers, getTeamNameFromTeamManagers, renderManagerNames } from "$lib/utils/helperFunctions/universalFunctions";
    import { managers } from "$lib/utils/leagueInfo";

    export let leagueTeamManagers, managerID = null, rosterID = null, year, compressed = false, points = null;

    let user = null;
    let managerPhoto;

    if(managerID) {
        user = leagueTeamManagers.users[managerID];
    }

    managerPhoto = managers.at(managers.map(e => e.managerID).indexOf(managerID)).photo
</script>

<style>
	.teamAvatar {
		vertical-align: middle;
		border-radius: 50%;
		height: 40px;
		margin-right: 15px;
		border: 0.25px solid #777;
	}

    .recordTeam {
        display: flex;
    }

    .name {
        margin: auto 0;
    }

    .managerNames {
        font-size: 0.75em;
        font-style: italic;
        color: var(--g999);
        max-width: 180px;
        white-space: normal;
        text-align: left;
    }

    .compressed {
		height: 30px;
		margin-right: 6px;
    }

    @media (max-width: 405px) {
        .teamAvatar {
            height: 25px;
            margin-right: 8px;
        }

        .compressed {
            height: 20px;
            margin-right: 4px;
        }
    }

    @media (max-width: 295px) {
        .teamAvatar {
            display: none;
        }
    }

</style>

<div class="recordTeam">
    {#if user}
        <img alt="team avatar" class="teamAvatar{compressed ? " compressed" : ""}" src={managerPhoto ? managerPhoto : `https://sleepercdn.com/images/team_logos/nfl/${managers.at(managers.map(e => e.managerID).indexOf(user.user_id)).favoriteTeam}.png`} />
    {:else if rosterID}
        <img alt="team avatar" class="teamAvatar{compressed ? " compressed" : ""}" src="{getAvatarFromTeamManagers(leagueTeamManagers, rosterID, year)}" />
    {/if}
    <span class="name">
        <div class="teamName">
            {#if user}
                {user.display_name}
            {:else if rosterID}
                {getTeamNameFromTeamManagers(leagueTeamManagers, rosterID, year)}
                {points ? ` (${points})` : ""}
            {/if}
        </div>
        {#if !user}
            <div class="managerNames">
                {renderManagerNames(leagueTeamManagers, rosterID, year)}
            </div>
        {/if}
    </span>
</div>