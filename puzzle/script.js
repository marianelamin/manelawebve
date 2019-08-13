class Box{

constructor(x,y){
    this.x = x;
    this.y = y;
}

getTopBox(){
    if(this.y === 0) return null;
    return new Box(this.x,this.y-1);
}

getRightBox(){
    if(this.x === 3) return null;
    return new Box(this.x+1,this.y);
}

getBottomBox(){
    if(this.y === 3) return null;
    return new Box(this.x,this.y+1);
}

getLeftBox(){
    if(this.x === 0) return null;
    return new Box(this.x-1,this.y);
}

getNextdoorBoxes(){
    return [
        this.getTopBox(),
        this.getRightBox(),
        this.getBottomBox(),
        this.getLeftBox()
    ].filter(box => box !== null);
    }

    getRandomNextdoorBox() {
        const nextdoorBoxes = this.getNextdoorBoxes();
        // console.log(nextdoorBoxes);
        return nextdoorBoxes[Math.floor(Math.random()*nextdoorBoxes.length)];
    }
}

const swapBoxes = (grid,box1, box2) => {
    // console.log("swap: ("+box1.x+","+box1.y+") with ("+box2.x+","+box2.y+")");
    const temp = grid[box1.y][box1.x];
    grid[box1.y][box1.x] = grid[box2.y][box2.x];
    grid[box2.y][box2.x] = temp;
    };

const isSolved = grid => {
    return (
        grid[0][0] === 1 &&
        grid[0][1] === 2 &&
        grid[0][2] === 3 &&
        grid[0][3] === 4 &&
        grid[1][0] === 5 &&
        grid[1][1] === 6 &&
        grid[1][2] === 7 &&
        grid[1][3] === 8 &&
        grid[2][0] === 9 &&
        grid[2][1] === 10 &&
        grid[2][2] === 11 &&
        grid[2][3] === 12 &&
        grid[3][0] === 13 &&
        grid[3][1] === 14 &&
        grid[3][2] === 15 &&
        grid[3][3] === 0
        );
};

const getRandomGrid = () => {
    let grid = [[1,2,3,4],[5,6,7,8],[9,10,11,12],[13,14,15,0]];
// shuffle
    let blankBox = new Box(3,3);
    // console.log(blankBox);
    for (let i = 0; i<1000;i++){
        const randomNextdoorBox = blankBox.getRandomNextdoorBox();
        swapBoxes(grid, blankBox, randomNextdoorBox);
        blankBox = randomNextdoorBox;
    }

    if(isSolved(grid)) return getRandomGrid();
    return grid;
};


class State{
    constructor(grid, move, time, status){
        this.grid = grid;
        this.move = move;
        this.time = time;
        this.status = status;
    }
    
    static ready(){
        return new State(
            [[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]],
            0,
            0,
            "ready"
            );
    }

    static start(){
        return new State(getRandomGrid(),0,0,"playing");
    }
}


class Game{
    constructor(state){
        this.state=state;
        this.tickId=null;
        this.tick = this.tick.bind(this);
        this.render();
        this.handleClickBox = this.handleClickBox.bind(this);
        this.customGrid = {
            1: "M",
            2: "a",
            3: "r",
            4: "i",
            5: "a",
            6: "n",
            7: "e",
            8: "l",
            9: "a",
            10: "C",
            11: "r",
            12: "i",
            13: "s",
            14: "s",
            15: "m"
        };
    }

    static ready(){
        return new Game(State.ready());
    }

    tick(){
        this.setState({ time: this.state.time +1});
    }

    setState(newState){
        this.state = {... this.state, ...newState};
        this.render();
    }

    handleClickBox(box){
        return function(){
            const nextdoorBoxes = box.getNextdoorBoxes();
            const blankBox = nextdoorBoxes.find(
                nextdoorBox => this.state.grid[nextdoorBox.y][nextdoorBox.x] ===0
                );
            if(blankBox){
                const newGrid = [...this.state.grid];
                swapBoxes(newGrid, box, blankBox);
                if(isSolved(newGrid)){
                    clearInterval(this.tickId);
                    this.setState({
                        status: "won",
                        grid: newGrid,
                        move: this.state.move +1
                    });
                }
                else{
                    this.setState({
                        grid: newGrid,
                        move: this.state.move +1
                    })
                }
            }
        }.bind(this);
        }
   


    render(){
        const {grid, move, time, status} = this.state;
        
        //render grid
        const newGrid = document.createElement('div');
        newGrid.className = "grid";
        for(let i=0; i<4;i++){
            for(let j=0; j<4;j++){
                const button = document.createElement("button");
                if(status === "playing"){
                    button.addEventListener("click", this.handleClickBox(new Box(j,i)));
                }
                button.textContent = grid[i][j] === 0 ? " " : grid[i][j].toString();//this.customGrid[grid[i][j]];//.toString();
                newGrid.appendChild(button);
            }
        }
    document.querySelector(".grid").replaceWith(newGrid);

    //render button
    const newButton = document.createElement("button");
    if(status === "ready") newButton.textContent = "Play";
    if(status === "playing") newButton.textContent = "Reset";
    if(status === "won") newButton.textContent = "Play";
    newButton.addEventListener("click", () => {
        clearInterval(this.tickId);
        this.tickId = setInterval(this.tick,1000);
        this.setState(State.start());
    });
    document.querySelector(".game-footer button").replaceWith(newButton);

    //render move
    document.getElementById("move").textContent = `Move ${move}`;

    //render time
    document.getElementById("time").textContent = `Time ${time}`;
    
    //render message
    if(status === "won") document.querySelector(".message").textContent = "You win!"
    else document.querySelector(".message").textContent = "";
}
}

const GAME = Game.ready();
// console.log(GAME);