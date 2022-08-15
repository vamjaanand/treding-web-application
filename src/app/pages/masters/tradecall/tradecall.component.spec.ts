import {ComponentFixture, TestBed} from '@angular/core/testing';

import {TradecallComponent} from './tradecall.component';

describe('TradecallComponent', () => {
    let component: TradecallComponent;
    let fixture: ComponentFixture<TradecallComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [TradecallComponent]
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(TradecallComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
