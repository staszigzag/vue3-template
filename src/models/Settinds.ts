export class Settings {
  maxMessageLength: number

  maxRoomTitleLength: number

  maxUserNameLength: number

  minLength: number

  sizeChunkMessages: number

  reconnectionTime: number

  constructor(data: any = {}) {
    this.maxMessageLength = data.max_message_length || 10500
    this.maxRoomTitleLength = data.max_room_title_length || 50
    this.maxUserNameLength = data.max_username_length || 50
    this.minLength = 1
    this.sizeChunkMessages = 20
    this.reconnectionTime = 500
  }
}
