import { Box, Flex } from "@chakra-ui/react";
import React from "react";
import GitHubCalendar from "react-github-calendar";

export default function GithubCalender() {
  return (
    <>
      <h1 className="sub-title">
				GitHub <span>Stats</span>
			</h1>
     
     <Box display={['block', 'block', 'flex', 'flex', 'flex']} margin={'auto'} width={"80%"}>
      <Box width={'50%'}>
        <img
          id="github-top-langs"
          width="100%"
          src="https://github-readme-stats.vercel.app/api/top-langs?username=misprachi023&theme=transparent&hide_border=true&show_icons=true&locale=en&layout=compact&title_color=white&text_color=#32de84"
        />
      </Box>
      <Box width={['50%', '90%', '50%', '50%', '50%']}>
        <img
          id="github-stats-card"
          width="100%"
          src="https://github-readme-stats.vercel.app/api?username=misprachi023&theme=transparent&hide_border=true&show_icons=true&locale=en&title_color=white&text_color=#32de84"
        />
      </Box>
      
      </Box>
      <Box width={['100%', '90%', '50%', '50%', '50%']} margin={'auto'} >
        <img
          id="github-streak-stats"
          width="100%"
          src="https://github-readme-streak-stats.herokuapp.com/?user=misprachi023&theme=transparent&hide_border=true&title_color=white&text_color=#32de84&sideNums=white&sideLabels=white&ring=white&fire=white&currStreakLabel=white&currStreakNum=white"
          alt=""
        />
      </Box>
    </>
  );
}