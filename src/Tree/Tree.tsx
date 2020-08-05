import React from 'react';

export type Props = {
    json: object
}


/*
       json object in
       1. loop object keys. DONE
       2. build node from key name. DONE
       3. get value from key: DONE
       4. if value is primative build leaf
       5. if value is object repeat step 1
       6. if value is array loop array
           6.1 if value is primative build leaf
           6.2 if value is object repeat 1
           6.3 if value is array repeat 6
 */
class Tree extends React.Component<Props> {

    constructor(props) {
        super(props);
    }

    processObject = (object) =>
        Object.keys(object).map((key, reactKey) => {
            return (
                <li key={key + reactKey}>
                    {this.buildNode(key)}
                    <ul className="nested">
                        {this.isPrimative(object[key]) ? this.buildLeaf(object[key]) :
                            this.isArray(object[key]) ? this.loopArray(object[key]) : this.processObject(object[key])}
                    </ul>
                </li>
            )
        })

    loopArray = (array) =>
        array.map((value, key) =>
            <div key={key}>
                {this.isPrimative(value) ? this.buildLeaf(value) :
                    this.isArray(value) ? this.loopArray(value) : this.processObject(value)}
            </div>
        )

    isArray = (value) =>
        Array.isArray(value)

    isPrimative = (value) => {
        return typeof (value) === 'string'
            || typeof (value) === 'number'
            || typeof (value) === 'boolean'
    }

    buildNode = (key: string) =>
        <span className="node"
              onClick={
                  (e) => {
                      this.toggle(e)
                  }}>
             {key}
            </span>

    buildLeaf = (value: string) =>
        <li className="leaf"
            onClick={
                // tslint:disable-next-line:no-empty
                () => {

                }}>
            {value}
        </li>


    toggle = (event) => {
        event.target.parentElement.querySelector(".nested").classList.toggle("active");
        event.target.classList.toggle("node-down");
    }

    render = () => <>
        <ul id="myUL">
            {this.processObject(this.props.json)}
        </ul>
    </>
}

export default Tree



