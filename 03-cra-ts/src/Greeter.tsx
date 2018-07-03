import * as React from 'react';

interface IGreeterProps {
    firstName?: string | number
}

class Greeter extends React.Component<IGreeterProps> {
    public render() {
        const name = this.props.firstName;
        

        return (
            <div>
                Hello {name}
            </div>
        );
    }
}

export default Greeter