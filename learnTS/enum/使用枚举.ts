enum Direction {
    Up = 1,
    Down,
    Left,
    Right,
}

function respond(word:string, message: Direction) : void {
    console.log(word + message)
}
respond('hello,world',Direction.Left)