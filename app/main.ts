import {provide}        from 'angular2/core';
import {bootstrap}      from 'angular2/platform/browser'
import {AppComponent}   from './app.component'

bootstrap(AppComponent, [
    provide('canvasWidth', {useValue: 900}),
    provide('canvasHeight', {useValue: 300})
]);
