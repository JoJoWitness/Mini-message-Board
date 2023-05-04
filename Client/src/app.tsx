import React from "react"

const App = () =>{
    return(
        <>
        <h1>Mini Message Board</h1>
        <hr></hr>
        <form action="/team_name_url/" method="post">
          <label for="userName">Enter name: </label>
          <input id="userName" type="text" name="userNameField" value="Ryuk Ryuk" />
          <label for="userMSG">Enter Message:</label>
          <input id="userMSG" type="text" name="userMSGField" value="I want to go for a Walk"></input>
          <input type="submit" value="OK" />    
        </form>
        </>
    )
}

export default App