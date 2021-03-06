const updateOneColumnFetch = async (colId, newTaskIds) => {
    const query = JSON.stringify({
      query: `mutation{
        updateColumn(_id:"${colId}" ,taskIds: ${newTaskIds} ){
          title
          taskIds
        }
      }`
    })
  
    const response = await fetch('http://localhost:4000/graphql', {
      headers: {'content-type': 'application/json'},
      method: 'POST',
      body: query,
    })
    
    const responseJson = await response.json()
    return responseJson.data
}

export default updateOneColumnFetch