





const drawerSettings = {
	initialRouteName: 'BrowsePage',    
	contentOptions: {
	  activeTintColor: '#e91e63',
	},
// contentComponent: CustomDrawer
}


const tabSettings = {    
    tabBarPosition: 'bottom',
    tabBarOptions: {
      activeTintColor: '#e91e63',
      tabStyle: {
        width: 100,    
      },
      style: {
        // position: "fixed",
        // bottom: 0,
      }
    },
}


module.exports = {drawerSettings, tabSettings}