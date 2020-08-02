import React from 'react';

export type Props = {
    x: number
}

interface State {
    x: number
}

class Tree extends  React.Component<Props, State> {

    render() {
        return <div> TREE  HERE </div>
    }
}

export  default  Tree


