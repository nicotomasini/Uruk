import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root',
})
export class ThemingService {
    private readonly colorPrefix = '--ca-color-';
    private readonly bodyComputedStyles = window.getComputedStyle(document.body);

    public setColor(colorName: string, color: string) {
        document.body.style.setProperty(`${this.colorPrefix}${colorName}`, color);
    }

    public getThemeColor(colorName: string): string {
        return this.bodyComputedStyles.getPropertyValue(this.colorPrefix + colorName);
    }
}
