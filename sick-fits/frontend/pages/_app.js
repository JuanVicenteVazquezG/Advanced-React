import App, { Container } from 'next/app';
import Page from '../components/Page';
import { Fragment } from 'react';

export default class MyApp extends App {
    render() {
        const { Component } = this.props;
        return (
            <Fragment>
                <Page>
                    <Component />
                </Page>
            </Fragment>
        )
    }
}
