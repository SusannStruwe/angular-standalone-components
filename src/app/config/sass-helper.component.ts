import { Component } from '@angular/core';

export const PREFIX = '--';

@Component({
    selector: 'sass-helper',
    standalone: true,
    template: '<div></div>'
})
export class SassHelperComponent {

    constructor() {}

    // Read the custom property of body section with given name
    readProperty(name: string): string {
        let bodyStyles = window.getComputedStyle(document.body);
        return bodyStyles.getPropertyValue(PREFIX + name);
    }

    // Overwrites the custom property of body section with given name
    setProperty(value: string, name: string):void{
        document.body.style.setProperty(PREFIX + name, value);
    }
}