import React, { Component } from 'react';

class NumberOfEvents extends Component {
    state = {
        numberOfEvents: 32,
    };

    handleInputChanged = (event) => {
        const { value } = event.target;
        if (!isNaN(value) && value >= 0 && value <= 32) {
            this.setState({ numberOfEvents: value, ErrorText: '' });
        } else {
            this.setState({ ErrorText: 'Please select a number from 1 to 32.' });
        }
        this.props.updateEvents(undefined, value);
    };

    render() {
        return (
            <div className="numberOfEvents">
                <label htmlFor="events-number">Number of Events: </label>
                <br />
                <input
                    type="text"
                    id="events-number"
                    autoComplete="off"
                    value={this.state.numberOfEvents}
                    onChange={this.handleInputChanged}
                />
            </div>
        );
    }
}
export default NumberOfEvents;