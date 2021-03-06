import React from 'react';
import TeamInfo from '../../Elements/teaminfo'
import PostData from '../../Elements/postdata';
const Header = (props)=>{

    const teamInfo = (team)=>{
        //return template to return team info passing info from props
        return team ? (
            <TeamInfo team={team} />
        ): null;
    }

    const postData = (date, author)=>(
        <PostData data={{date,author}}/>
    )

    return(
        <div>
            {teamInfo(props.teamData)}
            {postData(props.date, props.author)}
        </div>
    )
}

export default Header