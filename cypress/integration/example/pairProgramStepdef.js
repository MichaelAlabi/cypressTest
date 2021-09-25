export class 
step() {
    this.board = this.board.map(row => {
      return row.map(c => 0)
    })
  }