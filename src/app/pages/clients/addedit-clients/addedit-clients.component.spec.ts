import {ComponentFixture, TestBed} from '@angular/core/testing';

import {AddeditClientsComponent} from './addedit-clients.component';

describe('AddeditClientsComponent', () => {
    let component: AddeditClientsComponent;
    let fixture: ComponentFixture<AddeditClientsComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [AddeditClientsComponent]
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(AddeditClientsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
