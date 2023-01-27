import { useGameContext } from "../context/GameContext"

export default function Board ({ onClick }) {

const Board = useGameContext

return (
    <div>
        <box
            value={board[0]}
            onClick={() => {
                conClick(0);
            }}
                      
        </box>
    </div>
)
        }