import { ComponentFixture, TestBed } from '@angular/core/testing';

import { chatBox } from './chatBox.component';

describe('chatBox', () => {
  let component: chatBox;
  let fixture: ComponentFixture<chatBox>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [chatBox],
    }).compileComponents();

    fixture = TestBed.createComponent(chatBox);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
