import React from 'react'


class UserClass extends React.Component {
  constructor(props) {
    super(props)

    this.state = { // it is a big object 
      userInfo: {
        name: "dummy",
        location: "lo",
        avatar_url: ''
      }

    }
  }

  async componentDidMount() {
    const data = await fetch('https://api.github.com/users/piya03')
    const res = await data.json()
    console.log("🚀 ~ UserClass ~ componentDidMount ~ res:", res)
    this.setState({
      userInfo: res
    })
  }
  render() {

    const { name, location, avatar_url } = this.state.userInfo
    return (
      <div>

        <h2>Name : {name}</h2>
        <h2>Location : {location}</h2>
        {avatar_url && <img src={avatar_url} />}
      </div>
    )
  }
}

export default UserClass