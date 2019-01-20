import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateComponent } from './template.component';

import { RouterTestingModule } from '@angular/router/testing';
import { AppTopBarComponent } from '../app.topbar.component';
import { AppMenuComponent, AppSubMenuComponent } from '../app.menu.component';
import { AppFooterComponent } from '../app.footer.component';
import { ScrollPanelModule } from 'primeng/scrollpanel';

describe('TemplateComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
        imports: [
            ScrollPanelModule,
            RouterTestingModule
        ],
        declarations: [
            AppTopBarComponent,
            AppMenuComponent,
            AppSubMenuComponent,
            AppFooterComponent,
            TemplateComponent
        ],
    }).compileComponents();
}));

it('should create the app', async(() => {
    const fixture = TestBed.createComponent(TemplateComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
}));

});
