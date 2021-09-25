test('when there is one live cell in the middle, and fewer than two live neighbours, it dies as if by underpopulation', () => {
    const startingBoard = [
      [0,0,0],
      [0,1,0],
      [0,0,0],
    ]
  
    const nextStepBoard = [
      [0,0,0],
      [0,0,0],
      [0,0,0],
    ]
  
    const game = new Game(startingBoard)
  
    game.step()
  
    // It's gotta be toEqual here, because toBe
    // expects them to be exactly the game object. We just need
    // them to _look_ the same.
    expect(game.board).toEqual(nextStepBoard)
  })
