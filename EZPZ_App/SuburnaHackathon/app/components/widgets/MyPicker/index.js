import React, { Component, PropTypes } from 'react';
import { Icon, Picker, Item, Text} from 'native-base'

export default class MyPicker extends Component {
	
    static propTypes = {  
        items: PropTypes.array,
    };

    static defaultProps = {
        items:[{label:"Wallet", value:"key1"}]
    };

    state = {
        selected: 'key1',
        results: {  
            items: []
        }
    }

    onValueChange = (value) => {
        this.setState({selected : value});
    }

	render() {
        const {items} = this.props;
        // const firstObj = items["Object.keys(items)[0]"]
		return (
			<Picker
                supportedOrientations={['portrait','landscape']}
                iosHeader="Select one"
                mode="dropdown"
                selectedValue={this.state.selected}
                onValueChange={this.onValueChange}>
                {items.map((item, index)=>(
                    <Item key={index} label={item.name} value={item.name} />
                ))}
            </Picker>
		)
	}
}