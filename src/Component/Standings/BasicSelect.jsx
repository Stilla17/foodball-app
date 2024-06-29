import { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import axios from "axios";
import "/src/App.css";

export default function BasicSelect() {
  const [selectedLeague, setSelectedLeague] = useState("152");
  const [standings, setStandings] = useState([]);
  const [loading, setLoading] = useState(false);

  const apiKey =
    "9bf177dc108255f879a181c09a4e8076232e54d7ad8d1687cdbbf3e84d56d93d";

  const getStandings = async (leagueId) => {
    try {
      const response = await axios.get(
        `https://apiv3.apifootball.com/?action=get_standings&league_id=${leagueId}`,
        {
          params: {
            APIkey: apiKey,
          },
        }
      );
      setStandings(response.data);
      setLoading(false);
    } catch (error) {
      console.error("Failed to fetch standings:", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    if (selectedLeague) {
      setLoading(true);
      getStandings(selectedLeague);
    }
  }, [selectedLeague]);

  const handleChange = (event) => {
    setSelectedLeague(event.target.value);
  };

  return (
    <div className="max-w-[1456px] w-[100%] mx-auto p-4">
      <div className="stand mb-4">
        <h1 className="font-bold text-[20px] flex items-center">
          🏆 Standings
        </h1>
      </div>
      <Box sx={{ minWidth: 120, color: "white" }} className="mb-4 text-white">
        <FormControl fullWidth>
          <Select
            sx={{
              "&.MuiOutlinedInput-root": {
                border: "none",
                "& fieldset": {
                  border: "none",
                },
                "&:hover fieldset": {
                  border: "none",
                },
                "&.Mui-focused fieldset": {
                  border: "none",
                },
              },
              "& .MuiSelect-select": {
                paddingRight: 0,
              },
            }}
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            onChange={handleChange}
            value={selectedLeague}
          >
            <MenuItem value="152">Premier League</MenuItem>
            <MenuItem value="153">LaLiga</MenuItem>
            <MenuItem value="154">EFL Championship</MenuItem>
            <MenuItem value="155">UEFA Europe League</MenuItem>
          </Select>
        </FormControl>
      </Box>

      {loading ? (
        <div className="grid gap-4">
          {[...Array(6)].map((_, index) => (
            <div key={index} className="skeleton h-6 w-full"></div>
          ))}
        </div>
      ) : (
        <div className="h-[467px] overflow-y-auto scrollbar">
          <table className=" table-auto w-full mt-4 border-collapse standings-table">
            <thead className="rounded-full">
              <tr className="text-gray-700 font-thin text-[15px]">
                <th className="px-4 py-2">Rank</th>
                <th className="px-4 py-2">Club</th>
                <th className="px-4 py-2">W</th>
                <th className="px-4 py-2">D</th>
                <th className="px-4 py-2">L</th>
                <th className="px-4 py-2">Points</th>
                <th className="px-4 py-2">Last Match</th>
              </tr>
            </thead>
            <tbody>
              {standings.map((item, idx) => {
                const rank = idx + 1;
                const isChampionsLeague = rank <= 4;
                const isEuropaLeague = rank === 5;

                return (
                  <tr
                    key={idx}
                    className={`text-center rounded-lg hover:bg-blue-200 transition-[0.8s]`}
                  >
                    <td className=" px-4 py-2">{rank}</td>
                    <td className=" px-4 py-2 flex items-center justify-center">
                      <img
                        src={item.team_badge}
                        alt={item.team_name}
                        className="h-6 w-6 mr-2"
                      />
                      {item.team_name}
                    </td>
                    <td className="px-4 py-2">{item.overall_league_W}</td>
                    <td className="px-4 py-2">{item.overall_league_D}</td>
                    <td className="px-4 py-2">{item.overall_league_L}</td>
                    <td className="px-4 py-2">{item.overall_league_PTS}</td>
                    <td className="px-4 py-2 w-[200px]">
                      <img
                        className="mx-auto"
                        src="src/assets/icons/icon (1).svg"
                        alt=""
                      />
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      )}

      <div className="flex gap-[16px] mt-4">
        <div className="flex items-center">
          <div className="h-3 w-3 bg-blue-500 mr-2 rounded-full"></div>
          Champions League
        </div>
        <div className="flex items-center">
          <div className="h-3 w-3 bg-red-500 mr-2 rounded-full"></div>
          Europa League
        </div>
      </div>
    </div>
  );
}
