import Link from 'next/link'
import Router from 'next/router'
import React, { Component } from 'react'



export default class App extends Component {


  render() {
    return (
      <div>
        <ul>
          {this.props.items.map(({ title, id }) => (
            <li key={id}>{title.id}</li>
          ))}
        </ul>
        <button
          onClick={() => Router.push(`${this.props.page - 1}`)}
          disabled={this.props.page <= 1}
        >
          PREV
        </button>
        <button onClick={() => Router.push(`${this.props.page + 1}`)}>
          NEXT
        </button>
        <Link href="/?page=1">
          <a>First page</a>
        </Link>
      </div>
    )
  }
}