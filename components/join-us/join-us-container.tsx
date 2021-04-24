import React from "react";
import { JoinUsCard } from ".";

const JoinUsContainer: React.FC = () => {
  return (
    <div className="row w-100 container">
      <div className="col-12 col-md-6 px-3 py-3">
        <JoinUsCard
          icon={<i className="fab fa-discord"></i>}
          title="Discord"
          desc="Přidej se na náš Discord server a zůstaň v obraze"
          link="https://discord.gg/NcHEfTx"
        />
      </div>
      <div className="col-12 col-md-6 px-3 py-3">
        <JoinUsCard
          icon={<i className="fas fa-map-marked-alt"></i>}
          title="Dynmap"
          desc="Zkoumej svět DeltaCraftu z pohodlí svého prohlížeče"
          link="https://dynmap.deltacraft.eu/"
        />
      </div>
      <div className="col-12 col-md-6 px-3 py-3">
        <JoinUsCard
          icon={<i className="fab fa-reddit"></i>}
          title="Subreddit"
          desc="Sdílej své screenshoty, momenty a memes"
          link="https://www.reddit.com/r/Delta_Craft/"
        />
      </div>
      <div className="col-12 col-md-6 px-3 py-3">
        <JoinUsCard
          icon={<i className="fab fa-steam"></i>}
          title="Steam"
          desc="Dej ostatním hráčům skrze svůj provil vědět, že hraješ s námi"
          link="https://steamcommunity.com/groups/deltacraft"
        />
      </div>
    </div>
  );
};

export default JoinUsContainer;
