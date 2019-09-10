import React from "react";

class PlayersList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showPlayersList: false,
      PlayersList: [
        { rank: 1, player: "Kohli" },
        { rank: 2, player: "Buttler" },
        { rank: 3, player: "Root" },
        { rank: 4, player: "Wahab" }
      ]
    };
  }
  handleClick = () => {
    this.setState(prevState => ({
      showPlayersList: !prevState.showPlayersList
    }));
  };
  render() {
    return (
      <div>
        <ul>
          {this.state.showPlayersList &&
            this.state.PlayersList.map(player => (
              <li key={player.rank}>
                {player.player} - {player.rank}
              </li>
            ))}
        </ul>
        {!this.state.showPlayersList && (
          <div>
            {" "}
            <button onClick={this.handleClick}>PlayersList</button>
          </div>
        )}
      </div>
    );
  }
}
export default PlayersList;
