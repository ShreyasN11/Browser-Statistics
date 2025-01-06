import { ChromeBrowser } from "react-browser-components";
import { useState } from "react";
import './app.css';

import GitHubCalendar from 'react-github-calendar';
import LeetCodeCalendar from 'leetcode-calendar';
import CodeforcesRatingGraph from './cfchart';
import FavoriteRepositories from './github';
import LeetCodeStatistics from "./leetcode";


const App = () => {
  const [tab, setTab] = useState(0);
  const tabs = [
    {
      name: "GitHub",
      link: "https://github.com",
      content: (
          <FavoriteRepositories />
      ),
      icon: (
        <img
          src="https://github.com/favicon.ico"
          style={{ width: "100%", height: "100%" }}
        />
      ),
    },
    {
      name: "CodeForces",
      link: "https://codeforces.com",
      content: (
        <div style={{height:"85vh"}}>
            <CodeforcesRatingGraph />  
        </div>
      ),
      icon: (
        <img
          src="https://imgs.search.brave.com/pBL5KIemIY567Pz2dbab--0wFqZz4xX34kleouTAfSY/rs:fit:32:32:1:0/g:ce/aHR0cDovL2Zhdmlj/b25zLnNlYXJjaC5i/cmF2ZS5jb20vaWNv/bnMvY2Q4NjlkZjMz/NDIwNzQwNzhhM2Vi/ZTQ1YWQzZDZiZDBm/YzZmNDM5OTY4OTdl/YzA1MmRjMTVlMzVi/Mjg3YzRhYi9jb2Rl/Zm9yY2VzLmNvbS8"
          style={{ width: "100%", height: "100%" }}
        />
      ),
    },
    {
      name: "Leetcode",
      link: "https://leetcode.com",
      content: (
        <LeetCodeStatistics />
      ),
      icon: (
        <img
          src="https://assets.leetcode.com/static_assets/public/icons/favicon.ico"
          style={{ width: "100%", height: "100%" }}
        />
      ),
    }
  ];

  return (
    <div style={{overflow:"hidden"}}>
      <ChromeBrowser tabs={tabs} tab={tab} setTab={setTab} theme="dark"/>
    </div>
  );
};

export default App

//