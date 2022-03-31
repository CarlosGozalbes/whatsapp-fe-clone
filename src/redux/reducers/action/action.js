export const getSearchedUsers = (query) => 
  async (dispatch) => {
            try {
                let serachQuery = query? query : ""
              const response = await fetch('http://localhost:3001/users/search?username='+ serachQuery)
             if(response.ok){
              const { data } = await response.json()
              console.log(data)
              dispatch({
                  type: "GET_RESULTS",
                  payload:  data
              })
            
             }else{
              console.log('error happened fetching the books')
            
             }
            } catch (error) {
            
            }
        }
  
  
  