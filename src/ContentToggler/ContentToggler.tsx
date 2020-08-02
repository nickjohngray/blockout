import React from 'react';

export type Props = {
    title: string;
    className?: string;
    children: any;
}

interface State {
    isVisible: boolean
}

export class ContentToggler extends  React.Component<Props, State> {
    constructor(props: Props) {
        super(props)
        this.state = {isVisible: false}

    }

    render = () => {
        return (
            <div className={this.props.className}>
                <button className={this.props.className + '_button'}
                        onClick={() => this.setState({isVisible: !this.state.isVisible})}>
                    {this.props.title}
                </button>
                {this.state.isVisible &&
                <div className={this.props.className + '_content'}>
                    {this.props.children}
                </div>}
            </div>)
    }
}


export default ContentToggler;
