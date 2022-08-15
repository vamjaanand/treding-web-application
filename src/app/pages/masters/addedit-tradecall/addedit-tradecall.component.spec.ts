import {ComponentFixture, TestBed} from '@angular/core/testing';

import {AddeditTradecallComponent} from './addedit-tradecall.component';

describe('AddeditTradecallComponent', () => {
    let component: AddeditTradecallComponent;
    let fixture: ComponentFixture<AddeditTradecallComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [AddeditTradecallComponent]
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(AddeditTradecallComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
