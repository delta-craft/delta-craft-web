import React from "react";
import { JoinUsCard } from ".";

const JoinUsContainer: React.FC = () => {
  return (
    <div>
      <div className="d-flex justify-content-center">
        <div className="col-12 col-md-6 px-3 py-3">
          <JoinUsCard
            icon={<i className="fas fa-sign-in-alt"></i>}
            title="Registrace"
            desc="Zaregistruj se na DeltaCraft portálu"
            link="https://portal.deltacraft.eu/register"
          />
        </div>
      </div>
      <hr className="my-2 text-center" />
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
            title="Mapa"
            desc="Zkoumej svět DeltaCraftu z pohodlí svého prohlížeče"
            link="https://map.deltacraft.eu/"
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
            desc="Dej ostatním hráčům skrze svůj profil vědět, že hraješ s námi"
            link="https://steamcommunity.com/groups/deltacraft"
          />
        </div>
      </div>
      <hr className="my-2 text-center" />
      <div className="d-flex justify-content-center">
        <div className="col-12 col-md-6 px-3 py-3">
          <JoinUsCard
            icon={<i className="fab fa-github"></i>}
            title="GitHub"
            desc="Máme veřejné zdrojáky"
            link="https://github.com/delta-craft"
          />
        </div>
        <div className="col-12 col-md-6 px-3 py-3">
          <JoinUsCard
            icon={<i className="fab fa-trello"></i>}
            title="Trello"
            desc="Sleduj progress DeltaCraft projektů"
            link="https://trello.com/b/iLCCJA5m/deltacraft"
          />
        </div>
      </div>
    </div>
  );
};

export default JoinUsContainer;
