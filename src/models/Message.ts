export class Message {
  type: string

  createdAt: number

  sender: string

  text: string

  constructor(data: any) {
    this.type = data.type
    this.createdAt = data.createdAt
    this.sender = data.sender
    this.text = data.text
  }

  // toJSON () {
  //   return JSON.stringify({
  //     // room: this.room,
  //     // text: this.text
  //   })
  // }
}
