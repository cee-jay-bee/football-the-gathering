import {
    getLeagueTeamManagers,
    managers,
    getKothLeagueMatchups,
} from '$lib/utils/helper';

export async function load() {
    if(!managers.length) return {managers};
    const leagueTeamManagersData = getLeagueTeamManagers();
    const kothLeagueMatchups = getKothLeagueMatchups();

    const props = {
        managers,
        leagueTeamManagersData,
        kothLeagueMatchups,
    }

    return props;
}