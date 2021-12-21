import { Component, OnInit, Renderer2, RendererFactory2 } from '@angular/core';

@Component({
    selector: 'ca-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
    private renderer!: Renderer2;

    constructor(private rendererFactory2: RendererFactory2) {}

    ngOnInit(): void {
        this.setAppHeight();
        this.initializeRenderer();
        this.createResizeEventListener();
        this.createOrientationChangeEventListener();
    }

    private initializeRenderer() {
        this.renderer = this.rendererFactory2.createRenderer(null, null);
    }

    private createResizeEventListener() {
        this.renderer.listen('window', 'resize', () => {
            this.setAppHeight();
        });
    }

    private createOrientationChangeEventListener() {
        this.renderer.listen('window', 'orientationchange', () => {
            this.setAppHeight();
            setTimeout(() => {
                this.setAppHeight();
            }, 500);
        });
    }

    private setAppHeight() {
        const docEl = document.documentElement;
        docEl.style.setProperty('--app-height', `${window.innerHeight}px`);
    }
}
