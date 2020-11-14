const users=[]
const addUser=({ id,username,room})=>{

username=username.trim().toLowerCase()
room=room.trim().toLowerCase()

if(!username || !room){
    return {
        error:"username and room required"
    }
}

const existingUser=users.find((user)=>{

    return user.room ===room && user.username===username
    
})



if(existingUser){

    return {
        error:"username already exist"
    }
}

const user={id,username, room}
users.push(user)
return { user}

}


const removeUser=(id)=>{

    const index=users.find((user)=>{
        return user.id===id
    })

    if(index!== -1){

        return users.splice(index,1)[0]
    }
}

const getUser=(id)=>{
    const index=users.find((user)=>{
        return user.id===id
    })

    return index
}


const getUserInRoom=(room)=>{

    const index=users.filter((user)=>{
        return user.room===room.toLowerCase()
    })
    return index
}

module.exports={

    addUser,
    removeUser,
    getUser,
    getUserInRoom
}