import { NextResponse } from "next/server" //Custom Response

export const GET =()=>
{
    return NextResponse.json({
        "users": [
          {
            "id": 1,
            "name": "John Doe",
            "email": "john.doe@example.com"
          },
          {
            "id": 2,
            "name": "Jane Smith",
            "email": "jane.smith@example.com"
          },
          {
            "id": 3,
            "name": "Bob Johnson",
            "email": "bob.johnson@example.com"
          }
        ],
        "posts": [
          {
            "id": 101,
            "title": "Lorem Ipsum",
            "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            "authorId": 1
          },
          {
            "id": 102,
            "title": "Dolor Sit Amet",
            "content": "Dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            "authorId": 2
          },
          {
            "id": 103,
            "title": "Consectetur Adipiscing",
            "content": "Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            "authorId": 3
          }]
        
      })
}