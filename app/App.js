import React from 'react';
import ReactDOM from 'react-dom';
import {Tabs, Tab} from 'react-bootstrap-tabs';

ReactDOM.render((
    <div className="container">
        <div>
            <h2>React Bootstrap 4 Tab demo</h2>
            <p>
                Demonstrates the <a href="https://github.com/freeranger/react-bootstrap-tabs.git">Bootstrap 4 react tab component</a>.
            </p>
            <p>
                Look at the source code of this page to see the markup for each example.
            </p>
        </div>
        <div className="row">
            <section>
                <h5>No Tabs</h5>
                <Tabs className="tab-container-with-border"></Tabs>
                <p>
                    There is also a custom class on the entire tab container
                </p>
            </section>
        </div>
        <hr/>
        <div className="row">
            <section>
                <h5>Single Tab</h5>
                <Tabs><Tab label="tab 1">One lonely tab</Tab></Tabs>
            </section>
        </div>
        <hr/>
        <div className="row">
            <section>
                <h5>Multiple Tabs, default selection</h5>
                <Tabs contentClass="tab-content-default" onSelect={(index, label) => console.log(`Selected Index: ${index}, Label: ${label}`)}><Tab label="tab 1">This is Tab 1</Tab><Tab label="tab 2" contentClass="my-tab-content">This is Tab 2 with a custom content class</Tab><Tab label="Disabled" disabled></Tab></Tabs>
            </section>
        </div>
        <hr/>
        <div className="row">
            <section>
                <h5>Multiple Tabs, selected by index</h5>
                <Tabs onSelect={(index, label) => console.log(`Selected Index: ${index}, Label: ${label}`)} selected={1}><Tab label="tab 1">This is Tab 1</Tab><Tab headerClass="my-tab-header" activeHeaderClass="my-active-tab-header" label="tab 2">This is Tab 2 with custom header classes (active & normal)</Tab><Tab label="tab 3">This is Tab 3</Tab></Tabs>
            </section>
        </div>
        <hr/>
        <div className="row">
            <section>
                <h5>Multiple Tabs, selected by label</h5>
                <Tabs onSelect={(index, label) => console.log(`Selected Index: ${index}, Label: ${label}`)} selected="tab 2"><Tab label="tab 1">This is Tab 1</Tab><Tab label="tab 2">This is Tab 2</Tab><Tab label="Disabled" disabled></Tab></Tabs>
            </section>
        </div>
    </div>
), document.getElementById('app'));
