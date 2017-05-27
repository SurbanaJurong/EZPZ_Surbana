





export function getRoutingParams(props) {
  if(props.navigation != null){      
      return props.navigation.state.params
    }
   return null
}