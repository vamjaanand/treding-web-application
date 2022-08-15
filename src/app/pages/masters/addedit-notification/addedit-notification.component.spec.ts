import {ComponentFixture, TestBed} from '@angular/core/testing';

import {AddeditNotificationComponent} from './addedit-notification.component';

describe('AddeditNotificationComponent', () => {
    let component: AddeditNotificationComponent;
    let fixture: ComponentFixture<AddeditNotificationComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [AddeditNotificationComponent]
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(AddeditNotificationComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
