// import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';



// @NgModule({
//   declarations: [],
//   imports: [
//     CommonModule
//   ]
// })
// export class JokeModule { }


export interface JokeData {
  success: boolean
  body: Body[]
}

export interface Body {
  _id: string
  setup: string
  punchline: string
  type: string
  likes: any[]
  author: Author
  approved: boolean
  date: number
  NSFW: boolean
  shareableLink: string
}

export interface Author {
  name: string
  id: any
}
