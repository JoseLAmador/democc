import React, { Component } from 'react';
import './App.css';
import Commits from "./components/Commits";

const commits=[
    {
        img:"https://avatars2.githubusercontent.com/u/18371535?s=96&v=4",
        user:'mpatinogu',
        action:'pushed to ',
        project:'Cultura-Colectiva-Tech/cuco-api',
        time_ago:'26 minutes ago',
        expand:true,
        commit:true,
        quantity:"8 commits to ",
        branch:"production",
        remaining:"6 more commits >>",
        commits_user:[
            {
                img:"https://avatars2.githubusercontent.com/u/18371535?s=96&v=4",
                id_commit:"a86d24d",
                action:"fix Nielsen",
            },
            {
                img:"https://avatars2.githubusercontent.com/u/18371535?s=96&v=4",
                id_commit:"50d6436",
                action:"fix Nielsen",
            }
            ],

    },
    {
        img:"https://avatars2.githubusercontent.com/u/18371535?s=96&v=4",
        user:'mpatinogu',
        action:'pushed to ',
        project:'Cultura-Colectiva-Tech/cuco-api',
        time_ago:'5 hours ago',
        commit:true,
        quantity:"1 commit to ",
        branch:"master",
        commits_user:[
            {
                img:"https://camo.githubusercontent.com/262b8a4625e0a37db3263ac06d2961ad317fa562/68747470733a2f2f312e67726176617461722e636f6d2f6176617461722f65613435306530616564306264653837616430396331356432323932626637303f643d68747470732533412532462532466173736574732d63646e2e6769746875622e636f6d253246696d6167657325324667726176617461727325324667726176617461722d757365722d3432302e706e6726723d6726733d3430",
                id_commit:"643c30e",
                action:"Fix/old - Change the infographic's quality images (#580)",
            },
        ],

    },
    {
        img:"https://avatars0.githubusercontent.com/u/10111?s=96&v=4",
        user:'mattn',
        action:'created a repository ',
        project:'mattn/minidlna-git',
        time_ago:'8 hours ago',
        new_repo:true,
        title:"matt/minidlna-git",
        description:"Updated Aug 1",


    },
    {
        img:"https://avatars3.githubusercontent.com/u/1314371?s=96&v=4",
        user:'furenku',
        action:'pushed to ',
        project:'proyecto-galeria/proyecto-galeria-app',
        time_ago:'20 hours ago',
        expand:true,
        commit:true,
        quantity:"16 commits to ",
        branch:"master",
        remaining:"14 more commits >>",
        commits_user:[
            {
                img:"https://avatars3.githubusercontent.com/u/1314371?s=96&v=4",
                id_commit:"e0fd004",
                action:"removed bootstrap prototype before angular setup",
            },
            {
                img:"https://avatars3.githubusercontent.com/u/1314371?s=96&v=4",
                id_commit:"0af91ab",
                action:"removed bootstrap prototype before angular setup",
            }
        ],

    },
    {
        img:"https://avatars3.githubusercontent.com/u/1314371?s=96&v=4",
        user:'furenku',
        action:'edited a wiki page in ',
        project:'proyecto-galeria/proyecto-galeria-app',
        time_ago:'21 hours ago',
        edited:true,
        description:"View the diff >>",
        component_title:"Concept",


    },
    {
        img:"https://avatars3.githubusercontent.com/u/1314371?s=96&v=4",
        user:'furenku',
        action:'edited a wiki page in ',
        project:'proyecto-galeria/proyecto-galeria-app',
        time_ago:'21 hours ago',
        edited:true,
        description:"View the diff >>",
        component_title:"Arquitectura de la Información",


    },

];


class App extends Component {
  render() {
    return (
      <section className={"App"}>

          {commits.map((commit, index)=>{
              return(
                <Commits {...commit} key={index} />
              )

          })}


      </section>
    );
  }
}

export default App;
