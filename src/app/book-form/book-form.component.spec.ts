import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { FullCalendarModule } from '@fullcalendar/angular';
import { BookFormComponent } from './book-form.component';

describe('BookFormComponent', () => {
  let component: BookFormComponent;
  let fixture: ComponentFixture<BookFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BookFormComponent],
      imports: [FullCalendarModule, RouterTestingModule]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BookFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // it('should initialize selected to false and selectedDate to null', () => {
  //   expect(component.selected).toBeFalse();
  //   expect(component.selectedDate).toBeNull();
  // });

  it('should initialize calendar options correctly', () => {
    const calendarOptions = component.calendarOptions;
    expect(calendarOptions.initialView).toBe('dayGridMonth');
    expect(calendarOptions.plugins).toContain('dayGridPlugin');
    expect(calendarOptions.plugins).toContain('interactionPlugin');
    expect(calendarOptions.selectable).toBeTrue();
    expect(calendarOptions.dateClick).toBeTruthy();
    expect(calendarOptions.events).toEqual([
      { title: 'event 1', date: '2019-04-01' },
      { title: 'event 2', date: '2019-04-02' }
    ]);
    expect(calendarOptions.eventClassNames).toContain('selected-date');
  });

  it('should update selected and selectedDate properties on date click', () => {
    const testDate:any = '2024-05-15';
    component.handleDateClick({ dateStr: testDate });
    expect(component.selected).toBeTrue();
    expect(component.selectedDate).toEqual(testDate);
  });

  it('should log selectedDate when SubmitBook is called', () => {
    spyOn(console, 'log');
    // component.selectedDate = '2024-05-15';
    component.SubmitBook();
    expect(console.log).toHaveBeenCalledWith('2024-05-15');
  });
});
