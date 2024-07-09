import { Box, Flex } from "@chakra-ui/react";
import React from "react";
import GitHubCalendar from "react-github-calendar";

export default function GithubCalender() {
  return (
    <>
      <h1 className="sub-title">
        GitHub <span>Stats</span>
      </h1>

      <Flex justifyContent="center" alignItems="center" flexWrap="wrap" padding={2}>
        {/* GitHub Top Languages */}
        <Box width={['50%', '40%']} marginBottom={4}>
          <img
            id="github-top-langs"
            width="100%"
            src="https://github-readme-stats.vercel.app/api/top-langs?username=misprachi023&theme=transparent&hide_border=true&show_icons=true&locale=en&layout=compact&title_color=white&text_color=#32de84"
            alt="GitHub Top Languages"
          />
        </Box>

        {/* GitHub Stats Card */}
        <Box width={['60%', '40%']} marginBottom={4}>
          <img
            id="github-stats-card"
            width="100%"
            src="https://github-readme-stats.vercel.app/api?username=misprachi023&theme=transparent&hide_border=true&show_icons=true&locale=en&title_color=white&text_color=#32de84"
            alt="GitHub Stats Card"
          />
        </Box>

        {/* GitHub Streak Stats */}
        <Box width={['50%']} marginBottom={4}>
          <img
            id="github-streak-stats"
            width="100%"
            src="https://github-readme-streak-stats.herokuapp.com/?user=misprachi023&theme=transparent&hide_border=true&title_color=white&text_color=#32de84&sideNums=white&sideLabels=white&ring=white&fire=white&currStreakLabel=white&currStreakNum=white"
            alt="GitHub Streak Stats"
          />
        </Box>

        {/* GitHub Contribution Calendar */}
        <Box width={['70%']} marginBottom={4} >
          <GitHubCalendar username="misprachi023" />
        </Box>
      </Flex>
    </>
  );
}
